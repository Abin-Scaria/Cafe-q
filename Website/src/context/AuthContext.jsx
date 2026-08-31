import { createContext, useContext, useEffect, useState } from "react";

const STORAGE_KEY = "cafeQ_user";

/**
 * Safely read the persisted signed-in user from localStorage.
 * Returns null when nothing is stored or the stored data is invalid.
 */
function loadStoredUser() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" && parsed.email ? parsed : null;
  } catch {
    return null;
  }
}

const AuthContext = createContext(null);

/**
 * Shared authentication state for the whole Cafe Q app.
 * Persists the signed-in user to localStorage under the key "cafeQ_user",
 * following the same mechanism CartContext uses for the cart
 * ("cafeQ_cart") and ordersStore uses for orders ("cafeQ_orders").
 */
export function AuthProvider({ children }) {
  const [user, setUser] = useState(loadStoredUser);

  useEffect(() => {
    try {
      if (user) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
      } else {
        localStorage.removeItem(STORAGE_KEY);
      }
    } catch {
      // Ignore storage write errors (private browsing mode, quota, etc.).
    }
  }, [user]);

  const login = (userData) => setUser(userData);
  const logout = () => setUser(null);

  const value = {
    user,
    isAuthenticated: !!user,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return ctx;
}