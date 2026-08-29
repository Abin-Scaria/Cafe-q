import { useMemo, useState } from "react";
import Navbar from "../../components/Navbar.jsx";
import { Link, useNavigate } from "react-router-dom";
import { getOrders, normalizeStatus } from "../../data/ordersStore.js";

/* Status metadata (Cafe Q navy theme + status accents) */
const STATUS_META = {
  upcoming: {
    label: "Upcoming",
    icon: "schedule",
    dateBg: "#ecfdf5",
    dateText: "#15803d",
    pillBg: "#ecfdf5",
    pillText: "#15803d",
  },
  preparing: {
    label: "Preparing",
    icon: "restaurant",
    dateBg: "#fff7ed",
    dateText: "#c2410c",
    pillBg: "#fff7ed",
    pillText: "#c2410c",
  },
  completed: {
    label: "Completed",
    icon: "check_circle",
    dateBg: "#ecfdf5",
    dateText: "#15803d",
    pillBg: "#ecfdf5",
    pillText: "#15803d",
  },
  cancelled: {
    label: "Cancelled",
    icon: "cancel",
    dateBg: "#fef2f2",
    dateText: "#dc2626",
    pillBg: "#fef2f2",
    pillText: "#dc2626",
  },
};

const STATUS_TABS = [
  { key: "all", label: "All", icon: "receipt_long" },
  { key: "upcoming", label: "Upcoming", icon: "schedule" },
  { key: "preparing", label: "Preparing", icon: "local_dining" },
  { key: "completed", label: "Completed", icon: "check_circle" },
  { key: "cancelled", label: "Cancelled", icon: "cancel" },
];

// Same support number the rest of the app (Order Success) already uses.
const SUPPORT_PHONE_DISPLAY = "+91 98765 43210";
const SUPPORT_PHONE_TEL = "+919876543210";

const SORT_OPTIONS = [
  { value: "newest", label: "Newest first" },
  { value: "oldest", label: "Oldest first" },
  { value: "price_high", label: "Price: High to Low" },
  { value: "price_low", label: "Price: Low to High" },
];

/** PAID / PENDING / REFUNDED derived from the order's real payment state. */
function paymentStatus(order) {
  const paidMethods = ["card", "wallet", "upi"];
  if (normalizeStatus(order.status) === "cancelled") {
    return { label: "Refunded", cls: "text-[#dc2626]" };
  }
  if (paidMethods.includes(order.paymentMethod)) {
    return { label: "Paid", cls: "text-[#15803d]" };
  }
  return { label: "Pending", cls: "text-[#c2410c]" };
}

/**
 * Circular product thumbnail with graceful fallback to an icon placeholder
 * when the item has no image (existing project placeholder pattern).
 */
function ItemThumb({ item }) {
  const [failed, setFailed] = useState(false);
  if (!item.image || failed) {
    return (
      <div
        className="w-14 h-14 rounded-full border-[3px] border-white bg-surface-container-high flex items-center justify-center shrink-0"
        title={item.name}
      >
        <span className="material-symbols-outlined text-on-surface-variant text-[22px]">
          restaurant
        </span>
      </div>
    );
  }
  return (
    <img
      src={item.image}
      alt={item.name}
      onError={() => setFailed(true)}
      className="w-14 h-14 rounded-full border-[3px] border-white object-cover shrink-0"
    />
  );
}

/** Pure date formatting — no Date.now() during render. */
function formatDateParts(iso) {
  if (!iso) return { day: "–", month: "", year: "" };
  const d = new Date(iso);
  return {
    day: d.getDate(),
    month: d.toLocaleString("en-IN", { month: "short" }),
    year: d.getFullYear(),
  };
}

function OrderCard({ order, onOpen }) {
  const status = normalizeStatus(order.status);
  const meta = STATUS_META[status];
  const pay = paymentStatus(order);

  // Everything below comes from the real stored order — nothing hardcoded.
  const items = Array.isArray(order.cartItems) ? order.cartItems : [];
  const itemCount = items.reduce((sum, i) => sum + (i.quantity || 1), 0);
  const total = order.total ?? 0;
  const slot = order.selectedSlot || "";
  const canteen = order.canteen?.location || order.canteen?.name || "";

  const { day, month, year } = formatDateParts(order.placedAt);

  // Active (upcoming) orders go to the QR token page; everything else to details.
  const isUpcoming = status === "upcoming";

  return (
    <div
      className={`bg-surface-container-lowest rounded-xl card-shadow border border-outline-variant p-6 flex flex-col lg:flex-row items-center gap-6 lg:gap-8 hover:shadow-md transition-shadow duration-300 min-h-[200px] ${
        status === "cancelled" ? "opacity-75" : ""
      }`}
    >
      {/* Date Block (status-aware colors) */}
      <div
        className="rounded-xl flex flex-col items-center justify-center w-[90px] h-[145px] shrink-0"
        style={{ backgroundColor: meta.dateBg, color: meta.dateText }}
      >
        <span className="text-[40px] font-bold leading-none">{day}</span>
        <span className="text-base font-semibold mt-1">{month}</span>
        <span className="text-xs opacity-80 mt-1">{year}</span>
      </div>

      {/* Order info */}
      <div className="flex flex-col justify-center gap-2 flex-grow w-full lg:w-auto lg:min-w-[200px]">
        <h3 className="font-headline-md text-[26px] font-bold text-on-surface mb-2">
          #{order.orderId}
        </h3>
        {slot && (
          <div className="flex items-center gap-2 text-outline text-base">
            <span className="material-symbols-outlined text-[20px]">access_time</span>
            {slot}
          </div>
        )}
        {canteen && (
          <div className="flex items-center gap-2 text-outline text-base">
            <span className="material-symbols-outlined text-[20px]">location_on</span>
            {canteen}
          </div>
        )}
      </div>

      {/* Status + items */}
      <div className="flex flex-col items-start lg:items-end justify-center gap-6 w-full lg:w-auto lg:min-w-[200px]">
        <div
          className="px-4 py-2 rounded-full flex items-center justify-center gap-2 text-sm font-semibold w-[120px]"
          style={{ backgroundColor: meta.pillBg, color: meta.pillText }}
        >
          <span className="material-symbols-outlined text-[18px]">{meta.icon}</span>
          {meta.label}
        </div>
        <div className="flex items-center gap-4">
          <div className="flex -space-x-3">
            {items.slice(0, 3).map((item) => (
              <ItemThumb key={item.cartItemId} item={item} />
            ))}
            {items.length > 3 && (
              <div className="w-14 h-14 rounded-full border-[3px] border-white bg-surface-container-high flex items-center justify-center text-sm font-bold text-primary z-10">
                +{items.length - 3}
              </div>
            )}
          </div>
          <span className="text-lg text-outline ml-2 whitespace-nowrap">
            {itemCount} {itemCount === 1 ? "Item" : "Items"}
          </span>
        </div>
      </div>

      {/* Price + action */}
      <div className="flex flex-col items-end justify-center border-t lg:border-t-0 lg:border-l border-outline-variant pt-4 lg:pt-0 lg:pl-8 w-full lg:w-auto lg:min-w-[160px] gap-4">
        <div className="w-full flex lg:block items-end justify-between text-right gap-4">
          <div>
            <span
              className={`text-[32px] font-bold text-primary block leading-none mb-1 ${
                status === "cancelled" ? "line-through decoration-2" : ""
              }`}
            >
              ₹{total}
            </span>
            <span className={`text-xs font-bold tracking-wider uppercase block ${pay.cls}`}>
              {pay.label}
            </span>
          </div>
          <button
            type="button"
            onClick={onOpen}
            aria-label={isUpcoming ? "Open QR Token" : "Open order details"}
            className={`flex items-center justify-center gap-2 px-6 py-2 rounded-xl text-sm font-semibold transition-colors cursor-pointer border-2 whitespace-nowrap ${
              isUpcoming
                ? "border-primary text-primary hover:bg-surface-container-low"
                : "border-outline text-outline hover:bg-surface-container-low hover:text-primary hover:border-primary"
            }`}
          >
            <span className="material-symbols-outlined text-[20px]">
              {isUpcoming ? "qr_code_2" : "description"}
            </span>
            {isUpcoming ? "QR Token" : "Details"}
          </button>
        </div>
        <button
          type="button"
          onClick={onOpen}
          aria-label={isUpcoming ? "View QR token" : "View details"}
          className="hidden lg:flex self-end text-outline hover:text-primary transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-[24px]">chevron_right</span>
        </button>
      </div>
    </div>
  );
}

function MyOrders() {
  const navigate = useNavigate();
  // Real orders only — read once from local storage; no hardcoded data.
  const [orders] = useState(() =>
    getOrders().map((o) => ({ ...o, status: normalizeStatus(o.status) }))
  );
  const [query, setQuery] = useState("");
  const [activeStatus, setActiveStatus] = useState("all");
  const [sortBy, setSortBy] = useState("newest");
  const [filterOpen, setFilterOpen] = useState(false);

  /** Open the right existing page for an order (QR Token vs Details). */
  const openOrder = (order) => {
    if (normalizeStatus(order.status) === "upcoming") {
      navigate("/ticket-details", {
        state: {
          orderId: String(order.orderId).replace("#", ""),
          paymentMethod: order.paymentMethod,
          total: order.total,
          cartItems: order.cartItems,
          subtotal: order.subtotal,
          platformFee: order.platformFee,
          discount: order.discount,
          selectedSlot: order.selectedSlot,
          canteen: order.canteen,
          upiId: order.upiId,
        },
      });
      return;
    }
    navigate(`/orders/${String(order.orderId).replace("#", "")}`);
  };

  const visibleOrders = useMemo(() => {
    let list = [...orders];
    if (activeStatus !== "all") {
      list = list.filter((o) => o.status === activeStatus);
    }
    const q = query.trim().toLowerCase();
    if (q) {
      list = list.filter((o) =>
        String(o.orderId || "").toLowerCase().includes(q)
      );
    }
    switch (sortBy) {
      case "oldest":
        list.sort((a, b) => new Date(a.placedAt || 0) - new Date(b.placedAt || 0));
        break;
      case "price_high":
        list.sort((a, b) => (b.total ?? 0) - (a.total ?? 0));
        break;
      case "price_low":
        list.sort((a, b) => (a.total ?? 0) - (b.total ?? 0));
        break;
      default:
        list.sort((a, b) => new Date(b.placedAt || 0) - new Date(a.placedAt || 0));
    }
    return list;
  }, [orders, activeStatus, query, sortBy]);

  const emptyMessage =
    query.trim() !== ""
      ? `No orders found for "${query.trim()}".`
      : activeStatus === "all"
        ? "You haven't placed any orders yet."
        : `No ${STATUS_META[activeStatus].label.toLowerCase()} orders found.`;

  return (
    <div className="bg-background text-on-surface font-body-md min-h-screen flex flex-col">
      {/* Cafe Q TopNavBar (same as Checkout / Payment / Order Success / Ticket Details) */}
            {/* Shared Cafe Q Navbar */}
            <Navbar />

      <main className="flex-grow w-full max-w-[1200px] mx-auto px-container-padding py-stack-lg flex flex-col gap-6">
        {/* Search & Filter Bar */}
        <div className="bg-surface-container-lowest rounded-xl card-shadow border border-outline-variant px-4 sm:px-6 py-3 md:py-0 md:h-[72px] flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
          <div className="flex-grow flex items-center gap-4 w-full">
            <span className="material-symbols-outlined text-outline text-[24px]">search</span>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-transparent outline-none border-none text-body-lg text-on-surface placeholder:text-outline p-0"
              placeholder="Search by Order ID"
              type="text"
              aria-label="Search by Order ID"
            />
            {query && (
              <button type="button" onClick={() => setQuery("")} aria-label="Clear search" className="text-outline hover:text-primary cursor-pointer">
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            )}
          </div>
          <div className="hidden md:block w-px h-8 bg-outline-variant mx-4"></div>
          {/* Filter dropdown (real sorting — no dead filter) */}
          <div className="relative self-start md:self-auto">
            <button
              type="button"
              onClick={() => setFilterOpen((v) => !v)}
              aria-expanded={filterOpen}
              className="flex items-center gap-2 text-primary font-semibold text-sm px-4 py-2 rounded-lg hover:bg-surface-container-low border border-outline-variant md:border-transparent transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-[24px]">filter_list</span>
              Filter
              <span className={`material-symbols-outlined text-[24px] transition-transform ${filterOpen ? "rotate-180" : ""}`}>expand_more</span>
            </button>

            {filterOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setFilterOpen(false)}></div>
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl card-shadow border border-outline-variant py-2 z-50">
                  {SORT_OPTIONS.map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => {
                        setSortBy(opt.value);
                        setFilterOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2.5 text-sm flex items-center justify-between hover:bg-surface-container-low transition-colors cursor-pointer ${
                        sortBy === opt.value ? "text-primary font-semibold" : "text-on-surface"
                      }`}
                    >
                      {opt.label}
                      {sortBy === opt.value && (
                        <span className="material-symbols-outlined text-[18px]">check</span>
                      )}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Status Tabs */}
        <div className="bg-surface-container-lowest rounded-xl card-shadow border border-outline-variant overflow-hidden">
          <div className="flex overflow-x-auto hide-scrollbar">
            {STATUS_TABS.map((tab) => {
              const active = activeStatus === tab.key;
              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveStatus(tab.key)}
                  className={`flex-1 min-w-[110px] flex flex-col items-center justify-center py-5 px-4 sm:py-6 sm:gap-3 border-b-[3px] transition-all cursor-pointer ${
                    active
                      ? "bg-primary/5 border-primary text-primary"
                      : "bg-transparent border-transparent text-outline hover:text-primary hover:bg-surface-container-low"
                  }`}
                >
                  <span className="material-symbols-outlined text-[26px] sm:text-[28px]">{tab.icon}</span>
                  <span className="text-sm sm:text-base font-semibold whitespace-nowrap">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Order List */}
        <div className="flex flex-col gap-6">
          {visibleOrders.length === 0 ? (
            <div className="bg-surface-container-lowest rounded-xl card-shadow border border-outline-variant p-10 text-center">
              <span className="material-symbols-outlined text-[48px] text-outline block">receipt_long</span>
              <h3 className="font-headline-md text-on-surface mt-3">No orders found</h3>
              <p className="text-on-surface-variant mt-1 mb-5">{emptyMessage}</p>
              <Link
                to="/menu"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-on-primary text-sm font-semibold hover:bg-primary/90 transition-colors"
              >
                Browse the Menu
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
            </div>
          ) : (
            visibleOrders.map((order) => (
              <OrderCard key={order.orderId} order={order} onOpen={() => openOrder(order)} />
            ))
          )}
        </div>

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

export default MyOrders;
