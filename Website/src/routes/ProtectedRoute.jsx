import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

/**
 * Central route guard for pages that require a signed-in user.
 *
 * Authenticated users pass through to the requested page. Everyone else is
 * redirected to the existing /login page, carrying the originally requested
 * location (path + search) as router state so the Login page can send them
 * back to that exact page after a successful login.
 *
 * Shows a loading state while Firebase checks the authentication status
 * to prevent briefly treating an authenticated user as logged out.
 */
function ProtectedRoute({ children }) {
  const { isAuthenticated, loading } = useAuth();
  const location = useLocation();

  // Show loading state while Firebase initializes
  if (loading) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-surface">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-on-surface-variant">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return children;
}

export default ProtectedRoute;
