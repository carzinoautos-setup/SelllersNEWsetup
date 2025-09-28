import React, { useState } from "react";

export default function LogInLogOutPage() {
  const [activeTab, setActiveTab] = useState("signin");
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4 lg:p-8 font-albert">
      <div className="w-full max-w-7xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
        {/* Left Panel - Login Form */}
        <div className="flex-1 p-6 sm:p-8 lg:p-12 xl:p-16 flex flex-col justify-center">
          <div className="w-full max-w-md mx-auto">
            {/* Logo */}
            <div className="mb-8 text-center">
              <div className="flex items-center justify-center mb-2">
                <svg width="120" height="32" viewBox="0 0 214 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M60.6914 10.9426V10.8995C60.6914 6.71388 63.9183 3.42969 68.2796 3.42969C71.2199 3.42969 73.112 4.66028 74.3839 6.42778L71.3808 8.74788C70.5604 7.72108 69.6143 7.0666 68.2364 7.0666C66.2226 7.0666 64.8015 8.7714 64.8015 10.8642V10.9034C64.8015 13.0589 66.2187 14.7402 68.2364 14.7402C69.736 14.7402 70.6232 14.0426 71.4829 12.9962L74.486 15.1321C73.1277 17.0015 71.2984 18.3771 68.1108 18.3771C64.0007 18.3771 60.6875 15.2379 60.6875 10.9465L60.6914 10.9426Z" fill="#231F20"/>
                  <path d="M89.1611 3.61328H93.0042L99.1321 18.0825H94.8571L93.809 15.5155H88.2582L87.2297 18.0825H83.0371L89.165 3.61328H89.1611ZM92.6548 12.4195L91.0532 8.33577L89.428 12.4195H92.6548Z" fill="#231F20"/>
                  <path d="M108.664 3.71484H115.467C117.665 3.71484 119.189 4.29095 120.154 5.27464C120.998 6.09372 121.43 7.20283 121.43 8.62154V8.66465C121.43 10.8593 120.256 12.3172 118.47 13.0775L121.905 18.0861H117.3L114.403 13.7359H112.656V18.0861H108.668V3.71876L108.664 3.71484ZM115.283 10.6124C116.641 10.6124 117.422 9.95402 117.422 8.90763V8.86843C117.422 7.73974 116.602 7.16364 115.263 7.16364H112.652V10.6124H115.283V10.6124Z" fill="#231F20"/>
                  <path d="M132.441 15.1899L139.657 7.08133H132.689V3.71484H145.168V6.60713L137.953 14.7157H145.168V18.0822H132.441V15.1899V15.1899Z" fill="#6D6E71"/>
                  <path d="M156.777 3.71484H160.785V18.0822H156.777V3.71484Z" fill="#6D6E71"/>
                  <path d="M172.883 3.71484H176.604L182.524 11.31V3.71484H186.469V18.0822H182.976L176.828 10.2009V18.0822H172.879V3.71484H172.883Z" fill="#6D6E71"/>
                  <path d="M197.982 10.9426V10.8995C197.982 6.77266 201.311 3.42969 205.755 3.42969C210.199 3.42969 213.485 6.73347 213.485 10.8603V10.8995C213.485 15.0263 210.152 18.3692 205.712 18.3692C201.272 18.3692 197.982 15.0654 197.982 10.9386V10.9426ZM209.414 10.9426V10.8995C209.414 8.82626 207.914 7.01956 205.712 7.01956C203.51 7.01956 202.073 8.78315 202.073 10.8563V10.8955C202.073 12.9687 203.572 14.7754 205.751 14.7754C207.93 14.7754 209.41 13.0118 209.41 10.9386L209.414 10.9426Z" fill="#6D6E71"/>
                </svg>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex mb-8 relative">
              <button
                onClick={() => setActiveTab("signin")}
                className={`flex-1 pb-3 text-center font-medium transition-colors ${
                  activeTab === "signin" 
                    ? "text-[#E82121] border-b-2 border-[#E82121]" 
                    : "text-gray-600"
                }`}
              >
                Sign in
              </button>
              <button
                onClick={() => setActiveTab("register")}
                className={`flex-1 pb-3 text-center font-medium transition-colors ${
                  activeTab === "register" 
                    ? "text-[#E82121] border-b-2 border-[#E82121]" 
                    : "text-gray-600"
                }`}
              >
                Register
              </button>
            </div>

            {/* Form */}
            <form className="space-y-6">
              {/* Email/Username Input */}
              <div>
                <input
                  type="text"
                  placeholder="Email or username"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E82121] focus:border-transparent"
                />
              </div>

              {/* Password Input */}
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E82121] focus:border-transparent"
                />
              </div>

              {/* Remember & Forgot Password */}
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="mr-2 w-4 h-4 text-[#E82121] rounded focus:ring-[#E82121]"
                  />
                  <span className="text-gray-600">Remember</span>
                </label>
                <a href="#" className="text-[#E82121] hover:underline">
                  Forgotten password?
                </a>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full bg-[#E82121] text-white py-3 rounded-lg font-medium hover:bg-[#d11e1e] transition-colors"
              >
                Login
              </button>
            </form>

            {/* Divider */}
            <div className="my-8 flex items-center">
              <div className="flex-1 border-t border-gray-300"></div>
              <span className="px-4 text-gray-500 text-sm">OR</span>
              <div className="flex-1 border-t border-gray-300"></div>
            </div>

            {/* Social Login Buttons */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <button className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span className="text-sm">Facebook</span>
              </button>
              <button className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="text-sm">Google</span>
              </button>
            </div>

            {/* Bottom Links */}
            <div className="flex justify-center space-x-6 text-sm">
              <a href="#" className="text-gray-600 hover:text-[#E82121]">
                Sign in
              </a>
              <a href="#" className="text-gray-600 hover:text-[#E82121]">
                Sign up
              </a>
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
