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
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-16 lg:gap-[147px]">
          {/* Left Content */}
          <div className="w-full md:w-3/4 flex flex-col justify-between items-start flex-1 h-auto xl:h-[302px]">
            {/* Heading & Description */}
            <div className="flex flex-col items-start gap-4 self-stretch">
              <div className="w-full max-w-[353px] text-[#24272C] font-['Albert_Sans'] text-[24px] font-bold leading-normal">
                Get Started with Carzino
              </div>
              <div className="self-stretch text-[#222] font-['DM_Sans'] text-[15px] font-normal leading-[28px]">
                How do I find the VIN number for my car?<br />
                Look on your insurance cards, registration, or the paperwork from when you purchased your vehicle.
                The most common place to find a VIN is on your vehicle's dashboard, near where the dashboard meets
                the edge of the windshield on the driver's side.
              </div>

              {/* Dropdown */}
              <div className="w-[310px] h-[60px] relative">
                <div className="w-[310px] h-[60px] flex-shrink-0 rounded-xl border border-[#B2B2B2] bg-white absolute left-0 top-0"></div>
                <svg
                  className="flex w-[10px] h-[10px] justify-center items-center flex-shrink-0 absolute left-[285px] top-[25px]"
                  width="10"
                  height="11"
                  viewBox="0 0 10 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask id="path-1-inside-1_3092_23240" fill="white">
                    <path d="M9.86941 3.02782C9.68892 2.83638 9.38702 2.82925 9.19653 3.00924L4.99976 6.98505L0.803467 3.00926C0.612983 2.82878 0.311545 2.8364 0.130592 3.02784C-0.0503606 3.21879 -0.0422749 3.52023 0.148697 3.70118L4.67261 7.987C4.76404 8.07368 4.88214 8.11748 4.99976 8.11748C5.11737 8.11748 5.23594 8.07368 5.32738 7.987L9.8513 3.70118C10.0423 3.52021 10.0504 3.21879 9.86941 3.02782Z"/>
                  </mask>
                  <path d="M9.86941 3.02782C9.68892 2.83638 9.38702 2.82925 9.19653 3.00924L4.99976 6.98505L0.803467 3.00926C0.612983 2.82878 0.311545 2.8364 0.130592 3.02784C-0.0503606 3.21879 -0.0422749 3.52023 0.148697 3.70118L4.67261 7.987C4.76404 8.07368 4.88214 8.11748 4.99976 8.11748C5.11737 8.11748 5.23594 8.07368 5.32738 7.987L9.8513 3.70118C10.0423 3.52021 10.0504 3.21879 9.86941 3.02782Z" fill="#E82121"/>
                  <path d="M9.86941 3.02782L9.14178 3.7138L9.14351 3.71563L9.86941 3.02782ZM9.19653 3.00924L8.50972 2.28241L8.5088 2.28328L9.19653 3.00924ZM4.99976 6.98505L4.31198 7.71097L4.99972 8.36257L5.68749 7.71101L4.99976 6.98505ZM0.803467 3.00926L0.115671 3.73517L0.11569 3.73519L0.803467 3.00926ZM0.130592 3.02784L0.85645 3.71568L0.857326 3.71476L0.130592 3.02784ZM0.148697 3.70118L-0.539111 4.42707L-0.539048 4.42713L0.148697 3.70118ZM4.67261 7.987L5.36063 7.26131L5.36036 7.26105L4.67261 7.987ZM5.32738 7.987L4.63964 7.26105L4.63944 7.26123L5.32738 7.987ZM9.8513 3.70118L10.539 4.42713L10.5391 4.42704L9.8513 3.70118ZM9.86941 3.02782L10.597 2.34184C10.0341 1.74477 9.09849 1.72605 8.50972 2.28241L9.19653 3.00924L9.88335 3.73608C9.67554 3.93244 9.34371 3.92799 9.14178 3.7138L9.86941 3.02782ZM9.19653 3.00924L8.5088 2.28328L4.31202 6.25909L4.99976 6.98505L5.68749 7.71101L9.88427 3.7352L9.19653 3.00924ZM4.99976 6.98505L5.68753 6.25913L1.49124 2.28334L0.803467 3.00926L0.11569 3.73519L4.31198 7.71097L4.99976 6.98505ZM0.803467 3.00926L1.49126 2.28336C0.900461 1.72357 -0.0346104 1.74684 -0.596141 2.34092L0.130592 3.02784L0.857326 3.71476C0.6577 3.92595 0.325505 3.93399 0.115671 3.73517L0.803467 3.00926ZM0.130592 3.02784L-0.595265 2.33999C-1.15606 2.93178 -1.13106 3.86618 -0.539111 4.42707L0.148697 3.70118L0.836506 2.97529C1.04651 3.17427 1.05534 3.5058 0.856449 3.71568L0.130592 3.02784ZM0.148697 3.70118L-0.539048 4.42713L3.98487 8.71295L4.67261 7.987L5.36036 7.26105L0.836442 2.97523L0.148697 3.70118ZM4.67261 7.987L3.98459 8.71269C4.26826 8.98163 4.6352 9.11748 4.99976 9.11748V8.11748V7.11748C5.12908 7.11748 5.25981 7.16572 5.36063 7.26131L4.67261 7.987ZM4.99976 8.11748V9.11748C5.36329 9.11748 5.73095 8.98232 6.01533 8.71276L5.32738 7.987L4.63944 7.26123C4.74093 7.16504 4.87145 7.11748 4.99976 7.11748V8.11748ZM5.32738 7.987L6.01513 8.71295L10.539 4.42713L9.8513 3.70118L9.16356 2.97523L4.63964 7.26105L5.32738 7.987ZM9.8513 3.70118L10.5391 4.42704C11.131 3.86613 11.156 2.93181 10.5953 2.34001L9.86941 3.02782L9.14351 3.71563C8.94467 3.50577 8.9535 3.17428 9.16345 2.97533L9.8513 3.70118Z" fill="#E82121" mask="url(#path-1-inside-1_3092_23240)"/>
                </svg>
                <div className="w-[152px] h-[40px] flex-shrink-0 absolute left-[15px] top-[10px]">
                  <div className="text-[#000] font-['Albert_Sans'] text-[13px] font-bold leading-normal absolute left-0 top-0 w-[152px] h-[16px]">
                    Select your Account type
                  </div>
                  <div className="text-[#050B20] font-['DM_Sans'] text-[15px] font-normal leading-normal absolute left-0 top-[20px] w-[94px] h-[20px]">
                    Private  Seller
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="flex w-full max-w-[573px] h-[232px] p-2.5 flex-col items-start gap-2.5 flex-shrink-0">
            <div className="grid w-[170px] h-[148px] flex-shrink-0 grid-rows-1 grid-cols-1">
              <div className="grid w-[357px] h-[153px] gap-8 flex-shrink-0 self-start grid-rows-1 grid-cols-1 row-start-1 col-start-1">
                <div className="flex flex-col items-start gap-4 flex-1 self-stretch row-start-1 col-start-1">
                  <svg
                    width="97"
                    height="100"
                    viewBox="0 0 97 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <ellipse cx="48.7901" cy="49.4303" rx="46.9132" ry="48.1452" fill="#E5E7EB"/>
                    <path d="M48.4766 0.5C74.9614 0.5 96.4541 22.5377 96.4541 49.75C96.4541 76.9623 74.9614 99 48.4766 99C21.9919 98.9998 0.5 76.9622 0.5 49.75C0.5 22.5378 21.9919 0.500224 48.4766 0.5Z" stroke="#242760"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M78.4062 82.7422C78.4062 82.326 78.7176 81.9883 79.1021 81.9883H83.7416C84.126 81.9883 84.4374 82.326 84.4374 82.7422C84.4374 83.1583 84.126 83.4961 83.7416 83.4961H79.1021C78.7176 83.4961 78.4062 83.1583 78.4062 82.7422ZM79.7466 95.5585H83.097C85.4499 95.5585 86.6267 95.5585 87.4719 95.0142C87.8355 94.7804 88.1495 94.4773 88.3961 94.1223C88.9608 93.3081 88.9608 92.1735 88.9608 89.9042C88.9608 87.635 88.9608 86.5011 88.3954 85.6862C88.149 85.3312 87.8352 85.0281 87.4719 84.7943C86.6267 84.25 85.4499 84.25 83.097 84.25H79.7466C77.3937 84.25 76.2169 84.25 75.3718 84.7943C75.0084 85.0281 74.6946 85.3312 74.4482 85.6862C73.8828 86.5004 73.8828 87.635 73.8828 89.9027V89.9042C73.8828 92.1735 73.8828 93.3073 74.4475 94.1223C74.6917 94.4751 75.0054 94.7782 75.3718 95.0142C76.2169 95.5585 77.3937 95.5585 79.7466 95.5585ZM78.2803 89.9042C78.2803 88.2306 79.6871 86.8751 81.4218 86.8751C83.1565 86.8751 84.5633 88.2313 84.5633 89.9042C84.5633 91.5771 83.1558 92.9334 81.4218 92.9334C79.6871 92.9334 78.2803 91.5764 78.2803 89.9042ZM79.5371 89.9042C79.5371 88.9 80.3814 88.0873 81.4218 88.0873C82.4622 88.0873 83.3066 88.9008 83.3066 89.9042C83.3066 90.9077 82.4622 91.7211 81.4218 91.7211C80.3814 91.7211 79.5371 90.9077 79.5371 89.9042ZM86.0289 86.8751C85.6821 86.8751 85.4009 87.1465 85.4009 87.4812C85.4009 87.8152 85.6821 88.0866 86.0289 88.0866H86.4481C86.7949 88.0866 87.0761 87.8152 87.0761 87.4812C87.0761 87.1465 86.7949 86.8751 86.4481 86.8751H86.0289Z" fill="#E82121"/>
                  </svg>
                  <div className="flex flex-col items-start gap-2 self-stretch">
                    <div className="self-stretch text-[#111928] font-['Albert_Sans'] text-[12px] font-normal leading-[140%]">
                      Upload Photo
                    </div>
                    <div className="self-stretch text-[#111928] font-['Albert_Sans'] text-[12px] font-normal leading-[140%]">
                      Account #r: 556568995
                    </div>
                  </div>
                </div>
              </div>
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
