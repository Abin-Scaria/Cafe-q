/**
 * Local wallet storage for Cafe Q.
 *
 * There is no wallet backend/API yet (src/api/walletApi.js is intentionally
 * empty), so the wallet balance and transactions are persisted in
 * localStorage under "cafeQ_wallet" — the same mechanism CartContext uses
 * for the cart ("cafeQ_cart") and ordersStore uses for orders
 * ("cafeQ_orders"). When a real wallet API arrives, these helpers are the
 * single place to swap for network calls without touching the pages.
 */

const STORAGE_KEY = "cafeQ_wallet";

function loadStoredWallet() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { balance: 0, transactions: [] };
    const parsed = JSON.parse(raw);
    return {
      balance: Number(parsed?.balance) || 0,
      transactions: Array.isArray(parsed?.transactions) ? parsed.transactions : [],
    };
  } catch {
    return { balance: 0, transactions: [] };
  }
}

/** Current available balance (₹). */
export function getBalance() {
  return loadStoredWallet().balance;
}

/** All transactions, newest first. */
export function getTransactions() {
  return [...loadStoredWallet().transactions].sort(
    (a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0)
  );
}

/**
 * Add money to the wallet. Updates the balance AND appends a
 * "Money Added" transaction so both stay in sync.
 * Returns { balance, transaction } for the caller to reflect in the UI.
 */
export function addMoney(amount) {
  const value = Math.round((Number(amount) || 0) * 100) / 100;
  if (value <= 0) {
    throw new Error("Amount must be greater than zero.");
  }
  const wallet = loadStoredWallet();
  const nextBalance = Math.round((wallet.balance + value) * 100) / 100;
  const transaction = {
    id: `W${Date.now().toString().slice(-9)}`,
    type: "added",
    title: "Money Added",
    description: "Top-up added to Campus Wallet",
    // Positive = credit, negative = debit.
    amount: value,
    balanceAfter: nextBalance,
    createdAt: new Date().toISOString(),
  };
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        balance: nextBalance,
        transactions: [transaction, ...wallet.transactions],
      })
    );
  } catch {
    // Ignore storage write errors (private browsing mode, quota, etc.).
  }
  return { balance: nextBalance, transaction };
}
