import React, { useState, useRef, useEffect } from "react";
import { DashboardLayout } from "../components/DashboardLayout";
import { Link } from "react-router-dom";

export default function AddAListing() {
  const [activeTab, setActiveTab] = useState("license");
  const [licensePlate, setLicensePlate] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [vin, setVin] = useState("");
  const [vinYear, setVinYear] = useState("");

  // flowState: 'enter' | 'found' | 'notfound'
  const [flowState, setFlowState] = useState<"enter" | "found" | "notfound">(
    "enter",
  );

  const leftCardRef = useRef<HTMLDivElement | null>(null);
  const rightImageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function syncHeights() {
      if (!leftCardRef.current || !rightImageRef.current) return;
      if (typeof window === "undefined") return;
      const isDesktopOrTablet = window.innerWidth >= 640; // apply for tablet+ and desktop
      if (isDesktopOrTablet) {
        const leftRect = leftCardRef.current.getBoundingClientRect();
        // set right container height to match left card content height (not shadow)
        rightImageRef.current.style.height = `${Math.max(leftRect.height, 320)}px`;
      } else {
        rightImageRef.current.style.height = "auto";
      }
    }

    syncHeights();
    window.addEventListener("resize", syncHeights);
    // also observe mutations in left card in case content changes
    const ro = new MutationObserver(syncHeights);
    if (leftCardRef.current) ro.observe(leftCardRef.current, { childList: true, subtree: true, characterData: true });

    return () => {
      window.removeEventListener("resize", syncHeights);
      ro.disconnect();
    };
  }, [flowState]);

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
      <style>{`@media (max-width: 639px) { .add-listing-wrapper { margin-top: -35px !important; } .add-listing-card { margin-top: 0 !important; } .add-listing-image { margin-top: 0 !important; } } @media (min-width: 640px) { .add-listing-wrapper { margin-top: 0 !important; } .add-listing-card { margin-top: 20px !important; } .add-listing-image { margin-top: 25px !important; } }`}</style>
      <div className="flex-1">
        <div className="w-full max-w-[1290px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-[60px] overflow-x-hidden min-w-0 add-listing-wrapper">
          {/* TWO-COLUMN SECTION: LEFT = FORM CARD, RIGHT = IMAGE */}
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-[35%_65%] gap-6 items-stretch min-w-0">
            {/* LEFT: Card area */}
            <div className="flex items-start min-w-0 overflow-visible">
              <div ref={leftCardRef} className="add-listing-card bg-white rounded-2xl shadow-lg w-full max-w-[640px] min-w-0 min-h-[320px] relative z-20 overflow-visible" style={{padding: '6px 32px 32px', marginBottom: 24}}>
                <div className="flex flex-col relative mt-5 mb-2 sm:mt-5 xs:mt-1">
                  List and sell your car fast with
                </div>
                <h1 className="text-[20px] leading-[24px] font-bold text-[#24272C] font-albert mb-4">
                  Carzino’s AI, it will do the work for you.
                </h1>

                <div className="flex flex-col relative h-auto my-[5px] mb-2">
                  <p className="text-sm text-[#6B6B6B] mb-5 sm:mb-2">
                    Our AI-powered site will fill in your car’s make, model,
                    details, specs and even the description.
                  </p>
                </div>

                {/* Tabs */}
                <div className="flex items-start gap-3 mb-4">
                  <div className="flex-1">
                    <button
                      type="button"
                      onClick={() => setActiveTab("license")}
                      className={`w-full h-12 rounded-[14px] ${activeTab === "license" ? "bg-[#24272C] text-white" : "border border-[#24272C] text-[#24272C]"}`}
                    >
                      <span
                        className="text-base font-medium"
                        style={{ font: "500 12px Albert Sans, sans-serif" }}
                      >
                        License Plate
                      </span>
                    </button>
                    {activeTab === "license" && (
                      <div className="mt-1 w-full flex justify-center">
                        <svg
                          width="11"
                          height="5"
                          viewBox="0 0 11 5"
                          fill="none"
                        />
                      </div>
                    )}
                  </div>

                  <div className="flex-1">
                    <button
                      type="button"
                      onClick={() => setActiveTab("vin")}
                      className={`w-full h-12 rounded-[14px] ${activeTab === "vin" ? "bg-[#24272C] text-white" : "border border-[#24272C] text-[#24272C]"}`}
                    >
                      <span
                        className="text-base font-medium"
                        style={{ font: "500 12px Albert Sans, sans-serif" }}
                      >
                        By Vin #
                      </span>
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
                            className="flex-1 text-sm text-[#24272C] bg-transparent outline-none font-inter min-w-0"
                          />
                        </div>
                        <div className="relative">
                          <select
                            value={selectedState}
                            onChange={(e) => setSelectedState(e.target.value)}
                            className="h-12 w-full px-3 border border-[#EDEDED] rounded-[14px] bg-white text-sm text-[#24272C] font-inter outline-none appearance-none min-w-0"
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
                            className="flex-1 text-sm text-[#24272C] bg-transparent outline-none font-inter min-w-0"
                          />
                        </div>
                        <div className="relative">
                          <select
                            value={vinYear}
                            onChange={(e) => setVinYear(e.target.value)}
                            className="h-12 w-full px-3 border border-[#EDEDED] rounded-[14px] bg-white text-sm text-[#24272C] font-inter outline-none appearance-none min-w-0"
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

                    <div className="w-full text-center mt-2">
                      <Link
                        to="/edit-listing"
                        className="text-sm text-[#24272C] underline"
                      >
                        Enter Info Manually
                      </Link>
                    </div>
                  </div>
                )}

                {flowState === "found" && (
                  <div className="flex flex-col gap-1">
                    <h3 className="text-xl font-semibold">
                      If this is your car, create your ad.
                    </h3>
                    <div>
                      <button onClick={handleTryAgain} className="text-sm text-[#24272C] underline">Start over</button>
                    </div>
                    <div className="text-sm text-[#6B6B6B]" style={{ lineHeight: '15px' }}>
                      2021 Honda Accord LX
                    </div>
                    <div className="text-xs text-[#9A9A9A]" style={{ lineHeight: '15px' }}>
                      VIN: XXXXXXXXXXXXXXXX
                    </div>
                    <div className="mt-3 flex gap-3">
                      <Link
                        to="/edit-listing"
                        className="h-12 px-4 rounded-[14px] bg-[#E82121] text-white flex items-center justify-center"
                      >
                        Create Your Ad
                      </Link>
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
                      <Link
                        to="/edit-listing"
                        className="h-12 px-4 rounded-[14px] bg-[#24272C] text-white flex items-center justify-center"
                      >
                        Enter Manually
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* RIGHT: Image area */}
            <div className="flex items-stretch min-w-0">
              <div ref={rightImageRef} className="w-full rounded-2xl overflow-hidden bg-[#F3F4F6] flex items-center justify-center relative z-0 add-listing-image" style={{height: 'auto'}}>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F4d1f1909a98e4ebc8068632229306ce4%2Fa1de347df2e14921b7b9b949cb60fd61?format=webp"
                  alt="vehicle"
                  className="hidden sm:flex lg:block w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
