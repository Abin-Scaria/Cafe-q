import { useState } from "react";
import Navbar from "../../components/Navbar.jsx";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext.jsx";

// QR panel placeholder: a deterministic QR-like pattern rendered as an inline
// SVG data URI so it works offline without external payment-brand assets.
function buildQrSvg() {
  const size = 21;
  let seed = 7;
  const rnd = () => {
    seed = (seed * 48271) % 0x7fffffff;
    return seed % 2;
  };
  const cells = [];
  const isFinder = (r, c) => {
    const inTrim = (rr, cc) => {
      if (r < rr || r >= rr + 7 || c < cc || c >= cc + 7) return 0;
      const x = r - rr, y = c - cc;
      if (x === 0 || x === 6 || y === 0 || y === 6) return 1;
      if (x >= 2 && x <= 4 && y >= 2 && y <= 4) return 1;
      return 0;
    };
    return inTrim(0, 0) || inTrim(0, size - 7) || inTrim(size - 7, 0);
  };
  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      cells.push(isFinder(r, c) || rnd());
    }
  }
  const rects = cells
    .map((on, i) => {
      if (!on) return "";
      const r = Math.floor(i / size), c = i % size;
      return '<rect x="' + c + '" y="' + r + '" width="1" height="1"/>';
    })
    .join("");
  return '<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 21 21"><rect width="21" height="21" fill="#ffffff"/>' +
    rects +
    "</svg>";
}
const QR_IMG = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(buildQrSvg());

const UPI_ID = "name@upi";

const PLATFORM_FEE = 5;
const DISCOUNT = 10;

// The canteen has no stable image URL in the project, so we keep the reference
// data and render a warm icon placeholder (preserving the existing placeholder
// pattern used for products without images). Swap in a real URL later if added.
const CANTEEN = {
  name: "Campus Bites",
  location: "Main Canteen, Block A",
  image: null,
};

// Slot labels follow the Stitch reference; selection is held in local state so
// it can later be wired to an API/booking backend without layout changes.
const TIME_SLOTS = [
  "11:00 AM – 11:30 AM",
  "11:30 AM – 12:00 PM",
  "12:00 PM – 12:30 PM",
];

function Payment() {
  const [paymentMethod, setPaymentMethod] = useState("upi");
  const [selectedSlot, setSelectedSlot] = useState(TIME_SLOTS[2]);
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();
  // Generated once per visit (not per re-render) so the Order Success screen
  // keeps a stable order reference.
  const [orderId] = useState(() => "CQ" + Date.now().toString().slice(-8));
  const {
    cartItems,
    cartItemCount,
    cartSubtotal,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  const subtotal = cartSubtotal;
  const itemCount = cartItemCount;
  const total = cartItems.length > 0 ? subtotal + PLATFORM_FEE - DISCOUNT : 0;

  const handleCopyUpId = async () => {
    try {
      await navigator.clipboard.writeText(UPI_ID);
      setCopied(true);
    } catch {
      // Ignore clipboard failures (no blocker for a placeholder UPI id).
    }
  };

  // No payment/order backend exists yet, so the confirmed working flow is:
  // Cash → Pay → Order Success confirmation screen. UPI / Card / Wallet stay
  // as-is until a real payment API is available.
  const handlePay = () => {
    if (paymentMethod === "cash") {
      navigate("/order-success", {
        state: {
          orderId,
          paymentMethod,
          total,
          cartItems,
          subtotal,
          platformFee: PLATFORM_FEE,
          discount: DISCOUNT,
          selectedSlot,
          canteen: CANTEEN,
          upiId: UPI_ID,
        },
      });
      return;
    }

    // TODO: Wire UPI / Card / Wallet to the existing payment/order API when available.
  };
return (
    <div className="bg-background text-on-surface font-body-md min-h-screen flex flex-col">
      {/* TopNavBar */}
            {/* Shared Cafe Q Navbar */}
            <Navbar />
<main className="flex-grow w-full max-w-[1240px] mx-auto px-container-padding py-section-gap flex flex-col gap-stack-lg">
        {cartItems.length === 0 ? (
          /* Empty order state */
          <div className="bg-white rounded-2xl card-shadow border border-outline-variant max-w-xl mx-auto p-8 text-center">
            <span className="material-symbols-outlined text-[40px] text-on-surface-variant">receipt_long</span>
            <h2 className="text-headline-md font-headline-md text-on-surface mt-3">No items to pay for.</h2>
            <p className="text-sm text-on-surface-variant mt-1 mb-5">Your cart is empty. Add items from the menu first.</p>
            <Link to="/menu" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-on-primary text-sm font-semibold hover:bg-primary/90 transition-colors">
              Return to Menu
            </Link>
          </div>
        ) : (
          <>
            {/* Back to Checkout */}
            <div className="flex justify-start mt-2 mb-4">
              <Link
                to="/checkout"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-primary bg-white text-primary font-semibold text-sm hover:bg-surface-container-low transition-colors"
              >
                <span className="material-symbols-outlined text-[20px]">arrow_back</span>
                Back to Checkout
              </Link>
            </div>

            {/* Progress Stepper (Payment active) */}
            <div className="flex items-center justify-center w-full mx-auto relative max-w-[1000px] mt-8 mb-8">
              <div className="absolute top-[30px] left-[16.67%] w-[33.33%] h-[3px] bg-primary z-0"></div>
              <div className="absolute top-[30px] left-[50%] w-[33.33%] h-[3px] bg-outline-variant z-0"></div>
              {/* Step 1: Checkout (Completed) */}
              <div className="flex flex-col items-center gap-3 w-1/3 z-10">
                <div className="rounded-full bg-primary flex items-center justify-center text-on-primary font-headline-sm font-bold w-12 h-12">1</div>
                <span className="font-label-md text-on-surface-variant text-base">Checkout</span>
              </div>
              {/* Step 2: Payment (Active) */}
              <div className="flex flex-col items-center gap-3 w-1/3 z-10">
                <div className="rounded-full bg-primary flex items-center justify-center text-on-primary font-headline-sm font-bold w-12 h-12">2</div>
                <span className="font-label-md text-primary font-bold text-base">Payment</span>
              </div>
              {/* Step 3: Order Success */}
              <div className="flex flex-col items-center gap-3 w-1/3 z-10">
                <div className="rounded-full bg-white flex items-center justify-center text-on-surface-variant font-headline-sm font-bold border-2 border-outline-variant w-12 h-12">3</div>
                <span className="font-label-md text-on-surface-variant text-base">Order Success</span>
              </div>
            </div>

            {/* Main Two-Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-stack-lg">
              {/* Left Column (~55%) */}
              <div className="lg:col-span-7 flex flex-col gap-stack-lg">
{/* Order Details Card */}
                <div className="bg-white rounded-2xl shadow-sm border border-outline-variant p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined">local_mall</span>
                    </div>
                    <h2 className="text-headline-sm font-headline-sm text-primary">Order Details</h2>
                  </div>
                  <div className="flex flex-col gap-6">
                    {cartItems.map((item, index) => (
                      <div key={item.cartItemId}>
                        <div className="flex items-center justify-between flex-wrap sm:flex-nowrap gap-3">
                          <div className="flex items-center gap-4 min-w-0">
                            {item.image ? (
                              <img className="w-20 h-20 rounded-lg object-cover bg-surface-container flex-shrink-0" alt={item.name} src={item.image} />
                            ) : (
                              <div className="w-20 h-20 rounded-lg bg-surface-container flex items-center justify-center flex-shrink-0">
                                <span className="material-symbols-outlined text-on-surface-variant">restaurant</span>
                              </div>
                            )}
                            <div className="flex flex-col min-w-0">
                              <span className="font-label-md text-label-md text-on-surface text-base truncate">{item.name}</span>
                              <span className="font-body-md text-on-surface-variant text-sm truncate">
                                {item.portion}
                                {item.extras && item.extras.length > 0
                                  ? " · " + item.extras.map((e) => e.label).join(", ")
                                  : ""}
                              </span>
                              <span className="font-label-md text-label-md text-primary mt-1 font-bold">₹{item.unitPrice}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
                            <div className="flex items-center gap-3 bg-surface-container-low rounded-full px-3 py-1 border border-outline-variant w-[90px] h-[36px] justify-center">
                              <button type="button" onClick={() => decreaseQuantity(item.cartItemId)} className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer" aria-label="Decrease quantity">
                                <span className="material-symbols-outlined text-[20px]">remove</span>
                              </button>
                              <span className="font-label-md text-on-surface w-4 text-center">{item.quantity}</span>
                              <button type="button" onClick={() => increaseQuantity(item.cartItemId)} className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer" aria-label="Increase quantity">
                                <span className="material-symbols-outlined text-[20px]">add</span>
                              </button>
                            </div>
                            <span className="font-headline-sm text-primary font-bold w-12 text-right">₹{item.unitPrice * item.quantity}</span>
                          </div>
                        </div>
                        {index < cartItems.length - 1 && <div className="h-px w-full bg-outline-variant mt-6"></div>}
                      </div>
                    ))}
                  </div>
                </div>
{/* Canteen & Time Slot Card */}
                <div className="bg-white rounded-2xl shadow-sm border border-outline-variant p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined">calendar_today</span>
                    </div>
                    <h2 className="text-headline-sm font-headline-sm text-primary">Canteen &amp; Time Slot</h2>
                  </div>
                  <div className="flex items-center gap-4 mb-8">
                    {CANTEEN.image ? (
                      <img className="w-24 h-16 rounded-lg object-cover bg-surface-container flex-shrink-0" alt={CANTEEN.name} src={CANTEEN.image} />
                    ) : (
                      <div className="w-24 h-16 rounded-lg bg-surface-container-low flex items-center justify-center flex-shrink-0">
                        <span className="material-symbols-outlined text-primary text-2xl">storefront</span>
                      </div>
                    )}
                    <div className="flex flex-col">
                      <span className="font-label-md text-on-surface text-base">{CANTEEN.name}</span>
                      <span className="font-body-md text-on-surface-variant text-sm mt-1">{CANTEEN.location}</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <span className="font-body-md text-on-surface-variant text-sm">Select Time Slot</span>
                    <div className="flex flex-wrap gap-3 md:flex-nowrap">
                      {TIME_SLOTS.map((slot) => {
                        const active = slot === selectedSlot;
                        return (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => setSelectedSlot(slot)}
                            className={`text-sm font-label-md w-[145px] h-[46px] flex items-center justify-center rounded-lg border transition-colors cursor-pointer ${
                              active
                                ? "bg-primary text-on-primary border-primary gap-2"
                                : "border-outline-variant bg-white text-on-surface-variant hover:bg-surface-container-low"
                            }`}
                          >
                            {slot}
                            {active && <span className="material-symbols-outlined text-[16px]">check_circle</span>}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
{/* Right Column (~45%) */}
              <div className="lg:col-span-5 flex flex-col gap-stack-lg">
                {/* Payment Summary Card */}
                <div className="bg-white rounded-2xl shadow-sm border border-outline-variant p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined">receipt_long</span>
                    </div>
                    <h2 className="text-headline-sm font-headline-sm text-primary">Payment Summary</h2>
                  </div>
                  <div className="flex flex-col gap-4 mb-6">
                    <div className="flex justify-between items-center font-body-md text-on-surface">
                      <span>Subtotal ({itemCount} item{itemCount === 1 ? "" : "s"})</span>
                      <span className="font-bold">₹{subtotal}</span>
                    </div>
                    <div className="flex justify-between items-center font-body-md text-on-surface">
                      <span>Platform Fee</span>
                      <span className="font-bold">₹{PLATFORM_FEE}</span>
                    </div>
                    <div className="flex justify-between items-center font-body-md text-green-600">
                      <span>Discount</span>
                      <span className="font-bold">- ₹{DISCOUNT}</span>
                    </div>
                  </div>
                  <div className="h-px w-full bg-outline-variant mb-6"></div>
                  <div className="flex justify-between items-center">
                    <span className="text-headline-sm font-headline-sm text-primary">Total Amount</span>
                    <span className="text-headline-lg font-headline-lg text-primary font-bold text-[32px]">₹{total}</span>
                  </div>
                </div>
{/* Payment Method Card */}
                <div className="bg-white rounded-2xl shadow-sm border border-outline-variant p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined">account_balance_wallet</span>
                    </div>
                    <h2 className="text-headline-sm font-headline-sm text-primary">Payment Method</h2>
                  </div>
                  {/* UPI Section (only rendered when UPI is the selected method) */}
                  {paymentMethod === "upi" && (
                  <div className="bg-surface-container-low rounded-xl border border-outline-variant p-6 mb-6">
                    <div className="flex justify-between items-start mb-6 flex-wrap gap-2">
                      <div className="flex flex-col">
                        <span className="font-headline-sm text-on-surface text-lg">UPI</span>
                        <span className="font-body-md text-on-surface-variant text-sm">Pay using any UPI app</span>
                      </div>
                      <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded border border-outline-variant shadow-sm">
                        <span className="font-label-sm text-on-surface font-bold text-xs">G Pay</span>
                        <span className="text-primary font-bold text-xs mx-1">Pe</span>
                        <span className="text-blue-500 font-bold text-xs">Paytm</span>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                      {/* QR Code Area */}
                      <div className="w-40 h-40 bg-white rounded-xl border border-outline-variant p-2 shadow-sm flex items-center justify-center relative">
                        <img className="w-full h-full object-contain" alt="UPI QR Code" src={QR_IMG} />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="bg-white rounded-full p-1 shadow-sm border border-outline-variant">
                            <span className="material-symbols-outlined text-primary text-[20px]">coffee</span>
                          </div>
                        </div>
                      </div>
                      {/* UPI ID Field */}
                      <div className="flex flex-col gap-2 w-full">
                        <span className="font-label-md text-on-surface text-sm font-bold">UPI ID</span>
                        <div className="flex items-center bg-white border border-outline-variant rounded-lg px-4 py-3">
                          <input
                            className="bg-transparent border-none focus:ring-0 w-full text-on-surface font-body-md p-0"
                            readOnly
                            type="text"
                            value={UPI_ID}
                          />
                          <button type="button" onClick={handleCopyUpId} className="text-on-surface-variant hover:text-primary ml-2 cursor-pointer" aria-label="Copy UPI ID">
                            <span className="material-symbols-outlined text-[20px]">{copied ? "check" : "content_copy"}</span>
                          </button>
                        </div>
                        <span className="font-body-md text-on-surface-variant text-xs mt-1">
                          {copied ? "UPI ID copied!" : "Scan QR code or enter UPI ID to pay"}
                        </span>
                      </div>
                    </div>
                  </div>
                  )}
{/* Other Payment Options */}
                  <div className="flex flex-col gap-4 mb-8">
                    <span className="font-label-md text-on-surface-variant text-sm px-2">Other Payment Options</span>
                    {/* Credit/Debit Card */}
                    <label className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-colors ${
                      paymentMethod === "card" ? "border-primary bg-surface-container-low" : "border-outline-variant hover:bg-surface-container-low"
                    }`}>
                      <div className="flex items-center gap-4">
                        <input
                          className="w-5 h-5 accent-primary border-outline-variant focus:ring-primary"
                          name="payment_method"
                          type="radio"
                          checked={paymentMethod === "card"}
                          onChange={() => setPaymentMethod("card")}
                        />
                        <div className="flex flex-col">
                          <span className="font-label-md text-on-surface">Credit / Debit Card</span>
                          <span className="font-body-md text-on-surface-variant text-xs">Visa, Mastercard, RuPay</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-label-sm text-primary font-bold italic text-xs">VISA</span>
                        <span className="material-symbols-outlined text-primary text-sm">credit_card</span>
                      </div>
                    </label>
                    {/* Campus Wallet */}
                    <label
                      className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-colors ${
                        paymentMethod === "wallet" ? "border-primary bg-surface-container-low" : "border-outline-variant hover:bg-surface-container-low"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <input
                          className="w-5 h-5 accent-primary border-outline-variant focus:ring-primary"
                          name="payment_method"
                          type="radio"
                          checked={paymentMethod === "wallet"}
                          onChange={() => setPaymentMethod("wallet")}
                        />
                        <div className="flex flex-col">
                          <span className="font-label-md text-on-surface">Campus Wallet</span>
                          <span className="font-body-md text-green-700 text-xs font-medium">Available Balance: ₹320</span>
                        </div>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-surface-container-low flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-[18px]">account_balance_wallet</span>
                      </div>
                    </label>
                    {/* Cash Payment */}
                    <label
                      className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-colors ${
                        paymentMethod === "cash" ? "border-primary bg-surface-container-low" : "border-outline-variant hover:bg-surface-container-low"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <input
                          className="w-5 h-5 accent-primary"
                          name="payment_method"
                          type="radio"
                          checked={paymentMethod === "cash"}
                          onChange={() => setPaymentMethod("cash")}
                        />
                        <div className="flex flex-col">
                          <span className="font-label-md text-on-surface">Cash Payment</span>
                          <span className="font-body-md text-on-surface-variant text-xs">Pay with cash at the canteen</span>
                        </div>
                      </div>
                      <span className="material-symbols-outlined text-primary">payments</span>
                    </label>
                  </div>
                  {/* Pay Button */}
                  <button
                    type="button"
                    onClick={handlePay}
                    className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl font-headline-sm text-lg flex items-center justify-center gap-2 transition-all shadow-md h-[56px] cursor-pointer"
                  >
                    <span className="material-symbols-outlined">lock</span>
                    Pay ₹{total} Securely
                  </button>
                  <div className="flex items-center justify-center gap-2 mt-4 text-on-surface-variant">
                    <span className="material-symbols-outlined text-[16px]">security</span>
                    <span className="font-body-md text-xs">Your payment information is safe and secure.</span>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default Payment;