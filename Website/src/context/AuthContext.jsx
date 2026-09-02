import { createContext, useContext, useEffect, useState, useRef } from "react";
import { onAuthStateChanged, signInWithPopup, signOut as firebaseSignOut } from "firebase/auth";
import { auth, googleProvider } from "../firebase.js";

const STORAGE_KEY = "cafeQ_user";

/**
 * Safely read the persisted signed-in user from localStorage.
 * Returns null when nothing is stored or the stored data is invalid.
 * NOTE: This is now primarily used for lightweight profile data.
 * Firebase is the source of truth for authentication state.
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
 *
 * Firebase Authentication is the source of truth for authentication state.
 * Uses onAuthStateChanged to sync Firebase auth state with the application state.
 *
 * Persists lightweight user profile data to localStorage under the key "cafeQ_user"
 * for convenience, but authentication state is always derived from Firebase.
 */
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Ref to resolve the auth state ready promise after onAuthStateChanged fires
  const authStateReadyRef = useRef(null);

  // Listen to Firebase auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        // User is signed in - extract profile data
        const userData = {
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          displayName: firebaseUser.displayName,
          photoURL: firebaseUser.photoURL,
        };
        setUser(userData);

        // Store lightweight profile data in localStorage for convenience
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
        } catch {
          // Ignore storage write errors (private browsing mode, quota, etc.).
        }
      } else {
        // User is signed out
        setUser(null);
        try {
          localStorage.removeItem(STORAGE_KEY);
        } catch {
          // Ignore storage write errors.
        }
      }
      setLoading(false);

      // Resolve the auth state ready promise if it exists
      // This signals to loginWithGoogle that the state has been updated
      if (authStateReadyRef.current) {
        authStateReadyRef.current();
        authStateReadyRef.current = null;
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  /**
   * Sign in with Google using Firebase Authentication.
   * Opens a popup window for Google sign-in.
   * Waits for onAuthStateChanged to update state before returning.
   * Returns the user data on success, throws an error on failure.
   */
  const loginWithGoogle = async () => {
    try {
      // Create a promise that resolves when onAuthStateChanged fires
      const authStateReady = new Promise((resolve) => {
        authStateReadyRef.current = resolve;
      });

      const result = await signInWithPopup(auth, googleProvider);

      // Wait for onAuthStateChanged to fire and update React state
      // This ensures the Navbar sees the authenticated user immediately
      await authStateReady;

      const firebaseUser = result.user;

      const userData = {
        uid: firebaseUser.uid,
        email: firebaseUser.email,
        displayName: firebaseUser.displayName,
        photoURL: firebaseUser.photoURL,
      };

      return userData;
    } catch (error) {
      // Clear the ready callback if sign-in failed
      authStateReadyRef.current = null;
      // Re-throw the error so the caller can handle it
      throw error;
    }
  };

  /**
   * Legacy login method for email/password authentication.
   * NOTE: This is kept for backward compatibility with the existing
   * email/password UI, but currently just sets local state without
   * backend validation since there's no auth API yet.
   *
   * In a production app, this would call a backend API to authenticate
   * and then sync with Firebase custom tokens.
   */
  const login = (userData) => {
    setUser(userData);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
    } catch {
      // Ignore storage write errors.
    }
  };

  /**
   * Sign out the current user.
   * Clears both Firebase session and local state.
   */
  const logout = async () => {
    try {
      await firebaseSignOut(auth);
      // onAuthStateChanged will handle state cleanup
    } catch (error) {
      console.error("Logout error:", error);
      // Even if Firebase signOut fails, clear local state
      setUser(null);
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch {
        // Ignore storage write errors.
      }
    }
  };

  const value = {
    user,
    isAuthenticated: !!user,
    loading,
    login,
    loginWithGoogle,
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
