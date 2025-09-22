import { useState } from "react";
import { DashboardLayout } from "../components/DashboardLayout";

export function UsersProfileCard() {
  const [listPhone, setListPhone] = useState(true);

  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Enter your Details */}
      <section className="bg-white border border-[#B2B2B2] rounded-2xl p-8 shadow-sm mt-8">
        <div className="text-[20px] font-semibold text-[#24272C] mb-4">Enter your Details</div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full py-5">
          {/* Seller or dealer name */}
          <div className="flex flex-col">
            <div className="relative">
              <label className="absolute -top-3 left-3 bg-white px-2 text-[12px] text-[#000]">Seller or dealer name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full h-[60px] rounded-md border border-[#E1E1E1] px-4 text-[15px] text-[#050B20] bg-white outline-none focus:border-[#E82121]"
              />
            </div>
          </div>

          {/* City */}
          <div className="flex flex-col">
            <div className="relative">
              <label className="absolute -top-3 left-3 bg-white px-2 text-[12px] text-[#000]">City</label>
              <input
                type="text"
                placeholder="City"
                className="w-full h-[60px] rounded-md border border-[#E1E1E1] px-4 text-[15px] text-[#24272C] bg-white outline-none focus:border-[#E82121]"
              />
            </div>
          </div>

          {/* State */}
          <div className="flex flex-col">
            <div className="relative">
              <label className="absolute -top-3 left-3 bg-white px-2 text-[12px] text-[#000]">State</label>
              <input
                type="text"
                placeholder="Enter your state"
                className="w-full h-[60px] rounded-md border border-[#E1E1E1] px-4 text-[15px] text-[#050B20] bg-white outline-none focus:border-[#E82121]"
              />
            </div>
          </div>

          {/* Zip code */}
          <div className="flex flex-col">
            <div className="relative">
              <label className="absolute -top-3 left-3 bg-white px-2 text-[12px] text-[#000]">Zip code</label>
              <input
                type="text"
                placeholder="Zip code"
                className="w-full h-[60px] rounded-md border border-[#E1E1E1] px-4 text-[15px] text-[#050B20] bg-white outline-none focus:border-[#E82121]"
              />
            </div>
          </div>

          {/* Email lead alert address */}
          <div className="flex flex-col">
            <div className="relative">
              <label className="absolute -top-3 left-3 bg-white px-2 text-[12px] text-[#000]">Email lead alert address</label>
              <input
                type="email"
                placeholder="Email address"
                className="w-full h-[60px] rounded-md border border-[#E1E1E1] px-4 text-[15px] text-[#050B20] bg-white outline-none focus:border-[#E82121]"
              />
            </div>
          </div>

          {/* Account holder email Address */}
          <div className="flex flex-col">
            <div className="relative">
              <label className="absolute -top-3 left-3 bg-white px-2 text-[12px] text-[#000]">Account holder email Address</label>
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full h-[60px] rounded-md border border-[#E1E1E1] px-4 text-[15px] text-[#050B20] bg-white outline-none focus:border-[#E82121]"
              />
            </div>
          </div>

          {/* List your phone# on ads (full width) */}
          <div className="flex flex-col md:col-span-3">
            <div className="relative">
              <label className="absolute -top-3 left-3 bg-white px-2 text-[12px] text-[#000]">List your phone# on ads</label>

              <button
                type="button"
                onClick={() => setListPhone(v => !v)}
                className="w-full flex items-center justify-between rounded-md border border-[#E1E1E1] h-[60px] px-4 bg-white"
                aria-pressed={listPhone}
              >
                <span className="text-[15px] text-[#050B20]">{listPhone ? 'Yes' : 'No'}</span>

                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#10B981]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17l-5-5" stroke="#16A34A" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>

                  <svg className={`w-3 h-3 text-[#E82121] transform transition-transform ${listPhone ? 'rotate-180' : 'rotate-0'}`} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </button>
            </div>
          </div>

          {/* Seller Phone */}
          <div className="flex flex-col">
            <div className="relative">
              <label className="absolute -top-3 left-3 bg-white px-2 text-[12px] text-[#000]">Seller Phone</label>
              <input
                type="tel"
                placeholder=""
                className="w-full h-[60px] rounded-md border border-[#E1E1E1] px-4 text-[15px] text-[#050B20] bg-white outline-none focus:border-[#E82121]"
              />
            </div>
          </div>

          {/* Address (span 2 columns) */}
          <div className="flex flex-col md:col-span-2">
            <div className="relative">
              <label className="absolute -top-3 left-3 bg-white px-2 text-[12px] text-[#000]">Enter your address and then select from the choices.</label>
              <input
                type="text"
                placeholder="Enter address"
                className="w-full h-[60px] rounded-md border border-[#E1E1E1] px-4 text-[15px] text-[#050B20] bg-white outline-none focus:border-[#E82121]"
              />
            </div>
          </div>

          {/* Longitude */}
          <div className="flex flex-col">
            <div className="relative">
              <label className="absolute -top-3 left-3 bg-white px-2 text-[12px] text-[#000]">Longitude:</label>
              <input
                type="text"
                placeholder="Longitude"
                className="w-full h-[60px] rounded-md border border-[#E1E1E1] px-4 text-[15px] text-[#050B20] bg-white outline-none focus:border-[#E82121]"
              />
            </div>
          </div>

          {/* Latitude */}
          <div className="flex flex-col">
            <div className="relative">
              <label className="absolute -top-3 left-3 bg-white px-2 text-[12px] text-[#000]">Latitude</label>
              <input
                type="text"
                placeholder="Latitude"
                className="w-full h-[60px] rounded-md border border-[#E1E1E1] px-4 text-[15px] text-[#050B20] bg-white outline-none focus:border-[#E82121]"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Price & Color Section - Step 2 */}
      <section className="bg-white border border-[#B2B2B2] rounded-2xl p-8 mt-8 opacity-90">
        <div className="flex items-end justify-between mb-8">
          <div className="text-[24px] font-medium text-[#24272C]">Price & Color</div>
          <div className="flex items-center justify-center px-6 py-2 bg-white border border-[#CF0D0D] rounded-xl">
            <div className="text-[15px] font-medium text-[#1E1E1E]">Step 2</div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">

          {/* Body Type */}
          <div className="relative">
            <div className="w-full h-[60px] rounded-xl border border-[#E1E1E1] bg-white relative">
              <div className="absolute left-4 top-2.5">
                <div className="text-[13px] text-[#818181] font-dm mb-1">Body Type</div>
                <div className="text-[15px] text-[#050B20] font-dm">Select Body Type</div>
              </div>
              <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-2.5 h-2.5" viewBox="0 0 10 10" fill="none">
                <path d="M9.86941 2.52782C9.68892 2.33638 9.38702 2.32925 9.19653 2.50924L4.99976 6.48505L0.803467 2.50926C0.612983 2.32878 0.311545 2.3364 0.130592 2.52784C-0.0503606 2.71879 -0.0422749 3.02023 0.148697 3.20118L4.67261 7.487C4.76404 7.57368 4.88214 7.61748 4.99976 7.61748C5.11737 7.61748 5.23594 7.57368 5.32738 7.487L9.8513 3.20118C10.0423 3.02021 10.0504 2.71879 9.86941 2.52782Z" fill="#050B20"/>
              </svg>
            </div>
          </div>

          {/* Doors */}
          <div className="relative">
            <div className="w-full h-[57px] rounded-xl border border-[#E1E1E1] bg-white relative">
              <div className="absolute left-4 top-2.5">
                <div className="text-[13px] text-[#818181] font-dm mb-1">Doors</div>
              </div>
              <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-2.5 h-2.5" viewBox="0 0 10 10" fill="none">
                <path d="M9.86941 2.52782C9.68892 2.33638 9.38702 2.32925 9.19653 2.50924L4.99976 6.48505L0.803467 2.50926C0.612983 2.32878 0.311545 2.3364 0.130592 2.52784C-0.0503606 2.71879 -0.0422749 3.02023 0.148697 3.20118L4.67261 7.487C4.76404 7.57368 4.88214 7.61748 4.99976 7.61748C5.11737 7.61748 5.23594 7.57368 5.32738 7.487L9.8513 3.20118C10.0423 3.02021 10.0504 2.71879 9.86941 2.52782Z" fill="#050B20"/>
              </svg>
            </div>
          </div>

          {/* Transmission */}
          <div className="relative">
            <div className="w-full h-[60px] rounded-xl border border-[#E1E1E1] bg-white relative">
              <div className="absolute left-4 top-2.5">
                <div className="text-[13px] text-[#818181] font-dm mb-1">Transmission</div>
                <div className="text-[15px] text-[#050B20] font-dm">Select Transmission</div>
              </div>
              <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-2.5 h-2.5" viewBox="0 0 10 10" fill="none">
                <path d="M9.86941 2.52782C9.68892 2.33638 9.38702 2.32925 9.19653 2.50924L4.99976 6.48505L0.803467 2.50926C0.612983 2.32878 0.311545 2.3364 0.130592 2.52784C-0.0503606 2.71879 -0.0422749 3.02023 0.148697 3.20118L4.67261 7.487C4.76404 7.57368 4.88214 7.61748 4.99976 7.61748C5.11737 7.61748 5.23594 7.57368 5.32738 7.487L9.8513 3.20118C10.0423 3.02021 10.0504 2.71879 9.86941 2.52782Z" fill="#050B20"/>
              </svg>
            </div>
          </div>

          {/* Transmission Speed */}
          <div className="relative">
            <div className="w-full h-[60px] rounded-xl border border-[#E1E1E1] bg-white relative">
              <div className="absolute left-4 top-2.5">
                <div className="text-[13px] text-[#818181] font-dm mb-1">Transmission speed</div>
                <div className="text-[15px] text-[#050B20] font-dm">Select speed</div>
              </div>
            </div>
          </div>

          {/* Cylinders */}
          <div className="relative">
            <div className="w-full h-[60px] rounded-xl border border-[#E1E1E1] bg-white relative">
              <div className="absolute left-4 top-2.5">
                <div className="text-[13px] text-[#818181] font-dm mb-1">Cylinders</div>
                <div className="text-[15px] text-[#050B20] font-dm">Select Cylinders</div>
              </div>
            </div>
          </div>

          {/* Engine Size - spans 2 columns on larger screens */}
          <div className="relative lg:col-span-2">
            <div className="w-full h-[60px] rounded-xl border border-[#E1E1E1] bg-white relative">
              <div className="absolute left-4 top-2.5">
                <div className="text-[13px] text-[#818181] font-dm mb-1">Engine Size (Liters)</div>
                <div className="text-[15px] text-[#050B20] font-dm">Enter engine size</div>
              </div>
            </div>
          </div>

          {/* Fuel Type */}
          <div className="relative">
            <div className="w-full h-[60px] rounded-xl border border-[#E1E1E1] bg-white relative">
              <div className="absolute left-4 top-2.5">
                <div className="text-[13px] text-[#818181] font-dm mb-1">Fuel Type</div>
                <div className="text-[15px] text-[#050B20] font-dm">Select Fuel Type</div>
              </div>
              <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-2.5 h-2.5" viewBox="0 0 10 10" fill="none">
                <path d="M9.86941 2.52782C9.68892 2.33638 9.38702 2.32925 9.19653 2.50924L4.99976 6.48505L0.803467 2.50926C0.612983 2.32878 0.311545 2.3364 0.130592 2.52784C-0.0503606 2.71879 -0.0422749 3.02023 0.148697 3.20118L4.67261 7.487C4.76404 7.57368 4.88214 7.61748 4.99976 7.61748C5.11737 7.61748 5.23594 7.57368 5.32738 7.487L9.8513 3.20118C10.0423 3.02021 10.0504 2.71879 9.86941 2.52782Z" fill="#050B20"/>
              </svg>
            </div>
          </div>

          {/* MPG City */}
          <div className="relative">
            <div className="w-full h-[60px] rounded-xl border border-[#E1E1E1] bg-white relative">
              <div className="absolute left-4 top-2.5">
                <div className="text-[13px] text-[#818181] font-dm mb-1">MPG Gallon City</div>
                <div className="text-[15px] text-[#050B20] font-dm">Select MPG City</div>
              </div>
              <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-2.5 h-2.5" viewBox="0 0 10 10" fill="none">
                <path d="M9.86941 2.52782C9.68892 2.33638 9.38702 2.32925 9.19653 2.50924L4.99976 6.48505L0.803467 2.50926C0.612983 2.32878 0.311545 2.3364 0.130592 2.52784C-0.0503606 2.71879 -0.0422749 3.02023 0.148697 3.20118L4.67261 7.487C4.76404 7.57368 4.88214 7.61748 4.99976 7.61748C5.11737 7.61748 5.23594 7.57368 5.32738 7.487L9.8513 3.20118C10.0423 3.02021 10.0504 2.71879 9.86941 2.52782Z" fill="#050B20"/>
              </svg>
            </div>
          </div>

          {/* Drive Train */}
          <div className="relative">
            <div className="w-full h-[60px] rounded-xl border border-[#E1E1E1] bg-white relative">
              <div className="absolute left-4 top-2.5">
                <div className="text-[13px] text-[#818181] font-dm mb-1">Drive Train</div>
                <div className="text-[15px] text-[#050B20] font-dm">Select Drive Train</div>
              </div>
              <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-2.5 h-2.5" viewBox="0 0 10 10" fill="none">
                <path d="M9.86941 2.52782C9.68892 2.33638 9.38702 2.32925 9.19653 2.50924L4.99976 6.48505L0.803467 2.50926C0.612983 2.32878 0.311545 2.3364 0.130592 2.52784C-0.0503606 2.71879 -0.0422749 3.02023 0.148697 3.20118L4.67261 7.487C4.76404 7.57368 4.88214 7.61748 4.99976 7.61748C5.11737 7.61748 5.23594 7.57368 5.32738 7.487L9.8513 3.20118C10.0423 3.02021 10.0504 2.71879 9.86941 2.52782Z" fill="#050B20"/>
              </svg>
            </div>
          </div>

          {/* Engine Type */}
          <div className="relative">
            <div className="w-full h-[60px] rounded-xl border border-[#E1E1E1] bg-white relative">
              <div className="absolute left-4 top-2.5">
                <div className="text-[13px] text-[#818181] font-dm mb-1">Engine Type</div>
                <div className="text-[15px] text-[#050B20] font-dm">Enter engine type</div>
              </div>
            </div>
          </div>

          {/* Stock # */}
          <div className="relative">
            <div className="w-full h-[60px] rounded-xl border border-[#E1E1E1] bg-white relative">
              <div className="absolute left-4 top-2.5">
                <div className="text-[13px] text-[#818181] font-dm mb-1">Stock #</div>
                <div className="text-[15px] text-[#050B20] font-dm">Enter Stock #</div>
              </div>
            </div>
          </div>

          {/* MPG HWY */}
          <div className="relative">
            <div className="w-full h-[60px] rounded-xl border border-[#E1E1E1] bg-white relative">
              <div className="absolute left-4 top-2.5">
                <div className="text-[13px] text-[#818181] font-dm mb-1">MPG Gallon HWY</div>
                <div className="text-[15px] text-[#050B20] font-dm">Select MPG HWY</div>
              </div>
              <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-2.5 h-2.5" viewBox="0 0 10 10" fill="none">
                <path d="M9.86941 2.52782C9.68892 2.33638 9.38702 2.32925 9.19653 2.50924L4.99976 6.48505L0.803467 2.50926C0.612983 2.32878 0.311545 2.3364 0.130592 2.52784C-0.0503606 2.71879 -0.0422749 3.02023 0.148697 3.20118L4.67261 7.487C4.76404 7.57368 4.88214 7.61748 4.99976 7.61748C5.11737 7.61748 5.23594 7.57368 5.32738 7.487L9.8513 3.20118C10.0423 3.02021 10.0504 2.71879 9.86941 2.52782Z" fill="#050B20"/>
              </svg>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default function UsersProfilePage() {
  return (
    <DashboardLayout>
      <UsersProfileCard />
    </DashboardLayout>
  );
}
