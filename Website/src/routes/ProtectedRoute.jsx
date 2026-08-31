import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

/**
 * Central route guard for pages that require a signed-in user.
 *
 * Authenticated users pass through to the requested page. Everyone else is
 * redirected to the existing /login page, carrying the originally requested
 * location (path + search) as router state so the Login page can send them
 * back to that exact page after a successful login.
 */
function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return children;
}

export default ProtectedRoute;
