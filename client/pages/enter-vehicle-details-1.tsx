import React, { useState } from "react";
import { DashboardLayout } from "../components/DashboardLayout";

export default function EnterVehicleDetails1() {
  const [activeTab, setActiveTab] = useState("license");
  const [licensePlate, setLicensePlate] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [vin, setVin] = useState("");
  const [vinYear, setVinYear] = useState("");

  // flowState: 'enter' | 'found' | 'notfound'
  const [flowState, setFlowState] = useState<"enter" | "found" | "notfound">("enter");

  function handleGetDetails() {
    // UI-only logic to simulate results
    if (activeTab === "license") {
      if (licensePlate.trim().length > 2) {
        setFlowState("found");
      } else {
        setFlowState("notfound");
      }
    } else {
      // VIN tab
      if (vin.trim().length > 5) {
        setFlowState("found");
      } else {
        setFlowState("notfound");
      }
    }
  }

  function handleTryAgain() {
    setFlowState("enter");
  }

  function handleEnterManually() {
    // for UI demo we just reset to enter; in real app this would navigate to manual form
    setFlowState("enter");
  }

  return (
    <DashboardLayout>
      <div className="flex-1">
        <div className="w-full max-w-[1290px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-[60px] mt-8">

          {/* HERO */}
          <div className="relative w-full h-[463px] overflow-hidden rounded-3xl">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage:
                  "url('https://cdn.builder.io/api/v1/image/assets%2F4d1f1909a98e4ebc8068632229306ce4%2F23b891c966f7452fa3f3f303b9253c6a?format=webp&width=1200')",
              }}
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent pointer-events-none" />

            {/* Card (kept consistent size/position across states) */}
            <div className="absolute left-4 sm:left-8 top-4 sm:top-8 w-[calc(100%-32px)] sm:w-[440px]">
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg min-h-[220px]">
                <h1 className="text-[26px] sm:text-[30px] font-bold text-[#24272C] font-albert mb-4">
                  Enter your info
                </h1>

                {/* Tabs (visible in all states) */}
                <div className="flex items-start gap-3 mb-4">
                  <div className="flex-1">
                    <button
                      type="button"
                      onClick={() => setActiveTab("license")}
                      className={`w-full h-12 rounded-[14px] ${
                        activeTab === "license" ? "bg-[#24272C] text-white" : "border border-[#24272C] text-[#24272C]"
                      }`}
                    >
                      <span className="text-base font-medium">License Plate</span>
                    </button>
                    {activeTab === "license" && (
                      <div className="mt-1 w-full flex justify-center">
                        <svg width="11" height="5" viewBox="0 0 11 5" fill="none">
                          <path d="M5.5 5L10.5 0H0.5L5.5 5Z" fill="#24272C" />
                        </svg>
                      </div>
                    )}
                  </div>

                  <div className="flex-1">
                    <button
                      type="button"
                      onClick={() => setActiveTab("vin")}
                      className={`w-full h-12 rounded-[14px] ${
                        activeTab === "vin" ? "bg-[#24272C] text-white" : "border border-[#24272C] text-[#24272C]"
                      }`}
                    >
                      <span className="text-base font-medium">By Vin #</span>
                    </button>
                  </div>
                </div>

                {/* Content by flow state */}
                {flowState === "enter" && (
                  <div className="flex flex-col gap-3">
                    {activeTab === "license" ? (
                      <>
                        <div className="flex h-12 px-3 items-center border border-[#EDEDED] rounded-[14px] bg-white">
                          <input
                            type="text"
                            aria-label="license plate"
                            value={licensePlate}
                            onChange={(e) => setLicensePlate(e.target.value)}
                            placeholder="Enter License Plate #"
                            className="flex-1 text-sm text-[#24272C] bg-transparent outline-none font-inter"
                          />
                        </div>

                        <div className="relative">
                          <select
                            value={selectedState}
                            onChange={(e) => setSelectedState(e.target.value)}
                            className="h-12 w-full px-3 border border-[#EDEDED] rounded-[14px] bg-white text-sm text-[#24272C] font-inter outline-none appearance-none"
                          >
                            <option value="">Select State</option>
                            <option value="CA">California</option>
                            <option value="TX">Texas</option>
                            <option value="FL">Florida</option>
                            <option value="NY">New York</option>
                            <option value="IL">Illinois</option>
                          </select>
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M8.35356 10.8541C8.25981 10.9477 8.13272 11.0003 8.00022 11.0003C7.86772 11.0003 7.74064 10.9477 7.64689 10.8541L2.64689 5.85409C2.55857 5.7593 2.51049 5.63394 2.51277 5.50441C2.51506 5.37487 2.56753 5.25128 2.65914 5.15967C2.75075 5.06806 2.87434 5.01559 3.00387 5.0133C3.13341 5.01102 3.25877 5.0591 3.35356 5.14742L8.00022 9.79409L12.6469 5.14742C12.6927 5.0983 12.7479 5.05889 12.8092 5.03157C12.8705 5.00424 12.9367 4.98954 13.0039 4.98836C13.071 4.98717 13.1377 4.99952 13.2 5.02467C13.2622 5.04982 13.3188 5.08725 13.3662 5.13473C13.4137 5.18221 13.4512 5.23876 13.4763 5.30102C13.5015 5.36328 13.5138 5.42997 13.5126 5.4971C13.5114 5.56424 13.4967 5.63045 13.4694 5.69178C13.4421 5.75311 13.4027 5.80831 13.3536 5.85409L8.35356 10.8541Z"
                              fill="#24272C"
                            />
                          </svg>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex h-12 px-3 items-center border border-[#EDEDED] rounded-[14px] bg-white">
                          <input
                            type="text"
                            aria-label="vin"
                            value={vin}
                            onChange={(e) => setVin(e.target.value)}
                            placeholder="Enter Vin #"
                            className="flex-1 text-sm text-[#24272C] bg-transparent outline-none font-inter"
                          />
                        </div>

                        <div className="relative">
                          <select
                            value={vinYear}
                            onChange={(e) => setVinYear(e.target.value)}
                            className="h-12 w-full px-3 border border-[#EDEDED] rounded-[14px] bg-white text-sm text-[#24272C] font-inter outline-none appearance-none"
                          >
                            <option value="">Enter Year</option>
                            <option>2023</option>
                            <option>2022</option>
                            <option>2021</option>
                          </select>
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M8.35356 10.8541C8.25981 10.9477 8.13272 11.0003 8.00022 11.0003C7.86772 11.0003 7.74064 10.9477 7.64689 10.8541L2.64689 5.85409C2.55857 5.7593 2.51049 5.63394 2.51277 5.50441C2.51506 5.37487 2.56753 5.25128 2.65914 5.15967C2.75075 5.06806 2.87434 5.01559 3.00387 5.0133C3.13341 5.01102 3.25877 5.0591 3.35356 5.14742L8.00022 9.79409L12.6469 5.14742C12.6927 5.0983 12.7479 5.05889 12.8092 5.03157C12.8705 5.00424 12.9367 4.98954 13.0039 4.98836C13.071 4.98717 13.1377 4.99952 13.2 5.02467C13.2622 5.04982 13.3188 5.08725 13.3662 5.13473C13.4137 5.18221 13.4512 5.23876 13.4763 5.30102C13.5015 5.36328 13.5138 5.42997 13.5126 5.4971C13.5114 5.56424 13.4967 5.63045 13.4694 5.69178C13.4421 5.75311 13.4027 5.80831 13.3536 5.85409L8.35356 10.8541Z"
                              fill="#24272C"
                            />
                          </svg>
                        </div>
                      </>
                    )}

                    <button
                      type="button"
                      onClick={handleGetDetails}
                      className="h-12 w-full rounded-[14px] bg-[#E82121] text-white"
                    >
                      Get vehicle details
                    </button>
                  </div>
                )}

                {flowState === "found" && (
                  <div className="flex flex-col gap-3">
                    <h3 className="text-xl font-semibold">Found it!</h3>
                    <div className="text-sm text-[#6B6B6B]">2021 Honda Accord LX</div>
                    <div className="text-xs text-[#9A9A9A]">VIN: XXXXXXXXXXXXXXXX</div>
                    <div className="mt-3 flex gap-3">
                      <button className="h-12 px-4 rounded-[14px] bg-[#E82121] text-white">Preview your car</button>
                    </div>
                  </div>
                )}

                {flowState === "notfound" && (
                  <div className="flex flex-col gap-3">
                    <h3 className="text-xl font-semibold">We did not find any details.</h3>
                    <div className="text-sm text-[#6B6B6B]">We couldn’t find details this time, but don’t worry—you can retry with a license plate or VIN. If details still don’t work, you can always enter your details manually.</div>
                    <div className="mt-3 flex gap-3">
                      <button onClick={handleTryAgain} className="h-12 px-4 rounded-[14px] bg-[#E82121] text-white">Try Again</button>
                      <button onClick={handleEnterManually} className="h-12 px-4 rounded-[14px] bg-[#24272C] text-white">Enter Manually</button>
                    </div>
                  </div>
                )}

              </div>
            </div>
          </div>

          {/* Text Content Section */}
          <div className="w-full max-w-[1076px] mx-auto px-0 py-12">
            <h2 className="text-2xl font-bold text-black font-albert mb-4">Sell your vehicle online easily with Carzino.</h2>

            <div className="text-sm text-black font-albert leading-relaxed max-w-[1076px]">
              <p className="mb-4">Carzino makes it simple to sell your vehicle through a fast, and convenient.</p>
              <p>Just enter your car's VIN number or license plate, and Carzino will automatically pull in your vehicle's make, model, and essential details. From there, you can complete your listing and start connecting with buyers.</p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
