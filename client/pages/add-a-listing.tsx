import { useState } from "react";
import { DashboardLayout } from "../components/DashboardLayout";
import { UsersProfileCard } from "./usresprofile";

export default function AddAListingPage() {
  const [openSections, setOpenSections] = useState({ convenience: false, entertainment: false, safety: false, interior: false, exterior: false });
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
                          className="mt-1 w-full h-[60px] rounded-xl border border-[#E1E1E1] px-4 text-[15px] text-[#050B20] bg-white outline-none focus:border-[#E82121] focus:ring-0"
                        />
                      </label>

                      <label className="block">
                        <span className="text-[13px] text-[#818181]">Make</span>
                        <input
                          aria-label="Make"
                          type="text"
                          placeholder="Select Make"
                          className="mt-1 w-full h-[60px] rounded-xl border border-[#E1E1E1] px-4 text-[15px] text-[#050B20] bg-white outline-none focus:border-[#E82121] focus:ring-0"
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

          {/* Enter Vehicle Details Form - Step 2 */}
          <section className="w-full mb-8">
            <div className="max-w-[1480px] mx-auto">
              {/* Header */}
              <div className="flex items-end justify-between gap-4 mb-5">
                <h2 className="text-[24px] font-medium text-[#24272C] font-albert leading-normal">
                  Enter vehicle details
                </h2>
                <div className="flex items-center justify-center px-[26px] py-2 bg-white border border-[#CF0D0D] rounded-xl">
                  <span className="text-[15px] font-medium text-[#1E1E1E] font-dm leading-[26px]">
                    Step 2
                  </span>
                </div>
              </div>

              {/* Form Container */}
              <div className="w-full bg-white border border-[#B2B2B2] rounded-2xl p-8 opacity-[0.63]">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

                  {/* Vin# Input */}
                  <div className="relative">
                    <div className="w-full h-[60px] border border-[#E1E1E1] rounded-xl bg-white relative">
                      <label className="absolute left-[15px] top-[10px] text-[13px] text-[#000] font-dm leading-normal">
                        Vin#
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Vin#"
                        className="absolute left-[15px] top-[35px] w-[calc(100%-30px)] text-[15px] text-[#050B20] font-dm bg-transparent border-0 outline-none placeholder:text-[#050B20]"
                      />
                    </div>
                  </div>

                  {/* Year Input */}
                  <div className="relative">
                    <div className="w-full h-[60px] border border-[#E1E1E1] rounded-xl bg-white relative">
                      <label className="absolute left-[15px] top-[10px] text-[13px] text-[#818181] font-dm leading-normal">
                        Year
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Year"
                        className="absolute left-[15px] top-[30px] w-[calc(100%-30px)] text-[15px] text-[#050B20] font-dm bg-transparent border-0 outline-none"
                      />
                    </div>
                  </div>

                  {/* Make Dropdown */}
                  <div className="relative xl:col-span-2">
                    <div className="w-full h-[60px] border border-[#E1E1E1] rounded-xl bg-white relative">
                      <label className="absolute left-[15px] top-[10px] text-[13px] text-[#818181] font-dm leading-normal">
                        Make
                      </label>
                      <select className="absolute left-[15px] top-[30px] w-[calc(100%-50px)] text-[15px] text-[#050B20] font-dm bg-transparent border-0 outline-none appearance-none">
                        <option>Select Make</option>
                      </select>
                      <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-2.5 h-2.5 pointer-events-none" viewBox="0 0 10 10" fill="none">
                        <path d="M9.86941 2.52782C9.68892 2.33638 9.38702 2.32925 9.19653 2.50924L4.99976 6.48505L0.803467 2.50926C0.612983 2.32878 0.311545 2.3364 0.130592 2.52784C-0.0503606 2.71879 -0.0422749 3.02023 0.148697 3.20118L4.67261 7.487C4.76404 7.57368 4.88214 7.61748 4.99976 7.61748C5.11737 7.61748 5.23594 7.57368 5.32738 7.487L9.8513 3.20118C10.0423 3.02021 10.0504 2.71879 9.86941 2.52782Z" fill="#E82121"/>
                      </svg>
                    </div>
                  </div>

                  {/* Model Dropdown */}
                  <div className="relative">
                    <div className="w-full h-[60px] border border-[#E1E1E1] rounded-xl bg-white relative">
                      <label className="absolute left-[15px] top-[10px] text-[13px] text-[#818181] font-dm leading-normal">
                        Model
                      </label>
                      <select className="absolute left-[15px] top-[30px] w-[calc(100%-50px)] text-[15px] text-[#050B20] font-dm bg-transparent border-0 outline-none appearance-none">
                        <option>Select Model</option>
                      </select>
                      <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-2.5 h-2.5 pointer-events-none" viewBox="0 0 10 10" fill="none">
                        <path d="M9.86941 2.52782C9.68892 2.33638 9.38702 2.32925 9.19653 2.50924L4.99976 6.48505L0.803467 2.50926C0.612983 2.32878 0.311545 2.3364 0.130592 2.52784C-0.0503606 2.71879 -0.0422749 3.02023 0.148697 3.20118L4.67261 7.487C4.76404 7.57368 4.88214 7.61748 4.99976 7.61748C5.11737 7.61748 5.23594 7.57368 5.32738 7.487L9.8513 3.20118C10.0423 3.02021 10.0504 2.71879 9.86941 2.52782Z" fill="#050B20"/>
                      </svg>
                    </div>
                  </div>

                  {/* Trim Input */}
                  <div className="relative">
                    <div className="w-full h-[60px] border border-[#E1E1E1] rounded-xl bg-white relative">
                      <label className="absolute left-[15px] top-[10px] text-[13px] text-[#818181] font-dm leading-normal">
                        Trim
                      </label>
                      <input
                        type="text"
                        placeholder="Select Trim"
                        className="absolute left-[15px] top-[30px] w-[calc(100%-30px)] text-[15px] text-[#050B20] font-dm bg-transparent border-0 outline-none"
                      />
                    </div>
                  </div>

                  {/* Condition Dropdown */}
                  <div className="relative">
                    <div className="w-full h-[60px] border border-[#E1E1E1] rounded-xl bg-white relative">
                      <label className="absolute left-[15px] top-[10px] text-[13px] text-[#818181] font-dm leading-normal">
                        Condition
                      </label>
                      <select className="absolute left-[15px] top-[30px] w-[calc(100%-50px)] text-[15px] text-[#050B20] font-dm bg-transparent border-0 outline-none appearance-none">
                        <option>Select Condition</option>
                      </select>
                      <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-2.5 h-2.5 pointer-events-none" viewBox="0 0 10 10" fill="none">
                        <path d="M9.86941 2.52782C9.68892 2.33638 9.38702 2.32925 9.19653 2.50924L4.99976 6.48505L0.803467 2.50926C0.612983 2.32878 0.311545 2.3364 0.130592 2.52784C-0.0503606 2.71879 -0.0422749 3.02023 0.148697 3.20118L4.67261 7.487C4.76404 7.57368 4.88214 7.61748 4.99976 7.61748C5.11737 7.61748 5.23594 7.57368 5.32738 7.487L9.8513 3.20118C10.0423 3.02021 10.0504 2.71879 9.86941 2.52782Z" fill="#050B20"/>
                      </svg>
                    </div>
                  </div>

                  {/* Is Certified Dropdown */}
                  <div className="relative">
                    <div className="w-full h-[60px] border border-[#E1E1E1] rounded-xl bg-white relative">
                      <label className="absolute left-[15px] top-[10px] text-[13px] text-[#818181] font-dm leading-normal">
                        Is certified
                      </label>
                      <select className="absolute left-[15px] top-[30px] w-[calc(100%-50px)] text-[15px] text-[#050B20] font-dm bg-transparent border-0 outline-none appearance-none">
                        <option>Select one</option>
                      </select>
                      <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-2.5 h-2.5 pointer-events-none" viewBox="0 0 10 10" fill="none">
                        <path d="M9.86941 2.52782C9.68892 2.33638 9.38702 2.32925 9.19653 2.50924L4.99976 6.48505L0.803467 2.50926C0.612983 2.32878 0.311545 2.3364 0.130592 2.52784C-0.0503606 2.71879 -0.0422749 3.02023 0.148697 3.20118L4.67261 7.487C4.76404 7.57368 4.88214 7.61748 4.99976 7.61748C5.11737 7.61748 5.23594 7.57368 5.32738 7.487L9.8513 3.20118C10.0423 3.02021 10.0504 2.71879 9.86941 2.52782Z" fill="#050B20"/>
                      </svg>
                    </div>
                  </div>

                  {/* Mileage Input */}
                  <div className="relative">
                    <div className="w-full h-[60px] border border-[#E1E1E1] rounded-xl bg-white relative">
                      <label className="absolute left-[15px] top-[10px] text-[13px] text-[#818181] font-dm leading-normal">
                        Mileage
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Miles"
                        className="absolute left-[15px] top-[30px] w-[calc(100%-30px)] text-[15px] text-[#050B20] font-dm bg-transparent border-0 outline-none"
                      />
                    </div>
                  </div>

                  {/* Title Status Dropdown */}
                  <div className="relative">
                    <div className="w-full h-[60px] border border-[#E1E1E1] rounded-xl bg-white relative">
                      <label className="absolute left-[15px] top-[10px] text-[13px] text-[#818181] font-dm leading-normal">
                        Title Status
                      </label>
                      <select className="absolute left-[15px] top-[30px] w-[calc(100%-50px)] text-[15px] text-[#050B20] font-dm bg-transparent border-0 outline-none appearance-none">
                        <option>Select Title Status</option>
                      </select>
                      <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-2.5 h-2.5 pointer-events-none" viewBox="0 0 10 10" fill="none">
                        <path d="M9.86941 2.52782C9.68892 2.33638 9.38702 2.32925 9.19653 2.50924L4.99976 6.48505L0.803467 2.50926C0.612983 2.32878 0.311545 2.3364 0.130592 2.52784C-0.0503606 2.71879 -0.0422749 3.02023 0.148697 3.20118L4.67261 7.487C4.76404 7.57368 4.88214 7.61748 4.99976 7.61748C5.11737 7.61748 5.23594 7.57368 5.32738 7.487L9.8513 3.20118C10.0423 3.02021 10.0504 2.71879 9.86941 2.52782Z" fill="#050B20"/>
                      </svg>
                    </div>
                  </div>

                  {/* Stock# Input */}
                  <div className="relative">
                    <div className="w-full h-[60px] border border-[#E1E1E1] rounded-xl bg-white relative">
                      <label className="absolute left-[15px] top-[10px] text-[13px] text-[#818181] font-dm leading-normal">
                        Stock#
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Stock Number"
                        className="absolute left-[15px] top-[30px] w-[calc(100%-30px)] text-[15px] text-[#050B20] font-dm bg-transparent border-0 outline-none"
                      />
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </section>

          {/* Vehicle Features Selection */}
          <section className="w-full mb-8">
            <div className="max-w-[1200px] mx-auto">
              <h2 className="text-[24px] font-medium text-[#24272C] font-albert mb-5">
                Select Vehicle Features
              </h2>

              <div className="bg-white border border-[#B2B2B2] rounded-2xl p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">

                  {/* Convenience Column */}
                  <div className="space-y-4">
                    <h3 className="text-[16px] font-medium text-[#050B20] font-dm leading-7 mb-4">
                      <button
                        type="button"
                        className="w-full flex items-center justify-between gap-2.5 text-[16px] font-medium p-0 m-0"
                        onClick={() => setOpenSections(s => ({ ...s, convenience: !s.convenience }))}
                        aria-expanded={openSections.convenience}
                      >
                        <span className="text-left">Convenience</span>
                        <svg className="w-4 h-4 text-[#E82121] sm:hidden transform transition-transform" style={{ transform: openSections.convenience ? 'rotate(180deg)' : 'rotate(0deg)' }} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                    </h3>
                    <div className={openSections.convenience ? 'block sm:block space-y-4' : 'hidden sm:block space-y-4'}>
                      <label className="flex items-center gap-2.5 cursor-pointer">
                        <div className="w-5 h-5 rounded border border-[#B2B2B2] bg-white flex items-center justify-center">
                        </div>
                        <span className="flex-1 text-sm text-[#050B20] font-dm leading-5 break-words">Navigation System</span>
                      </label>

                      <label className="flex items-center gap-2.5 cursor-pointer">
                        <div className="w-5 h-5 rounded bg-[#E82121] flex items-center justify-center">
                          <svg className="w-2.5 h-2.5" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.76764 2.39244C9.45824 2.08263 8.95582 2.08282 8.64601 2.39244L3.59787 7.44077L1.35419 5.19711C1.04438 4.8873 0.542174 4.8873 0.23236 5.19711C-0.0774534 5.50693 -0.0774534 6.00913 0.23236 6.31894L3.03684 9.12342C3.19165 9.27823 3.39464 9.35583 3.59765 9.35583C3.80067 9.35583 4.00386 9.27843 4.15867 9.12342L9.76764 3.51425C10.0775 3.20465 10.0775 2.70224 9.76764 2.39244Z" fill="white"/>
                          </svg>
                        </div>
                        <span className="flex-1 text-sm text-[#050B20] font-dm leading-5 break-words">Remote Start</span>
                      </label>

                      <label className="flex items-center gap-2.5 cursor-pointer">
                        <div className="w-5 h-5 rounded border border-[#B2B2B2] bg-white"></div>
                        <span className="flex-1 text-sm text-[#050B20] font-dm leading-5 break-words">Keyless Entry</span>
                      </label>

                      <label className="flex items-center gap-2.5 cursor-pointer">
                        <div className="w-5 h-5 rounded border border-[#B2B2B2] bg-white"></div>
                        <span className="flex-1 text-sm text-[#050B20] font-dm leading-5 break-words">Hands-Free</span>
                      </label>

                      <label className="flex items-center gap-2.5 cursor-pointer">
                        <div className="w-5 h-5 rounded border border-[#B2B2B2] bg-white"></div>
                        <span className="flex-1 text-sm text-[#050B20] font-dm leading-5 break-words">Power Folding Side Mirrors</span>
                      </label>

                      <label className="flex items-center gap-2.5 cursor-pointer">
                        <div className="w-5 h-5 rounded border border-[#B2B2B2] bg-white"></div>
                        <span className="flex-1 text-sm text-[#050B20] font-dm leading-5 break-words">Rain-Sensing Wipers</span>
                      </label>

                      <label className="flex items-center gap-2.5 cursor-pointer">
                        <div className="w-5 h-5 rounded border border-[#B2B2B2] bg-white"></div>
                        <span className="flex-1 text-sm text-[#050B20] font-dm leading-5 break-words">Homelink</span>
                      </label>

                      <label className="flex items-center gap-2.5 cursor-pointer">
                        <div className="w-5 h-5 rounded border border-[#B2B2B2] bg-white"></div>
                        <span className="flex-1 text-sm text-[#050B20] font-dm leading-5 break-words">Split-Folding Rear Seats</span>
                      </label>

                      <label className="flex items-center gap-2.5 cursor-pointer">
                        <div className="w-5 h-5 rounded border border-[#B2B2B2] bg-white"></div>
                        <span className="flex-1 text-sm text-[#050B20] font-dm leading-5 break-words">Adjustable Steering Column</span>
                      </label>
                    </div>
                  </div>

                  {/* Entertainment Column */}
                  <div className="space-y-4">
                    <h3 className="text-[16px] font-medium text-[#050B20] font-dm leading-7 mb-4">
                      <button
                        type="button"
                        className="w-full flex items-center justify-between gap-2.5 text-[16px] font-medium p-0 m-0"
                        onClick={() => setOpenSections(s => ({ ...s, entertainment: !s.entertainment }))}
                        aria-expanded={openSections.entertainment}
                      >
                        <span className="text-left">Entertainment</span>
                        <svg className="w-4 h-4 text-[#E82121] sm:hidden transform transition-transform" style={{ transform: openSections.entertainment ? 'rotate(180deg)' : 'rotate(0deg)' }} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                    </h3>
                    <div className={openSections.entertainment ? 'block sm:block space-y-4' : 'hidden sm:block space-y-4'}>
                      <label className="flex items-center gap-2.5 cursor-pointer">
                        <div className="w-5 h-5 rounded border border-[#B2B2B2] bg-white"></div>
                        <span className="flex-1 text-sm text-[#050B20] font-dm leading-5 break-words">Apple CarPlay/Android Auto</span>
                      </label>

                      <label className="flex items-center gap-2.5 cursor-pointer">
                        <div className="w-5 h-5 rounded bg-[#E82121] flex items-center justify-center">
                          <svg className="w-2.5 h-2.5" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.76764 2.39244C9.45824 2.08263 8.95582 2.08282 8.64601 2.39244L3.59787 7.44077L1.35419 5.19711C1.04438 4.8873 0.542174 4.8873 0.23236 5.19711C-0.0774534 5.50693 -0.0774534 6.00913 0.23236 6.31894L3.03684 9.12342C3.19165 9.27823 3.39464 9.35583 3.59765 9.35583C3.80067 9.35583 4.00386 9.27843 4.15867 9.12342L9.76764 3.51425C10.0775 3.20465 10.0775 2.70224 9.76764 2.39244Z" fill="white"/>
                          </svg>
                        </div>
                        <span className="flex-1 text-sm text-[#050B20] font-dm leading-5 break-words">Bluetooth</span>
                      </label>

                      <label className="flex items-center gap-2.5 cursor-pointer">
                        <div className="w-5 h-5 rounded border border-[#B2B2B2] bg-white"></div>
                        <span className="flex-1 text-sm text-[#050B20] font-dm leading-5 break-words">Touchscreen Display</span>
                      </label>

                      <label className="flex items-center gap-2.5 cursor-pointer">
                        <div className="w-5 h-5 rounded border border-[#B2B2B2] bg-white"></div>
                        <span className="flex-1 text-sm text-[#050B20] font-dm leading-5 break-words">Wireless Phone Connectivity</span>
                      </label>

                      <label className="flex items-center gap-2.5 cursor-pointer">
                        <div className="w-5 h-5 rounded border border-[#B2B2B2] bg-white"></div>
                        <span className="flex-1 text-sm text-[#050B20] font-dm leading-5 break-words">Rear Seat Entertainment Screens</span>
                      </label>

                      <label className="flex items-center gap-2.5 cursor-pointer">
                        <div className="w-5 h-5 rounded border border-[#B2B2B2] bg-white"></div>
                        <span className="flex-1 text-sm text-[#050B20] font-dm leading-5 break-words">DVD Player</span>
                      </label>

                      <label className="flex items-center gap-2.5 cursor-pointer">
                        <div className="w-5 h-5 rounded border border-[#B2B2B2] bg-white"></div>
                        <span className="flex-1 text-sm text-[#050B20] font-dm leading-5 break-words">Premium Sound System</span>
                      </label>

                      <label className="flex items-center gap-2.5 cursor-pointer">
                        <div className="w-5 h-5 rounded border border-[#B2B2B2] bg-white"></div>
                        <span className="flex-1 text-sm text-[#050B20] font-dm leading-5 break-words">Steering Wheel Audio Controls</span>
                      </label>

                      <label className="flex items-center gap-2.5 cursor-pointer">
                        <div className="w-5 h-5 rounded border border-[#B2B2B2] bg-white"></div>
                        <span className="flex-1 text-sm text-[#050B20] font-dm leading-5 break-words">Wi-Fi Hotspot Capability</span>
                      </label>

                      <label className="flex items-center gap-2.5 cursor-pointer">
                        <div className="w-5 h-5 rounded border border-[#B2B2B2] bg-white"></div>
                        <span className="flex-1 text-sm text-[#050B20] font-dm leading-5 break-words">Voice Command System</span>
                      </label>
                    </div>
                  </div>

                  {/* Safety Column */}
                  <div className="space-y-4">
                    <h3 className="text-[16px] font-medium text-[#050B20] font-dm leading-7 mb-4">
                      <button
                        type="button"
                        className="w-full flex items-center justify-between gap-2.5 text-[16px] font-medium p-0 m-0"
                        onClick={() => setOpenSections(s => ({ ...s, safety: !s.safety }))}
                        aria-expanded={openSections.safety}
                      >
                        <span className="text-left">Safety</span>
                        <svg className="w-4 h-4 text-[#E82121] sm:hidden transform transition-transform" style={{ transform: openSections.safety ? 'rotate(180deg)' : 'rotate(0deg)' }} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                    </h3>
                    <div className={openSections.safety ? 'block sm:block space-y-4' : 'hidden sm:block space-y-4'}>
                      <label className="flex items-center gap-2.5 cursor-pointer">
                        <div className="w-5 h-5 rounded border border-[#B2B2B2] bg-white"></div>
                        <span className="flex-1 text-sm text-[#050B20] font-dm leading-5 break-words">Airbags</span>
                      </label>

                      <label className="flex items-center gap-2.5 cursor-pointer">
                        <div className="w-5 h-5 rounded bg-[#E82121] flex items-center justify-center">
                          <svg className="w-2.5 h-2.5" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.76764 2.39244C9.45824 2.08263 8.95582 2.08282 8.64601 2.39244L3.59787 7.44077L1.35419 5.19711C1.04438 4.8873 0.542174 4.8873 0.23236 5.19711C-0.0774534 5.50693 -0.0774534 6.00913 0.23236 6.31894L3.03684 9.12342C3.19165 9.27823 3.39464 9.35583 3.59765 9.35583C3.80067 9.35583 4.00386 9.27843 4.15867 9.12342L9.76764 3.51425C10.0775 3.20465 10.0775 2.70224 9.76764 2.39244Z" fill="white"/>
                          </svg>
                        </div>
                        <span className="flex-1 text-sm text-[#050B20] font-dm leading-5 break-words">Airbag - Passenger</span>
                      </label>

                      <label className="flex items-center gap-2.5 cursor-pointer">
                        <div className="w-5 h-5 rounded border border-[#B2B2B2] bg-white"></div>
                        <span className="flex-1 text-sm text-[#050B20] font-dm leading-5 break-words">Anti-lock Braking System</span>
                      </label>

                      <label className="flex items-center gap-2.5 cursor-pointer">
                        <div className="w-5 h-5 rounded border border-[#B2B2B2] bg-white"></div>
                        <span className="flex-1 text-sm text-[#050B20] font-dm leading-5 break-words">Backup Camera</span>
                      </label>

                      <label className="flex items-center gap-2.5 cursor-pointer">
                        <div className="w-5 h-5 rounded border border-[#B2B2B2] bg-white"></div>
                        <span className="flex-1 text-sm text-[#050B20] font-dm leading-5 break-words">Lane Departure Warning</span>
                      </label>

                      <label className="flex items-center gap-2.5 cursor-pointer">
                        <div className="w-5 h-5 rounded border border-[#B2B2B2] bg-white"></div>
                        <span className="flex-1 text-sm text-[#050B20] font-dm leading-5 break-words">Adaptive Cruise Control</span>
                      </label>

                      <label className="flex items-center gap-2.5 cursor-pointer">
                        <div className="w-5 h-5 rounded border border-[#B2B2B2] bg-white"></div>
                        <span className="flex-1 text-sm text-[#050B20] font-dm leading-5 break-words">Parking Sensors</span>
                      </label>

                      <label className="flex items-center gap-2.5 cursor-pointer">
                        <div className="w-5 h-5 rounded border border-[#B2B2B2] bg-white"></div>
                        <span className="flex-1 text-sm text-[#050B20] font-dm leading-5 break-words">Automatic High Beams</span>
                      </label>

                    </div>
                  </div>

                </div>
              </div>
            </div>
          </section>


        </div>
      </div>
    </DashboardLayout>
  );
}
