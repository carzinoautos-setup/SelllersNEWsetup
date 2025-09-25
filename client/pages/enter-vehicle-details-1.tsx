import { useState } from "react";
import { DashboardLayout } from "../components/DashboardLayout";

export default function EnterVehicleDetails1() {
  const [vin, setVin] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");

  return (
    <DashboardLayout>
      <div className="flex-1">
        <div className="w-full max-w-[1290px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-[60px] py-8">
          <h1 className="text-[24px] font-semibold text-[#24272C] mb-4">Enter Vehicle Details 1</h1>
          <p className="text-[14px] text-[#6B6B6B] mb-6">Use this page to enter the VIN and basic vehicle data. Fields are editable.</p>

          <div className="bg-white border border-[#E6E6E6] rounded-lg p-6 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-[#24272C] mb-2">VIN</label>
                <input
                  value={vin}
                  onChange={(e) => setVin(e.target.value)}
                  placeholder="Enter VIN"
                  className="w-full px-4 py-3 border border-[#D1D1D1] rounded-md outline-none"
                />
              </div>

              <div>
                <label className="block text-sm text-[#24272C] mb-2">Make</label>
                <input
                  value={make}
                  onChange={(e) => setMake(e.target.value)}
                  placeholder="e.g. Toyota"
                  className="w-full px-4 py-3 border border-[#D1D1D1] rounded-md outline-none"
                />
              </div>

              <div>
                <label className="block text-sm text-[#24272C] mb-2">Model</label>
                <input
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  placeholder="e.g. Camry"
                  className="w-full px-4 py-3 border border-[#D1D1D1] rounded-md outline-none"
                />
              </div>

              <div>
                <label className="block text-sm text-[#24272C] mb-2">Year</label>
                <input
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  placeholder="e.g. 2020"
                  className="w-full px-4 py-3 border border-[#D1D1D1] rounded-md outline-none"
                />
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <button className="inline-flex items-center justify-center h-[44px] px-4 bg-[#E82121] text-white rounded-md">Save</button>
              <button className="inline-flex items-center justify-center h-[44px] px-4 border border-[#E6E6E6] rounded-md">Clear</button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
