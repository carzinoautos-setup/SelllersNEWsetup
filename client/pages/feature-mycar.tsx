import React from "react";
import { Link } from "react-router-dom";

export default function FeatureMycar() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-start sm:items-center justify-center pt-[50px] sm:pt-0 px-4">
      {/* Main Card */}
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden mx-auto md:transform md:scale-[0.7] md:origin-center lg:transform lg:scale-[0.49] lg:origin-center">
        {/* Close Button */}
        <button className="absolute top-6 right-6 z-10 w-5 h-5 text-red-600 hover:text-red-700 transition-colors">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 12.1293L2.54753 19.5817C2.26869 19.8606 1.91381 20 1.48289 20C1.05196 20 0.697084 19.8606 0.41825 19.5817C0.139416 19.3029 0 18.948 0 18.5171C0 18.0862 0.139416 17.7313 0.41825 17.4525L7.87072 10L0.41825 2.54753C0.139416 2.26869 0 1.91381 0 1.48289C0 1.05196 0.139416 0.697084 0.41825 0.41825C0.697084 0.139416 1.05196 0 1.48289 0C1.91381 0 2.26869 0.139416 2.54753 0.41825L10 7.87072L17.4525 0.41825C17.7313 0.139416 18.0862 0 18.5171 0C18.948 0 19.3029 0.139416 19.5817 0.41825C19.8606 0.697084 20 1.05196 20 1.48289C20 1.91381 19.8606 2.26869 19.5817 2.54753L12.1293 10L19.5817 17.4525C19.8606 17.7313 20 18.0862 20 18.5171C20 18.948 19.8606 19.3029 19.5817 19.5817C19.3029 19.8606 18.948 20 18.5171 20C18.0862 20 17.7313 19.8606 17.4525 19.5817L10 12.1293Z"
              fill="currentColor"
            />
          </svg>
        </button>

        {/* Content */}
        <div className="px-6 pt-10 sm:pt-16 pb-[3px] sm:pb-6">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/55e4dfc2f25ba21e21807ca5ba7e2a4afce2fedc?width=427"
              alt="Carzino Logo"
              className="h-4 sm:h-5"
            />
          </div>

          {/* Illustration */}
          <div className="flex justify-center mb-12">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F4d1f1909a98e4ebc8068632229306ce4%2F27e27892e6f045e08a9f937cb1d0b1aa"
              alt="Three Cars"
              className="w-full max-w-sm"
            />
          </div>

          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M35.0007 11.6664L15.0007 31.6664L5.83398 22.4997L8.18398 20.1497L15.0007 26.9498L32.6507 9.31641L35.0007 11.6664Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>

          {/* Heading */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-black mb-4">
              Feature Your Car
            </h1>
            <p className="text-lg sm:text-xl text-black font-light">
              Sell your car faster with more exposure
            </p>
          </div>

          {/* Action Buttons from Figma Design */}
          <div className="flex flex-col items-center gap-6 mb-8 px-4">
            <div className="flex items-center gap-6 w-full max-w-sm">
              <Link to="/buy-credits" className="flex-1 h-14 bg-gray-800 hover:bg-gray-900 text-white rounded-xl font-medium transition-colors flex items-center justify-center">
                <span className="text-xl font-normal">Buy Credits</span>
              </Link>
              <button className="flex-1 h-14 bg-red-600 hover:bg-red-700 text-white rounded-xl font-medium transition-colors flex items-center justify-center">
                <span className="text-xl font-normal">Use 1 Credit</span>
              </button>
            </div>

            <div className="text-center">
              <span className="text-xl font-light text-black">Learn more</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
