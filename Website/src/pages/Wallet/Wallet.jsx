import { useMemo, useState } from "react";
import Navbar from "../../components/Navbar.jsx";
import { Link } from "react-router-dom";
// Local Cafe Q wallet illustration (verified location: src/assets/icon.png).
import walletIcon from "../../assets/icon.png";
import {
  addMoney,
  getBalance,
  getTransactions,
} from "../../data/walletStore.js";

// Same support number the rest of the app (Order Success / My Orders) uses.
const SUPPORT_PHONE_DISPLAY = "+91 98765 43210";
const SUPPORT_PHONE_TEL = "+919876543210";

const QUICK_AMOUNTS = [100, 200, 500, 1000];

/* Transaction type metadata: icon + Cafe Q color coding. */
const TYPE_META = {
  added: { icon: "arrow_upward", chipBg: "#ecfdf5", chipText: "#15803d", credit: true },
  payment: { icon: "coffee", chipBg: "#eff6ff", chipText: "#003e6f", credit: false },
  cashback: { icon: "loyalty", chipBg: "#fff7ed", chipText: "#c2410c", credit: true },
};

function typeMeta(type) {
  return TYPE_META[type] || TYPE_META.added;
}

/** ₹1,240.50 with the decimal part rendered slightly smaller. */
function AmountText({ value, className = "" }) {
  const fixed = Math.abs(value).toFixed(2);
  const [rupees, paise] = fixed.split(".");
  return (
    <span className={className}>
      ₹{Number(rupees).toLocaleString("en-IN")}
      <span className="text-[0.7em] opacity-80">.{paise}</span>
    </span>
  );
}

function TransactionRow({ tx }) {
  const meta = typeMeta(tx.type);
  const credit = tx.amount >= 0 ? meta.credit : !meta.credit;
  const date = tx.createdAt
    ? new Date(tx.createdAt).toLocaleString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
      })
    : "";

  return (
    <div className="flex items-center gap-4 px-5 sm:px-6 py-4 border-b border-outline-variant/50 last:border-b-0 hover:bg-surface-container-low/60 transition-colors">
      {/* Type icon */}
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
        style={{ backgroundColor: meta.chipBg, color: meta.chipText }}
      >
        <span className="material-symbols-outlined text-[20px]">{meta.icon}</span>
      </div>

      {/* Title + description (+ date on mobile) */}
      <div className="flex-grow min-w-0">
        <p className="text-on-surface font-semibold truncate">{tx.title}</p>
        <p className="text-sm text-on-surface-variant truncate">{tx.description}</p>
        {date && (
          <p className="text-xs text-outline mt-0.5 sm:hidden">{date}</p>
        )}
      </div>

      {/* Date (desktop) */}
      {date && (
        <div className="hidden sm:block text-sm text-on-surface-variant whitespace-nowrap">
          {date}
        </div>
      )}

      {/* Amount + balance after */}
      <div className="text-right shrink-0 w-[110px] sm:w-[140px]">
        <AmountText
          value={tx.amount}
          className={`font-bold block ${credit ? "text-[#15803d]" : "text-[#dc2626]"}`}
        />
        {tx.balanceAfter != null && (
          <span className="text-xs text-on-surface-variant block mt-0.5">
            Balance: ₹{Number(tx.balanceAfter).toLocaleString("en-IN", { minimumFractionDigits: 2 })}
          </span>
        )}
      </div>

      <span className="material-symbols-outlined text-outline hidden sm:block" aria-hidden="true">
        chevron_right
      </span>
    </div>
  );
}

const FILTER_OPTIONS = [
  { key: "all", label: "All" },
  { key: "added", label: "Money Added" },
  { key: "payment", label: "Payments" },
  { key: "cashback", label: "Cashback" },
];

function Wallet() {
  // Real wallet state from the local store — no hardcoded balance/transactions.
  const [balance, setBalance] = useState(() => getBalance());
  const [transactions, setTransactions] = useState(() => getTransactions());
  const [amount, setAmount] = useState("");
  const [feedback, setFeedback] = useState(null); // { ok, text }
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all");
  const [filterOpen, setFilterOpen] = useState(false);

  /** Add Money — uses the existing wallet store so balance + history update. */
  const handleAddMoney = () => {
    const value = Number(amount);
    if (!Number.isFinite(value) || value <= 0) {
      setFeedback({ ok: false, text: "Enter a valid amount greater than ₹0." });
      return;
    }
    try {
      const result = addMoney(value);
      setBalance(result.balance);
      setTransactions(getTransactions());
      setFeedback({
        ok: true,
        text: `₹${value.toLocaleString("en-IN")} added successfully.`,
      });
      setAmount("");
    } catch (err) {
      setFeedback({ ok: false, text: err.message || "Could not add money." });
    }
  };

  const visibleTransactions = useMemo(() => {
    let list = [...transactions];
    if (filter !== "all") {
      list = list.filter((t) => t.type === filter);
    }
    const q = query.trim().toLowerCase();
    if (q) {
      list = list.filter((t) =>
        [t.title, t.description, t.reference, t.orderId]
          .filter(Boolean)
          .some((field) => String(field).toLowerCase().includes(q))
      );
    }
    return list;
  }, [transactions, query, filter]);

  return (
    <div className="bg-background text-on-surface font-body-md min-h-screen flex flex-col">
      {/* Cafe Q TopNavBar (same as Checkout / Payment / Order Success / My Orders) */}
            {/* Shared Cafe Q Navbar */}
            <Navbar />

      <main className="flex-grow w-full max-w-[1200px] mx-auto px-container-padding py-stack-lg flex flex-col gap-6">
        {/* Balance + Add Money */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {/* Wallet Balance card (Cafe Q navy) */}
          <section className="bg-primary text-on-primary rounded-2xl p-8 flex items-center justify-between gap-6 shadow-sm">
            <div className="flex flex-col gap-2 min-w-0">
              <span className="text-label-md font-label-md text-[#dbeafe] uppercase tracking-wide">
                Wallet Balance
              </span>
              <AmountText value={balance} className="text-[44px] md:text-[52px] font-bold leading-none" />
              <span className="text-body-md text-[#dbeafe]">Available Balance</span>
            </div>
            <img
              src={walletIcon}
              alt="Cafe Q Wallet"
              className="w-[120px] h-[120px] md:w-[160px] md:h-[160px] object-contain shrink-0"
            />
          </section>

          {/* Add Money card */}
          <section className="bg-white rounded-2xl border border-outline-variant card-shadow p-8 flex flex-col justify-center gap-5">
            <h2 className="font-headline-md text-on-surface">Add Money to Wallet</h2>

            {/* Quick amounts */}
            <div className="grid grid-cols-4 gap-3">
              {QUICK_AMOUNTS.map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => {
                    setAmount(String(value));
                    setFeedback(null);
                  }}
                  aria-label={`Add ${value} rupees`}
                  className={`py-2.5 rounded-xl border-2 font-semibold text-sm transition-colors cursor-pointer ${
                    Number(amount) === value
                      ? "border-primary bg-primary/5 text-primary"
                      : "border-outline-variant text-on-surface hover:border-primary hover:text-primary"
                  }`}
                >
                  ₹{value}
                </button>
              ))}
            </div>

            {/* Amount input + action */}
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-grow flex items-center gap-2 border border-outline-variant rounded-xl px-4 h-[52px] focus-within:border-primary transition-colors">
                <span className="text-on-surface-variant font-semibold">₹</span>
                <input
                  type="number"
                  min="1"
                  step="any"
                  value={amount}
                  onChange={(e) => {
                    setAmount(e.target.value === "" ? "" : e.target.value);
                    setFeedback(null);
                  }}
                  placeholder="Enter amount"
                  aria-label="Add Money amount"
                  className="w-full bg-transparent outline-none border-none text-body-md text-on-surface placeholder:text-outline"
                />
              </div>
              <button
                type="button"
                onClick={handleAddMoney}
                disabled={Number(amount) <= 0}
                className="h-[52px] px-8 rounded-xl bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:hover:bg-primary text-white font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed whitespace-nowrap"
              >
                <span className="material-symbols-outlined text-[20px]">add_card</span>
                Add Money
              </button>
            </div>

            {feedback && (
              <p
                className={`text-sm font-medium flex items-center gap-2 ${
                  feedback.ok ? "text-[#15803d]" : "text-[#dc2626]"
                }`}
                role="status"
              >
                <span className="material-symbols-outlined text-[18px]">
                  {feedback.ok ? "check_circle" : "error"}
                </span>
                {feedback.text}
              </p>
            )}
          </section>
        </div>

        {/* Transaction History */}
        <section className="bg-white rounded-2xl border border-outline-variant card-shadow overflow-hidden">
          {/* Card header: title + search + filter */}
          <div className="p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-outline-variant">
            <h2 className="font-headline-md text-on-surface">Transaction History</h2>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <div className="flex items-center gap-2 border border-outline-variant rounded-full px-4 h-[44px] focus-within:border-primary transition-colors min-w-0">
                <span className="material-symbols-outlined text-outline text-[20px]">search</span>
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search transactions"
                  aria-label="Search transactions"
                  className="w-full bg-transparent outline-none border-none text-sm text-on-surface placeholder:text-outline"
                />
              </div>
              {/* Filter dropdown (real type filter) */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setFilterOpen((v) => !v)}
                  aria-expanded={filterOpen}
                  aria-label="Filter transactions"
                  className="w-full sm:w-auto h-[44px] px-4 rounded-full border border-outline-variant flex items-center justify-center gap-2 text-sm font-semibold text-primary hover:bg-surface-container-low transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[20px]">filter_list</span>
                  {FILTER_OPTIONS.find((f) => f.key === filter)?.label || "Filter"}
                  <span className={`material-symbols-outlined text-[20px] transition-transform ${filterOpen ? "rotate-180" : ""}`}>expand_more</span>
                </button>

                {filterOpen && (
                  <>
                    <div className="fixed inset-0 z-40" onClick={() => setFilterOpen(false)}></div>
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl card-shadow border border-outline-variant py-2 z-50">
                      {FILTER_OPTIONS.map((opt) => (
                        <button
                          key={opt.key}
                          type="button"
                          onClick={() => {
                            setFilter(opt.key);
                            setFilterOpen(false);
                          }}
                          className={`w-full text-left px-4 py-2.5 text-sm flex items-center justify-between hover:bg-surface-container-low transition-colors cursor-pointer ${
                            filter === opt.key ? "text-primary font-semibold" : "text-on-surface"
                          }`}
                        >
                          {opt.label}
                          {filter === opt.key && (
                            <span className="material-symbols-outlined text-[18px]">check</span>
                          )}
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Transaction rows / empty state */}
          {visibleTransactions.length === 0 ? (
            <div className="p-10 text-center">
              <span className="material-symbols-outlined text-[48px] text-outline block">receipt_long</span>
              <h3 className="font-headline-md text-on-surface mt-3">No transactions found</h3>
              <p className="text-on-surface-variant mt-1 mb-5">
                {query.trim() !== ""
                  ? `No transactions match "${query.trim()}".`
                  : filter !== "all"
                    ? "Try a different transaction type."
                    : "Add money to your wallet to get started."}
              </p>
              <Link
                to="/menu"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-on-primary text-sm font-semibold hover:bg-primary/90 transition-colors"
              >
                Browse the Menu
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
            </div>
          ) : (
            <div className="flex flex-col">
              {visibleTransactions.map((tx) => (
                <TransactionRow key={tx.id} tx={tx} />
              ))}
            </div>
          )}
        </section>

        {/* Support Section */}
        <div className="mt-4 bg-[#eef5fa] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-[#d5e3ee] shadow-sm">
          <div className="flex items-center gap-5">
            <div className="bg-white p-4 rounded-full text-primary shadow-sm border border-[#d5e3ee] flex items-center justify-center">
              <span className="material-symbols-outlined text-[36px]">support_agent</span>
            </div>
            <div>
              <h4 className="font-headline-md text-[22px] font-bold text-on-surface mb-1">Need help?</h4>
              <p className="text-body-lg text-outline">Contact our support team</p>
            </div>
          </div>
          <a
            className="flex items-center gap-3 text-[24px] font-bold text-primary hover:underline decoration-2"
            href={`tel:${SUPPORT_PHONE_TEL}`}
          >
            <span className="material-symbols-outlined text-[30px]">call</span>
            {SUPPORT_PHONE_DISPLAY}
          </a>
        </div>
      </main>
    </div>
  );
}

export default Wallet;
