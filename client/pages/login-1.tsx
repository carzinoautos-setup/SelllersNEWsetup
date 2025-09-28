import React, { useState } from "react";

export default function Login1() {
  const [activeTab, setActiveTab] = useState("signin");

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="px-6 py-8 sm:px-8">
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
                  <label htmlFor="remember" className="text-sm text-gray-900 font-albert">
                    Remember
                  </label>
                </div>
                <a href="#" className="text-sm text-gray-900 underline font-albert">
                  Forgotten password?
                </a>
              </div>

              {/* Login Button */}
              <button className="w-full bg-red-600 text-white py-4 rounded-xl font-medium font-albert hover:bg-red-700 transition-colors flex items-center justify-center space-x-2">
                <span>Login</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.6111 0H5.05558C4.84062 0 4.66668 0.173943 4.66668 0.388901C4.66668 0.603859 4.84062 0.777802 5.05558 0.777802H12.6723L0.113941 13.3362C-0.0379805 13.4881 -0.0379805 13.7342 0.113941 13.8861C0.189884 13.962 0.289415 14 0.38891 14C0.488405 14 0.5879 13.962 0.663879 13.8861L13.2222 1.3277V8.94447C13.2222 9.15943 13.3962 9.33337 13.6111 9.33337C13.8261 9.33337 14 9.15943 14 8.94447V0.388901C14 0.173943 13.8261 0 13.6111 0Z" fill="white"/>
                </svg>
              </button>

              {/* OR Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center">
                  <div className="bg-white px-4">
                    <span className="text-gray-900 text-base font-albert">OR</span>
                  </div>
                </div>
              </div>

              {/* Social Login Buttons */}
              <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center space-x-2 py-3 px-4 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                  <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.5 0H6.5C5.5 0 4.5 0.5 4.5 1.5V3H2.5V5H4.5V16H6.5V5H8.5L9 3H6.5V2C6.5 1.5 7 1 7.5 1H8.5V0Z" fill="#1967D2"/>
                  </svg>
                  <span className="text-blue-600 text-sm font-albert">Continue Facebook</span>
                </button>
                <button className="flex items-center justify-center space-x-2 py-3 px-4 border border-red-600 rounded-lg hover:bg-red-50 transition-colors">
                  <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 0C3.1 0 0 3.1 0 7C0 10.9 3.1 14 7 14C10.9 14 14 10.9 14 7C14 3.1 10.9 0 7 0ZM7 12.8C3.7 12.8 1.2 10.3 1.2 7C1.2 3.7 3.7 1.2 7 1.2C10.3 1.2 12.8 3.7 12.8 7C12.8 10.3 10.3 12.8 7 12.8Z" fill="#000"/>
                  </svg>
                  <span className="text-black text-sm font-albert">Continue Google</span>
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

              {/* Account Type Radio Buttons */}
              <div className="flex items-center space-x-8">
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="private"
                    name="accountType"
                    defaultChecked
                    className="w-5 h-5 text-gray-900 border-gray-200 focus:ring-red-500"
                  />
                  <label htmlFor="private" className="text-sm text-gray-900 font-albert">
                    Private seller
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="dealer"
                    name="accountType"
                    className="w-5 h-5 text-gray-900 border-gray-200 focus:ring-red-500"
                  />
                  <label htmlFor="dealer" className="text-sm text-gray-900 font-albert">
                    Dealer account
                  </label>
                </div>
              </div>

              {/* Sign Up Button */}
              <button className="w-full bg-red-600 text-white py-4 rounded-xl font-medium font-albert hover:bg-red-700 transition-colors flex items-center justify-center space-x-2">
                <span>Sign UP</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.6111 0H5.05558C4.84062 0 4.66668 0.173943 4.66668 0.388901C4.66668 0.603859 4.84062 0.777802 5.05558 0.777802H12.6723L0.113941 13.3362C-0.0379805 13.4881 -0.0379805 13.7342 0.113941 13.8861C0.189884 13.962 0.289415 14 0.38891 14C0.488405 14 0.5879 13.962 0.663879 13.8861L13.2222 1.3277V8.94447C13.2222 9.15943 13.3962 9.33337 13.6111 9.33337C13.8261 9.33337 14 9.15943 14 8.94447V0.388901C14 0.173943 13.8261 0 13.6111 0Z" fill="white"/>
                </svg>
              </button>

              {/* Privacy Policy Checkbox */}
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="privacy"
                  className="w-5 h-5 border border-gray-200 rounded focus:ring-red-500"
                />
                <label htmlFor="privacy" className="text-sm text-gray-900 font-albert">
                  I accept the privacy policy
                </label>
              </div>

              {/* OR Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center">
                  <div className="bg-white px-4">
                    <span className="text-gray-900 text-base font-albert">OR</span>
                  </div>
                </div>
              </div>

              {/* Social Login Buttons */}
              <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center space-x-2 py-3 px-4 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                  <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.5 0H6.5C5.5 0 4.5 0.5 4.5 1.5V3H2.5V5H4.5V16H6.5V5H8.5L9 3H6.5V2C6.5 1.5 7 1 7.5 1H8.5V0Z" fill="#1967D2"/>
                  </svg>
                  <span className="text-blue-600 text-sm font-albert">Continue Facebook</span>
                </button>
                <button className="flex items-center justify-center space-x-2 py-3 px-4 border border-red-600 rounded-lg hover:bg-red-50 transition-colors">
                  <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 0C3.1 0 0 3.1 0 0C0 10.9 3.1 14 7 14C10.9 14 14 10.9 14 7C14 3.1 10.9 0 7 0ZM7 12.8C3.7 12.8 1.2 10.3 1.2 7C1.2 3.7 3.7 1.2 7 1.2C10.3 1.2 12.8 3.7 12.8 7C12.8 10.3 10.3 12.8 7 12.8Z" fill="#000"/>
                  </svg>
                  <span className="text-black text-sm font-albert">Continue Google</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
