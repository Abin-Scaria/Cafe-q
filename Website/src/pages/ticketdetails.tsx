import { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import { Link, useLocation } from "react-router-dom";
import type { CSSProperties } from "react";

// Local Cafe Q assets (the QR filename contains spaces — Vite handles this).
import qrCodeImage from "./Orders/img/q r code.png";
import dineImage from "./Orders/img/dine.png";

/** A single configured order line item (mirrors the CartContext item shape). */
interface OrderItem {
  cartItemId: string;
  itemId?: number | string;
  name: string;
  image?: string | null;
  portion?: string;
  extras?: Array<{ id: number | string; label: string }>;
  unitPrice: number;
  quantity: number;
}

/** Canteen reference forwarded through the ordering flow. */
interface CanteenInfo {
  name?: string;
  location?: string;
}

/** Order payload forwarded from Order Success via router state. */
interface TicketOrderState {
  orderId?: string;
  paymentMethod?: string;
  total?: number;
  subtotal?: number;
  platformFee?: number;
  discount?: number;
  cartItems?: OrderItem[];
  selectedSlot?: string;
  canteen?: CanteenInfo | null;
  upiId?: string;
}

/** Stable 4-digit pickup token derived from the order id. */
function deriveToken(base: string): string {
  let h = 5381;
  for (let i = 0; i < base.length; i++) {
    h = ((h << 5) + h + base.charCodeAt(i)) % 100000;
  }
  return String(1000 + (h % 9000));
}

function paymentLabel(method?: string): string {
  const labels: Record<string, string> = {
    upi: "UPI",
    card: "Credit / Debit Card",
    wallet: "Campus Wallet",
    cash: "Cash Payment",
  };
  return labels[method ?? "cash"] ?? "Cash Payment";
}

function TicketDetails() {
  // Order data is forwarded from Order Success via router state; safe
  // fallbacks keep the page working on direct visits / refresh.
  const { state } = useLocation();
  const order = (state ?? {}) as TicketOrderState;

  const orderId = order.orderId ?? "";
  const items: OrderItem[] = Array.isArray(order.cartItems) ? order.cartItems : [];
  const itemCount = items.reduce((sum, i) => sum + (i.quantity || 1), 0);
  const method = order.paymentMethod || "cash";
  const slot = order.selectedSlot || "";
  const canteenName = order.canteen?.name || "Campus Bites";
  const canteenLocation = order.canteen?.location || "Main Canteen, Block A";

  // Pickup token derived once from the order id — stable per order.
  const [token] = useState<string>(() => deriveToken(orderId || Math.floor(Date.now() / 60000).toString()));

  // Independent accordions, collapsed by default (matching the Stitch design).
  const [orderDetailsOpen, setOrderDetailsOpen] = useState<boolean>(false);
  const [itemsOpen, setItemsOpen] = useState<boolean>(false);

  // Current order date, formatted for display.
  const orderDate = new Date().toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  // Light blue-tinted dotted background for the QR hero card.
  const qrPatternStyle: CSSProperties = {
    backgroundColor: "#f0f7ff",
    backgroundImage: "radial-gradient(#d2e4ff 1.5px, transparent 1.5px)",
    backgroundSize: "24px 24px",
  };

  return (
    <div className="bg-background text-on-surface font-body-md min-h-screen flex flex-col">
      {/* TopNavBar (same Cafe Q navbar as Checkout / Payment / Order Success) */}
            {/* Shared Cafe Q Navbar */}
            <Navbar />

      <main className="flex-grow w-full max-w-[1240px] mx-auto px-container-padding py-stack-lg flex flex-col gap-stack-lg">
        {/* Back navigation */}
        <div className="flex justify-start mt-2 mb-2">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-primary bg-white text-primary font-semibold text-sm hover:bg-surface-container-low transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">arrow_back</span>
            Back to Home
          </Link>
        </div>

        {/* Digital Bill / QR Token Card */}
        <section
          className="rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-sm border border-primary-fixed min-h-[420px] flex flex-col justify-center"
          style={qrPatternStyle}
        >
          {/* Decorative food icons (subtle, from the existing icon system) */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <span className="material-symbols-outlined text-primary/10 absolute top-8 left-12 text-[140px] -rotate-12">local_pizza</span>
            <span className="material-symbols-outlined text-primary/10 absolute bottom-8 right-12 text-[120px] rotate-12">restaurant</span>
            <span className="material-symbols-outlined text-primary/10 absolute top-16 right-40 text-[90px] rotate-45">eco</span>
          </div>

          {/* Header Badge */}
          <div className="flex justify-center mb-10 relative z-10">
            <div className="bg-primary text-on-primary px-6 py-3 rounded-full flex items-center gap-3 font-label-md shadow-md">
              <span className="material-symbols-outlined text-[20px]">qr_code_scanner</span>
              DIGITAL BILL / QR TOKEN
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-10 items-center justify-center relative z-10 max-w-[1000px] mx-auto w-full">
            {/* QR Area (existing local Cafe Q QR image) */}
            <div className="bg-white p-6 rounded-3xl shadow-sm flex-shrink-0">
              <img
                src={qrCodeImage}
                alt="Cafe Q Digital Order QR Code"
                className="w-[240px] h-[240px] md:w-[350px] md:h-[350px] object-contain rounded-2xl"
              />
            </div>

            {/* Instructions + Token */}
            <div className="flex flex-col gap-6 w-full max-w-md">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="material-symbols-outlined text-primary text-3xl">center_focus_strong</span>
                  <h2 className="text-headline-sm font-bold" style={{ color: '#003e6f', opacity: 1 }}>
                    Show this QR code to the canteen staff
                  </h2>
                </div>
                <p className="text-on-surface-variant">Scan the QR code or provide the token number below</p>
              </div>

              <div className="border-t border-dashed border-outline-variant w-full"></div>

              <div>
                <p className="text-label-md font-label-md text-primary uppercase tracking-wider mb-1">Token Number</p>
                <p className="text-5xl font-bold text-primary tracking-tight leading-none">TKN {token}</p>
              </div>

              {/* Share Token card */}
              <div className="bg-white rounded-xl p-4 flex items-center gap-4 shadow-sm border border-outline-variant max-w-xs">
                <span className="material-symbols-outlined text-primary text-3xl">qr_code_2</span>
                <div>
                  <p className="text-xs text-on-surface-variant mb-1">QR not working?</p>
                  <button type="button" className="text-primary font-semibold hover:underline cursor-pointer">
                    Share Token
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Order Status Section (navy block) */}
        <section
          className="rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-md flex flex-col md:flex-row items-center gap-10"
          style={{ backgroundColor: "#073574" }}
        >
          {/* Food illustration (existing dine.png asset, sits directly on the navy) */}
          <div className="flex-shrink-0 w-full md:w-[320px] flex items-center justify-center relative z-10">
            <img
              src={dineImage}
              alt="Cafe Q order preparation"
              className="w-[220px] md:w-[320px] max-w-full h-auto object-contain"
            />
          </div>

          {/* Status content */}
          <div className="flex-1 w-full relative z-10">
            <p className="text-xs font-bold text-primary-fixed uppercase tracking-widest mb-3">Order Status</p>
            <h2 className="text-white text-3xl font-bold mb-3">Preparing Your Order</h2>
            <p className="text-primary-fixed-dim mb-10">We'll notify you as soon as your order is ready!</p>

            {/* Progress Tracker */}
            <div className="flex items-center justify-between max-w-xl relative">
              {/* Connector line + progress fill */}
              <div className="absolute top-1/2 left-[12%] right-[12%] h-1 rounded-full -translate-y-1/2 z-0" style={{ backgroundColor: "rgba(209, 228, 255, 0.25)" }}>
                <div className="h-full w-1/2 rounded-full bg-primary-fixed-dim"></div>
              </div>

              {/* Step 1: Confirmed (green) */}
              <div className="flex flex-col items-center gap-3 relative z-10">
                <div
                  className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg border-4"
                  style={{ borderColor: "#073574" }}
                >
                  <span className="material-symbols-outlined text-white text-[26px] font-bold">check</span>
                </div>
                <span className="text-sm font-semibold" style={{ color: "#34C759" }}>Confirmed</span>
              </div>

              {/* Step 2: Preparing (highlighted) */}
              <div className="flex flex-col items-center gap-3 relative z-10">
                <div
                  className="w-14 h-14 rounded-full bg-primary-fixed flex items-center justify-center shadow-lg border-4 ring-4 ring-primary-fixed/40"
                  style={{ borderColor: "#073574" }}
                >
                  <span className="material-symbols-outlined text-primary text-[26px]">restaurant</span>
                </div>
                <span className="text-sm font-semibold text-primary-fixed">Preparing</span>
              </div>

              {/* Step 3: Ready for Pickup (pending) */}
              <div className="flex flex-col items-center gap-3 relative z-10">
                <div
                  className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg border-4"
                  style={{ borderColor: "#073574" }}
                >
                  <span className="material-symbols-outlined text-primary text-[26px]">notifications_active</span>
                </div>
                <span className="text-sm font-semibold text-white/70">Ready for Pickup</span>
              </div>
            </div>
          </div>
        </section>

        {/* Estimated Ready Time + Canteen card */}
        <section className="bg-white rounded-3xl shadow-sm border border-outline-variant flex flex-col md:flex-row overflow-hidden">
          {/* Left: Ready time */}
          <div className="flex-1 p-8 md:p-10 flex items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-surface-container-low flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-primary text-3xl">schedule</span>
            </div>
            <div>
              <p className="text-sm text-on-surface-variant mb-1">Estimated Ready Time</p>
              <p className="text-2xl font-bold text-primary leading-tight">{slot || "—"}</p>
              <p className="text-on-surface-variant mt-1">{orderDate}</p>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px bg-outline-variant my-8"></div>
          <div className="md:hidden h-px bg-outline-variant mx-8"></div>

          {/* Right: Canteen */}
          <div className="flex-1 p-8 md:p-10 flex items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-surface-container-low flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-primary text-3xl">storefront</span>
            </div>
            <div>
              <p className="text-sm text-on-surface-variant mb-1">Canteen</p>
              <p className="text-2xl font-bold text-primary leading-tight">{canteenName}</p>
              <p className="text-on-surface-variant mt-1">{canteenLocation}</p>
            </div>
          </div>
        </section>

        {/* Accordions */}
        <section className="flex flex-col gap-6">
          {/* Order Details accordion */}
          <div className="bg-white rounded-2xl shadow-sm border border-outline-variant overflow-hidden">
            <button
              type="button"
              onClick={() => setOrderDetailsOpen((v) => !v)}
              aria-expanded={orderDetailsOpen}
              className="w-full flex items-center justify-between gap-6 p-6 md:p-8 cursor-pointer hover:bg-surface-container-low transition-colors text-left"
            >
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center shadow-md flex-shrink-0">
                  <span className="material-symbols-outlined text-on-primary text-[28px]">receipt_long</span>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-primary mb-1">Order Details</h2>
                  <p className="text-on-surface-variant">View your order ID, date, time slot &amp; canteen</p>
                </div>
              </div>
              <span
                className={`material-symbols-outlined text-primary text-3xl transition-transform ${orderDetailsOpen ? "rotate-180" : ""}`}
              >
                expand_more
              </span>
            </button>

            {orderDetailsOpen && (
              <div className="px-6 md:px-8 pb-8 border-t border-outline-variant pt-4">
                <dl className="flex flex-col gap-3 mt-4">
                  <div className="flex justify-between gap-4">
                    <dt className="text-on-surface-variant">Order ID</dt>
                    <dd className="font-semibold text-on-surface">{orderId ? "#" + orderId : "—"}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-on-surface-variant">Order Date</dt>
                    <dd className="font-semibold text-on-surface">{orderDate}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-on-surface-variant">Time Slot</dt>
                    <dd className="font-semibold text-on-surface">{slot || "—"}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-on-surface-variant">Canteen</dt>
                    <dd className="font-semibold text-on-surface">{canteenName}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-on-surface-variant">Payment Method</dt>
                    <dd className="font-semibold text-on-surface">{paymentLabel(method)}</dd>
                  </div>
                </dl>
              </div>
            )}
          </div>

          {/* Items Ordered accordion */}
          <div className="bg-white rounded-2xl shadow-sm border border-outline-variant overflow-hidden">
            <button
              type="button"
              onClick={() => setItemsOpen((v) => !v)}
              aria-expanded={itemsOpen}
              className="w-full flex items-center justify-between gap-6 p-6 md:p-8 cursor-pointer hover:bg-surface-container-low transition-colors text-left"
            >
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center shadow-md flex-shrink-0">
                  <span className="material-symbols-outlined text-on-primary text-[28px]">local_mall</span>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-primary mb-1">Items Ordered</h2>
                  <p className="text-on-surface-variant">View all items in your order</p>
                </div>
              </div>
              <span
                className={`material-symbols-outlined text-primary text-3xl transition-transform ${itemsOpen ? "rotate-180" : ""}`}
              >
                expand_more
              </span>
            </button>

            {itemsOpen && (
              <div className="px-6 md:px-8 pb-8 border-t border-outline-variant pt-4">
                {items.length === 0 ? (
                  <p className="text-sm text-on-surface-variant py-6 text-center">No items found for this order.</p>
                ) : (
                  <ul className="flex flex-col gap-5 mt-4">
                    {items.map((item) => (
                      <li key={item.cartItemId} className="flex items-center justify-between gap-4 flex-wrap sm:flex-nowrap pb-4 border-b border-dashed border-outline-variant last:border-0 last:pb-0">
                        <div className="flex items-center gap-4 min-w-0">
                          {item.image ? (
                            <img className="w-16 h-16 rounded-xl object-cover bg-surface-container flex-shrink-0" alt={item.name} src={item.image} />
                          ) : (
                            <div className="w-16 h-16 rounded-xl bg-surface-container flex items-center justify-center flex-shrink-0">
                              <span className="material-symbols-outlined text-on-surface-variant">restaurant</span>
                            </div>
                          )}
                          <div className="min-w-0">
                            <p className="font-semibold text-on-surface truncate">{item.name}</p>
                            <p className="text-xs text-on-surface-variant truncate">
                              {item.portion}
                              {item.extras && item.extras.length > 0
                                ? " · " + item.extras.map((e) => e.label).join(", ")
                                : ""}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 sm:gap-6 flex-shrink-0">
                          <span className="px-3 py-1 bg-surface-container-low border border-outline-variant rounded-lg text-on-surface-variant font-semibold text-sm">× {item.quantity}</span>
                          <span className="text-sm text-on-surface-variant min-w-[48px] text-right">₹{item.unitPrice}</span>
                          <span className="text-on-surface font-bold min-w-[64px] text-right">₹{(item.unitPrice || 0) * (item.quantity || 1)}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-6 pt-4 border-t border-outline-variant flex justify-between items-center">
                  <span className="font-bold text-on-surface">
                    Total <span className="text-on-surface-variant text-sm font-normal ml-1">({itemCount} item{itemCount === 1 ? "" : "s"})</span>
                  </span>
                  <span className="text-primary font-bold text-2xl">₹{order.total ?? 0}</span>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default TicketDetails;