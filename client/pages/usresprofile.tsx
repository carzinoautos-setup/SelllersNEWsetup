import { useState } from "react";
import { DashboardLayout } from "../components/DashboardLayout";

export default function UsersProfilePage() {
  const [listPhone, setListPhone] = useState(true);

  return (
    <DashboardLayout>
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <section className="bg-white border border-[#E6E6E6] rounded-2xl p-8 mt-[-3px] shadow-sm">
          <h2 className="text-[20px] font-semibold text-[#24272C] leading-7 mb-3">Enter your Details</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full py-5">
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

            <div className="flex flex-col md:col-span-3">
              <div className="relative">
                <label className="absolute -top-3 left-3 bg-white px-2 text-[12px] text-[#000]">List your phone# on ads</label>

                <button
                  type="button"
                  onClick={() => setListPhone(v => !v)}
                  className="w-full flex items-center justify-between rounded-md border border-[#E1E1E1] h-[60px] px-4 bg-white"
                  aria-pressed={listPhone}
                >
                  <span className="text-[15px] text-[#050B20]">Yes</span>

                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#10B981]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17l-5-5" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                    <svg className={`w-3 h-3 text-[#E82121] transform transition-transform ${listPhone ? 'rotate-180' : 'rotate-0'}`} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>

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
      </div>
    </DashboardLayout>
  );
}
