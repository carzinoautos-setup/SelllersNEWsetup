import { DashboardLayout } from "../components/DashboardLayout";
import React, { useState, useEffect } from "react";
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
          <span className="text-[18px] font-medium text-[#050B20] font-['Albert_Sans']">
            {title}
          </span>
          <span
            className={`text-[#E82121] transform transition-transform duration-200 ${isOpen ? "rotate-90" : ""}`}
          >
            {/* Chevron right */}
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 6L15 12L9 18"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>

        <div className={`${isOpen ? "block" : "hidden"} md:block`}>
          {children}
        </div>
      </div>
    );
  }

  // Vehicle details form state
  const [vehicleDetails, setVehicleDetails] = useState({
    vin: "",
    year: "",
    make: "",
    model: "",
    trim: "",
    condition: "",
    isCertified: "",
    mileage: "",
    titleStatus: "",
    stockNumber: "",
  });

  const currentYear = new Date().getFullYear();
  const yearOptions = Array.from({ length: 40 }, (_, i) =>
    String(currentYear - i),
  );

  // Vehicle details Step 3 form state
  const [vehicleDetailsStep3, setVehicleDetailsStep3] = useState({
    bodyType: "",
    doors: "",
    transmission: "",
    transmissionSpeed: "",
    cylinders: "",
    engineSize: "",
    driveTrain: "",
    fuelType: "",
    mpgCity: "",
    mpgHwy: "",
  });

  // Price & Color Step 4 form state
  const [priceColorStep4, setPriceColorStep4] = useState({
    price: "",
    listingStatus: "",
    exteriorColor: "",
    interiorColor: "",
    description: "",
    photos: [] as string[],
    videoLink: "",
  });

  const handleVehicleDetailChange = (field: string, value: string) => {
    setVehicleDetails((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleVehicleDetailStep3Change = (field: string, value: string) => {
    setVehicleDetailsStep3((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handlePriceColorStep4Change = (field: string, value: string) => {
    setPriceColorStep4((prev) => ({
      ...prev,
      [field]: value,
    }));
  };
  // Photos state and handlers
  const [photos, setPhotos] = useState<Array<{ id: string; url: string }>>([
    {
      id: "p1",
      url: "https://api.builder.io/api/v1/image/assets/TEMP/17364dea3aebc276610289047962487f1a2df1d1?width=388",
    },
    {
      id: "p2",
      url: "https://api.builder.io/api/v1/image/assets/TEMP/5d9c53e6b9a8bf3b47c2c51007652c01eae8813f?width=388",
    },
    {
      id: "p3",
      url: "https://api.builder.io/api/v1/image/assets/TEMP/c499ce7b45d93ac2d48070e28248e40d691abe94?width=388",
    },
    {
      id: "p4",
      url: "https://api.builder.io/api/v1/image/assets/TEMP/4d33bb1bb9d408e53a453b57a7468aa4184698de?width=388",
    },
    {
      id: "p5",
      url: "https://api.builder.io/api/v1/image/assets/TEMP/46078d73e15bf45f396065949e8fee2cc555c17a?width=388",
    },
  ]);
  const [featurePhotoId, setFeaturePhotoId] = useState<string | null>("p1");

  const addPhotoFromFile = (file: File) => {
    if (!file) return;
    if (file.size > 1024 * 1024) {
      alert("File is too large. Max size is 1MB.");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      const url = String(reader.result);
      const newPhoto = {
        id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        url,
      };
      setPhotos((prev) => [...prev, newPhoto]);
    };
    reader.readAsDataURL(file);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;
    const remaining = Math.max(0, 15 - photos.length);
    if (files.length > remaining) {
      alert(`You can upload up to 15 photos. You can add ${remaining} more.`);
    }
    files.slice(0, remaining).forEach((file) => addPhotoFromFile(file));
    e.currentTarget.value = "";
  };

  const deletePhoto = (id: string) => {
    setPhotos((prev) => {
      const next = prev.filter((p) => p.id !== id);
      if (featurePhotoId === id) {
        setFeaturePhotoId(next[0]?.id ?? null);
      }
      return next;
    });
  };

  // Selectable options state
  const [selectedOptions, setSelectedOptions] = useState<string[]>([
    "features:Remote Start",
    "interior:Heated Seats",
    "exterior:LED Headlights",
    "safety:Airbag - Passenger",
    "technology:Bluetooth",
  ]);

  const toggleOption = (key: string) => {
    setSelectedOptions((prev) =>
      prev.includes(key) ? prev.filter((p) => p !== key) : [...prev, key],
    );
  };

  const onDragStart = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    e.dataTransfer.setData("text/plain", String(index));
    e.dataTransfer.effectAllowed = "move";
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    e.preventDefault();
    const fromIndex = Number(e.dataTransfer.getData("text/plain"));
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
        <div className="w-full max-w-[1290px] mx-auto pt-[10px] px-4 sm:px-6 lg:px-8 xl:px-[60px] pb-[32px]">
          {/* VIN Entry Form - Responsive */}
          <section className="w-full bg-white pt-0 px-0 pb-5 mb-8">
            <div className="mb-6" />
              <div className="max-w-[1200px] mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start justify-start">
                {/* Left: Text + Form */}
                <div className="order-1 md:order-1 md:col-span-8">
                  <div className="space-y-4">
                    <h2 className="text-[24px] font-semibold text-[#24272C] leading-[32px]">
                      Start by entering the vin number
                    </h2>
                    <div>
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
                          onChange={(v) => handleVehicleDetailChange("year", v)}
                          placeholder="Select Year"
                          className="mt-1 w-full h-[60px] rounded-xl border border-[#E1E1E1] px-4 text-[15px] text-[#050B20] bg-white outline-none focus:border-[#E82121] focus:ring-0"
                        />
                      </label>

                      <label className="block">
                        <span className="text-[13px] text-[#818181]">
                          Enter your Vin #
                        </span>
                        <input
                          aria-label="Vin#"
                          type="text"
                          placeholder="Enter Vin#"
                          value={vehicleDetails.vin}
                          onChange={(e) =>
                            handleVehicleDetailChange("vin", e.target.value)
                          }
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
              <div
                className="bg-white rounded-lg p-8"
                style={{ border: "0.8px solid rgba(171,171,171,1)" }}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
                  {/* VIN# Field */}
                  <FormField
                    label="Vin#"
                    value={vehicleDetails.vin}
                    onChange={(value) =>
                      handleVehicleDetailChange("vin", value)
                    }
                    placeholder="Enter Vin#"
                    className="xl:col-span-1"
                  />

                  {/* Year Field */}
                  <FormField
                    label="Year"
                    value={vehicleDetails.year}
                    onChange={(value) =>
                      handleVehicleDetailChange("year", value)
                    }
                    placeholder="Enter Year"
                  />

                  {/* Make Field */}
                  <FormField
                    label="Make"
                    value={vehicleDetails.make}
                    onChange={(value) =>
                      handleVehicleDetailChange("make", value)
                    }
                    type="select"
                    options={[
                      "Toyota",
                      "Honda",
                      "Ford",
                      "BMW",
                      "Mercedes-Benz",
                      "Audi",
                      "Volkswagen",
                      "Nissan",
                      "Hyundai",
                      "Kia",
                    ]}
                    className="xl:col-span-2"
                  />

                  {/* Model Field */}
                  <FormField
                    label="Model"
                    value={vehicleDetails.model}
                    onChange={(value) =>
                      handleVehicleDetailChange("model", value)
                    }
                    type="select"
                    options={[
                      "Camry",
                      "Corolla",
                      "Prius",
                      "RAV4",
                      "Highlander",
                      "Sienna",
                      "Tacoma",
                      "Tundra",
                    ]}
                  />

                  {/* Trim Field */}
                  <FormField
                    label="Trim"
                    value={vehicleDetails.trim}
                    onChange={(value) =>
                      handleVehicleDetailChange("trim", value)
                    }
                    placeholder="Select Trim"
                  />

                  {/* Condition Field */}
                  <FormField
                    label="Condition"
                    value={vehicleDetails.condition}
                    onChange={(value) =>
                      handleVehicleDetailChange("condition", value)
                    }
                    type="select"
                    options={[
                      "New",
                      "Used",
                      "Certified Pre-Owned",
                      "For Parts",
                    ]}
                  />

                  {/* Is Certified Field */}
                  <FormField
                    label="Is certified"
                    value={vehicleDetails.isCertified}
                    onChange={(value) =>
                      handleVehicleDetailChange("isCertified", value)
                    }
                    type="select"
                    options={["Yes", "No"]}
                  />

                  {/* Mileage Field */}
                  <FormField
                    label="Mileage"
                    value={vehicleDetails.mileage}
                    onChange={(value) =>
                      handleVehicleDetailChange("mileage", value)
                    }
                    placeholder="Enter Miles"
                  />

                  {/* Title Status Field */}
                  <FormField
                    label="Title Status"
                    value={vehicleDetails.titleStatus}
                    onChange={(value) =>
                      handleVehicleDetailChange("titleStatus", value)
                    }
                    type="select"
                    options={["Clean", "Salvage", "Rebuilt", "Lemon", "Flood"]}
                  />

                  {/* Stock# Field */}
                  <FormField
                    label="Stock#"
                    value={vehicleDetails.stockNumber}
                    onChange={(value) =>
                      handleVehicleDetailChange("stockNumber", value)
                    }
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
              <div
                className="bg-white rounded-lg p-8"
                style={{ border: "0.8px solid rgba(171,171,171,1)" }}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
                  {/* Body Type Field */}
                  <FormField
                    label="Body Type"
                    value={vehicleDetailsStep3.bodyType}
                    onChange={(value) =>
                      handleVehicleDetailStep3Change("bodyType", value)
                    }
                    type="select"
                    options={[
                      "Sedan",
                      "SUV",
                      "Truck",
                      "Coupe",
                      "Convertible",
                      "Hatchback",
                      "Wagon",
                      "Van",
                      "Crossover",
                    ]}
                  />

                  {/* Doors Field */}
                  <FormField
                    label="Doors"
                    value={vehicleDetailsStep3.doors}
                    onChange={(value) =>
                      handleVehicleDetailStep3Change("doors", value)
                    }
                    type="select"
                    options={["2", "3", "4", "5"]}
                  />

                  {/* Transmission Field */}
                  <FormField
                    label="Transmission"
                    value={vehicleDetailsStep3.transmission}
                    onChange={(value) =>
                      handleVehicleDetailStep3Change("transmission", value)
                    }
                    type="select"
                    options={["Manual", "Automatic", "CVT", "Semi-Automatic"]}
                  />

                  {/* Cylinders Field */}
                  <FormField
                    label="Cylinders"
                    value={vehicleDetailsStep3.cylinders}
                    onChange={(value) =>
                      handleVehicleDetailStep3Change("cylinders", value)
                    }
                    placeholder="Select Cylinders"
                  />

                  {/* Engine Size Field */}
                  <FormField
                    label="Engine Size (Liters)"
                    value={vehicleDetailsStep3.engineSize}
                    onChange={(value) =>
                      handleVehicleDetailStep3Change("engineSize", value)
                    }
                    placeholder="Enter engine size"
                  />

                  {/* Drive Train Field */}
                  <FormField
                    label="Drive Train"
                    value={vehicleDetailsStep3.driveTrain}
                    onChange={(value) =>
                      handleVehicleDetailStep3Change("driveTrain", value)
                    }
                    type="select"
                    options={[
                      "Front-Wheel Drive",
                      "Rear-Wheel Drive",
                      "All-Wheel Drive",
                      "4-Wheel Drive",
                    ]}
                  />

                  {/* Fuel Type Field */}
                  <FormField
                    label="Fuel Type"
                    value={vehicleDetailsStep3.fuelType}
                    onChange={(value) =>
                      handleVehicleDetailStep3Change("fuelType", value)
                    }
                    type="select"
                    options={[
                      "Gasoline",
                      "Diesel",
                      "Hybrid",
                      "Electric",
                      "Plug-in Hybrid",
                      "Natural Gas",
                    ]}
                  />

                  {/* MPG City Field */}
                  <FormField
                    label="MPG Gallon City"
                    value={vehicleDetailsStep3.mpgCity}
                    onChange={(value) =>
                      handleVehicleDetailStep3Change("mpgCity", value)
                    }
                    type="select"
                    options={[
                      "15-20",
                      "20-25",
                      "25-30",
                      "30-35",
                      "35-40",
                      "40+",
                    ]}
                  />

                  {/* MPG HWY Field */}
                  <FormField
                    label="MPG Gallon HWY"
                    value={vehicleDetailsStep3.mpgHwy}
                    onChange={(value) =>
                      handleVehicleDetailStep3Change("mpgHwy", value)
                    }
                    type="select"
                    options={[
                      "20-25",
                      "25-30",
                      "30-35",
                      "35-40",
                      "40-45",
                      "45+",
                    ]}
                  />

                  {/* Transmission Speed Field */}
                  <FormField
                    label="Transmission speed"
                    value={vehicleDetailsStep3.transmissionSpeed}
                    onChange={(value) =>
                      handleVehicleDetailStep3Change("transmissionSpeed", value)
                    }
                    type="select"
                    options={[
                      "3-Speed",
                      "4-Speed",
                      "5-Speed",
                      "6-Speed",
                      "7-Speed",
                      "8-Speed",
                      "9-Speed",
                      "10-Speed",
                    ]}
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
              <div
                className="bg-white rounded-lg p-8"
                style={{ border: "0.8px solid rgba(178,178,178,1)" }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                  {/* Features Column */}
                  <CollapsibleSection
                    title={"Features"}
                    id={"features"}
                    isOpen={openSections.features}
                    onToggle={() => handleToggle("features")}
                  >
                    <h4 className="hidden md:block text-[18px] font-medium text-[#050B20] font-['Albert_Sans'] mb-6 leading-[19px]">
                      Features
                    </h4>
                    <div className="flex flex-col gap-4">
                      {[
                        "Navigation System",
                        "Remote Start",
                        "Keyless Entry",
                        "Hands-Free",
                        "Power Folding Side Mirrors",
                        "Rain-Sensing Wipers",
                        "Homelink",
                        "Split-Folding Rear Seats",
                        "Adjustable Steering Column",
                      ].map((opt) => {
                        const key = `features:${opt}`;
                        const selected = selectedOptions.includes(key);
                        return (
                          <label
                            key={key}
                            onClick={() => toggleOption(key)}
                            className="flex items-center gap-3 cursor-pointer"
                          >
                            <input
                              type="checkbox"
                              className="hidden"
                              checked={selected}
                              readOnly
                            />
                            <div
                              className={
                                selected
                                  ? "w-5 h-5 rounded bg-[#E82121] flex items-center justify-center"
                                  : "w-5 h-5 border border-[#B2B2B2] rounded bg-white flex items-center justify-center"
                              }
                            >
                              {selected && (
                                <svg
                                  width="10"
                                  height="10"
                                  viewBox="0 0 10 11"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M9.76764 2.39244C9.45824 2.08263 8.95582 2.08282 8.64601 2.39244L3.59787 7.44077L1.35419 5.19711C1.04438 4.8873 0.542174 4.8873 0.23236 5.19711C-0.0774534 5.50693 -0.0774534 6.00913 0.23236 6.31894L3.03684 9.12342C3.19165 9.27823 3.39464 9.35583 3.59765 9.35583C3.80067 9.35583 4.00386 9.27843 4.15867 9.12342L9.76764 3.51425C10.0775 3.20465 10.0775 2.70224 9.76764 2.39244Z"
                                    fill="white"
                                  />
                                </svg>
                              )}
                            </div>
                            <span className="text-[16px] md:text-[12px] text-[#050B20] font-['Albert_Sans'] leading-[25px]">
                              {opt}
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  </CollapsibleSection>

                  {/* Interior Column */}
                  <CollapsibleSection
                    title={"Interior"}
                    id={"interior"}
                    isOpen={openSections.interior}
                    onToggle={() => handleToggle("interior")}
                  >
                    <h4 className="hidden md:block text-[18px] font-medium text-[#050B20] font-['Albert_Sans'] mb-6 leading-[19px]">
                      Interior
                    </h4>
                    <div className="flex flex-col gap-4">
                      {[
                        "Leather Seats",
                        "Heated Seats",
                        "Sunroof /Panoramic Roof",
                        "Heated Steering Wheel",
                        "Touchscreen Display",
                        "Ventilated / Cooled Seats",
                        "Memory Driver Seat Settings",
                        "Ambient Interior Lighting",
                        "Rubber Flooring",
                        "Wood or Aluminum Trim",
                      ].map((opt) => {
                        const key = `interior:${opt}`;
                        const selected = selectedOptions.includes(key);
                        return (
                          <label
                            key={key}
                            onClick={() => toggleOption(key)}
                            className="flex items-center gap-3 cursor-pointer"
                          >
                            <input
                              type="checkbox"
                              className="hidden"
                              checked={selected}
                              readOnly
                            />
                            <div
                              className={
                                selected
                                  ? "w-5 h-5 rounded bg-[#E82121] flex items-center justify-center"
                                  : "w-5 h-5 border border-[#B2B2B2] rounded bg-white flex items-center justify-center"
                              }
                            >
                              {selected && (
                                <svg
                                  width="10"
                                  height="10"
                                  viewBox="0 0 10 11"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M9.76764 2.39244C9.45824 2.08263 8.95582 2.08282 8.64601 2.39244L3.59787 7.44077L1.35419 5.19711C1.04438 4.8873 0.542174 4.8873 0.23236 5.19711C-0.0774534 5.50693 -0.0774534 6.00913 0.23236 6.31894L3.03684 9.12342C3.19165 9.27823 3.39464 9.35583 3.59765 9.35583C3.80067 9.35583 4.00386 9.27843 4.15867 9.12342L9.76764 3.51425C10.0775 3.20465 10.0775 2.70224 9.76764 2.39244Z"
                                    fill="white"
                                  />
                                </svg>
                              )}
                            </div>
                            <span className="text-[16px] md:text-[12px] text-[#050B20] font-['Albert_Sans'] leading-[25px]">
                              {opt}
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  </CollapsibleSection>

                  {/* Exterior Column */}
                  <CollapsibleSection
                    title={"Exterior"}
                    id={"exterior"}
                    isOpen={openSections.exterior}
                    onToggle={() => handleToggle("exterior")}
                  >
                    <h4 className="hidden md:block text-[18px] font-medium text-[#050B20] font-['Albert_Sans'] mb-6 leading-[19px]">
                      Exterior
                    </h4>
                    <div className="flex flex-col gap-4">
                      {[
                        "Alloy Wheels",
                        "LED Headlights",
                        "Fog Lights",
                        "Roof Rack",
                        "Tinted Windows",
                        "Power Tailgate",
                        "Tow Hitch / Towing Package",
                        "Running Boards",
                        "Body Kit/Sport Package",
                        "Rear Spoiler",
                      ].map((opt) => {
                        const key = `exterior:${opt}`;
                        const selected = selectedOptions.includes(key);
                        return (
                          <label
                            key={key}
                            onClick={() => toggleOption(key)}
                            className="flex items-center gap-3 cursor-pointer"
                          >
                            <input
                              type="checkbox"
                              className="hidden"
                              checked={selected}
                              readOnly
                            />
                            <div
                              className={
                                selected
                                  ? "w-5 h-5 rounded bg-[#E82121] flex items-center justify-center"
                                  : "w-5 h-5 border border-[#B2B2B2] rounded bg-white flex items-center justify-center"
                              }
                            >
                              {selected && (
                                <svg
                                  width="10"
                                  height="10"
                                  viewBox="0 0 10 11"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M9.76764 2.39244C9.45824 2.08263 8.95582 2.08282 8.64601 2.39244L3.59787 7.44077L1.35419 5.19711C1.04438 4.8873 0.542174 4.8873 0.23236 5.19711C-0.0774534 5.50693 -0.0774534 6.00913 0.23236 6.31894L3.03684 9.12342C3.19165 9.27823 3.39464 9.35583 3.59765 9.35583C3.80067 9.35583 4.00386 9.27843 4.15867 9.12342L9.76764 3.51425C10.0775 3.20465 10.0775 2.70224 9.76764 2.39244Z"
                                    fill="white"
                                  />
                                </svg>
                              )}
                            </div>
                            <span className="text-[16px] md:text-[12px] text-[#050B20] font-['Albert_Sans'] leading-[25px]">
                              {opt}
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  </CollapsibleSection>

                  {/* Safety Options Column */}
                  <CollapsibleSection
                    title={"Safety Options"}
                    id={"safety"}
                    isOpen={openSections.safety}
                    onToggle={() => handleToggle("safety")}
                  >
                    <h4 className="hidden md:block text-[18px] font-medium text-[#050B20] font-['Albert_Sans'] mb-6 leading-[19px]">
                      Safety Options
                    </h4>
                    <div className="flex flex-col gap-4">
                      {[
                        "Airbags",
                        "Airbag - Passenger",
                        "Anti-lock Braking System",
                        "Backup Camera",
                        "Lane Departure Warning",
                        "Adaptive Cruise Control",
                        "Parking Sensors",
                        "Automatic High Beams",
                        "Tire Pressure Monitoring System",
                        "Electronic Stability Control",
                      ].map((opt) => {
                        const key = `safety:${opt}`;
                        const selected = selectedOptions.includes(key);
                        return (
                          <label
                            key={key}
                            onClick={() => toggleOption(key)}
                            className="flex items-center gap-3 cursor-pointer"
                          >
                            <input
                              type="checkbox"
                              className="hidden"
                              checked={selected}
                              readOnly
                            />
                            <div
                              className={
                                selected
                                  ? "w-5 h-5 rounded bg-[#E82121] flex items-center justify-center"
                                  : "w-5 h-5 border border-[#B2B2B2] rounded bg-white flex items-center justify-center"
                              }
                            >
                              {selected && (
                                <svg
                                  width="10"
                                  height="10"
                                  viewBox="0 0 10 11"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M9.76764 2.39244C9.45824 2.08263 8.95582 2.08282 8.64601 2.39244L3.59787 7.44077L1.35419 5.19711C1.04438 4.8873 0.542174 4.8873 0.23236 5.19711C-0.0774534 5.50693 -0.0774534 6.00913 0.23236 6.31894L3.03684 9.12342C3.19165 9.27823 3.39464 9.35583 3.59765 9.35583C3.80067 9.35583 4.00386 9.27843 4.15867 9.12342L9.76764 3.51425C10.0775 3.20465 10.0775 2.70224 9.76764 2.39244Z"
                                    fill="white"
                                  />
                                </svg>
                              )}
                            </div>
                            <span className="text-[16px] md:text-[12px] text-[#050B20] font-['Albert_Sans'] leading-[25px]">
                              {opt}
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  </CollapsibleSection>

                  {/* Technology Column */}
                  <CollapsibleSection
                    title={"Technology"}
                    id={"technology"}
                    isOpen={openSections.technology}
                    onToggle={() => handleToggle("technology")}
                  >
                    <h4 className="hidden md:block text-[18px] font-medium text-[#050B20] font-['Albert_Sans'] mb-6 leading-[19px]">
                      Technology
                    </h4>
                    <div className="flex flex-col gap-4">
                      {[
                        "Apple CarPlay/Android Auto",
                        "Bluetooth",
                        "Touchscreen Display",
                        "Wireless Phone Connectivity",
                        "Rear Seat Entertainment Screens",
                        "DVD Player",
                        "Premium Sound System",
                        "Steering Wheel Audio Controls",
                        "Wi-Fi Hotspot Capability",
                        "Voice Command System",
                      ].map((opt) => {
                        const key = `technology:${opt}`;
                        const selected = selectedOptions.includes(key);
                        return (
                          <label
                            key={key}
                            onClick={() => toggleOption(key)}
                            className="flex items-center gap-3 cursor-pointer"
                          >
                            <input
                              type="checkbox"
                              className="hidden"
                              checked={selected}
                              readOnly
                            />
                            <div
                              className={
                                selected
                                  ? "w-5 h-5 rounded bg-[#E82121] flex items-center justify-center"
                                  : "w-5 h-5 border border-[#B2B2B2] rounded bg-white flex items-center justify-center"
                              }
                            >
                              {selected && (
                                <svg
                                  width="10"
                                  height="10"
                                  viewBox="0 0 10 11"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M9.76764 2.39244C9.45824 2.08263 8.95582 2.08282 8.64601 2.39244L3.59787 7.44077L1.35419 5.19711C1.04438 4.8873 0.542174 4.8873 0.23236 5.19711C-0.0774534 5.50693 -0.0774534 6.00913 0.23236 6.31894L3.03684 9.12342C3.19165 9.27823 3.39464 9.35583 3.59765 9.35583C3.80067 9.35583 4.00386 9.27843 4.15867 9.12342L9.76764 3.51425C10.0775 3.20465 10.0775 2.70224 9.76764 2.39244Z"
                                    fill="white"
                                  />
                                </svg>
                              )}
                            </div>
                            <span className="text-[16px] md:text-[12px] text-[#050B20] font-['Albert_Sans'] leading-[25px]">
                              {opt}
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  </CollapsibleSection>

                  {/* End columns */}
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

              <div
                className="bg-white rounded-lg p-8"
                style={{ border: "0.8px solid rgba(171,171,171,1)" }}
              >
                <div className="grid grid-cols-1 md:grid-cols-4 gap-7">
                  <FormField
                    label="Price"
                    value={priceColorStep4.price}
                    onChange={(value) =>
                      handlePriceColorStep4Change("price", value)
                    }
                    placeholder="Set your price"
                  />

                  <FormField
                    label="Listing Status"
                    value={priceColorStep4.listingStatus}
                    onChange={(value) =>
                      handlePriceColorStep4Change("listingStatus", value)
                    }
                    type="select"
                    options={["Active", "Inactive", "Pending", "Sold", "Draft"]}
                  />

                  <FormField
                    label="Exterior Color"
                    value={priceColorStep4.exteriorColor}
                    onChange={(value) =>
                      handlePriceColorStep4Change("exteriorColor", value)
                    }
                    type="select"
                    options={[
                      "Black",
                      "White",
                      "Silver",
                      "Gray",
                      "Red",
                      "Blue",
                      "Green",
                      "Brown",
                      "Gold",
                      "Orange",
                      "Yellow",
                      "Purple",
                    ]}
                  />

                  <FormField
                    label="Interior Color"
                    value={priceColorStep4.interiorColor}
                    onChange={(value) =>
                      handlePriceColorStep4Change("interiorColor", value)
                    }
                    type="select"
                    options={[
                      "Black",
                      "Beige",
                      "Gray",
                      "Brown",
                      "Tan",
                      "White",
                      "Red",
                      "Blue",
                    ]}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Upload Photo Section (New Design) */}
          <section className="w-full mb-8">
            <div className="max-w-[1540px] mx-auto">
              <div className="flex flex-col gap-5 rounded-2xl border border-[#EDEDED] bg-white p-[30px]">
                {/* Upload Section */}
                <div className="flex flex-col gap-5">
                  <h3 className="text-2xl font-medium text-[#24272C] font-['Albert_Sans']">
                    Upload Photo
                  </h3>

                  {/* Upload Area */}
                  <div className="flex items-center justify-center w-full py-12 px-4 md:py-16 lg:py-20 border-2 border-dashed border-[#E5E5EA] rounded-2xl bg-white relative">
                    <div className="flex flex-col items-center gap-4 w-full max-w-[220px]">
                      {/* Select Photos Button */}
                      <button
                        type="button"
                        onClick={() =>
                          document.getElementById("upload-input")?.click()
                        }
                        className="flex items-center justify-center gap-2.5 w-full h-[50px] px-4 bg-[#E82121] rounded-[14px] text-white font-['Albert_Sans'] font-medium text-base leading-[140%] hover:bg-[#d41d1d] transition-colors"
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 21 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.375 13.125L6.67417 8.82583C6.84828 8.65172 7.05498 8.51361 7.28246 8.41938C7.50995 8.32515 7.75377 8.27665 8 8.27665C8.24623 8.27665 8.49005 8.32515 8.71754 8.41938C8.94502 8.51361 9.15172 8.65172 9.32583 8.82583L13.625 13.125M12.375 11.875L13.5492 10.7008C13.7233 10.5267 13.93 10.3886 14.1575 10.2944C14.385 10.2001 14.6288 10.1516 14.875 10.1516C15.1212 10.1516 15.365 10.2001 15.5925 10.2944C15.82 10.3886 16.0267 10.5267 16.2008 10.7008L18.625 13.125M3.625 16.25H17.375C17.7065 16.25 18.0245 16.1183 18.2589 15.8839C18.4933 15.6495 18.625 15.3315 18.625 15V5C18.625 4.66848 18.4933 4.35054 18.2589 4.11612C18.0245 3.8817 17.7065 3.75 17.375 3.75H3.625C3.29348 3.75 2.97554 3.8817 2.74112 4.11612C2.5067 4.35054 2.375 4.66848 2.375 5V15C2.375 15.3315 2.5067 15.6495 2.74112 15.8839C2.97554 16.1183 3.29348 16.25 3.625 16.25ZM12.375 6.875H12.3817V6.88167H12.375V6.875ZM12.6875 6.875C12.6875 6.95788 12.6546 7.03737 12.596 7.09597C12.5374 7.15458 12.4579 7.1875 12.375 7.1875C12.2921 7.1875 12.2126 7.15458 12.154 7.09597C12.0954 7.03737 12.0625 6.95788 12.0625 6.875C12.0625 6.79212 12.0954 6.71263 12.154 6.65403C12.2126 6.59542 12.2921 6.5625 12.375 6.5625C12.4579 6.5625 12.5374 6.59542 12.596 6.65403C12.6546 6.71263 12.6875 6.79212 12.6875 6.875Z"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        Select photos
                      </button>

                      {/* Help Text */}
                      <div className="text-center font-['Albert_Sans'] text-sm leading-[140%]">
                        <span className="text-[#24272C]">
                          or drag photos here
                        </span>
                        <br />
                        <span className="text-[#696665]">
                          (Up to 15 photos)
                        </span>
                      </div>
                    </div>

                    {/* Hidden file input */}
                    <input
                      id="upload-input"
                      type="file"
                      multiple
                      accept="image/*"
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      onChange={handleFileInput}
                    />
                  </div>
                </div>

                {/* Preview Section */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 w-full">
                  {photos.map((photo, index) => (
                    <div
                      key={photo.id}
                      draggable
                      onDragStart={(e) => onDragStart(e, index)}
                      onDragOver={(e) => e.preventDefault()}
                      onDrop={(e) => onDrop(e, index)}
                      className="relative w-full h-[109px]"
                    >
                      <img
                        src={photo.url}
                        alt={`Vehicle photo ${index + 1}`}
                        className="w-full h-full object-cover rounded-2xl"
                      />

                      {/* Feature Toggle */}
                      <div className="absolute top-2 left-2">
                        {featurePhotoId === photo.id ? (
                          <div className="w-7 h-7 bg-[#E82121] rounded-full flex items-center justify-center text-white">
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                        ) : (
                          <button
                            type="button"
                            onClick={() => setFeaturePhotoId(photo.id)}
                            className="w-7 h-7 bg-white rounded-full flex items-center justify-center border"
                            aria-label="Set as feature"
                          >
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                                stroke="#050B20"
                                strokeWidth="1"
                                fill="none"
                              />
                            </svg>
                          </button>
                        )}
                      </div>

                      {/* Delete Button */}
                      <div className="absolute top-2 right-2 w-[34px] h-[34px]">
                        <div className="w-full h-full rounded-full bg-black opacity-50 absolute"></div>
                        <button
                          type="button"
                          onClick={() => deletePhoto(photo.id)}
                          className="absolute inset-0 flex items-center justify-center"
                          aria-label="Delete photo"
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.82667 6.00035L9.596 12.0003M6.404 12.0003L6.17333 6.00035M12.8187 3.86035C13.0467 3.89501 13.2733 3.93168 13.5 3.97101M12.8187 3.86035L12.1067 13.1157C12.0776 13.4925 11.9074 13.8445 11.63 14.1012C11.3527 14.3579 10.9886 14.5005 10.6107 14.5003H5.38933C5.0114 14.5005 4.64735 14.3579 4.36999 14.1012C4.09262 13.8445 3.92239 13.4925 3.89333 13.1157L3.18133 3.86035M12.8187 3.86035C12.0492 3.74403 11.2758 3.65574 10.5 3.59568M3.18133 3.86035C2.95333 3.89435 2.72667 3.93101 2.5 3.97035M3.18133 3.86035C3.95076 3.74403 4.72416 3.65575 5.5 3.59568M10.5 3.59568V2.98501C10.5 2.19835 9.89333 1.54235 9.10667 1.51768C8.36908 1.49411 7.63092 1.49411 6.89333 1.51768C6.10667 1.54235 5.5 2.19901 5.5 2.98501V3.59568M10.5 3.59568C8.83581 3.46707 7.16419 3.46707 5.5 3.59568"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
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
