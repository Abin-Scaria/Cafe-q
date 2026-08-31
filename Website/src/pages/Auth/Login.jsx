import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// Existing local Cafe Q background (verified: src/pages/Orders/img/bg.png).
import bgImage from "../Orders/img/bg.png";
import { useAuth } from "../../context/AuthContext.jsx";

/*
 * Stitch-themed Login page.
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
    <div className="relative min-h-screen w-full overflow-hidden font-body-md">
      {/* Background image + dark translucent overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt="Cozy Cafe Q interior with warm lighting"
          className="w-full h-full object-cover"
          style={{ backgroundPosition: "center" }}
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Card container — right side on desktop, centered on mobile */}
      <div className="relative z-10 min-h-screen w-full flex items-center justify-center md:justify-end md:pr-[8%] px-4 py-8">
        <div className="bg-[#FAF8F2] w-full max-w-[480px] rounded-[28px] p-9 shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative overflow-hidden flex flex-col">

          {/* Icon header: cup + steam */}
          <div className="w-full flex justify-center mb-6">
            <div className="relative text-[#243A22]">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex space-x-1 text-[#cf9215]">
                <span className="material-symbols-outlined text-sm font-light -translate-y-1">waves</span>
                <span
                  className="material-symbols-outlined text-base font-light -translate-y-2"
                  style={{ color: "#FEBA41" }}
                >
                  waves
                </span>
                <span className="material-symbols-outlined text-sm font-light">waves</span>
              </div>
              <span
                className="material-symbols-outlined text-[66px]"
                style={{ fontVariationSettings: "'FILL' 0, 'wght' 200" }}
                aria-hidden="true"
              >
                local_cafe
              </span>
            </div>
          </div>

          {/* Welcome heading */}
          <div className="text-center mb-7">
            <h1 className="text-[34px] md:text-[36px] font-bold text-[#243A22] mb-1.5 leading-tight">
              Welcome Back
            </h1>
            <p className="text-[15px] text-[#434841]">Login to continue to Cafe Q</p>
          </div>

          {/* Login form */}
          <form onSubmit={handleSubmit} noValidate className="flex flex-col">
            {/* Email / Phone */}
            <label className="sr-only" htmlFor="login-email">
              Email or Phone
            </label>
            <div className="group rounded-xl bg-white border border-[#C3C8BE] flex items-center px-4 h-[58px] transition-all duration-200 mb-4 focus-within:border-[#243A22] focus-within:ring-2 focus-within:ring-[#243A22]/10">
              <span className="material-symbols-outlined text-[#434841] mr-3 group-focus-within:text-[#243A22] transition-colors">
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
                className="w-full h-full bg-transparent outline-none border-none p-0 text-on-surface placeholder:text-[#8b9086] text-sm font-medium"
              />
            </div>

            {/* Password */}
            <label className="sr-only" htmlFor="login-password">
              Password
            </label>
            <div className="group rounded-xl bg-white border border-[#C3C8BE] flex items-center px-4 h-[58px] transition-all duration-200 mb-4 focus-within:border-[#243A22] focus-within:ring-2 focus-within:ring-[#243A22]/10">
              <span className="material-symbols-outlined text-[#434841] mr-3 group-focus-within:text-[#243A22] transition-colors">
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
                className="w-full h-full bg-transparent outline-none border-none p-0 text-on-surface placeholder:text-[#8b9086] text-sm font-medium"
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="ml-2 text-[#434841] hover:text-[#243A22] transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-xl">
                  {showPassword ? "visibility" : "visibility_off"}
                </span>
              </button>
            </div>

            {/* Options row */}
            <div className="flex justify-between items-center px-1 mb-6">
              <label className="flex items-center cursor-pointer group">
                <span className="relative flex items-center justify-center w-5 h-5 mr-2 rounded border border-[#C3C8BE] bg-white group-hover:border-[#cf9215] transition-colors">
                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                  <span
                    className={`material-symbols-outlined text-sm text-[#243A22] transition-opacity ${
                      remember ? "opacity-100" : "opacity-0"
                    }`}
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check
                  </span>
                </span>
                <span className="text-sm text-[#434841]">Remember me</span>
              </label>
              {/* No /forgot-password route exists yet — kept non-navigating. */}
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="text-sm font-medium text-[#434841] hover:text-[#243A22] transition-colors"
              >
                Forgot Password?
              </a>
            </div>

            {/* Login button */}
            <button
              type="submit"
              className="w-full h-[58px] bg-[#243A22] text-white rounded-xl font-bold text-base hover:bg-[#364C33] shadow-md transition-all duration-300 cursor-pointer"
            >
              Login
            </button>

            {/* Validation / backend message */}
            {message && (
              <p
                role="status"
                className={`mt-3 text-sm text-center ${
                  message.ok ? "text-green-700" : "text-red-700"
                }`}
              >
                {message.text}
              </p>
            )}
          </form>

          {/* Divider */}
          <div className="relative flex items-center py-6">
            <div className="flex-grow border-t border-[#C3C8BE]/60"></div>
            <span className="shrink-0 mx-4 text-xs text-[#8b9086] font-medium uppercase tracking-wider">
              or continue with
            </span>
            <div className="flex-grow border-t border-[#C3C8BE]/60"></div>
          </div>

          {/* Social buttons (UI only — no auth providers connected yet) */}
          <div className="flex gap-3.5">
            <button
              type="button"
              className="flex-1 flex items-center justify-center gap-2 bg-white border border-[#C3C8BE] h-[58px] rounded-xl hover:bg-[#f2f4f6] hover:border-[#9aa093] transition-colors text-sm font-medium text-on-surface cursor-pointer"
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
              className="flex-1 flex items-center justify-center gap-2 bg-white border border-[#C3C8BE] h-[58px] rounded-xl hover:bg-[#f2f4f6] hover:border-[#9aa093] transition-colors text-sm font-medium text-on-surface cursor-pointer"
            >
              <span className="material-symbols-outlined text-[#434841] text-xl">call</span>
              Phone
            </button>
          </div>

          {/* Sign up (no /register route exists yet — kept non-navigating) */}
          <div className="mt-7 text-center text-sm text-[#434841]">
            Don't have an account?{" "}
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="font-semibold text-[#243A22] hover:text-[#364C33] transition-colors ml-1"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
