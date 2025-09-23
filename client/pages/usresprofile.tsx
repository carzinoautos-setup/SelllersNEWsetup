import { useEffect, useState } from "react";
import { DashboardLayout } from "../components/DashboardLayout";

export function UsersProfileCard() {
  const [sellerName, setSellerName] = useState("");
  const [city, setCity] = useState("");
  const [stateVal, setStateVal] = useState("");
  const [zip, setZip] = useState("");
  const [emailLead, setEmailLead] = useState("");
  const [accountEmail, setAccountEmail] = useState("");
  const [listPhone, setListPhone] = useState(true);
  const [sellerPhone, setSellerPhone] = useState("");
  const [address, setAddress] = useState("");
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");

  // Price & Color stub fields (kept from previous UI)
  const [bodyType, setBodyType] = useState("");
  const [doors, setDoors] = useState("");
  const [transmission, setTransmission] = useState("");
  const [cylinders, setCylinders] = useState("");
  const [engineSize, setEngineSize] = useState("");
  const [fuelType, setFuelType] = useState("");

  // Persist to localStorage so user work is not lost during edits
  useEffect(() => {
    const saved = localStorage.getItem("usresprofile.draft");
    if (saved) {
      try {
        const data = JSON.parse(saved);
        setSellerName(data.sellerName || "");
        setCity(data.city || "");
        setStateVal(data.stateVal || "");
        setZip(data.zip || "");
        setEmailLead(data.emailLead || "");
        setAccountEmail(data.accountEmail || "");
        setListPhone(typeof data.listPhone === 'boolean' ? data.listPhone : true);
        setSellerPhone(data.sellerPhone || "");
        setAddress(data.address || "");
        setLongitude(data.longitude || "");
        setLatitude(data.latitude || "");
        setBodyType(data.bodyType || "");
        setDoors(data.doors || "");
        setTransmission(data.transmission || "");
        setCylinders(data.cylinders || "");
        setEngineSize(data.engineSize || "");
        setFuelType(data.fuelType || "");
      } catch (e) {
        console.warn("Failed to parse usresprofile draft:", e);
      }
    }
  }, []);

  useEffect(() => {
    const data = {
      sellerName,
      city,
      stateVal,
      zip,
      emailLead,
      accountEmail,
      listPhone,
      sellerPhone,
      address,
      longitude,
      latitude,
      bodyType,
      doors,
      transmission,
      cylinders,
      engineSize,
      fuelType,
    };
    localStorage.setItem("usresprofile.draft", JSON.stringify(data));
  }, [sellerName, city, stateVal, zip, emailLead, accountEmail, listPhone, sellerPhone, address, longitude, latitude, bodyType, doors, transmission, cylinders, engineSize, fuelType]);

  const handleSave = () => {
    // stub: here we would send to backend. For now persist is in localStorage already
    alert("Profile saved locally. Connect to backend to persist permanently.");
  };

  const handleReset = () => {
    localStorage.removeItem("usresprofile.draft");
    setSellerName("");
    setCity("");
    setStateVal("");
    setZip("");
    setEmailLead("");
    setAccountEmail("");
    setListPhone(true);
    setSellerPhone("");
    setAddress("");
    setLongitude("");
    setLatitude("");
    setBodyType("");
    setDoors("");
    setTransmission("");
    setCylinders("");
    setEngineSize("");
    setFuelType("");
  };

  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Get Started with Carzino Section */}
      <section className="bg-white border border-[#B2B2B2] rounded-2xl p-8 shadow-sm mb-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-16">
          {/* Left Content */}
          <div className="flex-1 flex flex-col justify-between gap-6">
            {/* Heading & Description */}
            <div className="flex flex-col gap-4">
              <h2 className="text-[24px] font-bold text-[#24272C] font-['Albert_Sans']">
                Get Started with Carzino
              </h2>
              <p className="text-[15px] font-normal text-[#222] leading-7 font-['DM_Sans']">
                How do I find the VIN number for my car?<br />
                Look on your insurance cards, registration, or the paperwork from when you purchased your vehicle.
                The most common place to find a VIN is on your vehicle's dashboard, near where the dashboard meets
                the edge of the windshield on the driver's side.
              </p>
            </div>

            {/* Account Type Dropdown */}
            <div className="w-full max-w-[310px]">
              <div className="relative w-full h-[60px] rounded-xl border border-[#B2B2B2] bg-white">
                <div className="absolute left-4 top-2.5">
                  <div className="text-[13px] text-[#000] font-bold font-['Albert_Sans'] mb-1">
                    Select your Account type
                  </div>
                  <div className="text-[15px] text-[#050B20] font-normal font-['DM_Sans']">
                    Private Seller
                  </div>
                </div>
                <svg
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-2.5 h-2.5"
                  viewBox="0 0 10 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.86941 3.02782C9.68892 2.83638 9.38702 2.82925 9.19653 3.00924L4.99976 6.98505L0.803467 3.00926C0.612983 2.82878 0.311545 2.8364 0.130592 3.02784C-0.0503606 3.21879 -0.0422749 3.52023 0.148697 3.70118L4.67261 7.987C4.76404 8.07368 4.88214 8.11748 4.99976 8.11748C5.11737 8.11748 5.23594 8.07368 5.32738 7.987L9.8513 3.70118C10.0423 3.52021 10.0504 3.21879 9.86941 3.02782Z"
                    fill="#E82121"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Right Content - Upload Photo */}
          <div className="flex-shrink-0 flex flex-col items-center gap-4">
            <div className="relative">
              {/* Profile Circle with Upload Icon */}
              <div className="w-24 h-24 rounded-full border border-[#242760] bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative overflow-hidden">
                <div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                {/* Camera/Upload Icon */}
                <div className="absolute bottom-0 right-0 w-6 h-6 bg-[#E82121] rounded-full flex items-center justify-center border-2 border-white">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2h-5L9 1H4zm5 5a2 2 0 100 4 2 2 0 000-4z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Upload Photo Text */}
            <div className="text-center">
              <p className="text-[12px] text-[#111928] font-normal font-['Albert_Sans'] leading-[140%]">
                Upload Photo
              </p>
              <p className="text-[12px] text-[#111928] font-normal font-['Albert_Sans'] leading-[140%]">
                Account #: 556568995
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white border border-[#B2B2B2] rounded-2xl p-8 shadow-sm mt-8">
        <div className="text-[20px] font-semibold text-[#24272C] mb-4">Enter your Details</div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full py-5">
          <div>
            <label className="block relative">
              <span className="absolute -top-3 left-3 bg-white px-2 text-[12px] text-[#000]">Seller or dealer name</span>
              <input
                value={sellerName}
                onChange={(e) => setSellerName(e.target.value)}
                type="text"
                placeholder="Enter your full name"
                className="mt-1 w-full h-[60px] rounded-md border border-[#E1E1E1] px-4 text-[15px] text-[#050B20] bg-white outline-none focus:border-[#E82121]"
              />
            </label>
          </div>

          <div>
            <label className="block relative">
              <span className="absolute -top-3 left-3 bg-white px-2 text-[12px] text-[#000]">City</span>
              <input
                value={city}
                onChange={(e) => setCity(e.target.value)}
                type="text"
                placeholder="City"
                className="mt-1 w-full h-[60px] rounded-md border border-[#E1E1E1] px-4 text-[15px] text-[#24272C] bg-white outline-none focus:border-[#E82121]"
              />
            </label>
          </div>

          <div>
            <label className="block relative">
              <span className="absolute -top-3 left-3 bg-white px-2 text-[12px] text-[#000]">State</span>
              <input
                value={stateVal}
                onChange={(e) => setStateVal(e.target.value)}
                type="text"
                placeholder="Enter your state"
                className="mt-1 w-full h-[60px] rounded-md border border-[#E1E1E1] px-4 text-[15px] text-[#050B20] bg-white outline-none focus:border-[#E82121]"
              />
            </label>
          </div>

          <div>
            <label className="block relative">
              <span className="absolute -top-3 left-3 bg-white px-2 text-[12px] text-[#000]">Zip code</span>
              <input
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                type="text"
                placeholder="Zip code"
                className="mt-1 w-full h-[60px] rounded-md border border-[#E1E1E1] px-4 text-[15px] text-[#050B20] bg-white outline-none focus:border-[#E82121]"
              />
            </label>
          </div>

          <div>
            <label className="block relative">
              <span className="absolute -top-3 left-3 bg-white px-2 text-[12px] text-[#000]">Email lead alert address</span>
              <input
                value={emailLead}
                onChange={(e) => setEmailLead(e.target.value)}
                type="email"
                placeholder="Email address"
                className="mt-1 w-full h-[60px] rounded-md border border-[#E1E1E1] px-4 text-[15px] text-[#050B20] bg-white outline-none focus:border-[#E82121]"
              />
            </label>
          </div>

          <div>
            <label className="block relative">
              <span className="absolute -top-3 left-3 bg-white px-2 text-[12px] text-[#000]">Account holder email Address</span>
              <input
                value={accountEmail}
                onChange={(e) => setAccountEmail(e.target.value)}
                type="email"
                placeholder="Enter your email address"
                className="mt-1 w-full h-[60px] rounded-md border border-[#E1E1E1] px-4 text-[15px] text-[#050B20] bg-white outline-none focus:border-[#E82121]"
              />
            </label>
          </div>

          <div className="md:col-span-3">
            <label className="block relative">
              <span className="absolute -top-3 left-3 bg-white px-2 text-[12px] text-[#000]">List your phone# on ads</span>
              <button
                type="button"
                onClick={() => setListPhone(v => !v)}
                className="mt-1 w-full flex items-center justify-between rounded-md border border-[#E1E1E1] h-[60px] px-4 bg-white"
                aria-pressed={listPhone}
              >
                <span className="text-[15px] text-[#050B20]">{listPhone ? 'Yes' : 'No'}</span>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#10B981]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17l-5-5" stroke="#16A34A" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>

                  <svg className={`w-3 h-3 text-[#E82121] transform transition-transform ${listPhone ? 'rotate-180' : 'rotate-0'}`} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </button>
            </label>
          </div>

          <div>
            <label className="block relative">
              <span className="absolute -top-3 left-3 bg-white px-2 text-[12px] text-[#000]">Seller Phone</span>
              <input
                value={sellerPhone}
                onChange={(e) => setSellerPhone(e.target.value)}
                type="tel"
                placeholder=""
                className="mt-1 w-full h-[60px] rounded-md border border-[#E1E1E1] px-4 text-[15px] text-[#050B20] bg-white outline-none focus:border-[#E82121]"
              />
            </label>
          </div>

          <div className="md:col-span-2">
            <label className="block relative">
              <span className="absolute -top-3 left-3 bg-white px-2 text-[12px] text-[#000]">Enter your address and then select from the choices.</span>
              <input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                type="text"
                placeholder="Enter address"
                className="mt-1 w-full h-[60px] rounded-md border border-[#E1E1E1] px-4 text-[15px] text-[#050B20] bg-white outline-none focus:border-[#E82121]"
              />
            </label>
          </div>

          <div>
            <label className="block relative">
              <span className="absolute -top-3 left-3 bg-white px-2 text-[12px] text-[#000]">Longitude:</span>
              <input
                value={longitude}
                onChange={(e) => setLongitude(e.target.value)}
                type="text"
                placeholder="Longitude"
                className="mt-1 w-full h-[60px] rounded-md border border-[#E1E1E1] px-4 text-[15px] text-[#050B20] bg-white outline-none focus:border-[#E82121]"
              />
            </label>
          </div>

          <div>
            <label className="block relative">
              <span className="absolute -top-3 left-3 bg-white px-2 text-[12px] text-[#000]">Latitude</span>
              <input
                value={latitude}
                onChange={(e) => setLatitude(e.target.value)}
                type="text"
                placeholder="Latitude"
                className="mt-1 w-full h-[60px] rounded-md border border-[#E1E1E1] px-4 text-[15px] text-[#050B20] bg-white outline-none focus:border-[#E82121]"
              />
            </label>
          </div>

        </div>

        <div className="flex items-center gap-3 mt-6">
          <button onClick={handleSave} className="px-6 py-3 bg-[#CF0D0D] text-white rounded-xl">Save</button>
          <button onClick={handleReset} className="px-6 py-3 border border-[#E1E1E1] rounded-xl">Reset</button>
        </div>
      </section>

      {/* Price & Color Section - kept as in previous UI */}
      <section className="bg-white border border-[#B2B2B2] rounded-2xl p-8 mt-8 opacity-90">
        <div className="flex items-end justify-between mb-8">
          <div className="text-[24px] font-medium text-[#24272C]">Price & Color</div>
          <div className="flex items-center justify-center px-6 py-2 bg-white border border-[#CF0D0D] rounded-xl">
            <div className="text-[15px] font-medium text-[#1E1E1E]">Step 2</div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">

          <div className="relative">
            <div className="w-full h-[60px] rounded-xl border border-[#E1E1E1] bg-white relative">
              <div className="absolute left-4 top-2.5">
                <div className="text-[13px] text-[#818181] font-dm mb-1">Body Type</div>
                <div className="text-[15px] text-[#050B20] font-dm">Select Body Type</div>
              </div>
              <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-2.5 h-2.5" viewBox="0 0 10 10" fill="none">
                <path d="M9.86941 2.52782C9.68892 2.33638 9.38702 2.32925 9.19653 2.50924L4.99976 6.48505L0.803467 2.50926C0.612983 2.32878 0.311545 2.3364 0.130592 2.52784C-0.0503606 2.71879 -0.0422749 3.02023 0.148697 3.20118L4.67261 7.487C4.76404 7.57368 4.88214 7.61748 4.99976 7.61748C5.11737 7.61748 5.23594 7.57368 5.32738 7.487L9.8513 3.20118C10.0423 3.02021 10.0504 2.71879 9.86941 2.52782Z" fill="#050B20"/>
              </svg>
            </div>
          </div>

          <div className="relative">
            <div className="w-full h-[57px] rounded-xl border border-[#E1E1E1] bg-white relative">
              <div className="absolute left-4 top-2.5">
                <div className="text-[13px] text-[#818181] font-dm mb-1">Doors</div>
              </div>
              <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-2.5 h-2.5" viewBox="0 0 10 10" fill="none">
                <path d="M9.86941 2.52782C9.68892 2.33638 9.38702 2.32925 9.19653 2.50924L4.99976 6.48505L0.803467 2.50926C0.612983 2.32878 0.311545 2.3364 0.130592 2.52784C-0.0503606 2.71879 -0.0422749 3.02023 0.148697 3.20118L4.67261 7.487C4.76404 7.57368 4.88214 7.61748 4.99976 7.61748C5.11737 7.61748 5.23594 7.57368 5.32738 7.487L9.8513 3.20118C10.0423 3.02021 10.0504 2.71879 9.86941 2.52782Z" fill="#050B20"/>
              </svg>
            </div>
          </div>

          <div className="relative">
            <div className="w-full h-[60px] rounded-xl border border-[#E1E1E1] bg-white relative">
              <div className="absolute left-4 top-2.5">
                <div className="text-[13px] text-[#818181] font-dm mb-1">Transmission</div>
                <div className="text-[15px] text-[#050B20] font-dm">Select Transmission</div>
              </div>
              <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-2.5 h-2.5" viewBox="0 0 10 10" fill="none">
                <path d="M9.86941 2.52782C9.68892 2.33638 9.38702 2.32925 9.19653 2.50924L4.99976 6.48505L0.803467 2.50926C0.612983 2.32878 0.311545 2.3364 0.130592 2.52784C-0.0503606 2.71879 -0.0422749 3.02023 0.148697 3.20118L4.67261 7.487C4.76404 7.57368 4.88214 7.61748 4.99976 7.61748C5.11737 7.61748 5.23594 7.57368 5.32738 7.487L9.8513 3.20118C10.0423 3.02021 10.0504 2.71879 9.86941 2.52782Z" fill="#050B20"/>
              </svg>
            </div>
          </div>

          <div className="relative">
            <div className="w-full h-[60px] rounded-xl border border-[#E1E1E1] bg-white relative">
              <div className="absolute left-4 top-2.5">
                <div className="text-[13px] text-[#818181] font-dm mb-1">Transmission speed</div>
                <div className="text-[15px] text-[#050B20] font-dm">Select speed</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="w-full h-[60px] rounded-xl border border-[#E1E1E1] bg-white relative">
              <div className="absolute left-4 top-2.5">
                <div className="text-[13px] text-[#818181] font-dm mb-1">Cylinders</div>
                <div className="text-[15px] text-[#050B20] font-dm">Select Cylinders</div>
              </div>
            </div>
          </div>

          <div className="relative lg:col-span-2">
            <div className="w-full h-[60px] rounded-xl border border-[#E1E1E1] bg-white relative">
              <div className="absolute left-4 top-2.5">
                <div className="text-[13px] text-[#818181] font-dm mb-1">Engine Size (Liters)</div>
                <div className="text-[15px] text-[#050B20] font-dm">Enter engine size</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="w-full h-[60px] rounded-xl border border-[#E1E1E1] bg-white relative">
              <div className="absolute left-4 top-2.5">
                <div className="text-[13px] text-[#818181] font-dm mb-1">Fuel Type</div>
                <div className="text-[15px] text-[#050B20] font-dm">Select Fuel Type</div>
              </div>
              <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-2.5 h-2.5" viewBox="0 0 10 10" fill="none">
                <path d="M9.86941 2.52782C9.68892 2.33638 9.38702 2.32925 9.19653 2.50924L4.99976 6.48505L0.803467 2.50926C0.612983 2.32878 0.311545 2.3364 0.130592 2.52784C-0.0503606 2.71879 -0.0422749 3.02023 0.148697 3.20118L4.67261 7.487C4.76404 7.57368 4.88214 7.61748 4.99976 7.61748C5.11737 7.61748 5.23594 7.57368 5.32738 7.487L9.8513 3.20118C10.0423 3.02021 10.0504 2.71879 9.86941 2.52782Z" fill="#050B20"/>
              </svg>
            </div>
          </div>

          <div className="relative">
            <div className="w-full h-[60px] rounded-xl border border-[#E1E1E1] bg-white relative">
              <div className="absolute left-4 top-2.5">
                <div className="text-[13px] text-[#818181] font-dm mb-1">MPG Gallon City</div>
                <div className="text-[15px] text-[#050B20] font-dm">Select MPG City</div>
              </div>
              <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-2.5 h-2.5" viewBox="0 0 10 10" fill="none">
                <path d="M9.86941 2.52782C9.68892 2.33638 9.38702 2.32925 9.19653 2.50924L4.99976 6.48505L0.803467 2.50926C0.612983 2.32878 0.311545 2.3364 0.130592 2.52784C-0.0503606 2.71879 -0.0422749 3.02023 0.148697 3.20118L4.67261 7.487C4.76404 7.57368 4.88214 7.61748 4.99976 7.61748C5.11737 7.61748 5.23594 7.57368 5.32738 7.487L9.8513 3.20118C10.0423 3.02021 10.0504 2.71879 9.86941 2.52782Z" fill="#050B20"/>
              </svg>
            </div>
          </div>

          <div className="relative">
            <div className="w-full h-[60px] rounded-xl border border-[#E1E1E1] bg-white relative">
              <div className="absolute left-4 top-2.5">
                <div className="text-[13px] text-[#818181] font-dm mb-1">Drive Train</div>
                <div className="text-[15px] text-[#050B20] font-dm">Select Drive Train</div>
              </div>
              <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-2.5 h-2.5" viewBox="0 0 10 10" fill="none">
                <path d="M9.86941 2.52782C9.68892 2.33638 9.38702 2.32925 9.19653 2.50924L4.99976 6.48505L0.803467 2.50926C0.612983 2.32878 0.311545 2.3364 0.130592 2.52784C-0.0503606 2.71879 -0.0422749 3.02023 0.148697 3.20118L4.67261 7.487C4.76404 7.57368 4.88214 7.61748 4.99976 7.61748C5.11737 7.61748 5.23594 7.57368 5.32738 7.487L9.8513 3.20118C10.0423 3.02021 10.0504 2.71879 9.86941 2.52782Z" fill="#050B20"/>
              </svg>
            </div>
          </div>

          <div className="relative">
            <div className="w-full h-[60px] rounded-xl border border-[#E1E1E1] bg-white relative">
              <div className="absolute left-4 top-2.5">
                <div className="text-[13px] text-[#818181] font-dm mb-1">Engine Type</div>
                <div className="text-[15px] text-[#050B20] font-dm">Enter engine type</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="w-full h-[60px] rounded-xl border border-[#E1E1E1] bg-white relative">
              <div className="absolute left-4 top-2.5">
                <div className="text-[13px] text-[#818181] font-dm mb-1">Stock #</div>
                <div className="text-[15px] text-[#050B20] font-dm">Enter Stock #</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="w-full h-[60px] rounded-xl border border-[#E1E1E1] bg-white relative">
              <div className="absolute left-4 top-2.5">
                <div className="text-[13px] text-[#818181] font-dm mb-1">MPG Gallon HWY</div>
                <div className="text-[15px] text-[#050B20] font-dm">Select MPG HWY</div>
              </div>
              <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-2.5 h-2.5" viewBox="0 0 10 10" fill="none">
                <path d="M9.86941 2.52782C9.68892 2.33638 9.38702 2.32925 9.19653 2.50924L4.99976 6.48505L0.803467 2.50926C0.612983 2.32878 0.311545 2.3364 0.130592 2.52784C-0.0503606 2.71879 -0.0422749 3.02023 0.148697 3.20118L4.67261 7.487C4.76404 7.57368 4.88214 7.61748 4.99976 7.61748C5.11737 7.61748 5.23594 7.57368 5.32738 7.487L9.8513 3.20118C10.0423 3.02021 10.0504 2.71879 9.86941 2.52782Z" fill="#050B20"/>
              </svg>
            </div>
          </div>


        </div>
      </section>
    </div>
  );
}

export default function UsersProfilePage() {
  return (
    <DashboardLayout>
      <UsersProfileCard />
    </DashboardLayout>
  );
}
