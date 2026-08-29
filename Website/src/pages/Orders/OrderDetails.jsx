import { useState } from "react";
import Navbar from "../../components/Navbar.jsx";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getOrderById, normalizeStatus } from "../../data/ordersStore.js";

const STATUS_META = {
  upcoming: { label: "Upcoming", icon: "schedule", bg: "#ecfdf5", text: "#15803d" },
  preparing: { label: "Preparing", icon: "restaurant", bg: "#fff7ed", text: "#c2410c" },
  completed: { label: "Completed", icon: "check_circle", bg: "#ecfdf5", text: "#15803d" },
  cancelled: { label: "Cancelled", icon: "cancel", bg: "#fef2f2", text: "#dc2626" },
};

function paymentLabel(method) {
  const labels = {
    upi: "UPI",
    card: "Credit / Debit Card",
    wallet: "Campus Wallet",
    cash: "Cash Payment",
  };
  return labels[method] || "Cash Payment";
}

function isPaidMethod(method) {
  return ["card", "wallet", "upi"].includes(method);
}

function ItemThumb({ item }) {
  const [failed, setFailed] = useState(false);
  if (!item.image || failed) {
    return (
      <div className="w-14 h-14 rounded-xl bg-surface-container-high flex items-center justify-center shrink-0">
        <span className="material-symbols-outlined text-on-surface-variant">
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
      className="w-14 h-14 rounded-xl border border-outline-variant object-cover shrink-0"
    />
  );
}

function OrderDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const order = getOrderById(id);

  if (!order) {
    return (
      <div className="bg-background text-on-surface font-body-md min-h-screen flex flex-col">
        <main className="flex-grow w-full max-w-[900px] mx-auto px-container-padding py-section-gap flex flex-col gap-6 items-center justify-center text-center">
          <span className="material-symbols-outlined text-[56px] text-outline">
            search_off
          </span>
          <h2 className="font-headline-md text-on-surface">Order not found</h2>
          <p className="text-on-surface-variant max-w-md">
            We couldn't find order #{id}. It may have been placed on another
            device or browser.
          </p>
          <Link
            to="/my-orders"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-on-primary text-sm font-semibold hover:bg-primary/90 transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">
              arrow_back
            </span>
            Back to My Orders
          </Link>
        </main>
      </div>
    );
  }

  const status = normalizeStatus(order.status);
  const meta = STATUS_META[status];
  const items = Array.isArray(order.cartItems) ? order.cartItems : [];
  const subtotal = order.subtotal ?? 0;
  const platformFee = order.platformFee ?? 0;
  const discount = order.discount ?? 0;
  const total = order.total ?? 0;
  const slot = order.selectedSlot || "";
  const canteenName = order.canteen?.name || "";
  const canteenLocation = order.canteen?.location || "";
  const placedDisplay = order.placedAt
    ? new Date(order.placedAt).toLocaleString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
      })
    : "—";

  return (
    <div className="bg-background text-on-surface font-body-md min-h-screen flex flex-col">
      {/* Cafe Q TopNavBar (same as Checkout / Payment / Order Success) */}
            {/* Shared Cafe Q Navbar */}
            <Navbar />

      <main className="flex-grow w-full max-w-[900px] mx-auto px-container-padding py-stack-lg flex flex-col gap-6">
        {/* Back navigation */}
        <div className="flex justify-start">
          <Link
            to="/my-orders"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-primary bg-white text-primary font-semibold text-sm hover:bg-surface-container-low transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">arrow_back</span>
            Back to My Orders
          </Link>
        </div>

        {/* Order summary card */}
        <section className="bg-white rounded-2xl card-shadow border border-outline-variant p-6 md:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <h1 className="font-headline-lg text-[26px] md:text-[32px] font-bold text-primary">
              #{String(order.orderId).replace("#", "")}
            </h1>
            <div
              className="px-4 py-2 rounded-full flex items-center gap-2 text-sm font-semibold self-start"
              style={{ backgroundColor: meta.bg, color: meta.text }}
            >
              <span className="material-symbols-outlined text-[18px]">{meta.icon}</span>
              {meta.label}
            </div>
          </div>

          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
            <div className="flex flex-col gap-1">
              <dt className="text-xs uppercase tracking-wide text-outline font-semibold">Placed on</dt>
              <dd className="text-on-surface">{placedDisplay}</dd>
            </div>
            {slot && (
              <div className="flex flex-col gap-1">
                <dt className="text-xs uppercase tracking-wide text-outline font-semibold">Pickup slot</dt>
                <dd className="text-on-surface flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px] text-outline">access_time</span>
                  {slot}
                </dd>
              </div>
            )}
            {(canteenName || canteenLocation) && (
              <div className="flex flex-col gap-1">
                <dt className="text-xs uppercase tracking-wide text-outline font-semibold">Canteen</dt>
                <dd className="text-on-surface flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px] text-outline">location_on</span>
                  {[canteenName, canteenLocation].filter(Boolean).join(", ")}
                </dd>
              </div>
            )}
            <div className="flex flex-col gap-1">
              <dt className="text-xs uppercase tracking-wide text-outline font-semibold">Payment method</dt>
              <dd className="text-on-surface">{paymentLabel(order.paymentMethod)}</dd>
            </div>
          </dl>


          {/* Items */}
          <h2 className="font-headline-md text-on-surface mt-8 mb-4">
            Items ({items.reduce((sum, i) => sum + (i.quantity || 1), 0)})
          </h2>
          <div className="flex flex-col divide-y divide-outline-variant/60 border-t border-b border-outline-variant/60">
            {items.map((item) => (
              <div key={item.cartItemId} className="flex items-center gap-4 py-4">
                <ItemThumb item={item} />
                <div className="flex-grow min-w-0">
                  <p className="text-on-surface font-semibold truncate">{item.name}</p>
                  <p className="text-sm text-on-surface-variant">
                    {[item.portion, ...(item.extras || []).map((e) => e.label || e.name)]
                      .filter(Boolean)
                      .join(" • ")}
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-on-surface font-semibold">
                    ₹{(item.unitPrice || 0) * (item.quantity || 1)}
                  </p>
                  <p className="text-xs text-on-surface-variant">Qty {item.quantity || 1}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bill summary */}
          <div className="mt-6 ml-auto w-full sm:w-80 flex flex-col gap-2 text-body-md">
            <div className="flex justify-between text-on-surface-variant">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>
            {platformFee > 0 && (
              <div className="flex justify-between text-on-surface-variant">
                <span>Platform fee</span>
                <span>₹{platformFee}</span>
              </div>
            )}
            {discount > 0 && (
              <div className="flex justify-between text-green-700">
                <span>Discount</span>
                <span>-₹{discount}</span>
              </div>
            )}
            <div className="flex justify-between font-bold text-on-surface text-lg border-t border-outline-variant pt-3 mt-1">
              <span>Total</span>
              <span>₹{total}</span>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            {status === "upcoming" && (
              <button
                type="button"
                onClick={() =>
                  navigate("/ticket-details", {
                    state: {
                      orderId: String(order.orderId).replace("#", ""),
                      paymentMethod: order.paymentMethod,
                      total,
                      cartItems: items,
                      subtotal,
                      platformFee,
                      discount,
                      selectedSlot: slot,
                      canteen: order.canteen,
                      upiId: order.upiId,
                    },
                  })
                }
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-primary hover:bg-primary/90 text-on-primary font-bold transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">qr_code_2</span>
                QR Token
              </button>
            )}
            {!isPaidMethod(order.paymentMethod) && status !== "cancelled" && (
              <span className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#fff7ed] text-[#c2410c] text-sm font-semibold">
                <span className="material-symbols-outlined text-[20px]">payments</span>
                Pay in cash at the canteen
              </span>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default OrderDetails;

