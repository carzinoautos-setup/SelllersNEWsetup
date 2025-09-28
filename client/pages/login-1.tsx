import React from "react";
import { Link } from "react-router-dom";

export default function Login1() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-start sm:items-center justify-center pt-[50px] sm:pt-0 px-4">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden mx-auto">
        <div className="px-6 py-8">
          <div className="flex justify-between items-center mb-6">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/55e4dfc2f25ba21e21807ca5ba7e2a4afce2fedc?width=427"
              alt="Carzino Logo"
              className="h-6 sm:h-8"
            />
            <Link to="/" className="text-sm text-gray-500 underline">
              Back
            </Link>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-black mb-4">Login 1</h1>

          <div className="border border-dashed border-gray-200 rounded-lg p-8 min-h-[300px] flex items-center justify-center">
            <div className="text-center text-gray-500">Empty canvas — add Figma blocks or components here.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
