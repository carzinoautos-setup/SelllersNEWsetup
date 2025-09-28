import React, { useState, useEffect } from "react";

export default function Login1() {
  const [activeTab, setActiveTab] = useState("signin");
  const [forgotOpen, setForgotOpen] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const [forgotSent, setForgotSent] = useState(false);

  function openForgot() {
    setForgotEmail("");
    setForgotSent(false);
    setForgotOpen(true);
  }

  function submitForgot(e?: React.FormEvent) {
    e?.preventDefault();
    // In a real app call API here to send the reset email.
    setForgotSent(true);
    // Keep the modal open so users can resend if needed.
  }

  const [bgImage, setBgImage] = useState<string | undefined>(undefined);
  const defaultBg = "https://cdn.builder.io/api/v1/image/assets%2F4d1f1909a98e4ebc8068632229306ce4%2F820fa5b341f54c20832fbc5ec4adaeb1?format=webp";

  useEffect(() => {
    // Allow Builder or other tools to set the login background at runtime via window.__BUILDER_LOGIN_BG
    if (typeof window !== "undefined") {
      const w = window as any;
      if (w.__BUILDER_LOGIN_BG) {
        setBgImage(w.__BUILDER_LOGIN_BG);
      }
      // expose setter so Builder preview or dev tools can update the background dynamically
      w.setLoginBg = (url: string | undefined) => setBgImage(url);
    }
  }, []);

  return (
    <div
      className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-albert"
      style={{
        minHeight: "703.2px",
        backgroundImage: `url(${bgImage || defaultBg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "50% 50%",
        backgroundSize: "cover",
        backgroundColor: "rgba(0, 0, 0, 1)",
      }}
    >
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="px-8 py-5 sm:px-8">
          <img loading="lazy" alt="Carzino logo" src="https://cdn.builder.io/api/v1/image/assets%2F4d1f1909a98e4ebc8068632229306ce4%2F256405fe7d8844ee86146a84c6de93ba?format=webp&width=800" style={{display: "block", width: "160px", height: "auto", objectFit: "contain", paddingBottom: "24px", margin: "0 auto 12px"}} />
          {/* Tabs */}
          <div className="relative mb-8">
            <div className="flex space-x-8">
              <button
                onClick={() => setActiveTab("signin")}
                className={`pb-4 text-base font-medium font-albert transition-colors ${
                  activeTab === "signin"
                    ? "text-gray-900 border-b-2 border-red-600"
                    : "text-gray-900"
                }`}
              >
                Sign in
              </button>
              <button
                onClick={() => setActiveTab("register")}
                className={`pb-4 text-base font-medium font-albert transition-colors ${
                  activeTab === "register"
                    ? "text-gray-900 border-b-2 border-red-600"
                    : "text-gray-900"
                }`}
              >
                Register
              </button>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-200" />
          </div>

          {/* Sign In Tab */}
          {activeTab === "signin" && (
            <div className="space-y-6">
              {forgotOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                  <div
                    className="absolute inset-0 bg-black/40"
                    onClick={() => setForgotOpen(false)}
                  />
                  <form
                    onSubmit={submitForgot}
                    className="relative bg-white rounded-xl shadow-xl w-full max-w-md p-6 z-10"
                  >
                    <h3 className="text-lg font-semibold font-albert text-gray-900 mb-2">
                      Reset your password
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Enter the email associated with your account and we'll
                      send a password reset link.
                    </p>
                    <label className="block text-xs text-gray-500 mb-2 font-albert">
                      Email address
                    </label>
                    <input
                      type="email"
                      required
                      value={forgotEmail}
                      onChange={(ev) => setForgotEmail(ev.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl mb-4 font-albert"
                      placeholder="you@company.com"
                    />
                    <div className="flex items-center justify-end space-x-3">
                      <button
                        type="button"
                        onClick={() => setForgotOpen(false)}
                        className="px-4 py-2 rounded-lg border text-sm"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm"
                      >
                        Send reset link
                      </button>
                    </div>
                    {forgotSent && (
                      <div className="mt-4 text-sm text-green-600 space-y-2">
                        <div>
                          If that email exists, we've sent a reset link.
                        </div>
                        <div>
                          <button
                            type="button"
                            onClick={(ev) => {
                              ev.preventDefault();
                              submitForgot();
                            }}
                            className="mt-2 px-3 py-1 bg-red-600 text-white rounded-md text-sm"
                          >
                            Resend reset link
                          </button>
                        </div>
                      </div>
                    )}
                  </form>
                </div>
              )}
              {/* Email/Username Input */}
              <div>
                <div className="relative">
                  <input
                    type="text"
                    className="w-full px-4 py-4 border border-gray-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent font-albert"
                    placeholder=" "
                    defaultValue="creativelayer088"
                  />
                  <label className="absolute left-4 top-2 text-xs text-gray-500 font-albert">
                    Email or Username
                  </label>
                </div>
              </div>

              {/* Password Input */}
              <div>
                <div className="relative">
                  <input
                    type="password"
                    className="w-full px-4 py-4 border border-gray-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent font-albert"
                    placeholder=" "
                    defaultValue="********"
                  />
                  <label className="absolute left-4 top-2 text-xs text-gray-500 font-albert">
                    Password
                  </label>
                </div>
              </div>

              {/* Remember & Forgot Password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="remember"
                    className="w-5 h-5 border border-gray-200 rounded focus:ring-red-500"
                  />
                  <label
                    htmlFor="remember"
                    className="text-sm text-gray-900 font-albert"
                  >
                    Remember
                  </label>
                </div>
                <button
                  onClick={openForgot}
                  className="text-sm text-gray-900 underline font-albert"
                >
                  Forgotten password?
                </button>
              </div>

              {/* Login Button */}
              <button className="w-full bg-red-600 text-white py-4 rounded-xl font-medium font-albert hover:bg-red-700 transition-colors flex items-center justify-center space-x-2">
                <span>Login</span>
              </button>

              {/* OR Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center">
                  <div className="bg-white px-4">
                    <span className="text-gray-900 text-base font-albert">
                      Or continue with
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Login Buttons */}
              <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center space-x-2 py-3 px-4 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                  >
                    <path
                      d="M22 12.07C22 6.48 17.52 2 11.93 2S1.86 6.48 1.86 12.07C1.86 16.71 5.29 20.68 9.99 21.7V14.04H7.6v-2.97h2.39V9.41c0-2.37 1.41-3.68 3.57-3.68 1.03 0 2.11.18 2.11.18v2.32h-1.19c-1.17 0-1.53.72-1.53 1.46v1.75h2.6l-.42 2.97h-2.18v7.66c4.7-1.02 8.14-5 8.14-9.64z"
                      fill="#1877F2"
                    />
                  </svg>
                  <span className="text-blue-600 text-sm font-albert">
                    Facebook
                  </span>
                </button>
                <button className="flex items-center justify-center space-x-2 py-3 px-4 border border-red-600 rounded-lg hover:bg-red-50 transition-colors">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                  >
                    <path
                      d="M21.805 10.023h-9.18v3.952h5.267c-.226 1.2-.946 2.204-2.02 2.88v2.38h3.256c1.906-1.755 3.012-4.342 3.012-7.212 0-.654-.06-1.29-.335-1.95z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12.625 21.835c2.41 0 4.44-.8 5.92-2.174l-3.256-2.38c-.9.604-2.05.96-2.664.96-2.05 0-3.79-1.386-4.41-3.24H4.83v2.356C6.31 19.37 9.17 21.835 12.625 21.835z"
                      fill="#34A853"
                    />
                    <path
                      d="M8.215 13.997a4.01 4.01 0 0 1 0-2.56V9.08H4.83a8.22 8.22 0 0 0 0 5.88l3.385-1.04z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12.625 7.69c1.31 0 2.48.45 3.4 1.33l2.55-2.55C17.06 4.98 14.99 4 12.625 4a8.26 8.26 0 0 0-7.79 4.9l3.385 2.36C8.835 8.645 10.24 7.69 12.625 7.69z"
                      fill="#EA4335"
                    />
                  </svg>
                  <span className="text-black text-sm font-albert">Google</span>
                </button>
              </div>
            </div>
          )}

          {/* Register Tab */}
          {activeTab === "register" && (
            <div className="space-y-6">
              {/* Username Input */}
              <div>
                <div className="relative">
                  <input
                    type="text"
                    className="w-full px-4 py-4 border border-gray-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent font-albert"
                    placeholder=" "
                    defaultValue="creativelayer088"
                  />
                  <label className="absolute left-4 top-2 text-xs text-gray-500 font-albert">
                    Username
                  </label>
                </div>
              </div>

              {/* Email Input */}
              <div>
                <div className="relative">
                  <input
                    type="email"
                    className="w-full px-4 py-4 border border-gray-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent font-albert"
                    placeholder=" "
                    defaultValue="crea..."
                  />
                  <label className="absolute left-4 top-2 text-xs text-gray-500 font-albert">
                    Email
                  </label>
                </div>
              </div>

              {/* Phone Input */}
              <div>
                <div className="relative">
                  <input
                    type="tel"
                    className="w-full px-4 py-4 border border-gray-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent font-albert"
                    placeholder=" "
                    defaultValue="+67"
                  />
                  <label className="absolute left-4 top-2 text-xs text-gray-500 font-albert">
                    Phone
                  </label>
                </div>
              </div>

              {/* Password Input */}
              <div>
                <div className="relative">
                  <input
                    type="password"
                    className="w-full px-4 py-4 border border-gray-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent font-albert"
                    placeholder=" "
                    defaultValue="********"
                  />
                  <label className="absolute left-4 top-2 text-xs text-gray-500 font-albert">
                    Password
                  </label>
                </div>
              </div>


              {/* Sign Up Button */}
              <button className="w-full bg-red-600 text-white py-4 rounded-xl font-medium font-albert hover:bg-red-700 transition-colors flex items-center justify-center space-x-2">
                <span>Sign UP</span>
              </button>

              {/* Privacy Policy Checkbox */}
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="privacy"
                  className="w-5 h-5 border border-gray-200 rounded focus:ring-red-500"
                />
                <label
                  htmlFor="privacy"
                  className="text-sm text-gray-900 font-albert"
                >
                  I accept the privacy policy
                </label>
              </div>
              <div className="flex items-center mt-2">
                <div className="text-sm text-gray-900 font-albert ml-2">
                  <strong></strong>View the privacy policy
                </div>
              </div>

              {/* OR Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center">
                  <div className="bg-white px-4">
                    <span className="text-gray-900 text-base font-albert">
                      Or continue with
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Login Buttons */}
              <div className="grid grid-cols-2 gap-4 mt-2">
                <button className="flex items-center justify-center space-x-2 py-3 px-4 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                  >
                    <path
                      d="M22 12.07C22 6.48 17.52 2 11.93 2S1.86 6.48 1.86 12.07C1.86 16.71 5.29 20.68 9.99 21.7V14.04H7.6v-2.97h2.39V9.41c0-2.37 1.41-3.68 3.57-3.68 1.03 0 2.11.18 2.11.18v2.32h-1.19c-1.17 0-1.53.72-1.53 1.46v1.75h2.6l-.42 2.97h-2.18v7.66c4.7-1.02 8.14-5 8.14-9.64z"
                      fill="#1877F2"
                    />
                  </svg>
                  <span className="text-blue-600 text-sm font-albert">
                    Facebook
                  </span>
                </button>
                <button className="flex items-center justify-center space-x-2 py-3 px-4 border border-red-600 rounded-lg hover:bg-red-50 transition-colors">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                  >
                    <path
                      d="M21.805 10.023h-9.18v3.952h5.267c-.226 1.2-.946 2.204-2.02 2.88v2.38h3.256c1.906-1.755 3.012-4.342 3.012-7.212 0-.654-.06-1.29-.335-1.95z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12.625 21.835c2.41 0 4.44-.8 5.92-2.174l-3.256-2.38c-.9.604-2.05.96-2.664.96-2.05 0-3.79-1.386-4.41-3.24H4.83v2.356C6.31 19.37 9.17 21.835 12.625 21.835z"
                      fill="#34A853"
                    />
                    <path
                      d="M8.215 13.997a4.01 4.01 0 0 1 0-2.56V9.08H4.83a8.22 8.22 0 0 0 0 5.88l3.385-1.04z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12.625 7.69c1.31 0 2.48.45 3.4 1.33l2.55-2.55C17.06 4.98 14.99 4 12.625 4a8.26 8.26 0 0 0-7.79 4.9l3.385 2.36C8.835 8.645 10.24 7.69 12.625 7.69z"
                      fill="#EA4335"
                    />
                  </svg>
                  <span className="text-black text-sm font-albert">Google</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
