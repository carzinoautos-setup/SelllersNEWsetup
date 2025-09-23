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

  const currentYear = new Date().getFullYear();
  const yearOptions = Array.from({ length: 40 }, (_, i) => String(currentYear - i));

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
    description: '',
    photos: [] as string[],
    videoLink: '',
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
  // Photos state and handlers
  const [photos, setPhotos] = useState<Array<{ id: string; url: string }>>([
    { id: 'p1', url: 'https://api.builder.io/api/v1/image/assets/TEMP/9e70d3a8ceb312795c532df6dc151c9d3b313ba9?width=314' },
    { id: 'p2', url: 'https://api.builder.io/api/v1/image/assets/TEMP/f5bdf2c8b316671a24dd99a2c2ba76f65ef1a1e3?width=315' },
    { id: 'p3', url: 'https://api.builder.io/api/v1/image/assets/TEMP/fd33fd9e7843e4a7814bb338186c8afac402528a?width=315' },
  ]);
  const [featurePhotoId, setFeaturePhotoId] = useState<string | null>('p1');

  const addPhotoFromFile = (file: File) => {
    if (!file) return;
    if (file.size > 1024 * 1024) {
      alert('File is too large. Max size is 1MB.');
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      const url = String(reader.result);
      const newPhoto = { id: `${Date.now()}-${Math.random().toString(36).slice(2,8)}`, url };
      setPhotos((prev) => [...prev, newPhoto]);
    };
    reader.readAsDataURL(file);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) addPhotoFromFile(file);
    e.currentTarget.value = '';
  };

  const deletePhoto = (id: string) => {
    setPhotos((prev) => prev.filter((p) => p.id !== id));
    if (featurePhotoId === id) {
      setFeaturePhotoId((prev) => {
        const remaining = photos.filter((p) => p.id !== id);
        return remaining[0]?.id ?? null;
      });
    }
  };

  const onDragStart = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    e.dataTransfer.setData('text/plain', String(index));
    e.dataTransfer.effectAllowed = 'move';
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    e.preventDefault();
    const fromIndex = Number(e.dataTransfer.getData('text/plain'));
    const toIndex = index;
    if (isNaN(fromIndex)) return;
    setPhotos((prev) => {
      const copy = [...prev];
      const [moved] = copy.splice(fromIndex, 1);
      copy.splice(toIndex, 0, moved);
      return copy;
    });
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
                        <Select
                          options={yearOptions}
                          value={vehicleDetails.year}
                          onChange={(v) => handleVehicleDetailChange('year', v)}
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
                        Submit
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

          {/* Enter description - Step 6 */}
          <section className="w-full mb-8">
            <div className="max-w-[1480px] mx-auto">
              {/* Header */}
              <div className="flex items-end justify-between gap-4 mb-5">
                <h3 className="text-[24px] font-medium text-[#24272C] font-['Albert_Sans']">
                  Enter description
                </h3>
                <div className="flex items-center justify-center px-[26px] py-2 bg-white border border-[#CF0D0D] rounded-xl">
                  <span className="text-[15px] font-medium text-[#1E1E1E] font-['Albert_Sans'] leading-[26px]">
                    Step 6
                  </span>
                </div>
              </div>

              {/* Textarea Container */}
              <div className="w-full h-[289px] bg-white rounded-xl border border-[#B2B2B2] relative">
                <label
                  htmlFor="description-textarea"
                  className="absolute top-5 left-5 text-[13px] text-[#818181] font-['DM_Sans'] pointer-events-none"
                >
                  Description
                </label>
                <textarea
                  id="description-textarea"
                  value={priceColorStep4.description}
                  onChange={(e) => handlePriceColorStep4Change('description', e.target.value)}
                  placeholder=""
                  className="w-full h-full pt-12 px-5 pb-5 bg-transparent border-none outline-none resize-none text-[15px] text-[#050B20] font-['DM_Sans'] leading-[26px] focus:ring-0"
                />
              </div>
            </div>
          </section>

          {/* Upload vehicle photos - Step 7 */}
          <section className="w-full mb-8">
            <div className="max-w-[1480px] mx-auto">
              {/* Header */}
              <div className="flex items-end justify-between gap-4 mb-5">
                <h3 className="text-[24px] font-medium text-[#24272C] font-['Albert_Sans']">
                  Upload vehicle photos
                </h3>
                <div className="flex items-center justify-center px-[26px] py-2 bg-white border border-[#CF0D0D] rounded-xl">
                  <span className="text-[15px] font-medium text-[#1E1E1E] font-['Albert_Sans'] leading-[26px]">
                    Step 7
                  </span>
                </div>
              </div>

              {/* Form Container */}
              <div className="bg-white rounded-lg p-8 border border-[#B2B2B2]">

                {/* Gallery Section */}
                <div className="mb-8">
                  <h4 className="text-[16px] font-medium text-[#050B20] font-['DM_Sans'] mb-4">Gallery</h4>

                  <div className="flex flex-wrap gap-4 mb-4">
                    {photos.map((photo, index) => (
                      <div
                        key={photo.id}
                        draggable
                        onDragStart={(e) => onDragStart(e, index)}
                        onDragOver={(e) => e.preventDefault()}
                        onDrop={(e) => onDrop(e, index)}
                        className="relative w-[107px] h-[94px] rounded-lg bg-[#C4C4C4] overflow-hidden"
                      >
                        <img src={photo.url} alt="Vehicle photo" className="w-full h-full object-cover" />

                        {/* Feature toggle (star) */}
                        <div className="absolute top-2 left-2">
                          {featurePhotoId === photo.id ? (
                            <div className="w-7 h-7 bg-[#E82121] rounded-full flex items-center justify-center text-white">
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fill="currentColor" />
                              </svg>
                            </div>
                          ) : (
                            <button
                              type="button"
                              onClick={() => setFeaturePhotoId(photo.id)}
                              className="w-7 h-7 bg-white rounded-full flex items-center justify-center border"
                              aria-label="Set as feature"
                            >
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" stroke="#050B20" strokeWidth="1" fill="none" />
                              </svg>
                            </button>
                          )}
                        </div>

                        {/* Delete button */}
                        <div className="absolute top-2 right-2 opacity-0 hover:opacity-100 transition-opacity">
                          <button
                            type="button"
                            onClick={() => deletePhoto(photo.id)}
                            className="w-8 h-8 bg-white rounded-2xl border border-white flex items-center justify-center hover:bg-gray-50"
                            aria-label="Delete photo"
                          >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M3 6h18" stroke="#050B20" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M8 6V4h8v2" stroke="#050B20" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M10 11v6" stroke="#050B20" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M14 11v6" stroke="#050B20" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </button>
                        </div>

                        {/* Drag overlay (shown on hover) */}
                        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-200 flex items-center justify-center gap-2 opacity-0 hover:opacity-100">
                          <div className="w-10 h-10 bg-white rounded-2xl border border-white flex items-center justify-center cursor-grab">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10 9H3" stroke="#050B20" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M21 9h-7" stroke="#050B20" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M10 15H3" stroke="#050B20" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M21 15h-7" stroke="#050B20" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    ))}

                    {/* Upload slot */}
                    <div className="w-[107px] h-[94px] rounded-lg border border-dashed border-[#D9D9D9] bg-[#E9F2FF] flex flex-col items-center justify-center cursor-pointer hover:bg-[#dbeafe] transition-colors relative">
                      <input type="file" accept="image/*" className="absolute inset-0 opacity-0 cursor-pointer" onChange={handleFileInput} />
                      <svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-2">
                        <path fillRule="evenodd" clipRule="evenodd" d="M18.1807 21.8723C17.5594 21.8723 17.0557 21.3826 17.0557 20.7785V3.21875C17.0557 2.61469 17.5594 2.125 18.1807 2.125C18.802 2.125 19.3057 2.61469 19.3057 3.21875V20.7785C19.3057 21.3826 18.802 21.8723 18.1807 21.8723Z" fill="#050B20"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M13.0128 8.26374C12.5725 7.83748 12.5711 7.14496 13.0095 6.71694L17.3836 2.44694C17.5946 2.24085 17.8814 2.125 18.1807 2.125C18.4798 2.125 18.7667 2.24085 18.9778 2.44694L23.3518 6.71694C23.7902 7.14496 23.7887 7.83748 23.3485 8.26374C22.9082 8.68999 22.196 8.68858 21.7576 8.26056L18.1807 4.76874L14.6038 8.26056C14.1653 8.68858 13.453 8.68999 13.0128 8.26374Z" fill="#050B20"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M6.67514 14.1617C7.53846 13.029 8.94983 12.4627 11.5483 12.2298C12.167 12.1744 12.6223 11.6418 12.5652 11.0403C12.5082 10.4388 11.9604 9.99612 11.3417 10.0516C8.57018 10.2999 6.32154 10.9514 4.86737 12.8593C3.47319 14.6886 3 17.4445 3 21.3491C3 26.5258 3.83481 29.7088 6.56991 31.3421C7.8735 32.1207 9.48795 32.4648 11.3361 32.6319C13.177 32.7984 15.3885 32.7984 17.9526 32.7984H18.0474C20.6115 32.7984 22.8231 32.7984 24.6639 32.6319C26.5121 32.4648 28.1265 32.1207 29.4302 31.3421C32.1653 29.7088 33 26.5258 33 21.3491C33 17.4445 32.5268 14.6886 31.1327 12.8593C29.6784 10.9514 27.4299 10.2999 24.6582 10.0516C24.0396 9.99612 23.4918 10.4388 23.4348 11.0403C23.3777 11.6418 23.8331 12.1744 24.4518 12.2298C27.0501 12.4627 28.4616 13.029 29.3249 14.1617C30.2483 15.3731 30.75 17.4807 30.75 21.3491C30.75 26.5279 29.8523 28.5227 28.2524 29.4782C27.3885 29.9942 26.1848 30.2974 24.4554 30.4539C22.7303 30.6099 20.6208 30.6109 18 30.6109C15.3792 30.6109 13.2698 30.6099 11.5445 30.4539C9.81518 30.2974 8.6115 29.9942 7.74759 29.4782C6.14769 28.5227 5.25 26.5279 5.25 21.3491C5.25 17.4807 5.75181 15.3731 6.67514 14.1617Z" fill="#050B20"/>
                      </svg>
                      <span className="text-[15px] font-medium text-[#050B20] font-['DM_Sans']">Upload</span>
                    </div>
                  </div>

                  {/* File requirements */}
                  <p className="text-[15px] text-[#050B20] font-['DM_Sans'] leading-[26px]">
                    Max file size is 1MB, Minimum dimension: 330x300 And Suitable files are .jpg & .png
                  </p>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-[#E1E1E1] my-8"></div>

                {/* Video Link Section */}
                <div>
                  <h4 className="text-[16px] font-medium text-[#050B20] font-['DM_Sans'] mb-4">Video link</h4>

                  {/* Video input field */}
                  <div className="w-full h-[60px] bg-white rounded-xl border border-[#E1E1E1] relative">
                    <label
                      htmlFor="video-link-input"
                      className="absolute top-2.5 left-4 text-[13px] text-[#818181] font-['DM_Sans'] pointer-events-none"
                    >
                      Video Link
                    </label>
                    <input
                      id="video-link-input"
                      type="url"
                      value={priceColorStep4.videoLink}
                      onChange={(e) => handlePriceColorStep4Change('videoLink', e.target.value)}
                      placeholder="#"
                      className="w-full h-full pt-6 px-4 pb-2 bg-transparent border-none outline-none text-[15px] text-[#050B20] font-['DM_Sans'] focus:ring-0"
                    />
                  </div>

                  <p className="text-[15px] text-[#050B20] font-['DM_Sans'] leading-[26px] mt-4">
                    Enter Youtube or Vimeo url.
                  </p>
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
