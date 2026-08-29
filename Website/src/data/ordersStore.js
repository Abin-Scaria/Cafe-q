/**
 * Local order storage for Cafe Q.
 *
 * There is no order backend/API yet (src/api/orderApi.js is intentionally
 * empty), so confirmed orders are persisted in localStorage under
 * "cafeQ_orders" — the same mechanism CartContext uses for the cart
 * ("cafeQ_cart"). When a real order API arrives, these helpers are the single
 * place to swap for network calls without touching the pages.
 */

const STORAGE_KEY = "cafeQ_orders";

/** Safely read persisted orders. Returns [] when nothing/invalid is stored. */
function loadStoredOrders() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

/** All orders, newest first. */
export function getOrders() {
  return loadStoredOrders().sort(
    (a, b) => new Date(b.placedAt || 0) - new Date(a.placedAt || 0)
  );
}

/** Find one order by id (tolerates a leading "#"). Returns null if missing. */
export function getOrderById(orderId) {
  const wanted = String(orderId || "").replace("#", "").trim();
  if (!wanted) return null;
  return (
    loadStoredOrders().find(
      (o) => String(o.orderId || "").replace("#", "").trim() === wanted
    ) || null
  );
}

/** Insert or update an order (matched on orderId). Fails silently offline. */
export function saveOrder(order) {
  if (!order || !order.orderId) return;
  const orders = loadStoredOrders();
  const index = orders.findIndex(
    (o) => String(o.orderId) === String(order.orderId)
  );
  if (index >= 0) orders[index] = { ...orders[index], ...order };
  else orders.push(order);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(orders));
  } catch {
    // Ignore storage write errors (private browsing mode, quota, etc.).
  }
}

/**
 * Map any raw/application status value onto the four UI tabs.
 * New orders (no backend status yet) default to "upcoming".
 */
export function normalizeStatus(status) {
  const aliases = {
    // Upcoming group
    upcoming: "upcoming",
    pending: "upcoming",
    confirmed: "upcoming",
    scheduled: "upcoming",
    placed: "upcoming",
    // Preparing group
    preparing: "preparing",
    in_progress: "preparing",
    ready: "preparing",
    // Completed group
    completed: "completed",
    complete: "completed",
    delivered: "completed",
    fulfilled: "completed",
    picked_up: "completed",
    // Cancelled group
    cancelled: "cancelled",
    canceled: "cancelled",
    refunded: "cancelled",
  };
  const key = String(status || "")
    .toLowerCase()
    .trim()
    .replace(/[\s-]+/g, "_");
  return aliases[key] || "upcoming";
}
