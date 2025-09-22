import { DashboardLayout } from "../components/DashboardLayout";

export default function AddAListingPage() {
  return (
    <DashboardLayout>
      <div className="flex-1">
        <div className="w-full max-w-[1290px] mx-auto px-4 sm:px-6 lg:px-8 py-8">

          {/* VIN Entry Form - Responsive */}
          <section className="w-full bg-white border border-[#B2B2B2] rounded-2xl p-5 mb-8">
            <div className="max-w-[1200px] mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                {/* Left: Text + Form */}
                <div className="order-1 md:order-1 md:col-span-8">
                  <div className="space-y-4">
                    <h2 className="text-xl sm:text-2xl lg:text-[32px] font-bold text-[#222] leading-tight">
                      Start by entering the vin number
                    </h2>
                    <div className="pt-3">
                      <p className="text-[14px] text-[#222] leading-5">
                        How do I find the VIN number for my car? Look on your insurance cards, registration, or the paperwork from when you purchased your vehicle. The most common place to find a VIN is on your vehicle's dashboard, near where the dashboard meets the edge of the windshield on the driver's side.
                      </p>
                    </div>
                  </div>

                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <label className="block">
                        <span className="text-[13px] text-[#818181]">Year</span>
                        <input
                          aria-label="Year"
                          type="text"
                          placeholder="Select Year"
                          className="mt-1 w-full h-[60px] rounded-xl border border-[#E1E1E1] px-4 text-[15px] text-[#050B20] bg-white outline-none"
                        />
                      </label>

                      <label className="block">
                        <span className="text-[13px] text-[#818181]">Make</span>
                        <input
                          aria-label="Make"
                          type="text"
                          placeholder="Select Make"
                          className="mt-1 w-full h-[60px] rounded-xl border border-[#E1E1E1] px-4 text-[15px] text-[#050B20] bg-white outline-none"
                        />
                      </label>
                    </div>

                    <div className="flex flex-col md:flex-row gap-3 md:gap-4">
                      <button
                        type="submit"
                        className="w-full md:w-auto flex-1 md:flex-none px-6 py-3 bg-[#CF0D0D] text-white rounded-xl text-[15px] font-medium hover:bg-[#B10B0B] transition-colors"
                      >
                        Next
                      </button>

                      <button
                        type="button"
                        className="w-full md:w-auto flex-1 md:flex-none px-6 py-3 bg-[#1E1E1E] text-white rounded-xl text-[15px] font-medium hover:bg-[#2A2A2A] transition-colors border border-[#CF0D0D]"
                      >
                        Skip
                      </button>
                    </div>
                  </form>
                </div>

                {/* Right: Image */}
                <div className="order-2 md:order-2 md:col-span-4 flex justify-center md:justify-end">
                  <div className="w-full max-w-[520px]">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/b0bb87b082abcee51435cb3c6f2e227c5265b92f?width=998"
                      alt="Vehicle listing preview"
                      className="w-full h-auto object-contain rounded-md"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="w-full bg-white border border-[#E6E6E6] rounded-lg p-6 mb-8">
            <div className="max-w-[1200px] mx-auto">
              <div className="text-lg font-semibold text-[#24272C] mb-4">Enter your Details</div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Seller or dealer name */}
                <div className="relative">
                  <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-[#000]">Seller or dealer name</label>
                  <input
                    className="w-full h-14 rounded-md border border-[#E6E6E6] px-4 text-[15px]"
                    type="text"
                    placeholder="Enter your full name"
                    aria-label="Seller or dealer name"
                  />
                </div>

                {/* City */}
                <div className="relative">
                  <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-[#000]">City</label>
                  <input
                    className="w-full h-14 rounded-md border border-[#E6E6E6] px-4 text-[15px]"
                    type="text"
                    placeholder="City"
                    aria-label="City"
                  />
                </div>

                {/* State */}
                <div className="relative">
                  <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-[#000]">State</label>
                  <input
                    className="w-full h-14 rounded-md border border-[#E6E6E6] px-4 text-[15px]"
                    type="text"
                    placeholder="Enter your state"
                    aria-label="State"
                  />
                </div>

                {/* Zip code */}
                <div className="relative">
                  <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-[#000]">Zip code</label>
                  <input
                    className="w-full h-14 rounded-md border border-[#E6E6E6] px-4 text-[15px]"
                    type="text"
                    placeholder="Zip code"
                    aria-label="Zip code"
                  />
                </div>

                {/* Email lead alert address */}
                <div className="relative">
                  <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-[#000]">Email lead alert address</label>
                  <input
                    className="w-full h-14 rounded-md border border-[#E6E6E6] px-4 text-[15px]"
                    type="email"
                    placeholder="Email address"
                    aria-label="Email lead alert address"
                  />
                </div>

                {/* Account holder email Address */}
                <div className="relative">
                  <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-[#000]">Account holder email Address</label>
                  <input
                    className="w-full h-14 rounded-md border border-[#E6E6E6] px-4 text-[15px]"
                    type="email"
                    placeholder="Enter your email address"
                    aria-label="Account holder email Address"
                  />
                </div>

                {/* List your phone# on ads (toggle-like) */}
                <div className="relative md:col-span-3">
                  <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-[#000]">List your phone# on ads</label>
                  <button type="button" className="w-full h-14 rounded-md border border-[#E6E6E6] px-4 flex items-center justify-between">
                    <span className="text-[15px]">Yes</span>
                    <span className="flex items-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      <svg width="12" height="12" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.87 2.53C9.69 2.34 9.39 2.33 9.2 2.51L5 6.49 0.8 2.51C0.61 2.33 0.31 2.34 0.13 2.53C-0.05 2.72 -0.04 3.02 0.15 3.2L4.67 7.49C4.76 7.57 4.88 7.62 5 7.62C5.12 7.62 5.24 7.57 5.33 7.49L9.85 3.2C10.04 3.02 10.05 2.72 9.87 2.53Z" fill="#E82121" stroke="#E82121"/></svg>
                    </span>
                  </button>
                </div>

                {/* Seller Phone */}
                <div className="relative md:col-span-2">
                  <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-[#000]">Seller Phone</label>
                  <input
                    className="w-full h-14 rounded-md border border-[#E6E6E6] px-4 text-[15px]"
                    type="tel"
                    placeholder=""
                    aria-label="Seller Phone"
                  />
                </div>

                {/* Address (full width) */}
                <div className="relative md:col-span-3">
                  <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-[#000]">Enter your address and then select from the choices.</label>
                  <input
                    className="w-full h-14 rounded-md border border-[#E6E6E6] px-4 text-[15px]"
                    type="text"
                    placeholder="Enter address"
                    aria-label="Address"
                  />
                </div>

                {/* Longitude */}
                <div className="relative">
                  <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-[#000]">Longitude</label>
                  <input
                    className="w-full h-14 rounded-md border border-[#E6E6E6] px-4 text-[15px]"
                    type="text"
                    placeholder="Longitude"
                    aria-label="Longitude"
                  />
                </div>

                {/* Latitude */}
                <div className="relative">
                  <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-[#000]">Latitude</label>
                  <input
                    className="w-full h-14 rounded-md border border-[#E6E6E6] px-4 text-[15px]"
                    type="text"
                    placeholder="Latitude"
                    aria-label="Latitude"
                  />
                </div>

              </div>
            </div>
          </section>

          {/* Vehicle Details Form */}
          <section className="w-full bg-white border border-[#E6E6E6] rounded-lg p-6 mb-8">
            <div className="max-w-[1200px] mx-auto">
              <div className="text-lg font-semibold text-[#24272C] mb-4">Enter vehicle details</div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Year */}
                <div className="relative">
                  <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-[#818181]">Year</label>
                  <select className="w-full h-14 rounded-md border border-[#E1E1E1] px-4 text-[15px] text-[#050B20] bg-white appearance-none">
                    <option>Select Year</option>
                  </select>
                  <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-2.5 h-2.5 pointer-events-none" viewBox="0 0 10 10" fill="none">
                    <path d="M9.86941 2.52782C9.68892 2.33638 9.38702 2.32925 9.19653 2.50924L4.99976 6.48505L0.803467 2.50926C0.612983 2.32878 0.311545 2.3364 0.130592 2.52784C-0.0503606 2.71879 -0.0422749 3.02023 0.148697 3.20118L4.67261 7.487C4.76404 7.57368 4.88214 7.61748 4.99976 7.61748C5.11737 7.61748 5.23594 7.57368 5.32738 7.487L9.8513 3.20118C10.0423 3.02021 10.0504 2.71879 9.86941 2.52782Z" fill="#050B20"/>
                  </svg>
                </div>

                {/* Body Type */}
                <div className="relative">
                  <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-[#818181]">Body Type</label>
                  <select className="w-full h-14 rounded-md border border-[#E1E1E1] px-4 text-[15px] text-[#050B20] bg-white appearance-none">
                    <option>Select Body Type</option>
                  </select>
                  <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-2.5 h-2.5 pointer-events-none" viewBox="0 0 10 10" fill="none">
                    <path d="M9.86941 2.52782C9.68892 2.33638 9.38702 2.32925 9.19653 2.50924L4.99976 6.48505L0.803467 2.50926C0.612983 2.32878 0.311545 2.3364 0.130592 2.52784C-0.0503606 2.71879 -0.0422749 3.02023 0.148697 3.20118L4.67261 7.487C4.76404 7.57368 4.88214 7.61748 4.99976 7.61748C5.11737 7.61748 5.23594 7.57368 5.32738 7.487L9.8513 3.20118C10.0423 3.02021 10.0504 2.71879 9.86941 2.52782Z" fill="#050B20"/>
                  </svg>
                </div>

                {/* Cylinders */}
                <div className="relative">
                  <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-[#818181]">Cylinders</label>
                  <input
                    className="w-full h-14 rounded-md border border-[#E1E1E1] px-4 text-[15px] text-[#050B20]"
                    type="text"
                    placeholder="Select Cylinders"
                  />
                </div>

                {/* Vin# */}
                <div className="relative">
                  <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-[#000]">Vin#</label>
                  <input
                    className="w-full h-14 rounded-md border border-[#E1E1E1] px-4 text-[15px] text-[#050B20]"
                    type="text"
                    placeholder="Enter Vin#"
                  />
                </div>

                {/* Doors */}
                <div className="relative">
                  <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-[#818181]">Doors</label>
                  <select className="w-full h-14 rounded-md border border-[#E1E1E1] px-4 text-[15px] text-[#050B20] bg-white appearance-none">
                    <option>Select doors</option>
                  </select>
                  <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-2.5 h-2.5 pointer-events-none" viewBox="0 0 10 10" fill="none">
                    <path d="M9.86941 2.52782C9.68892 2.33638 9.38702 2.32925 9.19653 2.50924L4.99976 6.48505L0.803467 2.50926C0.612983 2.32878 0.311545 2.3364 0.130592 2.52784C-0.0503606 2.71879 -0.0422749 3.02023 0.148697 3.20118L4.67261 7.487C4.76404 7.57368 4.88214 7.61748 4.99976 7.61748C5.11737 7.61748 5.23594 7.57368 5.32738 7.487L9.8513 3.20118C10.0423 3.02021 10.0504 2.71879 9.86941 2.52782Z" fill="#050B20"/>
                  </svg>
                </div>

                {/* Transmission */}
                <div className="relative">
                  <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-[#818181]">Transmission</label>
                  <select className="w-full h-14 rounded-md border border-[#E1E1E1] px-4 text-[15px] text-[#050B20] bg-white appearance-none">
                    <option>Select Transmission</option>
                  </select>
                  <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-2.5 h-2.5 pointer-events-none" viewBox="0 0 10 10" fill="none">
                    <path d="M9.86941 2.52782C9.68892 2.33638 9.38702 2.32925 9.19653 2.50924L4.99976 6.48505L0.803467 2.50926C0.612983 2.32878 0.311545 2.3364 0.130592 2.52784C-0.0503606 2.71879 -0.0422749 3.02023 0.148697 3.20118L4.67261 7.487C4.76404 7.57368 4.88214 7.61748 4.99976 7.61748C5.11737 7.61748 5.23594 7.57368 5.32738 7.487L9.8513 3.20118C10.0423 3.02021 10.0504 2.71879 9.86941 2.52782Z" fill="#050B20"/>
                  </svg>
                </div>

                {/* Make */}
                <div className="relative">
                  <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-[#818181]">Make</label>
                  <select className="w-full h-14 rounded-md border border-[#E1E1E1] px-4 text-[15px] text-[#050B20] bg-white appearance-none">
                    <option>Select Make</option>
                  </select>
                  <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-2.5 h-2.5 pointer-events-none" viewBox="0 0 10 10" fill="none">
                    <path d="M9.86941 2.52782C9.68892 2.33638 9.38702 2.32925 9.19653 2.50924L4.99976 6.48505L0.803467 2.50926C0.612983 2.32878 0.311545 2.3364 0.130592 2.52784C-0.0503606 2.71879 -0.0422749 3.02023 0.148697 3.20118L4.67261 7.487C4.76404 7.57368 4.88214 7.61748 4.99976 7.61748C5.11737 7.61748 5.23594 7.57368 5.32738 7.487L9.8513 3.20118C10.0423 3.02021 10.0504 2.71879 9.86941 2.52782Z" fill="#E82121"/>
                  </svg>
                </div>

                {/* Fuel Type */}
                <div className="relative">
                  <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-[#818181]">Fuel Type</label>
                  <select className="w-full h-14 rounded-md border border-[#E1E1E1] px-4 text-[15px] text-[#050B20] bg-white appearance-none">
                    <option>Select Fuel Type</option>
                  </select>
                  <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-2.5 h-2.5 pointer-events-none" viewBox="0 0 10 10" fill="none">
                    <path d="M9.86941 2.52782C9.68892 2.33638 9.38702 2.32925 9.19653 2.50924L4.99976 6.48505L0.803467 2.50926C0.612983 2.32878 0.311545 2.3364 0.130592 2.52784C-0.0503606 2.71879 -0.0422749 3.02023 0.148697 3.20118L4.67261 7.487C4.76404 7.57368 4.88214 7.61748 4.99976 7.61748C5.11737 7.61748 5.23594 7.57368 5.32738 7.487L9.8513 3.20118C10.0423 3.02021 10.0504 2.71879 9.86941 2.52782Z" fill="#050B20"/>
                  </svg>
                </div>

                {/* Exterior Color */}
                <div className="relative">
                  <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-[#818181]">Exterior Color</label>
                  <select className="w-full h-14 rounded-md border border-[#E1E1E1] px-4 text-[15px] text-[#050B20] bg-white appearance-none">
                    <option>Select Exterior Color</option>
                  </select>
                  <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-2.5 h-2.5 pointer-events-none" viewBox="0 0 10 10" fill="none">
                    <path d="M9.86941 2.52782C9.68892 2.33638 9.38702 2.32925 9.19653 2.50924L4.99976 6.48505L0.803467 2.50926C0.612983 2.32878 0.311545 2.3364 0.130592 2.52784C-0.0503606 2.71879 -0.0422749 3.02023 0.148697 3.20118L4.67261 7.487C4.76404 7.57368 4.88214 7.61748 4.99976 7.61748C5.11737 7.61748 5.23594 7.57368 5.32738 7.487L9.8513 3.20118C10.0423 3.02021 10.0504 2.71879 9.86941 2.52782Z" fill="#050B20"/>
                  </svg>
                </div>

                {/* Model */}
                <div className="relative">
                  <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-[#818181]">Model</label>
                  <select className="w-full h-14 rounded-md border border-[#E1E1E1] px-4 text-[15px] text-[#050B20] bg-white appearance-none">
                    <option>Select Model</option>
                  </select>
                  <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-2.5 h-2.5 pointer-events-none" viewBox="0 0 10 10" fill="none">
                    <path d="M9.86941 2.52782C9.68892 2.33638 9.38702 2.32925 9.19653 2.50924L4.99976 6.48505L0.803467 2.50926C0.612983 2.32878 0.311545 2.3364 0.130592 2.52784C-0.0503606 2.71879 -0.0422749 3.02023 0.148697 3.20118L4.67261 7.487C4.76404 7.57368 4.88214 7.61748 4.99976 7.61748C5.11737 7.61748 5.23594 7.57368 5.32738 7.487L9.8513 3.20118C10.0423 3.02021 10.0504 2.71879 9.86941 2.52782Z" fill="#050B20"/>
                  </svg>
                </div>

                {/* MPG City */}
                <div className="relative">
                  <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-[#818181]">MPG Gallon City</label>
                  <select className="w-full h-14 rounded-md border border-[#E1E1E1] px-4 text-[15px] text-[#050B20] bg-white appearance-none">
                    <option>Select MPG City</option>
                  </select>
                  <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-2.5 h-2.5 pointer-events-none" viewBox="0 0 10 10" fill="none">
                    <path d="M9.86941 2.52782C9.68892 2.33638 9.38702 2.32925 9.19653 2.50924L4.99976 6.48505L0.803467 2.50926C0.612983 2.32878 0.311545 2.3364 0.130592 2.52784C-0.0503606 2.71879 -0.0422749 3.02023 0.148697 3.20118L4.67261 7.487C4.76404 7.57368 4.88214 7.61748 4.99976 7.61748C5.11737 7.61748 5.23594 7.57368 5.32738 7.487L9.8513 3.20118C10.0423 3.02021 10.0504 2.71879 9.86941 2.52782Z" fill="#050B20"/>
                  </svg>
                </div>

                {/* Interior Color */}
                <div className="relative">
                  <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-[#818181]">Interior Color</label>
                  <select className="w-full h-14 rounded-md border border-[#E1E1E1] px-4 text-[15px] text-[#050B20] bg-white appearance-none">
                    <option>Select Interior Color</option>
                  </select>
                  <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-2.5 h-2.5 pointer-events-none" viewBox="0 0 10 10" fill="none">
                    <path d="M9.86941 2.52782C9.68892 2.33638 9.38702 2.32925 9.19653 2.50924L4.99976 6.48505L0.803467 2.50926C0.612983 2.32878 0.311545 2.3364 0.130592 2.52784C-0.0503606 2.71879 -0.0422749 3.02023 0.148697 3.20118L4.67261 7.487C4.76404 7.57368 4.88214 7.61748 4.99976 7.61748C5.11737 7.61748 5.23594 7.57368 5.32738 7.487L9.8513 3.20118C10.0423 3.02021 10.0504 2.71879 9.86941 2.52782Z" fill="#050B20"/>
                  </svg>
                </div>

                {/* Trim */}
                <div className="relative">
                  <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-[#818181]">Trim</label>
                  <input
                    className="w-full h-14 rounded-md border border-[#E1E1E1] px-4 text-[15px] text-[#050B20]"
                    type="text"
                    placeholder="Select Trim"
                  />
                </div>

                {/* MPG HWY */}
                <div className="relative">
                  <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-[#818181]">MPG Gallon HWY</label>
                  <select className="w-full h-14 rounded-md border border-[#E1E1E1] px-4 text-[15px] text-[#050B20] bg-white appearance-none">
                    <option>Select MPG HWY</option>
                  </select>
                  <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-2.5 h-2.5 pointer-events-none" viewBox="0 0 10 10" fill="none">
                    <path d="M9.86941 2.52782C9.68892 2.33638 9.38702 2.32925 9.19653 2.50924L4.99976 6.48505L0.803467 2.50926C0.612983 2.32878 0.311545 2.3364 0.130592 2.52784C-0.0503606 2.71879 -0.0422749 3.02023 0.148697 3.20118L4.67261 7.487C4.76404 7.57368 4.88214 7.61748 4.99976 7.61748C5.11737 7.61748 5.23594 7.57368 5.32738 7.487L9.8513 3.20118C10.0423 3.02021 10.0504 2.71879 9.86941 2.52782Z" fill="#050B20"/>
                  </svg>
                </div>

                {/* Title Status */}
                <div className="relative">
                  <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-[#818181]">Title Status</label>
                  <select className="w-full h-14 rounded-md border border-[#E1E1E1] px-4 text-[15px] text-[#050B20] bg-white appearance-none">
                    <option>Select Title Status</option>
                  </select>
                  <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-2.5 h-2.5 pointer-events-none" viewBox="0 0 10 10" fill="none">
                    <path d="M9.86941 2.52782C9.68892 2.33638 9.38702 2.32925 9.19653 2.50924L4.99976 6.48505L0.803467 2.50926C0.612983 2.32878 0.311545 2.3364 0.130592 2.52784C-0.0503606 2.71879 -0.0422749 3.02023 0.148697 3.20118L4.67261 7.487C4.76404 7.57368 4.88214 7.61748 4.99976 7.61748C5.11737 7.61748 5.23594 7.57368 5.32738 7.487L9.8513 3.20118C10.0423 3.02021 10.0504 2.71879 9.86941 2.52782Z" fill="#050B20"/>
                  </svg>
                </div>

                {/* Condition */}
                <div className="relative">
                  <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-[#818181]">Condition</label>
                  <select className="w-full h-14 rounded-md border border-[#E1E1E1] px-4 text-[15px] text-[#050B20] bg-white appearance-none">
                    <option>Select Condition</option>
                  </select>
                  <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-2.5 h-2.5 pointer-events-none" viewBox="0 0 10 10" fill="none">
                    <path d="M9.86941 2.52782C9.68892 2.33638 9.38702 2.32925 9.19653 2.50924L4.99976 6.48505L0.803467 2.50926C0.612983 2.32878 0.311545 2.3364 0.130592 2.52784C-0.0503606 2.71879 -0.0422749 3.02023 0.148697 3.20118L4.67261 7.487C4.76404 7.57368 4.88214 7.61748 4.99976 7.61748C5.11737 7.61748 5.23594 7.57368 5.32738 7.487L9.8513 3.20118C10.0423 3.02021 10.0504 2.71879 9.86941 2.52782Z" fill="#050B20"/>
                  </svg>
                </div>

                {/* Drive Train */}
                <div className="relative">
                  <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-[#818181]">Drive Train</label>
                  <select className="w-full h-14 rounded-md border border-[#E1E1E1] px-4 text-[15px] text-[#050B20] bg-white appearance-none">
                    <option>Select Drive Train</option>
                  </select>
                  <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-2.5 h-2.5 pointer-events-none" viewBox="0 0 10 10" fill="none">
                    <path d="M9.86941 2.52782C9.68892 2.33638 9.38702 2.32925 9.19653 2.50924L4.99976 6.48505L0.803467 2.50926C0.612983 2.32878 0.311545 2.3364 0.130592 2.52784C-0.0503606 2.71879 -0.0422749 3.02023 0.148697 3.20118L4.67261 7.487C4.76404 7.57368 4.88214 7.61748 4.99976 7.61748C5.11737 7.61748 5.23594 7.57368 5.32738 7.487L9.8513 3.20118C10.0423 3.02021 10.0504 2.71879 9.86941 2.52782Z" fill="#050B20"/>
                  </svg>
                </div>

                {/* Stock # */}
                <div className="relative">
                  <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-[#818181]">Stock #</label>
                  <input
                    className="w-full h-14 rounded-md border border-[#E1E1E1] px-4 text-[15px] text-[#050B20]"
                    type="text"
                    placeholder="Enter Stock #"
                  />
                </div>

                {/* Is certified */}
                <div className="relative">
                  <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-[#818181]">Is certified</label>
                  <input
                    className="w-full h-14 rounded-md border border-[#E1E1E1] px-4 text-[15px] text-[#050B20]"
                    type="text"
                    placeholder="Select one"
                  />
                </div>

                {/* Engine Type */}
                <div className="relative">
                  <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-[#818181]">Engine Type</label>
                  <input
                    className="w-full h-14 rounded-md border border-[#E1E1E1] px-4 text-[15px] text-[#050B20]"
                    type="text"
                    placeholder="Enter engine type"
                  />
                </div>

                {/* Listing Status */}
                <div className="relative">
                  <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-[#818181]">Listing Status</label>
                  <input
                    className="w-full h-14 rounded-md border border-[#E1E1E1] px-4 text-[15px] text-[#050B20]"
                    type="text"
                    placeholder="Select Listing status"
                  />
                </div>

                {/* Mileage */}
                <div className="relative">
                  <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-[#818181]">Mileage</label>
                  <input
                    className="w-full h-14 rounded-md border border-[#E1E1E1] px-4 text-[15px] text-[#050B20]"
                    type="text"
                    placeholder="Enter Miles"
                  />
                </div>

                {/* Engine Size */}
                <div className="relative">
                  <label className="absolute -top-3 left-3 bg-white px-1 text-[12px] text-[#818181]">Engine Size (Liters)</label>
                  <input
                    className="w-full h-14 rounded-md border border-[#E1E1E1] px-4 text-[15px] text-[#050B20]"
                    type="text"
                    placeholder="Enter engine size"
                  />
                </div>

              </div>
            </div>
          </section>

        </div>
      </div>
    </DashboardLayout>
  );
}
