import React from "react";

export default function RemoveListingConfirmed() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      {/* Success Confirmation Card */}
      <div className="relative w-full max-w-sm bg-white rounded-[15px] shadow-[0_6px_10px_4px_rgba(0,0,0,0.15),0_2px_3px_0_rgba(0,0,0,0.30)] overflow-hidden transform scale-[0.55] origin-center">
        {/* Red Check Icon */}
        <div className="absolute left-[19px] top-[18px] w-[56px] h-[56px] bg-[#E82121] rounded-full flex items-center justify-center">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M34.1667 8.35L14.1667 28.35L5 19.1833L7.35 16.8333L14.1667 23.6333L31.8167 6L34.1667 8.35Z" fill="white"/>
          </svg>
        </div>

        {/* Content */}
        <div className="pt-[17px] pb-[11px] pl-[103px] pr-[13px] text-left">
          <h1 className="text-[34px] font-normal text-black leading-[41px] tracking-[0.4px] mb-0 font-sf-pro">
            Car Deleted
          </h1>
          <p className="text-[20px] font-light text-black font-albert ml-1">
            Success!
          </p>
        </div>
      </div>
    </div>
  );
}
