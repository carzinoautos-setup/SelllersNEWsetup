import { useState } from "react";
import { DashboardLayout } from "../components/DashboardLayout";
import { UsersProfileCard } from "./usresprofile";
import { FormField } from "../components/ui/FormField";

export default function AddAListingPage() {
  const [openSections, setOpenSections] = useState({
    convenience: false,
    entertainment: false,
    safety: false,
    interior: false,
    exterior: false,
  });

  // Vehicle details form state
  const [vehicleDetails, setVehicleDetails] = useState({
    vin: '',
    year: '',
    make: '',
    model: '',
    trim: '',
    condition: '',
    isCertified: '',
    mileage: '',
    titleStatus: '',
    stockNumber: '',
  });

  // Vehicle details Step 3 form state
  const [vehicleDetailsStep3, setVehicleDetailsStep3] = useState({
    bodyType: '',
    doors: '',
    transmission: '',
    transmissionSpeed: '',
    cylinders: '',
    engineSize: '',
    driveTrain: '',
    fuelType: '',
    mpgCity: '',
    mpgHwy: '',
  });

  const handleVehicleDetailChange = (field: string, value: string) => {
    setVehicleDetails(prev => ({
      ...prev,
      [field]: value
    }));
  };
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
                        How do I find the VIN number for my car? Look on your
                        insurance cards, registration, or the paperwork from
                        when you purchased your vehicle. The most common place
                        to find a VIN is on your vehicle's dashboard, near where
                        the dashboard meets the edge of the windshield on the
                        driver's side.
                      </p>
                    </div>
                  </div>

                  <form
                    className="space-y-4"
                    onSubmit={(e) => e.preventDefault()}
                  >
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
                <h3 className="text-[24px] font-medium text-[#24272C] mb-5 font-['Albert_Sans']">
                  Enter vehicle details
                </h3>
                <div className="flex items-center justify-center px-[26px] py-2 bg-white border border-[#CF0D0D] rounded-xl">
                  <span className="text-[15px] font-medium text-[#1E1E1E] font-['DM_Sans'] leading-[26px]">
                    Step 2
                  </span>
                </div>
              </div>

              {/* Form Container */}
              <div className="bg-white rounded-lg p-8" style={{ border: "0.8px solid rgba(171,171,171,1)" }}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
                  {/* VIN# Field */}
                  <FormField
                    label="Vin#"
                    value={vehicleDetails.vin}
                    onChange={(value) => handleVehicleDetailChange('vin', value)}
                    placeholder="Enter Vin#"
                    className="xl:col-span-1"
                  />

                  {/* Year Field */}
                  <FormField
                    label="Year"
                    value={vehicleDetails.year}
                    onChange={(value) => handleVehicleDetailChange('year', value)}
                    placeholder="Enter Year"
                  />

                  {/* Make Field */}
                  <FormField
                    label="Make"
                    value={vehicleDetails.make}
                    onChange={(value) => handleVehicleDetailChange('make', value)}
                    type="select"
                    options={['Toyota', 'Honda', 'Ford', 'BMW', 'Mercedes-Benz', 'Audi', 'Volkswagen', 'Nissan', 'Hyundai', 'Kia']}
                    className="xl:col-span-2"
                  />

                  {/* Model Field */}
                  <FormField
                    label="Model"
                    value={vehicleDetails.model}
                    onChange={(value) => handleVehicleDetailChange('model', value)}
                    type="select"
                    options={['Camry', 'Corolla', 'Prius', 'RAV4', 'Highlander', 'Sienna', 'Tacoma', 'Tundra']}
                  />

                  {/* Trim Field */}
                  <FormField
                    label="Trim"
                    value={vehicleDetails.trim}
                    onChange={(value) => handleVehicleDetailChange('trim', value)}
                    placeholder="Select Trim"
                  />

                  {/* Condition Field */}
                  <FormField
                    label="Condition"
                    value={vehicleDetails.condition}
                    onChange={(value) => handleVehicleDetailChange('condition', value)}
                    type="select"
                    options={['New', 'Used', 'Certified Pre-Owned', 'For Parts']}
                  />

                  {/* Is Certified Field */}
                  <FormField
                    label="Is certified"
                    value={vehicleDetails.isCertified}
                    onChange={(value) => handleVehicleDetailChange('isCertified', value)}
                    type="select"
                    options={['Yes', 'No']}
                  />

                  {/* Mileage Field */}
                  <FormField
                    label="Mileage"
                    value={vehicleDetails.mileage}
                    onChange={(value) => handleVehicleDetailChange('mileage', value)}
                    placeholder="Enter Miles"
                  />

                  {/* Title Status Field */}
                  <FormField
                    label="Title Status"
                    value={vehicleDetails.titleStatus}
                    onChange={(value) => handleVehicleDetailChange('titleStatus', value)}
                    type="select"
                    options={['Clean', 'Salvage', 'Rebuilt', 'Lemon', 'Flood']}
                  />

                  {/* Stock# Field */}
                  <FormField
                    label="Stock#"
                    value={vehicleDetails.stockNumber}
                    onChange={(value) => handleVehicleDetailChange('stockNumber', value)}
                    placeholder="Enter Stock Number"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Vehicle Features Selection */}
          <section className="w-full mb-8" />
        </div>
      </div>
    </DashboardLayout>
  );
}
