import { useEffect, useState, useRef } from "react";
import { DashboardLayout } from "../components/DashboardLayout";

export function UsersProfileCard() {
  const [sellerName, setSellerName] = useState("");
  const [city, setCity] = useState("");
  const [stateVal, setStateVal] = useState("");
  const [zip, setZip] = useState("");
  const [emailLead, setEmailLead] = useState("");
  const [accountEmail, setAccountEmail] = useState("");
  const [sellerType, setSellerType] = useState("");
  const [sellerTypeOpen, setSellerTypeOpen] = useState(false);
  const sellerTypeRef = useRef<HTMLDivElement | null>(null);

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
    function onDocClick(e: MouseEvent) {
      if (sellerTypeRef.current && !(sellerTypeRef.current as any).contains(e.target)) {
        setSellerTypeOpen(false);
      }
    }
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

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
        setListPhone(typeof data.listPhone === "boolean" ? data.listPhone : true);
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
      <section className="bg-white border border-[#B2B2B2] rounded-2xl shadow-sm mb-4 p-3 sm:p-8">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-16 lg:gap-[147px]">
          {/* Left Content */}
          <div className="w-full md:w-3/4 flex flex-col justify-between items-start flex-1 h-auto">
            {/* Heading & Description */}
            <div className="flex flex-col items-start gap-4 self-stretch">
              <div className="w-full max-w-[353px] text-[#24272C] font-['Albert_Sans'] text-[24px] font-bold leading-normal">
                Get Started with Carzino
              </div>
              <span className="self-stretch text-[#222] font-['DM_Sans'] text-[15px] font-normal leading-[20px] whitespace-pre-wrap">
                Please fill out the form below with your information to create your listing. You’ll be asked to choose whether you’re listing as a Private Seller or a Dealer. If you’re a dealer and would like to use your feed for automatic vehicle listings, please contact us for details.
              </span>

              {/* Custom Dropdown */}
              <div className="w-[310px] relative" ref={sellerTypeRef}>
                <button type="button" onClick={() => setSellerTypeOpen(v => !v)} className="w-[310px] h-[44px] flex items-center justify-between rounded-xl border border-[#B2B2B2] bg-white px-4 text-[15px] text-[#050B20]">
                  <span className="truncate">{sellerType || 'Select Seller Type'}</span>
                  <svg className="w-4 h-4 text-[#E82121] ml-2" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.86941 3.02782C9.68892 2.83638 9.38702 2.82925 9.19653 3.00924L4.99976 6.98505L0.803467 3.00926C0.612983 2.82878 0.311545 2.8364 0.130592 3.02784C-0.0503606 3.21879 -0.0422749 3.52023 0.148697 3.70118L4.67261 7.987C4.76404 8.07368 4.88214 8.11748 4.99976 8.11748C5.11737 8.11748 5.23594 8.07368 5.32738 7.987L9.8513 3.70118C10.0423 3.52021 10.0504 3.21879 9.86941 3.02782Z" fill="#E82121" />
                  </svg>
                </button>

                {sellerTypeOpen && (
                  <ul className="absolute z-50 left-0 mt-2 w-full bg-white border border-[#E1E1E1] rounded-md shadow-lg max-h-48 overflow-auto">
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => { setSellerType(''); setSellerTypeOpen(false); }}>Select Seller Type</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => { setSellerType('Private Seller'); setSellerTypeOpen(false); }}>Private Seller</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => { setSellerType('Dealer'); setSellerTypeOpen(false); }}>Dealer</li>
                  </ul>
                )}
              </div>

            </div>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/4 flex max-w-[573px] h-[120px] md:h-[160px] p-2.5 flex-col items-start gap-2.5 flex-shrink-0">
            <div className="grid w-[170px] h-[148px] flex-shrink-0 grid-rows-1 grid-cols-1">
              <div className="grid w-[357px] h-[153px] gap-8 flex-shrink-0 self-start grid-rows-1 grid-cols-1 row-start-1 col-start-1">
                <div className="flex flex-row md:flex-col items-start gap-4 flex-1 self-stretch row-start-1 col-start-1 pr-[17px]">
                  <svg
                    className="w-[49px] h-[50px] md:w-[69px] md:h-[70px]"
                    viewBox="0 0 97 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <ellipse cx="48.7901" cy="49.4303" rx="46.9132" ry="48.1452" fill="#E5E7EB"/>
                    <path d="M48.4766 0.5C74.9614 0.5 96.4541 22.5377 96.4541 49.75C96.4541 76.9623 74.9614 99 48.4766 99C21.9919 98.9998 0.5 76.9622 0.5 49.75C0.5 22.5378 21.9919 0.500224 48.4766 0.5Z" stroke="#242760"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M78.4062 82.7422C78.4062 82.326 78.7176 81.9883 79.1021 81.9883H83.7416C84.126 81.9883 84.4374 82.326 84.4374 82.7422C84.4374 83.1583 84.126 83.4961 83.7416 83.4961H79.1021C78.7176 83.4961 78.4062 83.1583 78.4062 82.7422ZM79.7466 95.5585H83.097C85.4499 95.5585 86.6267 95.5585 87.4719 95.0142C87.8355 94.7804 88.1495 94.4773 88.3961 94.1223C88.9608 93.3081 88.9608 92.1735 88.9608 89.9042C88.9608 87.635 88.9608 86.5011 88.3954 85.6862C88.149 85.3312 87.8352 85.0281 87.4719 84.7943C86.6267 84.25 85.4499 84.25 83.097 84.25H79.7466C77.3937 84.25 76.2169 84.25 75.3718 84.7943C75.0084 85.0281 74.6946 85.3312 74.4482 85.6862C73.8828 86.5004 73.8828 87.635 73.8828 89.9027V89.9042C73.8828 92.1735 73.8828 93.3073 74.4475 94.1223C74.6917 94.4751 75.0054 94.7782 75.3718 95.0142C76.2169 95.5585 77.3937 95.5585 79.7466 95.5585ZM78.2803 89.9042C78.2803 88.2306 79.6871 86.8751 81.4218 86.8751C83.1565 86.8751 84.5633 88.2313 84.5633 89.9042C84.5633 91.5771 83.1558 92.9334 81.4218 92.9334C79.6871 92.9334 78.2803 91.5764 78.2803 89.9042ZM79.5371 89.9042C79.5371 88.9 80.3814 88.0873 81.4218 88.0873C82.4622 88.0873 83.3066 88.9008 83.3066 89.9042C83.3066 90.9077 82.4622 91.7211 81.4218 91.7211C80.3814 91.7211 79.5371 90.9077 79.5371 89.9042ZM86.0289 86.8751C85.6821 86.8751 85.4009 87.1465 85.4009 87.4812C85.4009 87.8152 85.6821 88.0866 86.0289 88.0866H86.4481C86.7949 88.0866 87.0761 87.8152 87.0761 87.4812C87.0761 87.1465 86.7949 86.8751 86.4481 86.8751H86.0289Z" fill="#E82121"/>
                  </svg>
                </div>
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