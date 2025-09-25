import React, { useState } from "react";
import { DashboardLayout } from "../components/DashboardLayout";
import { Select } from "../components/ui/select";

export default function EnterVehicleDetails2() {
  const [mileage, setMileage] = useState("");
  const [engine, setEngine] = useState("6.7 Liter");
  const [vehicleTrim, setVehicleTrim] = useState("440 xDrive Coupe 2D");
  const [transmission, setTransmission] = useState("");
  const [drivetrain, setDrivetrain] = useState("FWD");
  const [exteriorColor, setExteriorColor] = useState("");
  const [interiorColor, setInteriorColor] = useState("");

  const engineOptions = ["6.7 Liter", "3.5 Liter", "2.0 Liter"];
  const trimOptions = ["440 xDrive Coupe 2D", "Base", "Premium"];
  const transmissionOptions = ["", "Manual", "Automatic", "CVT"];
  const drivetrainOptions = ["FWD", "RWD", "AWD", "4WD"];
  const exteriorColorOptions = ["", "White", "Black", "Silver", "Red", "Blue"];
  const interiorColorOptions = ["", "Black", "Gray", "Beige", "Brown"];


  return (
    <DashboardLayout>
      <div className="flex-1">
        <div className="w-full max-w-[1290px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-[60px] py-8">
          {/* Header Section */}
          <div className="relative mb-8">
            <div className="mb-4">
              <h1 className="text-[20px] font-bold font-albert mb-3">
                <span className="text-[#090909]">Basic Details- </span>
                <span className="text-[#E82121]">Step 1</span>
              </h1>
              <p className="text-[14px] text-black font-albert leading-[140%] max-w-[991px]">
                We've fetched details for your vehicle. Check that the selections are correct and add anything missing.
              </p>
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-white border border-[#B2B2B2] rounded-2xl p-[30px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
              {/* Left Column */}
              <div className="flex flex-col gap-1.5">
                {/* Mileage */}
                <div className="flex flex-col gap-2 mb-[30px]">
                  <label className="text-[14px] font-medium text-[#24272C] font-albert">
                    Mileage
                  </label>
                  <input
                    type="text"
                    value={mileage}
                    onChange={(e) => setMileage(e.target.value)}
                    placeholder="Enter mileage"
                    className="w-full h-[54px] px-[18px] py-4 border border-[#B2B2B2] rounded-lg bg-white text-[14px] text-[#696665] font-albert leading-[140%] outline-none focus:border-[#E82121]"
                  />
                </div>

                {/* Vehicle Trim */}
                <div className="flex flex-col gap-2">
                  <label className="text-[14px] font-medium text-[#24272C] font-albert">
                    Vehicle Trim
                  </label>
                  <Select
                    options={trimOptions}
                    value={vehicleTrim}
                    onChange={(v) => setVehicleTrim(v)}
                    placeholder="440 xDrive Coupe 2D"
                    className="w-full h-[54px] rounded-lg border border-[#B2B2B2] px-[18px] text-[14px] text-[#24272C] bg-white outline-none focus:border-[#E82121] focus:ring-0"
                  />
                </div>
              </div>

              {/* Middle Column */}
              <div className="flex flex-col gap-1.5">
                {/* Engine */}
                <div className="flex flex-col gap-2 mb-[30px]">
                  <label className="text-[14px] font-medium text-[#24272C] font-albert">
                    Engine
                  </label>
                  <Select
                    options={engineOptions}
                    value={engine}
                    onChange={(v) => setEngine(v)}
                    placeholder="6.7 Liter"
                    className="w-full h-[54px] rounded-lg border border-[#B2B2B2] px-[18px] text-[14px] text-[#24272C] bg-white outline-none focus:border-[#E82121] focus:ring-0"
                  />
                </div>

                {/* Transmission */}
                <div className="flex flex-col gap-2">
                  <label className="text-[14px] font-medium text-[#24272C] font-albert">
                    Transmission
                  </label>
                  <Select
                    options={transmissionOptions}
                    value={transmission}
                    onChange={(v) => setTransmission(v)}
                    placeholder="Select"
                    className="w-full h-[54px] rounded-lg border border-[#B2B2B2] px-[18px] text-[14px] text-[#24272C] bg-white outline-none focus:border-[#E82121] focus:ring-0"
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="flex flex-col gap-1.5">
                {/* Drivetrain */}
                <div className="flex flex-col gap-2 mb-[30px]">
                  <label className="text-[14px] font-medium text-[#24272C] font-albert">
                    Drivetrain
                  </label>
                  <Select
                    options={drivetrainOptions}
                    value={drivetrain}
                    onChange={(v) => setDrivetrain(v)}
                    placeholder="FWD"
                    className="w-full h-[54px] rounded-lg border border-[#B2B2B2] px-[18px] text-[14px] text-[#24272C] bg-white outline-none focus:border-[#E82121] focus:ring-0"
                  />
                </div>

                {/* Exterior Color */}
                <div className="flex flex-col gap-2 mb-[30px]">
                  <label className="text-[14px] font-medium text-[#24272C] font-albert">
                    Exterior Color
                  </label>
                  <Select
                    options={exteriorColorOptions}
                    value={exteriorColor}
                    onChange={(v) => setExteriorColor(v)}
                    placeholder="Select"
                    className="w-full h-[54px] rounded-lg border border-[#B2B2B2] px-[18px] text-[14px] text-[#24272C] bg-white outline-none focus:border-[#E82121] focus:ring-0"
                  />
                </div>

                {/* Interior Color */}
                <div className="flex flex-col gap-2">
                  <label className="text-[14px] font-medium text-[#24272C] font-albert">
                    Interior Color
                  </label>
                  <Select
                    options={interiorColorOptions}
                    value={interiorColor}
                    onChange={(v) => setInteriorColor(v)}
                    placeholder="Select"
                    className="w-full h-[54px] rounded-lg border border-[#B2B2B2] px-[18px] text-[14px] text-[#24272C] bg-white outline-none focus:border-[#E82121] focus:ring-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
