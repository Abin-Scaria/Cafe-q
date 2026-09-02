import { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";

/*
 * Cafe Q Login page — redesigned to match the main website's design system.
 *
 * NOTE: There is no authentication backend yet (src/api/authApi.js is empty),
 * so submitting the form starts a minimal local session via AuthContext
 * (persisted under the localStorage key "cafeQ_user"). handleSubmit is the
 * single place to swap this for the future auth API without touching the UI.
 */

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [message, setMessage] = useState(null); // { ok, text }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim() || !password) {
      setMessage({ ok: false, text: "Please enter your email/phone and password." });
      return;
    }
    // No backend yet — start a local session, then return the user to the page
    // they originally tried to open (e.g. /menu or /menu/:id) when there is one.
    login({ email: email.trim() });
    const from = location.state?.from || "/";
    navigate(from, { replace: true });
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden font-body-md bg-surface">
      {/* Main container - two column layout on desktop */}
      <div className="relative z-10 min-h-screen w-full flex flex-col lg:flex-row">

        {/* LEFT SIDE - Clean minimal background */}
        <div className="relative lg:w-[47%] bg-gradient-to-br from-[#f3f9ff] via-[#e8f4ff] to-[#dceeff] flex items-center justify-center p-6 py-12 lg:p-12 overflow-hidden">
          {/* Decorative background shapes */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
          <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-primary/3 rounded-full blur-2xl"></div>
        </div>

        {/* RIGHT SIDE - Login Card */}
        <div className="relative lg:w-[53%] flex items-center justify-center p-6 lg:p-8 bg-surface">
          <div className="bg-surface-container-lowest w-full max-w-[450px] rounded-[24px] p-7 lg:p-9 card-shadow border border-outline-variant/20">

            {/* Icon header - using coffee cup instead of account_circle */}
            <div className="w-full flex justify-center mb-5">
              <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center">
                <span
                  className="material-symbols-outlined text-primary text-[36px]"
                  style={{ fontVariationSettings: "'FILL' 1, 'wght' 300" }}
                  aria-hidden="true"
                >
                  local_cafe
                </span>
              </div>
            </div>

            {/* Welcome heading */}
            <div className="text-center mb-7">
              <h2 className="text-[28px] font-headline-lg font-bold text-primary mb-1.5 leading-tight">
                Welcome Back
              </h2>
              <p className="text-[15px] text-on-surface-variant">Login to continue to Cafe Q</p>
            </div>

            {/* Login form */}
            <form onSubmit={handleSubmit} noValidate className="flex flex-col">
              {/* Email / Phone */}
              <label className="sr-only" htmlFor="login-email">
                Email or Phone
              </label>
              <div className="group rounded-[14px] bg-surface-container-lowest border border-outline-variant flex items-center px-4 h-[54px] transition-all duration-200 mb-3 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/10">
                <span className="material-symbols-outlined text-on-surface-variant mr-3 group-focus-within:text-primary transition-colors">
                  mail
                </span>
                <input
                  id="login-email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setMessage(null);
                  }}
                  placeholder="Email or Phone"
                  autoComplete="username"
                  className="w-full h-full bg-transparent outline-none border-none p-0 text-on-surface placeholder:text-on-surface-variant/60 text-body-md font-body-md"
                />
              </div>

              {/* Password */}
              <label className="sr-only" htmlFor="login-password">
                Password
              </label>
              <div className="group rounded-[14px] bg-surface-container-lowest border border-outline-variant flex items-center px-4 h-[54px] transition-all duration-200 mb-5 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/10">
                <span className="material-symbols-outlined text-on-surface-variant mr-3 group-focus-within:text-primary transition-colors">
                  lock
                </span>
                <input
                  id="login-password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setMessage(null);
                  }}
                  placeholder="Password"
                  autoComplete="current-password"
                  className="w-full h-full bg-transparent outline-none border-none p-0 text-on-surface placeholder:text-on-surface-variant/60 text-body-md font-body-md"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="ml-2 text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-xl">
                    {showPassword ? "visibility" : "visibility_off"}
                  </span>
                </button>
              </div>

              {/* Options row */}
              <div className="flex justify-between items-center px-1 mb-5">
                <label className="flex items-center cursor-pointer group">
                  <span className="relative flex items-center justify-center w-5 h-5 mr-2 rounded border border-outline-variant bg-surface-container-lowest group-hover:border-primary transition-colors">
                    <input
                      type="checkbox"
                      checked={remember}
                      onChange={(e) => setRemember(e.target.checked)}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                    <span
                      className={`material-symbols-outlined text-sm text-primary transition-opacity ${
                        remember ? "opacity-100" : "opacity-0"
                      }`}
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      check
                    </span>
                  </span>
                  <span className="text-label-md text-on-surface-variant">Remember me</span>
                </label>
                <Link
                  to="/forgot-password"
                  className="text-label-md font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  Forgot Password?
                </Link>
              </div>

              {/* Login button */}
              <button
                type="submit"
                className="w-full h-[52px] bg-primary text-on-primary rounded-[14px] font-bold text-body-md hover:bg-primary/90 shadow-md transition-all duration-300 cursor-pointer"
              >
                Login
              </button>

              {/* Validation / backend message */}
              {message && (
                <p
                  role="status"
                  className={`mt-3 text-sm text-center ${
                    message.ok ? "text-green-700" : "text-error"
                  }`}
                >
                  {message.text}
                </p>
              )}
            </form>

            {/* Divider */}
            <div className="relative flex items-center py-5">
              <div className="flex-grow border-t border-outline-variant"></div>
              <span className="shrink-0 mx-4 text-xs text-on-surface-variant font-medium uppercase tracking-wider">
                or continue with
              </span>
              <div className="flex-grow border-t border-outline-variant"></div>
            </div>

            {/* Social buttons (UI only — no auth providers connected yet) */}
            <div className="flex gap-3">
              <button
                type="button"
                className="flex-1 flex items-center justify-center gap-2 bg-surface-container-lowest border border-outline-variant h-[54px] rounded-[14px] hover:bg-surface-container hover:border-primary transition-colors text-label-md font-medium text-on-surface cursor-pointer"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
                </svg>
                Google
              </button>
              <button
                type="button"
                className="flex-1 flex items-center justify-center gap-2 bg-surface-container-lowest border border-outline-variant h-[54px] rounded-[14px] hover:bg-surface-container hover:border-primary transition-colors text-label-md font-medium text-on-surface cursor-pointer"
              >
                <span className="material-symbols-outlined text-on-surface-variant text-xl">call</span>
                Phone
              </button>
            </div>

            {/* Sign up */}
            <div className="mt-7 text-center text-body-md text-on-surface-variant">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="font-semibold text-primary hover:text-primary/80 transition-colors ml-1"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
