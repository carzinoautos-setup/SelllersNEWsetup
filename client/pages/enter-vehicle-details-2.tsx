import React, { useState } from "react";
import { DashboardLayout } from "../components/DashboardLayout";

export default function EnterVehicleDetails2() {
  const [mileage, setMileage] = useState("");
  const [engine, setEngine] = useState("6.7 Liter");
  const [vehicleTrim, setVehicleTrim] = useState("440 xDrive Coupe 2D");
  const [transmission, setTransmission] = useState("");
  const [drivetrain, setDrivetrain] = useState("FWD");
  const [exteriorColor, setExteriorColor] = useState("");
  const [interiorColor, setInteriorColor] = useState("");

  const DropdownIcon = () => (
    <svg 
      width="16" 
      height="16" 
      viewBox="0 0 16 16" 
      fill="none" 
      className="transform rotate-90"
    >
      <path 
        d="M13 5.5L8 10.5L3 5.5" 
        stroke="#E82121" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <DashboardLayout>
      <div className="flex-1">
        <div className="w-full max-w-[1290px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-[60px] py-8">
          {/* Header Section */}
          <div className="relative mb-8">
            {/* Red checkbox with number 1 */}
            <div className="flex items-start gap-3 mb-4">
              <div className="relative flex-shrink-0">
                <div className="w-5 h-[17px] bg-[#E82121] rounded flex items-center justify-center">
                  <span className="text-white text-[13px] font-albert leading-[140%]">1</span>
                </div>
              </div>
              <div>
                <h1 className="text-[18px] font-medium text-[#090909] font-albert mb-2">
                  Basic Details
                </h1>
                <div className="w-32 h-0.5 bg-[#E82121] mb-3"></div>
                <p className="text-[14px] text-black font-albert leading-[140%] max-w-[991px]">
                  We've fetched details for your vehicle. Check that the selections are correct and add anything missing.
                </p>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-white border border-[#B2B2B2] rounded-2xl p-[30px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {/* Left Column */}
              <div className="flex flex-col gap-2">
                {/* Mileage */}
                <div className="flex flex-col gap-2 mb-[30px]">
                  <label className="text-[14px] font-medium text-[#24272C] font-albert">
                    Mileage
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={mileage}
                      onChange={(e) => setMileage(e.target.value)}
                      placeholder="Enter mileage"
                      className="w-full h-[54px] px-[18px] py-4 border border-[#B2B2B2] rounded-lg bg-white text-[14px] text-[#696665] font-albert leading-[140%] outline-none focus:border-[#E82121]"
                    />
                  </div>
                </div>

                {/* Engine */}
                <div className="flex flex-col gap-2">
                  <label className="text-[14px] font-medium text-[#24272C] font-albert">
                    Engine
                  </label>
                  <div className="relative">
                    <select
                      value={engine}
                      onChange={(e) => setEngine(e.target.value)}
                      className="w-full h-[54px] px-[18px] py-4 border border-[#B2B2B2] rounded-lg bg-white text-[14px] text-[#24272C] font-albert leading-[140%] outline-none focus:border-[#E82121] appearance-none cursor-pointer"
                    >
                      <option value="6.7 Liter">6.7 Liter</option>
                      <option value="3.5 Liter">3.5 Liter</option>
                      <option value="2.0 Liter">2.0 Liter</option>
                    </select>
                    <div className="absolute right-[18px] top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <DropdownIcon />
                    </div>
                  </div>
                </div>
              </div>

              {/* Middle Column */}
              <div className="flex flex-col gap-2">
                {/* Vehicle Trim */}
                <div className="flex flex-col gap-2 mb-[30px]">
                  <label className="text-[14px] font-medium text-[#24272C] font-albert">
                    Vehicle Trim
                  </label>
                  <div className="relative">
                    <select
                      value={vehicleTrim}
                      onChange={(e) => setVehicleTrim(e.target.value)}
                      className="w-full h-[54px] px-[18px] py-4 border border-[#B2B2B2] rounded-lg bg-white text-[14px] text-[#24272C] font-albert leading-[140%] outline-none focus:border-[#E82121] appearance-none cursor-pointer"
                    >
                      <option value="440 xDrive Coupe 2D">440 xDrive Coupe 2D</option>
                      <option value="Base">Base</option>
                      <option value="Premium">Premium</option>
                    </select>
                    <div className="absolute right-[18px] top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <DropdownIcon />
                    </div>
                  </div>
                </div>

                {/* Transmission */}
                <div className="flex flex-col gap-2">
                  <label className="text-[14px] font-medium text-[#24272C] font-albert">
                    Transmission
                  </label>
                  <div className="relative">
                    <select
                      value={transmission}
                      onChange={(e) => setTransmission(e.target.value)}
                      className="w-full h-[54px] px-[18px] py-4 border border-[#B2B2B2] rounded-lg bg-white text-[14px] text-[#24272C] font-albert leading-[140%] outline-none focus:border-[#E82121] appearance-none cursor-pointer"
                    >
                      <option value="">Select</option>
                      <option value="Manual">Manual</option>
                      <option value="Automatic">Automatic</option>
                      <option value="CVT">CVT</option>
                    </select>
                    <div className="absolute right-[18px] top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <DropdownIcon />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="flex flex-col gap-2">
                {/* Drivetrain */}
                <div className="flex flex-col gap-2 mb-[30px]">
                  <label className="text-[14px] font-medium text-[#24272C] font-albert">
                    Drivetrain
                  </label>
                  <div className="relative">
                    <select
                      value={drivetrain}
                      onChange={(e) => setDrivetrain(e.target.value)}
                      className="w-full h-[54px] px-[18px] py-4 border border-[#B2B2B2] rounded-lg bg-white text-[14px] text-[#24272C] font-albert leading-[140%] outline-none focus:border-[#E82121] appearance-none cursor-pointer"
                    >
                      <option value="FWD">FWD</option>
                      <option value="RWD">RWD</option>
                      <option value="AWD">AWD</option>
                      <option value="4WD">4WD</option>
                    </select>
                    <div className="absolute right-[18px] top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <DropdownIcon />
                    </div>
                  </div>
                </div>

                {/* Exterior Color */}
                <div className="flex flex-col gap-2 mb-[30px]">
                  <label className="text-[14px] font-medium text-[#24272C] font-albert">
                    Exterior Color
                  </label>
                  <div className="relative">
                    <select
                      value={exteriorColor}
                      onChange={(e) => setExteriorColor(e.target.value)}
                      className="w-full h-[54px] px-[18px] py-4 border border-[#B2B2B2] rounded-lg bg-white text-[14px] text-[#24272C] font-albert leading-[140%] outline-none focus:border-[#E82121] appearance-none cursor-pointer"
                    >
                      <option value="">Select</option>
                      <option value="White">White</option>
                      <option value="Black">Black</option>
                      <option value="Silver">Silver</option>
                      <option value="Red">Red</option>
                      <option value="Blue">Blue</option>
                    </select>
                    <div className="absolute right-[18px] top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <DropdownIcon />
                    </div>
                  </div>
                </div>

                {/* Interior Color */}
                <div className="flex flex-col gap-2">
                  <label className="text-[14px] font-medium text-[#24272C] font-albert">
                    Interior Color
                  </label>
                  <div className="relative">
                    <select
                      value={interiorColor}
                      onChange={(e) => setInteriorColor(e.target.value)}
                      className="w-full h-[54px] px-[18px] py-4 border border-[#B2B2B2] rounded-lg bg-white text-[14px] text-[#24272C] font-albert leading-[140%] outline-none focus:border-[#E82121] appearance-none cursor-pointer"
                    >
                      <option value="">Select</option>
                      <option value="Black">Black</option>
                      <option value="Gray">Gray</option>
                      <option value="Beige">Beige</option>
                      <option value="Brown">Brown</option>
                    </select>
                    <div className="absolute right-[18px] top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <DropdownIcon />
                    </div>
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
