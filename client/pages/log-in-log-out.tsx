import React, { useState } from "react";

export default function LogInLogOutPage() {
  const [activeTab, setActiveTab] = useState("signin");
  const [rememberMe, setRememberMe] = useState(true);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4 lg:p-8 font-albert">
      <div className="w-full max-w-7xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
        {/* Left Panel - Login Form (updated to login-1 layout) */}
        <div className="flex-1 p-6 sm:p-8 lg:p-12 xl:p-16 flex flex-col justify-center">
          <div className="relative p-8">
            <div className="relative mb-8">
              <div className="flex items-start">
                <div
                  className={`cursor-pointer ${activeTab === "signin" ? "border-b-2 border-[#E82121] text-[#111827] pb-4 font-medium" : "text-gray-600 pb-4 font-medium"}`}
                  onClick={() => setActiveTab("signin")}
                >
                  Sign in
                </div>
                <div
                  className={`cursor-pointer ml-8 ${activeTab === "register" ? "border-b-2 border-[#E82121] text-[#111827] pb-4 font-medium" : "text-gray-600 pb-4 font-medium"}`}
                  onClick={() => setActiveTab("register")}
                >
                  Register
                </div>
              </div>
              {/* underline bar (subtle) */}
              <div className="absolute left-0 right-0 bottom-0 h-px bg-gray-200" />
            </div>

            {/* Form area */}
            <div className="mt-4">
              {activeTab === "signin" ? (
                <>
                  <div className="relative mb-6">
                    <input
                      className="w-full rounded-lg border border-gray-200 px-4 py-4 text-sm placeholder-transparent"
                      defaultValue="creativelayer088"
                      aria-label="Email or Username"
                    />
                    <label className="absolute left-4 top-2 text-xs text-gray-500">Email or Username</label>
                  </div>

                  <div className="relative mb-6">
                    <input
                      className="w-full rounded-lg border border-gray-200 px-4 py-4 text-sm placeholder-transparent"
                      defaultValue="********"
                      type="password"
                      aria-label="Password"
                    />
                    <label className="absolute left-4 top-2 text-xs text-gray-500">Password</label>
                  </div>

                  <div className="flex items-center justify-between mt-2 mb-6">
                    <div className="flex items-center">
                      <input
                        id="remember"
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="w-5 h-5 mr-3"
                      />
                      <label htmlFor="remember" className="text-sm text-[#111827]">Remember</label>
                    </div>
                    <div className="text-sm underline text-[#111827]">Forgotten password?</div>
                  </div>

                  <button className="w-full bg-[#DC2626] text-white rounded-lg py-4 font-medium mb-6">
                    Login
                  </button>
                </>
              ) : (
                <>
                  <div className="relative mb-6">
                    <input
                      className="w-full rounded-lg border border-gray-200 px-4 py-4 text-sm placeholder-transparent"
                      placeholder="Full name"
                      aria-label="Full name"
                    />
                  </div>

                  <div className="relative mb-6">
                    <input
                      className="w-full rounded-lg border border-gray-200 px-4 py-4 text-sm placeholder-transparent"
                      placeholder="Email"
                      aria-label="Email"
                    />
                  </div>

                  <div className="relative mb-6">
                    <input
                      className="w-full rounded-lg border border-gray-200 px-4 py-4 text-sm placeholder-transparent"
                      placeholder="Create password"
                      type="password"
                      aria-label="Create password"
                    />
                  </div>

                  <div className="relative mb-6">
                    <input
                      className="w-full rounded-lg border border-gray-200 px-4 py-4 text-sm placeholder-transparent"
                      placeholder="Confirm password"
                      type="password"
                      aria-label="Confirm password"
                    />
                  </div>

                  <button className="w-full bg-[#DC2626] text-white rounded-lg py-4 font-medium mb-6">
                    Register
                  </button>
                </>
              )}

              {/* Divider */}
              <div className="flex items-center my-6">
                <div className="flex-1 border-t border-gray-200"></div>
                <div className="px-4 text-sm text-[#6B7280]">OR</div>
                <div className="flex-1 border-t border-gray-200"></div>
              </div>

              {/* Social buttons */}
              <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center border border-gray-200 rounded-lg py-3">
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12.07C22 6.48 17.52 2 11.93 2S1.86 6.48 1.86 12.07C1.86 16.71 5.29 20.68 9.99 21.7V14.04H7.6v-2.97h2.39V9.41c0-2.37 1.41-3.68 3.57-3.68 1.03 0 2.11.18 2.11.18v2.32h-1.19c-1.17 0-1.53.72-1.53 1.46v1.75h2.6l-.42 2.97h-2.18v7.66c4.7-1.02 8.14-5 8.14-9.64z" fill="#1877F2" />
                  </svg>
                  <span className="text-sm text-[#2563EB]">Facebook</span>
                </button>
                <button className="flex items-center justify-center border border-gray-200 rounded-lg py-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                    <path d="M21.8 10.02h-9.18v3.95h5.27c-.23 1.2-.95 2.2-2.02 2.88v2.38h3.26c1.9-1.75 3.01-4.34 3.01-7.21 0-.65-.06-1.29-.34-1.95z" fill="#4285F4"/>
                    <path d="M12.63 21.83c2.41 0 4.44-.8 5.92-2.17l-3.26-2.38c-.9.6-2.05.96-2.66.96-2.05 0-3.79-1.39-4.41-3.24H4.83v2.36C6.31 19.37 9.17 21.83 12.63 21.83z" fill="#34A853"/>
                    <path d="M8.22 13.0a4.01 4.01 0 010-2.56V9.08H4.83a8.22 8.22 0 000 5.88l3.39-1.04z" fill="#FBBC05"/>
                    <path d="M12.63 7.69c1.31 0 2.48.45 3.4 1.33l2.55-2.55C17.06 4.98 14.99 4 12.63 4 8.01 4 4.21 7.96 4.21 12.59l3.4-2.9c.82-1.96 2.3-3 4.99-3z" fill="#EA4335"/>
                  </svg>
                  <span className="text-sm text-[#DC2626]">Google</span>
                </button>
              </div>

              <div className="flex justify-center mt-6 text-sm text-gray-600">
                <a href="#" className="hover:text-[#E82121]">Sign in</a>
                <span className="mx-6">|</span>
                <a href="#" className="hover:text-[#E82121]">Sign up</a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - Image */}
        <div className="flex-1 lg:min-h-[600px] xl:min-h-[700px] bg-cover bg-center bg-no-repeat">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F4d1f1909a98e4ebc8068632229306ce4%2Fa1de347df2e14921b7b9b949cb60fd61"
            alt="Women shopping"
            className="w-full h-full object-cover lg:min-h-[600px] xl:min-h-[700px]"
          />
        </div>
      </div>
    </div>
  );
}
