import React, { useState } from "react";
import { DashboardLayout } from "../components/DashboardLayout";

export default function EnterVehicleDetails1() {
  const [activeTab, setActiveTab] = useState("license");
  const [licensePlate, setLicensePlate] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [vin, setVin] = useState("");
  const [vinYear, setVinYear] = useState("");

  // flowState: 'enter' | 'found' | 'notfound'
  const [flowState, setFlowState] = useState<"enter" | "found" | "notfound">(
    "enter",
  );

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
          {/* TWO-COLUMN SECTION: LEFT = FORM CARD, RIGHT = IMAGE */}
          <div className="grid grid-cols-1 md:grid-cols-[35%_65%] gap-6 items-stretch">
            {/* LEFT: Card area */}
            <div className="flex items-start">
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg w-full max-w-[640px] min-h-[320px]">
                <h1 className="text-[24px] leading-[35px] font-bold text-[#24272C] font-albert mb-4">
                  Enter your info
                </h1>

                {/* Tabs */}
                <div className="flex items-start gap-3 mb-4">
                  <div className="flex-1">
                    <button
                      type="button"
                      onClick={() => setActiveTab("license")}
                      className={`w-full h-12 rounded-[14px] ${activeTab === "license" ? "bg-[#24272C] text-white" : "border border-[#24272C] text-[#24272C]"}`}
                    >
                      <span className="text-base font-medium" style={{ fontFamily: "Albert Sans, sans-serif", fontWeight: 500 }}>
                        <font face="Albert Sans, sans-serif">License Plate</font>
                      </span>
                    </button>
                    {activeTab === "license" && (
                      <div className="mt-1 w-full flex justify-center">
                        <svg
                          width="11"
                          height="5"
                          viewBox="0 0 11 5"
                          fill="none"
                        >
                          <path d="M5.5 5L10.5 0H0.5L5.5 5Z" fill="#24272C" />
                        </svg>
                      </div>
                    )}
                  </div>

                  <div className="flex-1">
                    <button
                      type="button"
                      onClick={() => setActiveTab("vin")}
                      className={`w-full h-12 rounded-[14px] ${activeTab === "vin" ? "bg-[#24272C] text-white" : "border border-[#24272C] text-[#24272C]"}`}
                    >
                      <span className="text-base font-medium">By Vin #</span>
                    </button>
                  </div>
                </div>

                {/* FLOW CONTENT */}
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
                    <div className="text-sm text-[#6B6B6B]">
                      2021 Honda Accord LX
                    </div>
                    <div className="text-xs text-[#9A9A9A]">
                      VIN: XXXXXXXXXXXXXXXX
                    </div>
                    <div className="mt-3 flex gap-3">
                      <button className="h-12 px-4 rounded-[14px] bg-[#E82121] text-white">
                        Create Your Ad
                      </button>
                    </div>
                  </div>
                )}

                {flowState === "notfound" && (
                  <div className="flex flex-col gap-3">
                    <h3 className="text-xl font-semibold">
                      We did not find any details.
                    </h3>
                    <div className="text-sm text-[#6B6B6B]">
                      We couldn’t find details this time, but don’t worry—you
                      can retry with a license plate or VIN. If details still
                      don’t work, you can always enter your details manually.
                    </div>
                    <div className="mt-3 flex gap-3">
                      <button
                        onClick={handleTryAgain}
                        className="h-12 px-4 rounded-[14px] bg-[#E82121] text-white"
                      >
                        Try Again
                      </button>
                      <button
                        onClick={handleEnterManually}
                        className="h-12 px-4 rounded-[14px] bg-[#24272C] text-white"
                      >
                        Enter Manually
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* RIGHT: Image area */}
            <div className="flex items-stretch">
              <div className="w-full h-full rounded-2xl overflow-hidden bg-[#F3F4F6] flex items-center justify-center">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F4d1f1909a98e4ebc8068632229306ce4%2F23b891c966f7452fa3f3f303b9253c6a?format=webp&width=1200"
                  alt="vehicle"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Text Content Section */}
          <div className="w-full max-w-[1076px] mx-auto px-0 py-12">
            <h2 className="text-2xl font-bold text-black font-albert mb-4">
              Sell your vehicle online easily with Carzino.
            </h2>

            <div className="text-sm text-black font-albert leading-relaxed max-w-[1076px]">
              <p className="mb-4">
                Carzino makes it simple to sell your vehicle through a fast, and
                convenient.
              </p>
              <p>
                Just enter your car's VIN number or license plate, and Carzino
                will automatically pull in your vehicle's make, model, and
                essential details. From there, you can complete your listing and
                start connecting with buyers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
