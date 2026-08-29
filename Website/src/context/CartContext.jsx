import { createContext, useContext, useEffect, useState } from "react";

const STORAGE_KEY = "cafeQ_cart";

/**
 * Safely read the persisted cart from localStorage.
 * Returns [] when nothing is stored or the stored data is invalid.
 */
function loadStoredCart() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    return [];
  }
}

const CartContext = createContext(null);

/**
 * Shared cart state for the whole Cafe Q app.
 * Persists to localStorage under the key "cafeQ_cart".
 */
export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(loadStoredCart);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItems));
    } catch (err) {
      // Ignore storage write errors (private browsing mode, quota, etc.).
    }
  }, [cartItems]);

  /**
   * Add a configured dish to the cart.
   * config: { itemId, name, image, portion, extras, unitPrice }
   * quantity: how many units to add (defaults to 1).
   *
   * cartItemId uniquely identifies the configuration
   * (item + portion + selected extras), so identical configs are
   * merged into a single row with an increased quantity.
   */
  const addToCart = (config, quantity = 1) => {
    if (!config || config.itemId == null) return;
    const extraKey = (config.extras || [])
      .map((e) => e.id)
      .sort()
      .join(",");
    const cartItemId = `${config.itemId}|${config.portion || "Regular"}|${extraKey}`;

    setCartItems((prev) => {
      const existing = prev.find((i) => i.cartItemId === cartItemId);
      if (existing) {
        return prev.map((i) =>
          i.cartItemId === cartItemId
            ? { ...i, quantity: i.quantity + quantity }
            : i
        );
      }
      return [
        ...prev,
        {
          cartItemId,
          itemId: config.itemId,
          name: config.name,
          image: config.image || null,
          portion: config.portion || "Regular",
          extras: config.extras || [],
          unitPrice: config.unitPrice || 0,
          quantity,
        },
      ];
    });
  };

  const removeFromCart = (cartItemId) =>
    setCartItems((prev) => prev.filter((i) => i.cartItemId !== cartItemId));

  const updateQuantity = (cartItemId, quantity) =>
    setCartItems((prev) =>
      prev.map((i) =>
        i.cartItemId === cartItemId
          ? { ...i, quantity: Math.max(1, Math.floor(quantity || 1)) }
          : i
      )
    );

  const increaseQuantity = (cartItemId) =>
    setCartItems((prev) =>
      prev.map((i) =>
        i.cartItemId === cartItemId ? { ...i, quantity: (i.quantity || 1) + 1 } : i
      )
    );

  const decreaseQuantity = (cartItemId) =>
    setCartItems((prev) =>
      prev.map((i) =>
        i.cartItemId === cartItemId
          ? { ...i, quantity: Math.max(1, (i.quantity || 1) - 1) }
          : i
      )
    );

  const clearCart = () => setCartItems([]);

  const cartItemCount = cartItems.reduce((sum, i) => sum + (i.quantity || 1), 0);
  const cartSubtotal = cartItems.reduce(
    (sum, i) => sum + (i.unitPrice || 0) * (i.quantity || 1),
    0
  );

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    cartItemCount,
    cartSubtotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return ctx;
}