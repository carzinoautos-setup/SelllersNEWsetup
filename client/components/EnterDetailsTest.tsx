import { useState } from "react";

export function EnterDetailsTest() {
  const [open, setOpen] = useState(true);

  return (
    <div className="mt-8 space-y-5">
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="flex items-center gap-3 focus:outline-none"
        >
          <h2 className="text-2xl font-medium text-[#24272C] font-sans">Enter your Details</h2>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`transform transition-transform duration-200 text-[#E82121] ${open ? "rotate-90" : "rotate-0"}`}
            aria-hidden
          >
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" fill="#E82121" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="p-7 rounded-[10px] border border-[#E1E1E1] bg-white shadow-[0_1px_2px_0_rgba(0,0,0,0.30),0_2px_6px_2px_rgba(0,0,0,0.15)]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Seller name or Dealer Name */}
            <div className="relative">
              <div className="w-full h-[48px] rounded-[10px] border border-[#E1E1E1] bg-white px-4 py-2 flex items-center transition-colors focus-within:border-[#E82121]">
                <input
                  aria-label="Seller name or Dealer Name"
                  name="sellerName"
                  placeholder="Enter your full name"
                  className="w-full bg-transparent text-[13.5px] text-[#050B20] font-dm outline-none"
                />
              </div>
              <div className="absolute left-4 -top-2 bg-white px-2 text-[12px] text-[#24272C]">Seller name or Dealer Name</div>
            </div>

            {/* City */}
            <div className="relative">
              <div className="w-full h-[48px] rounded-[10px] border border-[#E1E1E1] bg-white px-4 py-2 flex items-center transition-colors focus-within:border-[#E82121]">
                <input
                  aria-label="City"
                  name="city"
                  placeholder="Enter your city"
                  className="w-full bg-transparent text-[13.5px] text-[#050B20] font-dm outline-none"
                />
              </div>
              <div className="absolute left-4 -top-2 bg-white px-2 text-[12px] text-[#24272C]">City</div>
            </div>

            {/* State */}
            <div className="relative">
              <div className="w-full h-[48px] rounded-[10px] border border-[#E1E1E1] bg-white px-4 py-2 flex items-center transition-colors focus-within:border-[#E82121]">
                <input
                  aria-label="State"
                  name="state"
                  placeholder="Enter your state"
                  className="w-full bg-transparent text-[13.5px] text-[#050B20] font-dm outline-none"
                />
              </div>
              <div className="absolute left-4 -top-2 bg-white px-2 text-[12px] text-[#24272C]">State</div>
            </div>

            {/* Zip code */}
            <div className="relative">
              <div className="w-full h-[48px] rounded-[10px] border border-[#E1E1E1] bg-white px-4 py-2 flex items-center transition-colors focus-within:border-[#E82121]">
                <input
                  aria-label="Zip code"
                  name="zip"
                  placeholder="Enter your zip code"
                  className="w-full bg-transparent text-[13.5px] text-[#050B20] font-dm outline-none"
                />
              </div>
              <div className="absolute left-4 -top-2 bg-white px-2 text-[12px] text-[#24272C]">Zip code</div>
            </div>

            {/* Email Alert address */}
            <div className="relative">
              <div className="w-full h-[48px] rounded-[10px] border border-[#E1E1E1] bg-white px-4 py-2 flex items-center transition-colors focus-within:border-[#E82121]">
                <input
                  aria-label="Email alert address"
                  name="emailAlert"
                  placeholder="Enter your email address"
                  className="w-full bg-transparent text-[13.5px] text-[#050B20] font-dm outline-none"
                  type="email"
                />
              </div>
              <div className="absolute left-4 -top-2 bg-white px-2 text-[12px] text-[#24272C]">Email Alert address</div>
            </div>

            {/* Account holder email Address */}
            <div className="relative">
              <div className="w-full h-[48px] rounded-[10px] border border-[#E1E1E1] bg-white px-4 py-2 flex items-center transition-colors focus-within:border-[#E82121]">
                <input
                  aria-label="Account holder email"
                  name="accountEmail"
                  placeholder="Enter your email address"
                  className="w-full bg-transparent text-[13.5px] text-[#050B20] font-dm outline-none"
                  type="email"
                />
              </div>
              <div className="absolute left-4 -top-2 bg-white px-2 text-[12px] text-[#24272C]">Account holder email Adresss</div>
            </div>

            {/* List phone on ads - Dropdown */}
            <div className="relative">
              <div className="w-full h-[48px] rounded-[10px] border border-[#E1E1E1] bg-white px-4 py-2 flex items-center justify-between transition-colors focus-within:border-[#E82121]">
                <select
                  aria-label="List phone on ads"
                  name="listPhone"
                  className="bg-transparent text-[13.5px] text-[#050B20] font-dm outline-none w-full"
                  defaultValue="yes"
                >
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2">
                  <path d="M9.87722 2.52782C9.69674 2.33638 9.39483 2.32925 9.20434 2.50924L5.00757 6.48505L0.81128 2.50926C0.620796 2.32878 0.319357 2.3364 0.138405 2.52784C-0.0425481 2.71879 -0.0344624 3.02023 0.15651 3.20118L4.68043 7.487C4.77185 7.57368 4.88995 7.61748 5.00757 7.61748C5.12518 7.61748 5.24375 7.57368 5.3352 7.487L9.85911 3.20118C10.0501 3.02021 10.0582 2.71879 9.87722 2.52782Z" fill="#050B20"/>
                </svg>
              </div>
              <div className="absolute left-4 -top-2 bg-white px-2 text-[12px] text-[#24272C]">List phone on ads</div>
            </div>

            {/* Seller Phone */}
            <div className="relative">
              <div className="w-full h-[48px] rounded-[10px] border border-[#E1E1E1] bg-white px-4 py-2 flex items-center transition-colors focus-within:border-[#E82121]">
                <input
                  aria-label="Seller Phone"
                  name="sellerPhone"
                  placeholder="(206)"
                  className="w-full bg-transparent text-[13.5px] text-[#050B20] font-dm outline-none"
                />
              </div>
              <div className="absolute left-4 -top-2 bg-white px-2 text-[12px] text-[#24272C]">Seller Phone</div>
            </div>

            {/* Enter your full address (span full row) */}
            <div className="relative lg:col-span-3">
              <div className="w-full h-[48px] rounded-[10px] border border-[#E1E1E1] bg-white px-4 py-2 flex items-center transition-colors focus-within:border-[#E82121]">
                <input
                  aria-label="Full address"
                  name="address"
                  placeholder="Enter address"
                  className="w-full bg-transparent text-[13.5px] text-[#050B20] font-dm outline-none"
                />
              </div>
              <div className="absolute left-4 -top-2 bg-white px-2 text-[12px] text-[#24272C]">Enter your full address here and then select from the choices.</div>
            </div>

            {/* Longitude */}
            <div className="relative">
              <div className="w-full h-[48px] rounded-[10px] border border-[#E1E1E1] bg-white px-4 py-2 flex items-center transition-colors focus-within:border-[#E82121]">
                <input
                  aria-label="Longitude"
                  name="longitude"
                  placeholder="Auto populates from google maps"
                  className="w-full bg-transparent text-[13.5px] text-[#050B20] font-dm outline-none"
                />
              </div>
              <div className="absolute left-4 -top-2 bg-white px-2 text-[12px] text-[#24272C]">Longitude; Required</div>
            </div>

            {/* Latitude */}
            <div className="relative">
              <div className="w-full h-[48px] rounded-[10px] border border-[#E1E1E1] bg-white px-4 py-2 flex items-center transition-colors focus-within:border-[#E82121]">
                <input
                  aria-label="Latitude"
                  name="latitude"
                  placeholder="Auto populates from google maps"
                  className="w-full bg-transparent text-[13.5px] text-[#050B20] font-dm outline-none"
                />
              </div>
              <div className="absolute left-4 -top-2 bg-white px-2 text-[12px] text-[#24272C]">Latitude: Required</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
