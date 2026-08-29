import { useState } from "react";
import Navbar from "../../components/Navbar.jsx";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext.jsx";

const CANTEEN_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBBEc96f21Hu5wv55kzVIYRojo0J7NNx35mQjm8nDhDZqpGvCavg5n42Fcf7-4PCrP9dT4lNBK4xsj6GK8SVWGz-ZbBUPZrEAvHiiQb54o4aFDe03J6VFvMPXicXH0VMbhpDi0QKcLlQ8b15_NvTE1Ae3MWbKtRp3QXvJMdnTnKzMwQ36yvGuIdOXxfTSYBxiZWe5y8xFOgdYhso901-n9tWuoZbileF6QjDTeeG9Vb2vkhRrSWUoV';

const PLATFORM_FEE = 5;
const DISCOUNT = 10;

const CANTEEN = {
  name: "Campus Bites",
  location: "Main Canteen, Block A",
  image: CANTEEN_IMG,
};

// Slot labels follow the Stitch reference; selection is held in local state so
// it can later be wired to an API/booking backend without layout changes.
const TIME_SLOTS = [
  "11:00 AM – 11:30 AM",
  "11:30 AM – 12:00 PM",
  "12:00 PM – 12:30 PM",
];

function Checkout() {
  const [selectedSlot, setSelectedSlot] = useState(TIME_SLOTS[2]);
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

  return (
    <div className="bg-background text-on-surface font-body-md min-h-screen flex flex-col">
      {/* Navigation */}
            {/* Shared Cafe Q Navbar */}
            <Navbar />
      <main className="flex-grow w-full max-w-7xl mx-auto px-container-padding py-stack-lg text-on-surface">
        {cartItems.length === 0 ? (
          /* Empty cart state */
          <div className="bg-white rounded-[20px] border border-outline-variant shadow-sm max-w-xl mx-auto p-stack-lg text-center">
            <span className="material-symbols-outlined text-[40px] text-on-surface-variant">shopping_cart</span>
            <h2 className="text-headline-md font-headline-md text-on-surface mt-3">Your cart is empty</h2>
            <p className="text-sm text-on-surface-variant mt-1 mb-5">Add items from the menu to continue.</p>
            <Link to="/menu" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-on-primary text-sm font-semibold hover:opacity-90 transition-opacity">
              Browse Menu
            </Link>
          </div>
        ) : (
          <>
            {/* Back to Cart */}
            <div className="flex justify-start mt-2 mb-4">
              <Link
                to="/cart"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-primary bg-white text-primary font-semibold text-sm hover:bg-surface-container-low transition-colors"
              >
                <span className="material-symbols-outlined text-[20px]">arrow_back</span>
                Back to Cart
              </Link>
            </div>

            {/* Progress Indicator */}
            <div className="max-w-3xl mx-auto w-full px-container-padding mb-stack-lg pt-stack-md">
              <div className="relative flex items-center justify-between w-full h-20">
                {/* Connecting Lines Background */}
                <div className="absolute top-1/2 left-0 w-full h-[3px] bg-outline-variant -translate-y-1/2 z-0"></div>
                {/* Active Line (Step 1 to 2) */}
                <div className="absolute top-1/2 left-0 w-1/2 h-[3px] bg-primary -translate-y-1/2 z-0"></div>
                {/* Step 1: Checkout (Active) */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-on-primary flex items-center justify-center font-headline-sm shadow-md">1</div>
                  <span className="absolute -bottom-8 whitespace-nowrap text-label-md font-bold text-primary">Checkout</span>
                </div>
                {/* Step 2: Payment (Inactive) */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-11 h-11 rounded-full bg-white border-2 border-outline-variant text-on-surface-variant flex items-center justify-center font-headline-sm">2</div>
                  <span className="absolute -bottom-8 whitespace-nowrap text-label-md font-semibold text-on-surface-variant">Payment</span>
                </div>
                {/* Step 3: Order Success (Inactive) */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-11 h-11 rounded-full bg-white border-2 border-outline-variant text-on-surface-variant flex items-center justify-center font-headline-sm">3</div>
                  <span className="absolute -bottom-8 whitespace-nowrap text-label-md font-semibold text-on-surface-variant">Order Success</span>
                </div>
              </div>
            </div>

            {/* Two-column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-stack-lg">
              {/* Left Column */}
              <div className="lg:col-span-6 flex flex-col gap-stack-lg">

                {/* Order Details Card */}
                <div className="bg-white rounded-[20px] shadow-sm border border-outline-variant p-6">
                  <div className="flex items-center gap-stack-md mb-4 pb-3 border-b border-outline-variant">
                    <div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary">shopping_bag</span>
                    </div>
                    <h2 className="text-headline-sm font-headline-sm font-bold text-primary" style={{ color: '#003e6f', opacity: 1 }}>Order Details</h2>
                  </div>
                  <div className="flex flex-col gap-stack-md">
                    {cartItems.map((item) => (
                      <div key={item.cartItemId} className="flex items-center gap-stack-md pb-3 border-b border-outline-variant border-dashed last:border-0 last:pb-0 flex-wrap sm:flex-nowrap">
                        {item.image ? (
                          <img className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover bg-surface-container shadow-sm flex-shrink-0" alt={item.name} src={item.image} />
                        ) : (
                          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-surface-container shadow-sm flex items-center justify-center flex-shrink-0">
                            <span className="material-symbols-outlined text-on-surface-variant">restaurant</span>
                          </div>
                        )}
                        <div className="flex-grow min-w-0">
                          <h3 className="font-label-md text-label-md text-on-surface text-base truncate">{item.name}</h3>
                          <p className="text-xs font-label-md text-on-surface-variant mt-1 truncate">
                            {item.portion}
                            {item.extras && item.extras.length > 0
                              ? " · " + item.extras.map((e) => e.label).join(", ")
                              : ""}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end mt-2 sm:mt-0">
                          <span className="font-label-md text-label-md text-primary text-base hidden sm:block">₹{item.unitPrice}</span>
                          <div className="flex items-center border border-outline-variant rounded-full bg-white justify-between px-2 py-1 w-[84px]">
                            <button type="button" onClick={() => decreaseQuantity(item.cartItemId)} className="w-6 h-6 flex items-center justify-center text-primary hover:text-primary transition-colors cursor-pointer" aria-label="Decrease quantity">
                              <span className="material-symbols-outlined text-sm">remove</span>
                            </button>
                            <span className="font-label-md text-label-md text-on-surface">{item.quantity}</span>
                            <button type="button" onClick={() => increaseQuantity(item.cartItemId)} className="w-6 h-6 flex items-center justify-center text-primary hover:text-primary transition-colors cursor-pointer" aria-label="Increase quantity">
                              <span className="material-symbols-outlined text-sm">add</span>
                            </button>
                          </div>
                          <span className="font-headline-sm text-headline-sm text-primary min-w-[40px] text-right">₹{item.unitPrice * item.quantity}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Canteen & Time Slot Card */}
                <div className="bg-white rounded-[20px] shadow-sm border border-outline-variant p-6">
                  <div className="flex items-center gap-stack-md mb-4 pb-3 border-b border-outline-variant">
                    <div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary">calendar_month</span>
                    </div>
                    <h2 className="text-headline-sm font-headline-sm font-bold text-primary" style={{ color: '#003e6f', opacity: 1 }}>Canteen &amp; Time Slot</h2>
                  </div>
                  <div className="flex items-center gap-stack-md mb-4">
                    <img className="w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] rounded-xl object-cover shadow-sm flex-shrink-0" alt={CANTEEN.name} src={CANTEEN.image} />
                    <div className="flex flex-col justify-center">
                      <h3 className="font-label-md text-label-md text-on-surface text-base font-bold">{CANTEEN.name}</h3>
                      <p className="text-xs font-label-md text-on-surface-variant mt-1">{CANTEEN.location}</p>
                    </div>
                  </div>
                  <p className="font-label-md text-label-md text-on-surface mb-2">Select Time Slot</p>
                  <div className="flex flex-wrap gap-2">
                    {TIME_SLOTS.map((slot) => {
                      const active = slot === selectedSlot;
                      return (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setSelectedSlot(slot)}
                          className={`px-container-padding py-3 rounded-lg font-label-md text-xs transition-colors cursor-pointer flex items-center gap-unit ${
                            active
                              ? "bg-primary text-on-primary border border-primary shadow-sm"
                              : "border border-outline-variant text-on-surface-variant hover:bg-surface-container-low"
                          }`}
                        >
                          {slot}
                          {active && <span className="material-symbols-outlined text-sm ml-1">check_circle</span>}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Right Column: Payment Summary */}
              <div className="lg:col-span-6">
                <div className="bg-white rounded-[20px] shadow-sm border border-outline-variant p-6 lg:sticky lg:top-28">
                  <div className="flex items-center gap-stack-md mb-4 pb-3 border-b border-outline-variant">
                    <div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary">receipt_long</span>
                    </div>
                    <h2 className="text-headline-sm font-headline-sm font-bold text-primary" style={{ color: '#003e6f', opacity: 1 }}>Payment Summary</h2>
                  </div>
                  <div className="flex flex-col gap-stack-md mb-4">
                    <div className="flex justify-between items-center text-on-surface">
                      <span className="font-body-md text-body-md">Subtotal ({itemCount} item{itemCount === 1 ? "" : "s"})</span>
                      <span className="font-label-md text-label-md text-base">₹{subtotal}</span>
                    </div>
                    <div className="flex justify-between items-center text-on-surface">
                      <span className="font-body-md text-body-md">Platform Fee</span>
                      <span className="font-label-md text-label-md text-base">₹{PLATFORM_FEE}</span>
                    </div>
                    <div className="flex justify-between items-center text-on-surface">
                      <span className="font-body-md text-body-md">Discount</span>
                      <span className="font-label-md text-label-md text-base text-green-600">- ₹{DISCOUNT}</span>
                    </div>
                  </div>
                  <div className="border-t border-outline-variant pt-4 mt-2">
                    <div className="flex justify-between items-center">
                      <span className="font-headline-sm text-headline-sm font-bold text-primary">Total Amount</span>
                      <span className="font-bold text-[28px] text-primary">₹{total}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Proceed to Payment */}
            <div className="flex justify-end mt-6">
              <Link
                to="/payment"
                className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-primary text-on-primary font-semibold shadow-sm hover:bg-primary/90 transition-colors"
              >
                Proceed to Payment
                <span className="material-symbols-outlined text-[20px]">
                  arrow_forward
                </span>
              </Link>
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default Checkout;

