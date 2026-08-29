import { useState } from "react";
import Navbar from "../../components/Navbar.jsx";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext.jsx";


const PLATFORM_FEE = 5;
const DISCOUNT = 10;
const CHECKOUT_PATH = "/checkout";

function Cart() {
  const navigate = useNavigate();
  const [savedItems, setSavedItems] = useState([]);
  const {
    cartItems,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    cartItemCount,
    cartSubtotal,
  } = useCart();

  const items = cartItems;
  const subtotal = cartSubtotal;
  const itemCount = cartItemCount;
  const total = items.length > 0 ? subtotal + PLATFORM_FEE - DISCOUNT : 0;

  const saveForLater = (cartItemId) => {
    const item = cartItems.find((i) => i.cartItemId === cartItemId);
    if (!item) return;
    removeFromCart(cartItemId);
    setSavedItems((prev) => [...prev, item]);
  };

  const moveToCart = (cartItemId) => {
    const item = savedItems.find((i) => i.cartItemId === cartItemId);
    if (!item) return;
    setSavedItems((prev) => prev.filter((i) => i.cartItemId !== cartItemId));
    addToCart(
      {
        itemId: item.itemId,
        name: item.name,
        image: item.image,
        portion: item.portion,
        extras: item.extras,
        unitPrice: item.unitPrice,
      },
      item.quantity
    );
  };

  const handleProceedToCheckout = () => navigate(CHECKOUT_PATH);

  return (
    <div className="bg-background text-on-background font-body-md min-h-screen flex flex-col antialiased">
      {/* Compact Navbar */}
            {/* Shared Cafe Q Navbar */}
            <Navbar />

      <main className="flex-grow w-full max-w-[1200px] mx-auto px-5 md:px-8 pt-4 pb-8">
        {/* Continue Shopping */}
        <div className="mb-4 flex justify-start">
          <Link to="/menu" className="inline-flex items-center gap-1 px-3.5 py-1.5 border border-primary text-primary text-xs font-semibold rounded-full hover:bg-primary/5 transition-colors">
            <span className="material-symbols-outlined text-[15px]">arrow_back</span>
            Continue Shopping
          </Link>
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
          {/* Left Column */}
          <div className="lg:col-span-8 space-y-3 min-w-0">
            {items.length === 0 && savedItems.length === 0 ? (
              <div className="bg-white rounded-xl border border-outline-variant/30 shadow-sm p-6 text-center">
                <span className="material-symbols-outlined text-[40px] text-outline">shopping_cart</span>
                <h2 className="text-lg font-bold text-on-surface mt-2">Your cart is empty</h2>
                <p className="text-sm text-on-surface-variant mt-0.5 mb-4">Looks like you haven't added anything yet.</p>
                <Link to="/menu" className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary text-on-primary text-sm font-semibold hover:opacity-90 transition-opacity">
                  Browse Menu
                </Link>
              </div>
            ) : (
              <>
                {/* Cart Items Card */}
                <div className="bg-white rounded-xl border border-outline-variant/30 shadow-sm overflow-hidden">
                  {items.length > 0 && (
                    <div className="bg-green-50 px-4 py-2 flex items-center gap-2 border-b border-outline-variant/20">
                      <span className="material-symbols-outlined text-[16px] text-[#147a40]">verified</span>
                      <p className="text-xs text-on-surface">
                        You're saving <span className="font-bold text-[#147a40]">₹{DISCOUNT}</span> with this order
                      </p>
                    </div>
                  )}
                  <div>
                    {items.length === 0 ? (
                      <div className="px-4 py-4 text-center text-sm text-on-surface-variant">
                        Your active cart is empty. Move saved items below back to your cart.
                      </div>
                    ) : (
                      items.map((it) => (
                        <div key={it.cartItemId} className="px-4 py-2.5 flex flex-col sm:flex-row gap-3 items-start sm:items-center border-b border-outline-variant/15 last:border-0 hover:bg-surface-container-low/40 transition-colors">
                          <div className="flex-shrink-0">
                            {it.image ? (
                              <img alt={it.name} className="w-12 h-12 object-cover rounded-md" src={it.image} />
                            ) : (
                              <div className="w-12 h-12 bg-surface-container-high rounded-md flex items-center justify-center">
                                <span className="material-symbols-outlined text-xl text-outline">restaurant</span>
                              </div>
                            )}
                          </div>
                          <div className="flex-grow flex flex-col sm:flex-row justify-between items-start sm:items-center w-full gap-2 min-w-0">
                            <div className="min-w-0">
                              <h3 className="text-sm font-semibold text-on-surface truncate">{it.name}</h3>
                              <p className="text-[11px] text-on-surface-variant truncate">
                                {it.portion}
                                {it.extras && it.extras.length > 0
                                  ? " · " + it.extras.map((e) => e.label).join(", ")
                                  : ""}
                              </p>
                              <p className="text-[13px] font-bold text-primary mt-0.5">₹{it.unitPrice * it.quantity}</p>
                            </div>
                            <div className="flex flex-col items-start sm:items-end gap-1 flex-shrink-0">
                              <div className="flex items-center border border-outline-variant/50 rounded-md bg-surface-container-lowest">
                                <button type="button" onClick={() => decreaseQuantity(it.cartItemId)} className="w-6 h-6 flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors cursor-pointer" aria-label="Decrease quantity">
                                  <span className="material-symbols-outlined text-[14px]">remove</span>
                                </button>
                                <span className="w-6 text-center text-xs font-semibold">{it.quantity}</span>
                                <button type="button" onClick={() => increaseQuantity(it.cartItemId)} className="w-6 h-6 flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors cursor-pointer" aria-label="Increase quantity">
                                  <span className="material-symbols-outlined text-[14px]">add</span>
                                </button>
                              </div>
                              <div className="flex items-center gap-1.5">
                                <button type="button" onClick={() => saveForLater(it.cartItemId)} className="text-[10px] font-semibold text-primary hover:underline cursor-pointer">Save for Later</button>
                                <span className="text-outline-variant/40">|</span>
                                <button type="button" onClick={() => removeFromCart(it.cartItemId)} className="text-[10px] font-semibold text-error hover:underline cursor-pointer">Remove</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>

                {/* Saved for Later */}
                {savedItems.length > 0 && (
                  <div className="bg-white rounded-xl border border-outline-variant/30 shadow-sm p-4">
                    <h2 className="text-sm font-bold text-on-surface mb-2.5 pb-2 border-b border-outline-variant/20">Saved for Later</h2>
                    <div className="space-y-2">
                      {savedItems.map((it) => (
                        <div key={it.cartItemId} className="flex items-center justify-between gap-3">
                          <div className="flex items-center gap-3 min-w-0">
                            {it.image ? (
                              <img alt={it.name} className="w-10 h-10 object-cover rounded-md flex-shrink-0" src={it.image} />
                            ) : (
                              <span className="material-symbols-outlined text-xl text-outline flex-shrink-0">restaurant</span>
                            )}
                            <div className="min-w-0">
                              <p className="text-sm text-on-surface truncate">{it.name}</p>
                              <p className="text-xs text-on-surface-variant">₹{it.unitPrice}</p>
                            </div>
                          </div>
                          <button type="button" onClick={() => moveToCart(it.cartItemId)} className="text-xs font-semibold text-primary hover:underline cursor-pointer whitespace-nowrap">Move to Cart</button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Wallet Promo */}
                <div className="bg-[#FDF6EB] rounded-xl p-3 border border-secondary-fixed-dim/40 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-2.5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm text-secondary flex-shrink-0">
                      <span className="material-symbols-outlined text-[17px]">account_balance_wallet</span>
                    </div>
                    <div>
                      <h4 className="text-[13px] font-bold text-on-surface leading-tight">Pay using Cafe Q Wallet</h4>
                      <p className="text-[11px] text-secondary">Get 5% instant cashback on this order.</p>
                    </div>
                  </div>
                  <button type="button" className="whitespace-nowrap px-3 py-1.5 bg-secondary text-on-secondary rounded-full text-xs font-semibold hover:bg-secondary/90 transition-colors shadow-sm cursor-pointer flex-shrink-0">
                    Pay with Wallet
                  </button>
                </div>
              </>
            )}
          </div>

          {/* Right Column: Order Summary */}
          <div className="lg:col-span-4 min-w-0">
            {items.length > 0 && (
              <div className="bg-white rounded-xl border border-outline-variant/30 shadow-sm p-4 lg:sticky lg:top-20">
                <h2 className="text-lg font-bold mb-3 pb-2 border-b border-outline-variant/20" style={{ color: '#003e6f' }}>Order Summary</h2>
                <div className="space-y-2 mb-3">
                  <div className="flex justify-between items-center">
                    <p className="text-[13px] text-on-surface-variant">Subtotal ({itemCount} item{itemCount === 1 ? "" : "s"})</p>
                    <p className="text-[13px] text-on-surface">₹{subtotal}</p>
                  </div>
                  {items.length > 0 && (
                    <>
                      <div className="flex justify-between items-center">
                        <p className="text-[13px] text-on-surface-variant">Platform Fee</p>
                        <p className="text-[13px] text-on-surface">₹{PLATFORM_FEE}</p>
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="text-[13px] text-on-surface-variant">Discount</p>
                        <p className="text-[13px] text-[#147a40]">-₹{DISCOUNT}</p>
                      </div>
                    </>
                  )}
                </div>
                <div className="border-t border-dashed border-outline-variant/50 pt-2.5 mb-3">
                  <div className="flex justify-between items-end mb-0.5">
                    <p className="text-sm font-bold text-on-surface">Total</p>
                    <p className="font-bold text-[22px] leading-none" style={{ color: '#003e6f' }}>₹{total}</p>
                  </div>
                  {items.length > 0 && (
                    <p className="text-[11px] font-semibold text-[#147a40] text-right">You saved ₹{DISCOUNT} on this order!</p>
                  )}
                </div>
                <button type="button" onClick={handleProceedToCheckout} className="w-full text-on-primary py-2 rounded-lg font-semibold text-sm flex justify-center items-center gap-2 hover:bg-primary/90 transition-all shadow-sm cursor-pointer" style={{ backgroundColor: '#003e6f' }}>
                  Proceed to Checkout
                  <span className="material-symbols-outlined text-[16px]">lock</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Cart;
