import React, { useState } from "react";
import { DashboardLayout } from "../components/DashboardLayout";
import { UsersProfileCard } from "./usresprofile";
import { FormField } from "../components/ui/FormField";
import { Select } from "../components/ui/select";

export default function AddAListingPage() {
  const [openSections, setOpenSections] = useState({
    features: false,
    interior: false,
    exterior: false,
    safety: false,
    technology: false,
  });

  const handleToggle = (key: string) => {
    setOpenSections((prev) => {
      const next: Record<string, boolean> = {};
      Object.keys(prev).forEach((k) => (next[k] = false));
      next[key] = !prev[key];
      return next as typeof prev;
    });
  };

  function CollapsibleSection({
    title,
    id,
    isOpen,
    onToggle,
    children,
  }: {
    title: string;
    id: string;
    isOpen: boolean;
    onToggle: () => void;
    children: any;
  }) {
    return (
      <div className="w-full">
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          className="w-full flex items-center justify-between md:hidden py-2"
        >
          <span className="text-[18px] font-medium text-[#050B20] font-['Albert_Sans']">{title}</span>
          <span className={`text-[#E82121] transform transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`}>
            {/* Chevron right */}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </button>

        <div className={`${isOpen ? 'block' : 'hidden'} md:block`}>{children}</div>
      </div>
    );
  }

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

  // Price & Color Step 4 form state
  const [priceColorStep4, setPriceColorStep4] = useState({
    price: '',
    listingStatus: '',
    exteriorColor: '',
    interiorColor: '',
  });

  const handleVehicleDetailChange = (field: string, value: string) => {
    setVehicleDetails(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleVehicleDetailStep3Change = (field: string, value: string) => {
    setVehicleDetailsStep3(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handlePriceColorStep4Change = (field: string, value: string) => {
    setPriceColorStep4(prev => ({
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
                        <span className="text-[13px] text-[#818181]">Enter your Vin #</span>
                        <input
                          aria-label="Vin#"
                          type="text"
                          placeholder="Enter Vin#"
                          value={vehicleDetails.vin}
                          onChange={(e) => handleVehicleDetailChange('vin', e.target.value)}
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
                  <span className="text-[15px] font-medium text-[#1E1E1E] font-['Albert_Sans'] leading-[26px]">
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

          {/* Enter Vehicle Details Form - Step 3 */}
          <section className="w-full mb-8">
            <div className="max-w-[1480px] mx-auto">
              {/* Header */}
              <div className="flex items-end justify-between gap-4 mb-5">
                <h3 className="text-[24px] font-medium text-[#24272C] mb-5 font-['Albert_Sans']">
                  Enter vehicle details
                </h3>
                <div className="flex items-center justify-center px-[26px] py-2 bg-white border border-[#CF0D0D] rounded-xl">
                  <span className="text-[15px] font-medium text-[#1E1E1E] font-['Albert_Sans'] leading-[26px]">
                    Step 3
                  </span>
                </div>
              </div>

              {/* Form Container */}
              <div className="bg-white rounded-lg p-8" style={{ border: "0.8px solid rgba(171,171,171,1)" }}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
                  {/* Body Type Field */}
                  <FormField
                    label="Body Type"
                    value={vehicleDetailsStep3.bodyType}
                    onChange={(value) => handleVehicleDetailStep3Change('bodyType', value)}
                    type="select"
                    options={['Sedan', 'SUV', 'Truck', 'Coupe', 'Convertible', 'Hatchback', 'Wagon', 'Van', 'Crossover']}
                  />

                  {/* Doors Field */}
                  <FormField
                    label="Doors"
                    value={vehicleDetailsStep3.doors}
                    onChange={(value) => handleVehicleDetailStep3Change('doors', value)}
                    type="select"
                    options={['2', '3', '4', '5']}
                  />

                  {/* Transmission Field */}
                  <FormField
                    label="Transmission"
                    value={vehicleDetailsStep3.transmission}
                    onChange={(value) => handleVehicleDetailStep3Change('transmission', value)}
                    type="select"
                    options={['Manual', 'Automatic', 'CVT', 'Semi-Automatic']}
                  />

                  {/* Cylinders Field */}
                  <FormField
                    label="Cylinders"
                    value={vehicleDetailsStep3.cylinders}
                    onChange={(value) => handleVehicleDetailStep3Change('cylinders', value)}
                    placeholder="Select Cylinders"
                  />

                  {/* Engine Size Field */}
                  <FormField
                    label="Engine Size (Liters)"
                    value={vehicleDetailsStep3.engineSize}
                    onChange={(value) => handleVehicleDetailStep3Change('engineSize', value)}
                    placeholder="Enter engine size"
                  />

                  {/* Drive Train Field */}
                  <FormField
                    label="Drive Train"
                    value={vehicleDetailsStep3.driveTrain}
                    onChange={(value) => handleVehicleDetailStep3Change('driveTrain', value)}
                    type="select"
                    options={['Front-Wheel Drive', 'Rear-Wheel Drive', 'All-Wheel Drive', '4-Wheel Drive']}
                  />

                  {/* Fuel Type Field */}
                  <FormField
                    label="Fuel Type"
                    value={vehicleDetailsStep3.fuelType}
                    onChange={(value) => handleVehicleDetailStep3Change('fuelType', value)}
                    type="select"
                    options={['Gasoline', 'Diesel', 'Hybrid', 'Electric', 'Plug-in Hybrid', 'Natural Gas']}
                  />

                  {/* MPG City Field */}
                  <FormField
                    label="MPG Gallon City"
                    value={vehicleDetailsStep3.mpgCity}
                    onChange={(value) => handleVehicleDetailStep3Change('mpgCity', value)}
                    type="select"
                    options={['15-20', '20-25', '25-30', '30-35', '35-40', '40+']}
                  />

                  {/* MPG HWY Field */}
                  <FormField
                    label="MPG Gallon HWY"
                    value={vehicleDetailsStep3.mpgHwy}
                    onChange={(value) => handleVehicleDetailStep3Change('mpgHwy', value)}
                    type="select"
                    options={['20-25', '25-30', '30-35', '35-40', '40-45', '45+']}
                  />

                  {/* Transmission Speed Field */}
                  <FormField
                    label="Transmission speed"
                    value={vehicleDetailsStep3.transmissionSpeed}
                    onChange={(value) => handleVehicleDetailStep3Change('transmissionSpeed', value)}
                    type="select"
                    options={['3-Speed', '4-Speed', '5-Speed', '6-Speed', '7-Speed', '8-Speed', '9-Speed', '10-Speed']}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Select Vehicle Features - Step 5 */}
          <section className="w-full mb-8">
            <div className="max-w-[1480px] mx-auto">
              {/* Header */}
              <div className="flex items-end justify-between gap-4 mb-5">
                <h3 className="text-[24px] font-medium text-[#24272C] font-['Albert_Sans']">
                  Select Vehicle Features
                </h3>
                <div className="flex items-center justify-center px-[26px] py-2 bg-white border border-[#CF0D0D] rounded-xl">
                  <span className="text-[15px] font-medium text-[#1E1E1E] font-['Albert_Sans'] leading-[26px]">
                    Step 5
                  </span>
                </div>
              </div>

              {/* Form Container */}
              <div className="bg-white rounded-lg p-8" style={{ border: "0.8px solid rgba(178,178,178,1)" }}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">

                  {/* Features Column */}
                  <CollapsibleSection title={'Features'} id={'features'} isOpen={openSections.features} onToggle={() => handleToggle('features')}>
                    <h4 className="hidden md:block text-[18px] font-medium text-[#050B20] font-['Albert_Sans'] mb-6 leading-[19px]">Features</h4>
                    <div className="flex flex-col gap-4">
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" className="hidden" />
                        <div className="w-5 h-5 border border-[#B2B2B2] rounded bg-white flex items-center justify-center">
                        </div>
                        <span className="text-[16px] md:text-[12px] text-[#050B20] font-['Albert_Sans'] leading-[25px]">Navigation System</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" className="hidden" defaultChecked />
                        <div className="w-5 h-5 rounded bg-[#E82121] flex items-center justify-center">
                          <svg width="10" height="10" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.76764 2.39244C9.45824 2.08263 8.95582 2.08282 8.64601 2.39244L3.59787 7.44077L1.35419 5.19711C1.04438 4.8873 0.542174 4.8873 0.23236 5.19711C-0.0774534 5.50693 -0.0774534 6.00913 0.23236 6.31894L3.03684 9.12342C3.19165 9.27823 3.39464 9.35583 3.59765 9.35583C3.80067 9.35583 4.00386 9.27843 4.15867 9.12342L9.76764 3.51425C10.0775 3.20465 10.0775 2.70224 9.76764 2.39244Z" fill="white"/>
                          </svg>
                        </div>
                        <span className="text-[16px] md:text-[12px] text-[#050B20] font-['Albert_Sans'] leading-[25px]">Remote Start</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" className="hidden" />
                        <div className="w-5 h-5 border border-[#B2B2B2] rounded bg-white flex items-center justify-center">
                        </div>
                        <span className="text-[16px] md:text-[12px] text-[#050B20] font-['Albert_Sans'] leading-[25px]">Keyless Entry</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" className="hidden" />
                        <div className="w-5 h-5 border border-[#B2B2B2] rounded bg-white flex items-center justify-center">
                        </div>
                        <span className="text-[16px] md:text-[12px] text-[#050B20] font-['Albert_Sans'] leading-[25px]">Hands-Free</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" className="hidden" />
                        <div className="w-5 h-5 border border-[#B2B2B2] rounded bg-white flex items-center justify-center">
                        </div>
                        <span className="text-[16px] md:text-[12px] text-[#050B20] font-['Albert_Sans'] leading-[25px]">Power Folding Side Mirrors</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" className="hidden" />
                        <div className="w-5 h-5 border border-[#B2B2B2] rounded bg-white flex items-center justify-center">
                        </div>
                        <span className="text-[16px] md:text-[12px] text-[#050B20] font-['Albert_Sans'] leading-[25px]">Rain-Sensing Wipers</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" className="hidden" />
                        <div className="w-5 h-5 border border-[#B2B2B2] rounded bg-white flex items-center justify-center">
                        </div>
                        <span className="text-[16px] md:text-[12px] text-[#050B20] font-['Albert_Sans'] leading-[25px]">Homelink</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" className="hidden" />
                        <div className="w-5 h-5 border border-[#B2B2B2] rounded bg-white flex items-center justify-center">
                        </div>
                        <span className="text-[16px] md:text-[12px] text-[#050B20] font-['Albert_Sans'] leading-[25px]">Split-Folding Rear Seats</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" className="hidden" />
                        <div className="w-5 h-5 border border-[#B2B2B2] rounded bg-white flex items-center justify-center">
                        </div>
                        <span className="text-[16px] md:text-[12px] text-[#050B20] font-['Albert_Sans'] leading-[25px]">Adjustable Steering Column</span>
                      </label>
                    </div>
                  </CollapsibleSection>

                  {/* Interior Column */}
                  <CollapsibleSection title={'Interior'} id={'interior'} isOpen={openSections.interior} onToggle={() => handleToggle('interior')}>
                    <h4 className="hidden md:block text-[18px] font-medium text-[#050B20] font-['Albert_Sans'] mb-6 leading-[19px]">Interior</h4>
                    <div className="flex flex-col gap-4">
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" className="hidden" />
                        <div className="w-5 h-5 border border-[#B2B2B2] rounded bg-white flex items-center justify-center">
                        </div>
                        <span className="text-[16px] md:text-[12px] text-[#050B20] font-['Albert_Sans'] leading-[25px]">Leather Seats</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" className="hidden" defaultChecked />
                        <div className="w-5 h-5 rounded bg-[#E82121] flex items-center justify-center">
                          <svg width="10" height="10" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.76764 2.39244C9.45824 2.08263 8.95582 2.08282 8.64601 2.39244L3.59787 7.44077L1.35419 5.19711C1.04438 4.8873 0.542174 4.8873 0.23236 5.19711C-0.0774534 5.50693 -0.0774534 6.00913 0.23236 6.31894L3.03684 9.12342C3.19165 9.27823 3.39464 9.35583 3.59765 9.35583C3.80067 9.35583 4.00386 9.27843 4.15867 9.12342L9.76764 3.51425C10.0775 3.20465 10.0775 2.70224 9.76764 2.39244Z" fill="white"/>
                          </svg>
                        </div>
                        <span className="text-[16px] md:text-[12px] text-[#050B20] font-['Albert_Sans'] leading-[25px]">Heated Seats</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" className="hidden" />
                        <div className="w-5 h-5 border border-[#B2B2B2] rounded bg-white flex items-center justify-center">
                        </div>
                        <span className="text-[16px] md:text-[12px] text-[#050B20] font-['Albert_Sans'] leading-[25px]">Sunroof /Panoramic Roof</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" className="hidden" />
                        <div className="w-5 h-5 border border-[#B2B2B2] rounded bg-white flex items-center justify-center">
                        </div>
                        <span className="text-[16px] md:text-[12px] text-[#050B20] font-['Albert_Sans'] leading-[25px]">Heated Steering Wheel</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" className="hidden" />
                        <div className="w-5 h-5 border border-[#B2B2B2] rounded bg-white flex items-center justify-center">
                        </div>
                        <span className="text-[16px] md:text-[12px] text-[#050B20] font-['Albert_Sans'] leading-[25px]">Touchscreen Display</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" className="hidden" />
                        <div className="w-5 h-5 border border-[#B2B2B2] rounded bg-white flex items-center justify-center">
                        </div>
                        <span className="text-[16px] md:text-[12px] text-[#050B20] font-['Albert_Sans'] leading-[25px]">Ventilated / Cooled Seats</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" className="hidden" />
                        <div className="w-5 h-5 border border-[#B2B2B2] rounded bg-white flex items-center justify-center">
                        </div>
                        <span className="text-[16px] md:text-[12px] text-[#050B20] font-['Albert_Sans'] leading-[25px]">Memory Driver Seat Settings</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" className="hidden" />
                        <div className="w-5 h-5 border border-[#B2B2B2] rounded bg-white flex items-center justify-center">
                        </div>
                        <span className="text-[16px] md:text-[12px] text-[#050B20] font-['Albert_Sans'] leading-[25px]">Ambient Interior Lighting</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" className="hidden" />
                        <div className="w-5 h-5 border border-[#B2B2B2] rounded bg-white flex items-center justify-center">
                        </div>
                        <span className="text-[16px] md:text-[12px] text-[#050B20] font-['Albert_Sans'] leading-[25px]">Rubber Flooring</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" className="hidden" />
                        <div className="w-5 h-5 border border-[#B2B2B2] rounded bg-white flex items-center justify-center">
                        </div>
                        <span className="text-[16px] md:text-[12px] text-[#050B20] font-['Albert_Sans'] leading-[25px]">Wood or Aluminum Trim</span>
                      </label>
                    </div>
                  </CollapsibleSection>

                  {/* Exterior Column */}
                  <CollapsibleSection title={'Exterior'} id={'exterior'} isOpen={openSections.exterior} onToggle={() => handleToggle('exterior')}>
                    <h4 className="hidden md:block text-[18px] font-medium text-[#050B20] font-['Albert_Sans'] mb-6 leading-[19px]">Exterior</h4>
                    <div className="flex flex-col gap-4">
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" className="hidden" />
                        <div className="w-5 h-5 border border-[#B2B2B2] rounded bg-white flex items-center justify-center">
                        </div>
                        <span className="text-[16px] md:text-[12px] text-[#050B20] font-['Albert_Sans'] leading-[25px]">Alloy Wheels</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" className="hidden" defaultChecked />
                        <div className="w-5 h-5 rounded bg-[#E82121] flex items-center justify-center">
                          <svg width="10" height="10" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.76764 2.39244C9.45824 2.08263 8.95582 2.08282 8.64601 2.39244L3.59787 7.44077L1.35419 5.19711C1.04438 4.8873 0.542174 4.8873 0.23236 5.19711C-0.0774534 5.50693 -0.0774534 6.00913 0.23236 6.31894L3.03684 9.12342C3.19165 9.27823 3.39464 9.35583 3.59765 9.35583C3.80067 9.35583 4.00386 9.27843 4.15867 9.12342L9.76764 3.51425C10.0775 3.20465 10.0775 2.70224 9.76764 2.39244Z" fill="white"/>
                          </svg>
                        </div>
                        <span className="text-[16px] md:text-[12px] text-[#050B20] font-['Albert_Sans'] leading-[25px]">LED Headlights</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" className="hidden" />
                        <div className="w-5 h-5 border border-[#B2B2B2] rounded bg-white flex items-center justify-center">
                        </div>
                        <span className="text-[16px] md:text-[12px] text-[#050B20] font-['Albert_Sans'] leading-[25px]">Fog Lights</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" className="hidden" />
                        <div className="w-5 h-5 border border-[#B2B2B2] rounded bg-white flex items-center justify-center">
                        </div>
                        <span className="text-[16px] md:text-[12px] text-[#050B20] font-['Albert_Sans'] leading-[25px]">Roof Rack</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" className="hidden" />
                        <div className="w-5 h-5 border border-[#B2B2B2] rounded bg-white flex items-center justify-center">
                        </div>
                        <span className="text-[16px] md:text-[12px] text-[#050B20] font-['Albert_Sans'] leading-[25px]">Tinted Windows</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" className="hidden" />
                        <div className="w-5 h-5 border border-[#B2B2B2] rounded bg-white flex items-center justify-center">
                        </div>
                        <span className="text-[16px] md:text-[12px] text-[#050B20] font-['Albert_Sans'] leading-[25px]">Power Tailgate</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" className="hidden" />
                        <div className="w-5 h-5 border border-[#B2B2B2] rounded bg-white flex items-center justify-center">
                        </div>
                        <span className="text-[16px] md:text-[12px] text-[#050B20] font-['Albert_Sans'] leading-[25px]">Tow Hitch / Towing Package</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" className="hidden" />
                        <div className="w-5 h-5 border border-[#B2B2B2] rounded bg-white flex items-center justify-center">
                        </div>
                        <span className="text-[16px] md:text-[12px] text-[#050B20] font-['Albert_Sans'] leading-[25px]">Running Boards</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" className="hidden" />
                        <div className="w-5 h-5 border border-[#B2B2B2] rounded bg-white flex items-center justify-center">
                        </div>
                        <span className="text-[16px] md:text-[12px] text-[#050B20] font-['Albert_Sans'] leading-[25px]">Body Kit/Sport Package</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" className="hidden" />
                        <div className="w-5 h-5 border border-[#B2B2B2] rounded bg-white flex items-center justify-center">
                        </div>
                        <span className="text-[16px] md:text-[12px] text-[#050B20] font-['Albert_Sans'] leading-[25px]">Rear Spoiler</span>
                      </label>
                    </div>
                  </CollapsibleSection>

                  {/* Safety Options Column */}
                  <CollapsibleSection title={'Safety Options'} id={'safety'} isOpen={openSections.safety} onToggle={() => handleToggle('safety')}>
                    <h4 className="hidden md:block text-[18px] font-medium text-[#050B20] font-['Albert_Sans'] mb-6 leading-[19px]">Safety Options</h4>
                    <div className="flex flex-col gap-4">
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" className="hidden" />
                        <div className="w-5 h-5 border border-[#B2B2B2] rounded bg-white flex items-center justify-center">
                        </div>
                        <span className="text-[16px] md:text-[12px] text-[#050B20] font-['Albert_Sans'] leading-[25px]">Airbags</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" className="hidden" defaultChecked />
                        <div className="w-5 h-5 rounded bg-[#E82121] flex items-center justify-center">
                          <svg width="10" height="10" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.76764 2.39244C9.45824 2.08263 8.95582 2.08282 8.64601 2.39244L3.59787 7.44077L1.35419 5.19711C1.04438 4.8873 0.542174 4.8873 0.23236 5.19711C-0.0774534 5.50693 -0.0774534 6.00913 0.23236 6.31894L3.03684 9.12342C3.19165 9.27823 3.39464 9.35583 3.59765 9.35583C3.80067 9.35583 4.00386 9.27843 4.15867 9.12342L9.76764 3.51425C10.0775 3.20465 10.0775 2.70224 9.76764 2.39244Z" fill="white"/>
                          </svg>
                        </div>
                        <span className="text-[16px] md:text-[12px] text-[#050B20] font-['Albert_Sans'] leading-[25px]">Airbag - Passenger</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" className="hidden" />
                        <div className="w-5 h-5 border border-[#B2B2B2] rounded bg-white flex items-center justify-center">
                        </div>
                        <span className="text-[16px] md:text-[12px] text-[#050B20] font-['Albert_Sans'] leading-[25px]">Anti-lock Braking System</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" className="hidden" />
                        <div className="w-5 h-5 border border-[#B2B2B2] rounded bg-white flex items-center justify-center">
                        </div>
                        <span className="text-[16px] md:text-[12px] text-[#050B20] font-['Albert_Sans'] leading-[25px]">Backup Camera</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" className="hidden" />
                        <div className="w-5 h-5 border border-[#B2B2B2] rounded bg-white flex items-center justify-center">
                        </div>
                        <span className="text-[16px] md:text-[12px] text-[#050B20] font-['Albert_Sans'] leading-[25px]">Lane Departure Warning</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" className="hidden" />
                        <div className="w-5 h-5 border border-[#B2B2B2] rounded bg-white flex items-center justify-center">
                        </div>
                        <span className="text-[16px] md:text-[12px] text-[#050B20] font-['Albert_Sans'] leading-[25px]">Adaptive Cruise Control</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" className="hidden" />
                        <div className="w-5 h-5 border border-[#B2B2B2] rounded bg-white flex items-center justify-center">
                        </div>
                        <span className="text-[16px] md:text-[12px] text-[#050B20] font-['Albert_Sans'] leading-[25px]">Parking Sensors</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" className="hidden" />
                        <div className="w-5 h-5 border border-[#B2B2B2] rounded bg-white flex items-center justify-center">
                        </div>
                        <span className="text-[16px] md:text-[12px] text-[#050B20] font-['Albert_Sans'] leading-[25px]">Automatic High Beams</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" className="hidden" />
                        <div className="w-5 h-5 border border-[#B2B2B2] rounded bg-white flex items-center justify-center">
                        </div>
                        <span className="text-[16px] md:text-[12px] text-[#050B20] font-['Albert_Sans'] leading-[25px]">Tire Pressure Monitoring System</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" className="hidden" />
                        <div className="w-5 h-5 border border-[#B2B2B2] rounded bg-white flex items-center justify-center">
                        </div>
                        <span className="text-[16px] md:text-[12px] text-[#050B20] font-['Albert_Sans'] leading-[25px]">Electronic Stability Control</span>
                      </label>
                    </div>
                  </CollapsibleSection>

                  {/* Technology Column */}
                  <CollapsibleSection title={'Technology'} id={'technology'} isOpen={openSections.technology} onToggle={() => handleToggle('technology')}>
                    <h4 className="hidden md:block text-[18px] font-medium text-[#050B20] font-['Albert_Sans'] mb-6 leading-[19px]">Technology</h4>
                    <div className="flex flex-col gap-4">
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" className="hidden" />
                        <div className="w-5 h-5 border border-[#B2B2B2] rounded bg-white flex items-center justify-center">
                        </div>
                        <span className="text-[16px] md:text-[12px] text-[#050B20] font-['Albert_Sans'] leading-[25px]">Apple CarPlay/Android Auto</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" className="hidden" defaultChecked />
                        <div className="w-5 h-5 rounded bg-[#E82121] flex items-center justify-center">
                          <svg width="10" height="10" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.76764 2.39244C9.45824 2.08263 8.95582 2.08282 8.64601 2.39244L3.59787 7.44077L1.35419 5.19711C1.04438 4.8873 0.542174 4.8873 0.23236 5.19711C-0.0774534 5.50693 -0.0774534 6.00913 0.23236 6.31894L3.03684 9.12342C3.19165 9.27823 3.39464 9.35583 3.59765 9.35583C3.80067 9.35583 4.00386 9.27843 4.15867 9.12342L9.76764 3.51425C10.0775 3.20465 10.0775 2.70224 9.76764 2.39244Z" fill="white"/>
                          </svg>
                        </div>
                        <span className="text-[16px] md:text-[12px] text-[#050B20] font-['Albert_Sans'] leading-[25px]">Bluetooth</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" className="hidden" />
                        <div className="w-5 h-5 border border-[#B2B2B2] rounded bg-white flex items-center justify-center">
                        </div>
                        <span className="text-[16px] md:text-[12px] text-[#050B20] font-['Albert_Sans'] leading-[25px]">Touchscreen Display</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" className="hidden" />
                        <div className="w-5 h-5 border border-[#B2B2B2] rounded bg-white flex items-center justify-center">
                        </div>
                        <span className="text-[16px] md:text-[12px] text-[#050B20] font-['Albert_Sans'] leading-[25px]">Wireless Phone Connectivity</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" className="hidden" />
                        <div className="w-5 h-5 border border-[#B2B2B2] rounded bg-white flex items-center justify-center">
                        </div>
                        <span className="text-[16px] md:text-[12px] text-[#050B20] font-['Albert_Sans'] leading-[25px]">Rear Seat Entertainment Screens</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" className="hidden" />
                        <div className="w-5 h-5 border border-[#B2B2B2] rounded bg-white flex items-center justify-center">
                        </div>
                        <span className="text-[16px] md:text-[12px] text-[#050B20] font-['Albert_Sans'] leading-[25px]">DVD Player</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" className="hidden" />
                        <div className="w-5 h-5 border border-[#B2B2B2] rounded bg-white flex items-center justify-center">
                        </div>
                        <span className="text-[16px] md:text-[12px] text-[#050B20] font-['Albert_Sans'] leading-[25px]">Premium Sound System</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" className="hidden" />
                        <div className="w-5 h-5 border border-[#B2B2B2] rounded bg-white flex items-center justify-center">
                        </div>
                        <span className="text-[16px] md:text-[12px] text-[#050B20] font-['Albert_Sans'] leading-[25px]">Steering Wheel Audio Controls</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" className="hidden" />
                        <div className="w-5 h-5 border border-[#B2B2B2] rounded bg-white flex items-center justify-center">
                        </div>
                        <span className="text-[16px] md:text-[12px] text-[#050B20] font-['Albert_Sans'] leading-[25px]">Wi-Fi Hotspot Capability</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" className="hidden" />
                        <div className="w-5 h-5 border border-[#B2B2B2] rounded bg-white flex items-center justify-center">
                        </div>
                        <span className="text-[16px] md:text-[12px] text-[#050B20] font-['Albert_Sans'] leading-[25px]">Voice Command System</span>
                      </label>
                    </div>
                  </CollapsibleSection>

                </div>
              </div>
            </div>
          </section>

          {/* Price & Color - Step 4 */}
          <section className="w-full mb-8">
            <div className="max-w-[1480px] mx-auto">
              {/* Header */}
              <div className="flex items-end justify-between gap-4 mb-5">
                <h3 className="text-[24px] font-medium text-[#24272C] mb-5 font-['Albert_Sans']">
                  Price & Color
                </h3>
                <div className="flex items-center justify-center px-[26px] py-2 bg-white border border-[#CF0D0D] rounded-xl">
                  <span className="text-[15px] font-medium text-[#1E1E1E] font-['Albert_Sans'] leading-[26px]">
                    Step 4
                  </span>
                </div>
              </div>

              {/* Form Container */}
              <div className="bg-white rounded-lg p-8" style={{ border: "0.8px solid rgba(171,171,171,1)" }}>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-7">
                  {/* Price Field */}
                  <FormField
                    label="Price"
                    value={priceColorStep4.price}
                    onChange={(value) => handlePriceColorStep4Change('price', value)}
                    placeholder="Set your price"
                  />

                  {/* Listing Status Field */}
                  <FormField
                    label="Listing Status"
                    value={priceColorStep4.listingStatus}
                    onChange={(value) => handlePriceColorStep4Change('listingStatus', value)}
                    type="select"
                    options={['Active', 'Inactive', 'Pending', 'Sold', 'Draft']}
                  />

                  {/* Exterior Color Field */}
                  <FormField
                    label="Exterior Color"
                    value={priceColorStep4.exteriorColor}
                    onChange={(value) => handlePriceColorStep4Change('exteriorColor', value)}
                    type="select"
                    options={['Black', 'White', 'Silver', 'Gray', 'Red', 'Blue', 'Green', 'Brown', 'Gold', 'Orange', 'Yellow', 'Purple']}
                  />

                  {/* Interior Color Field */}
                  <FormField
                    label="Interior Color"
                    value={priceColorStep4.interiorColor}
                    onChange={(value) => handlePriceColorStep4Change('interiorColor', value)}
                    type="select"
                    options={['Black', 'Beige', 'Gray', 'Brown', 'Tan', 'White', 'Red', 'Blue']}
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
