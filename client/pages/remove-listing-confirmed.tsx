import React from "react";

export default function RemoveListingConfirmed() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      {/* Success Confirmation Card */}
      <div className="relative w-full max-w-md bg-white rounded-[20px] shadow-[0_6px_10px_4px_rgba(0,0,0,0.15),0_2px_3px_0_rgba(0,0,0,0.30)] overflow-hidden lg:transform lg:scale-[0.55] lg:origin-center">
        {/* Red Check Icon */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-[18px] w-[46px] h-[46px] bg-[#E82121] rounded-full flex items-center justify-center">
          <svg width="25" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.3757 7.29297L9.87565 19.793L4.14648 14.0638L5.61523 12.5951L9.87565 16.8451L20.9069 5.82422L22.3757 7.29297Z" fill="white"/>
          </svg>
        </div>

        {/* Content */}
        <div className="pt-[63px] pb-3 px-3 text-center">
          <h1 className="text-[34px] font-bold text-black leading-[41px] tracking-[0.4px] mb-1 font-sf-pro">
            Car Deleted
          </h1>
          <p className="text-[20px] font-light text-black font-albert">
            Success!
          </p>
        </div>
      </div>
    </div>
  );
}
