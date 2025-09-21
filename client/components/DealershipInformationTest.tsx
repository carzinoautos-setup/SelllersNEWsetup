import { useState } from "react";

export function DealershipInformationTest() {
  const [open, setOpen] = useState(true);

  return (
    <div className="mt-8 space-y-5">
      <div className="bg-white border-[0.8px] border-[#E1E1E1] rounded-[10px] shadow-[0_1px_2px_0_rgba(0,0,0,0.30),0_2px_6px_2px_rgba(0,0,0,0.15)] py-3 px-7">
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className="flex items-center gap-3 bg-transparent border-0 p-0 focus:outline-none"
          >
            <div className="text-[18px] font-semibold text-[#24272C] font-sans leading-8">Dealership Information</div>
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
          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Row 1 */}
            {/* Do you sell new or used vehicles? */}
            <div className="relative">
              <div className="w-full h-[48px] rounded-[10px] border border-[#E1E1E1] bg-white px-4 py-2 flex items-center justify-between transition-colors focus-within:border-[#E82121]">
                <select
                  aria-label="Do you sell new or used vehicles?"
                  name="vehicleType"
                  className="bg-transparent text-[13.5px] text-[#050B20] font-sans outline-none w-full"
                  defaultValue=""
                >
                  <option value="">Select new, used or both</option>
                  <option value="new">New</option>
                  <option value="used">Used</option>
                  <option value="both">Both</option>
                </select>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2">
                  <path d="M9.87722 2.52782C9.69674 2.33638 9.39483 2.32925 9.20434 2.50924L5.00757 6.48505L0.81128 2.50926C0.620796 2.32878 0.319357 2.3364 0.138405 2.52784C-0.0425481 2.71879 -0.0344624 3.02023 0.15651 3.20118L4.68043 7.487C4.77185 7.57368 4.88995 7.61748 5.00757 7.61748C5.12518 7.61748 5.24375 7.57368 5.3352 7.487L9.85911 3.20118C10.0501 3.02021 10.0582 2.71879 9.87722 2.52782Z" fill="#050B20"/>
                </svg>
              </div>
              <div className="absolute left-4 -top-2 bg-white px-2 text-[12px] text-[#24272C]">Do you sell new or used vehicles?</div>
            </div>

            {/* Email lead alerts user 1 */}
            <div className="relative">
              <div className="w-full h-[48px] rounded-[10px] border border-[#E1E1E1] bg-white px-4 py-2 flex items-center transition-colors focus-within:border-[#E82121]">
                <input
                  aria-label="Email lead alerts user 1"
                  name="emailAlert1"
                  placeholder="Enter an additional alert email address"
                  className="w-full bg-transparent text-[13.5px] text-[#050B20] font-sans outline-none"
                  type="email"
                />
              </div>
              <div className="absolute left-4 -top-2 bg-white px-2 text-[12px] text-[#24272C]">Email lead alerts user 1</div>
            </div>

            {/* Dealerships CRM provider */}
            <div className="relative">
              <div className="w-full h-[48px] rounded-[10px] border border-[#E1E1E1] bg-white px-4 py-2 flex items-center transition-colors focus-within:border-[#E82121]">
                <input
                  aria-label="Dealerships CRM provider"
                  name="crmProvider"
                  placeholder="Enter your Crm provider"
                  className="w-full bg-transparent text-[13.5px] text-[#050B20] font-sans outline-none"
                />
              </div>
              <div className="absolute left-4 -top-2 bg-white px-2 text-[12px] text-[#24272C]">Dealerships CRM provider</div>
            </div>

            {/* Row 2 */}
            {/* Dealership website */}
            <div className="relative">
              <div className="w-full h-[48px] rounded-[10px] border border-[#E1E1E1] bg-white px-4 py-2 flex items-center transition-colors focus-within:border-[#E82121]">
                <input
                  aria-label="Dealership website"
                  name="dealershipWebsite"
                  placeholder="Enter website URL"
                  className="w-full bg-transparent text-[13.5px] text-[#050B20] font-sans outline-none"
                  type="url"
                />
              </div>
              <div className="absolute left-4 -top-2 bg-white px-2 text-[12px] text-[#24272C]">Dealership website</div>
            </div>

            {/* Email lead alerts user 2 */}
            <div className="relative">
              <div className="w-full h-[48px] rounded-[10px] border border-[#E1E1E1] bg-white px-4 py-2 flex items-center transition-colors focus-within:border-[#E82121]">
                <input
                  aria-label="Email lead alerts user 2"
                  name="emailAlert2"
                  placeholder="Enter an additional alert email address"
                  className="w-full bg-transparent text-[13.5px] text-[#050B20] font-sans outline-none"
                  type="email"
                />
              </div>
              <div className="absolute left-4 -top-2 bg-white px-2 text-[12px] text-[#24272C]">Email lead alerts user 2</div>
            </div>

            {/* CRM Account # */}
            <div className="relative">
              <div className="w-full h-[48px] rounded-[10px] border border-[#E1E1E1] bg-white px-4 py-2 flex items-center transition-colors focus-within:border-[#E82121]">
                <input
                  aria-label="CRM Account Number"
                  name="crmAccount"
                  placeholder="Enter your Crm account #"
                  className="w-full bg-transparent text-[13.5px] text-[#050B20] font-sans outline-none"
                />
              </div>
              <div className="absolute left-4 -top-2 bg-white px-2 text-[12px] text-[#24272C]">CRM Account #</div>
            </div>

            {/* Row 3 */}
            {/* XML or CSV vehicle Feed url */}
            <div className="relative">
              <div className="w-full h-[48px] rounded-[10px] border border-[#E1E1E1] bg-white px-4 py-2 flex items-center transition-colors focus-within:border-[#E82121]">
                <input
                  aria-label="XML or CSV vehicle Feed url"
                  name="vehicleFeedUrl"
                  placeholder="Enter feed URL"
                  className="w-full bg-transparent text-[13.5px] text-[#050B20] font-sans outline-none"
                  type="url"
                />
              </div>
              <div className="absolute left-4 -top-2 bg-white px-2 text-[12px] text-[#24272C]">XML or CSV vehicle Feed url</div>
            </div>

            {/* Email lead alerts user 3 */}
            <div className="relative">
              <div className="w-full h-[48px] rounded-[10px] border border-[#E1E1E1] bg-white px-4 py-2 flex items-center transition-colors focus-within:border-[#E82121]">
                <input
                  aria-label="Email lead alerts user 3"
                  name="emailAlert3"
                  placeholder="Enter an additional alert email address"
                  className="w-full bg-transparent text-[13.5px] text-[#050B20] font-sans outline-none"
                  type="email"
                />
              </div>
              <div className="absolute left-4 -top-2 bg-white px-2 text-[12px] text-[#24272C]">Email lead alerts user 3</div>
            </div>

            {/* Dealerships CRM email */}
            <div className="relative">
              <div className="w-full h-[48px] rounded-[10px] border border-[#E1E1E1] bg-white px-4 py-2 flex items-center transition-colors focus-within:border-[#E82121]">
                <input
                  aria-label="Dealerships CRM email"
                  name="crmEmail"
                  placeholder="Enter your Crm alert email address"
                  className="w-full bg-transparent text-[13.5px] text-[#050B20] font-sans outline-none"
                  type="email"
                />
              </div>
              <div className="absolute left-4 -top-2 bg-white px-2 text-[12px] text-[#24272C]">Dealerships CRM email</div>
            </div>

            {/* Row 4 */}
            {/* Website provider information (span full row) */}
            <div className="relative lg:col-span-3">
              <div className="w-full h-[48px] rounded-[10px] border border-[#E1E1E1] bg-white px-4 py-2 flex items-center transition-colors focus-within:border-[#E82121]">
                <input
                  aria-label="Website provider information"
                  name="websiteProvider"
                  placeholder="Enter your inventory provider"
                  className="w-full bg-transparent text-[13.5px] text-[#050B20] font-sans outline-none"
                />
              </div>
              <div className="absolute left-4 -top-2 bg-white px-2 text-[12px] text-[#24272C]">Website provider information</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
