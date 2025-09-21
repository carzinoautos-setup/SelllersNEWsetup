import { useState } from "react";
import { DashboardLayout } from "../components/DashboardLayout";

export default function UsresProfile() {
  const [accountType, setAccountType] = useState("Select");

  return (
    <DashboardLayout>
      <div className="flex-1 overflow-y-auto">
        <div className="py-6 md:py-10 lg:px-[30px] px-4 sm:px-6">
          <div className="max-w-[1480px] mx-auto">
            {/* Get Started with Carzino Block */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 justify-center p-5 bg-white rounded-2xl border border-[#E1E1E1]">
              {/* Left Content */}
              <div className="flex-1 space-y-4">
                <div className="space-y-3">
                  <h2 className="text-2xl font-bold text-[#24272C] font-albert">
                    Get Started with Carzino
                  </h2>
                  <div className="space-y-4">
                    <p className="text-xs text-[#111928] font-albert leading-relaxed max-w-[703px]">
                      Please fill out the form below with your information to create your listing. You'll be asked to choose whether you're
                      listing as a Private Seller or a Dealer. If you're a dealer and would like to use your feed for automatic vehicle listings,
                      please contact us for details.
                    </p>
                  </div>
                </div>

                {/* Account Type Dropdown */}
                <div className="w-full max-w-[423px]">
                  <div className="relative">
                    <select
                      aria-label="Account type"
                      value={accountType}
                      onChange={(e) => setAccountType(e.target.value)}
                      className="w-1/2 h-[60px] border border-[#B2B2B2] rounded-xl bg-white px-4 py-3 pr-10 text-[15px] font-dm appearance-none"
                    >
                      <option value="Select">Select</option>
                      <option value="Private Seller">Private Seller</option>
                      <option value="Dealer">Dealer</option>
                    </select>

                    {/* Red chevron */}
                    <div className="pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                        <path d="M9.86941 2.52782C9.68892 2.33638 9.38702 2.32925 9.19653 2.50924L4.99976 6.48505L0.803467 2.50926C0.612983 2.32878 0.311545 2.3364 0.130592 2.52784C-0.0503606 2.71879 -0.0422749 3.02023 0.148697 3.20118L4.67261 7.487C4.76404 7.57368 4.88214 7.61748 4.99976 7.61748C5.11737 7.61748 5.23594 7.57368 5.32738 7.487L9.8513 3.20118C10.0423 3.02021 10.0504 2.71879 9.86941 2.52782Z" fill="#E82121" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Center Icon */}
              <div className="flex-shrink-0">
                <div className="relative w-[108px] h-[107px]">
                  <svg width="108" height="107" viewBox="0 0 162 167" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="81.4104" cy="82.9641" rx="78.2795" ry="80.3352" fill="url(#pattern0_2989_22478)" />
                    <path d="M80.8887 0.988281C125.274 0.988281 161.277 37.9181 161.277 83.501C161.277 129.084 125.274 166.015 80.8887 166.015C36.5034 166.015 0.5 129.084 0.5 83.501C0.500185 37.9182 36.5035 0.988387 80.8887 0.988281Z" stroke="#242760" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M130.829 138.551C130.829 137.857 131.349 137.293 131.99 137.293H139.732C140.373 137.293 140.893 137.857 140.893 138.551C140.893 139.245 140.373 139.809 139.732 139.809H131.99C131.349 139.809 130.829 139.245 130.829 138.551ZM133.066 159.936H138.656C142.582 159.936 144.546 159.936 145.956 159.028C146.563 158.638 147.087 158.132 147.498 157.54C148.44 156.181 148.44 154.288 148.44 150.502C148.44 146.715 148.44 144.823 147.497 143.463C147.086 142.871 146.562 142.365 145.956 141.975C144.546 141.067 142.582 141.067 138.656 141.067H133.066C129.14 141.067 127.176 141.067 125.766 141.975C125.159 142.365 124.636 142.871 124.225 143.463C123.281 144.822 123.281 146.715 123.281 150.499V150.502C123.281 154.288 123.281 156.18 124.223 157.54C124.631 158.129 125.154 158.634 125.766 159.028C127.176 159.936 129.14 159.936 133.066 159.936ZM130.619 150.502C130.619 147.709 132.966 145.447 135.861 145.447C138.755 145.447 141.103 147.71 141.103 150.502C141.103 153.293 138.754 155.556 135.861 155.556C132.966 155.556 130.619 153.292 130.619 150.502ZM132.716 150.502C132.716 148.826 134.125 147.47 135.861 147.47C137.597 147.47 139.006 148.827 139.006 150.502C139.006 152.176 137.597 153.533 135.861 153.533C134.125 153.533 132.716 152.176 132.716 150.502ZM143.548 145.447C142.97 145.447 142.5 145.9 142.5 146.458C142.5 147.016 142.97 147.469 143.548 147.469H144.248C144.826 147.469 145.296 147.016 145.296 146.458C145.296 145.9 144.826 145.447 144.248 145.447H143.548Z" fill="#E82121" />
                    <defs>
                      <pattern id="pattern0_2989_22478" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlinkHref="#image0_2989_22478" transform="matrix(0.00257069 0 0 0.00250491 0 -0.307835)" />
                      </pattern>
                    </defs>
                  </svg>
                </div>
              </div>

              {/* Right Content - Account Number */}
              <div className="w-full lg:w-[165px] space-y-4">
                <h3 className="text-[16px] font-medium text-[#050B20] font-dm leading-7">
                  Account Number
                </h3>

                <div className="w-full max-w-[341px]">
                  <div className="w-full h-[67px] border border-[#E1E1E1] rounded-xl bg-white px-4 py-3 flex flex-col justify-center">
                    <div className="text-[13px] text-[#24272C] font-dm mb-1">Account Number</div>
                    <div className="text-[15px] text-[#050B20] font-dm">Account Number here</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
