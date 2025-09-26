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

  const [listPhoneOpen, setListPhoneOpen] = useState(false);
  const listPhoneRef = useRef<HTMLDivElement | null>(null);

  const [listPhoneFormOpen, setListPhoneFormOpen] = useState(false);
  const listPhoneFormRef = useRef<HTMLDivElement | null>(null);

  const [vehicleTypeOpen, setVehicleTypeOpen] = useState(false);
  const vehicleTypeRef = useRef<HTMLDivElement | null>(null);

  const [listPhone, setListPhone] = useState(true);
  const [sellerPhone, setSellerPhone] = useState("");
  const [address, setAddress] = useState("");
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");

  // Dealership information fields
  const [vehicleType, setVehicleType] = useState("");
  const [dealershipWebsite, setDealershipWebsite] = useState("");
  const [websiteProvider, setWebsiteProvider] = useState("");
  const [emailAlert1, setEmailAlert1] = useState("");
  const [emailAlert2, setEmailAlert2] = useState("");
  const [emailAlert3, setEmailAlert3] = useState("");
  const [crmProvider, setCrmProvider] = useState("");
  const [crmAccount, setCrmAccount] = useState("");
  const [crmEmail, setCrmEmail] = useState("");

  // Billing information fields
  const [billingContact, setBillingContact] = useState("");
  const [billingStreetAddress, setBillingStreetAddress] = useState("");
  const [billingCity, setBillingCity] = useState("");
  const [billingState, setBillingState] = useState("");
  const [billingZip, setBillingZip] = useState("");
  const [billingCountry, setBillingCountry] = useState("USA");
  const [billingEmail, setBillingEmail] = useState("");
  const [billingPhone, setBillingPhone] = useState("");

  // persist draft locally
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
        setSellerType(data.sellerType || "");
        setListPhone(
          typeof data.listPhone === "boolean" ? data.listPhone : true,
        );
        setSellerPhone(data.sellerPhone || "");
        setAddress(data.address || "");
        setLongitude(data.longitude || "");
        setLatitude(data.latitude || "");
        setVehicleType(data.vehicleType || "");
        setDealershipWebsite(data.dealershipWebsite || "");
        setWebsiteProvider(data.websiteProvider || "");
        setEmailAlert1(data.emailAlert1 || "");
        setEmailAlert2(data.emailAlert2 || "");
        setEmailAlert3(data.emailAlert3 || "");
        setCrmProvider(data.crmProvider || "");
        setCrmAccount(data.crmAccount || "");
        setCrmEmail(data.crmEmail || "");
        setBillingContact(data.billingContact || "");
        setBillingStreetAddress(data.billingStreetAddress || "");
        setBillingCity(data.billingCity || "");
        setBillingState(data.billingState || "");
        setBillingZip(data.billingZip || "");
        setBillingCountry(data.billingCountry || "USA");
        setBillingEmail(data.billingEmail || "");
        setBillingPhone(data.billingPhone || "");
      } catch (e) {
        console.warn(e);
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
      sellerType,
      listPhone,
      sellerPhone,
      address,
      longitude,
      latitude,
      vehicleType,
      dealershipWebsite,
      websiteProvider,
      emailAlert1,
      emailAlert2,
      emailAlert3,
      crmProvider,
      crmAccount,
      crmEmail,
      billingContact,
      billingStreetAddress,
      billingCity,
      billingState,
      billingZip,
      billingCountry,
      billingEmail,
      billingPhone,
    };
    localStorage.setItem("usresprofile.draft", JSON.stringify(data));
  }, [
    sellerName,
    city,
    stateVal,
    zip,
    emailLead,
    accountEmail,
    sellerType,
    listPhone,
    sellerPhone,
    address,
    longitude,
    latitude,
    vehicleType,
    dealershipWebsite,
    websiteProvider,
    emailAlert1,
    emailAlert2,
    emailAlert3,
    crmProvider,
    crmAccount,
    crmEmail,
    billingContact,
    billingStreetAddress,
    billingCity,
    billingState,
    billingZip,
    billingCountry,
    billingEmail,
    billingPhone,
  ]);

  // close dropdowns on outside click
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (
        sellerTypeRef.current &&
        !(sellerTypeRef.current as any).contains(e.target)
      ) {
        setSellerTypeOpen(false);
      }
      if (
        listPhoneRef.current &&
        !(listPhoneRef.current as any).contains(e.target)
      ) {
        setListPhoneOpen(false);
      }
      if (
        listPhoneFormRef.current &&
        !(listPhoneFormRef.current as any).contains(e.target)
      ) {
        setListPhoneFormOpen(false);
      }
      if (
        vehicleTypeRef.current &&
        !(vehicleTypeRef.current as any).contains(e.target)
      ) {
        setVehicleTypeOpen(false);
      }
    }
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  const handleSave = () => {
    alert("Saved locally");
  };

  const handleReset = () => {
    localStorage.removeItem("usresprofile.draft");
    setSellerName("");
    setCity("");
    setStateVal("");
    setZip("");
    setEmailLead("");
    setAccountEmail("");
    setSellerType("");
    setListPhone(true);
    setSellerPhone("");
    setAddress("");
    setLongitude("");
    setLatitude("");
  };

  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* New Figma Design Section */}
      <section className="bg-white rounded-lg mb-6 py-8 mx-auto" style={{ border: '0.8px none rgb(178, 178, 178)' }}>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Left Content */}
          <div className="w-full md:w-[70%] max-w-[725px]">
            <div className="flex flex-col mb-6">
              <h2 className="text-[24px] font-bold text-[#24272C] font-['Albert_Sans']">
                Get Started with Carzino Revised
              </h2>
              <p className="text-[15px] text-[#222] leading-[28px] font-['DM_Sans']">
                <span className="inline font-['Albert_Sans']">
                  Select Private Seller or a Dealer. If you’re a dealer and would like to use your feed for automatic vehicle listings, please contact us for details.
                </span>
              </p>
            </div>

            {/* Dropdown */}
            <div className="relative w-full md:w-[310px]">
              <div className="w-full h-[60px] rounded-xl border border-[#B2B2B2] bg-white px-4 shadow-sm focus-within:border-[#E82121] transition-colors duration-150 relative">
                <div className="h-full flex items-center justify-between">
                  <div className="flex flex-col justify-center">
                    <div className="text-[13px] font-bold text-black font-['Albert_Sans'] leading-none">
                      Select your Account type
                    </div>
                    <div className="text-[15px] text-[#050B20] font-['DM_Sans'] leading-none mt-1">
                      Private Seller
                    </div>
                  </div>
                  <svg
                    className="w-[10px] h-[10px] text-[#E82121]"
                    viewBox="0 0 10 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.86941 3.02782C9.68892 2.83638 9.38702 2.82925 9.19653 3.00924L4.99976 6.98505L0.803467 3.00926C0.612983 2.82878 0.311545 2.8364 0.130592 3.02784C-0.0503606 3.21879 -0.0422749 3.52023 0.148697 3.70118L4.67261 7.987C4.76404 8.07368 4.88214 8.11748 4.99976 8.11748C5.11737 8.11748 5.23594 8.07368 5.32738 7.987L9.8513 3.70118C10.0423 3.52021 10.0504 3.21879 9.86941 3.02782Z" fill="#E82121"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Image Upload */}
          <div className="w-full md:w-[30%] flex flex-col items-center justify-center gap-2 mx-auto md:mx-0">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/b5268fe2ce0b253f68ffbcfbc6c8d468d124ef20?width=256"
              alt="Profile"
              className="w-[84px] h-[84px] rounded-full object-cover flex-shrink-0 mx-auto md:mx-0"
            />
            <div className="flex flex-col gap-1 w-full md:max-w-[364px] justify-center items-center mx-auto">
              <div className="text-[14px] font-medium text-[#24272C] font-['Albert_Sans'] text-center">
                Upload a Image
              </div>
              <div className="flex items-center justify-center w-full md:max-w-[320px] h-[54px] mx-auto md:mx-0">
                <div className="bg-black rounded-[10px] text-white gap-[10px] h-[42px] w-[142px] flex items-center justify-center px-[14px] py-[8px] font-['Albert_Sans'] text-[12px] leading-[18px] font-medium">
                  Choose file
                </div>
              </div>
              <div className="text-[12px] text-[#B6B6B6] font-['Albert_Sans'] leading-[140%] text-center">
                Seller account Number Here
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="bg-white rounded-lg p-8"
        style={{ border: "0.8px solid rgba(171,171,171,1)" }}
      >
        <h3 className="text-[24px] font-medium text-[#24272C] mb-5 font-['Albert_Sans']">
          Enter your Details
        </h3>

        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {/* Row 1 */}
            <div className="relative">
              <div className="w-full h-[54px] rounded-xl border border-[#B2B2B2] bg-white px-4 shadow-sm focus-within:border-[#CF0D0D] transition-colors duration-150 relative">
                <div className="h-full flex items-center">
                  <label className="absolute -top-2 left-4 bg-white px-1 text-[12px] text-black">
                    Seller or dealer name
                  </label>
                  <input
                    value={sellerName}
                    onChange={(e) => setSellerName(e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full text-[15px] text-[#050B20] font-['DM_Sans'] border-none outline-none bg-transparent h-full placeholder-transparent focus:placeholder-transparent"
                  />
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="w-full h-[54px] rounded-xl border border-[#B2B2B2] bg-white px-4 shadow-sm focus-within:border-[#CF0D0D] transition-colors duration-150 relative">
                <div className="h-full flex items-center">
                  <label className="absolute -top-2 left-4 bg-white px-1 text-[12px] text-black">
                    address
                  </label>
                  <input
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Enter address"
                    className="w-full text-[15px] text-[#050B20] font-['DM_Sans'] border-none outline-none bg-transparent h-full placeholder-transparent focus:placeholder-transparent"
                  />
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="w-full h-[54px] rounded-xl border border-[#B2B2B2] bg-white px-4 shadow-sm focus-within:border-[#CF0D0D] transition-colors duration-150 relative">
                <div className="h-full flex items-center">
                  <label className="absolute -top-2 left-4 bg-white px-1 text-[12px] text-black">
                    City
                  </label>
                  <input
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="City"
                    className="w-full text-[15px] text-[#24272C] font-['DM_Sans'] border-none outline-none bg-transparent h-full placeholder-transparent focus:placeholder-transparent"
                  />
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="w-full h-[54px] rounded-xl border border-[#B2B2B2] bg-white px-4 shadow-sm focus-within:border-[#CF0D0D] transition-colors duration-150 relative">
                <div className="h-full flex items-center">
                  <label className="absolute -top-2 left-4 bg-white px-1 text-[12px] text-black">
                    State
                  </label>
                  <input
                    value={stateVal}
                    onChange={(e) => setStateVal(e.target.value)}
                    placeholder="Enter your state"
                    className="w-full text-[15px] text-[#050B20] font-['DM_Sans'] border-none outline-none bg-transparent h-full placeholder-transparent focus:placeholder-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="relative">
              <div className="w-full h-[54px] rounded-xl border border-[#B2B2B2] bg-white px-4 shadow-sm focus-within:border-[#CF0D0D] transition-colors duration-150 relative">
                <div className="h-full flex items-center">
                  <label className="absolute -top-2 left-4 bg-white px-1 text-[12px] text-black">
                    Zip code
                  </label>
                  <input
                    value={zip}
                    onChange={(e) => setZip(e.target.value)}
                    placeholder="Zip code"
                    className="w-full text-[15px] text-[#050B20] font-['DM_Sans'] border-none outline-none bg-transparent h-full placeholder-transparent focus:placeholder-transparent"
                  />
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="w-full h-[54px] rounded-xl border border-[#B2B2B2] bg-white px-4 shadow-sm focus-within:border-[#CF0D0D] transition-colors duration-150 relative">
                <div className="h-full flex items-center">
                  <label className="absolute -top-2 left-4 bg-white px-1 text-[12px] text-black">
                    Email lead alert address
                  </label>
                  <input
                    value={emailLead}
                    onChange={(e) => setEmailLead(e.target.value)}
                    placeholder="Email address"
                    className="w-full text-[15px] text-[#050B20] font-['DM_Sans'] border-none outline-none bg-transparent h-full placeholder-transparent focus:placeholder-transparent"
                  />
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="w-full h-[54px] rounded-xl border border-[#B2B2B2] bg-white px-4 shadow-sm focus-within:border-[#CF0D0D] transition-colors duration-150 relative">
                <div className="h-full flex items-center">
                  <label className="absolute -top-2 left-4 bg-white px-1 text-[12px] text-black">
                    Account holder email Address
                  </label>
                  <input
                    value={accountEmail}
                    onChange={(e) => setAccountEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full text-[15px] text-[#050B20] font-['DM_Sans'] border-none outline-none bg-transparent h-full placeholder-transparent focus:placeholder-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Row 3 */}
            <div className="relative">
              <div className="w-full h-[54px] rounded-xl border border-[#B2B2B2] bg-white px-4 shadow-sm focus-within:border-[#CF0D0D] transition-colors duration-150 relative">
                <div className="h-full flex items-center">
                  <label className="absolute -top-2 left-4 bg-white px-1 text-[12px] text-black">
                    Seller Phone
                  </label>
                  <input
                    value={sellerPhone}
                    onChange={(e) => setSellerPhone(e.target.value)}
                    className="w-full text-[15px] text-[#050B20] font-['DM_Sans'] border-none outline-none bg-transparent h-full placeholder-transparent focus:placeholder-transparent"
                  />
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="w-full h-[54px] rounded-xl border border-[#B2B2B2] bg-white px-4 shadow-sm focus-within:border-[#CF0D0D] transition-colors duration-150 relative">
                <div className="h-full flex items-center">
                  <label className="absolute -top-2 left-4 bg-white px-1 text-[12px] text-black">
                    List your phone# on ads?
                  </label>
                  <div className="relative w-full" ref={listPhoneFormRef}>
                    <button
                      type="button"
                      onClick={() => setListPhoneFormOpen((v) => !v)}
                      className="w-full h-full flex items-center justify-between border-none rounded-xl bg-transparent text-[15px] text-[#050B20]"
                      aria-haspopup="listbox"
                      aria-expanded={listPhoneFormOpen}
                    >
                      <span className="truncate flex-1 text-left">
                        {listPhone ? "Yes" : "No"}
                      </span>
                      <svg
                        viewBox="0 0 10 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 ml-2"
                      >
                        <path
                          d="M9.86941 3.02782C9.68892 2.83638 9.38702 2.82925 9.19653 3.00924L4.99976 6.98505L0.803467 3.00926C0.612983 2.82878 0.311545 2.8364 0.130592 3.02784C-0.0503606 3.21879 -0.0422749 3.52023 0.148697 3.70118L4.67261 7.987C4.76404 8.07368 4.88214 8.11748 4.99976 8.11748C5.11737 8.11748 5.23594 8.07368 5.32738 7.987L9.8513 3.70118C10.0423 3.52021 10.0504 3.21879 9.86941 3.02782Z"
                          fill="#CF0D0D"
                        />
                      </svg>
                    </button>

                    {listPhoneFormOpen && (
                      <ul
                        role="listbox"
                        className="absolute mt-2 bg-white border border-[#E1E1E1] rounded-md shadow-lg z-50"
                        style={{
                          left: 0,
                          right: 0,
                          top: "calc(100% + 8px)",
                          boxSizing: "border-box",
                        }}
                      >
                        <li
                          role="option"
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                          onClick={() => {
                            setListPhone(true);
                            setListPhoneFormOpen(false);
                          }}
                        >
                          Yes
                        </li>
                        <li
                          role="option"
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                          onClick={() => {
                            setListPhone(false);
                            setListPhoneFormOpen(false);
                          }}
                        >
                          No
                        </li>
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div></div>

            {/* Row 4 */}
            <div className="md:col-span-3 w-full">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-7">
                <div className="relative md:col-span-2">
                  <div className="w-full h-[54px] rounded-xl border border-[#B2B2B2] bg-white px-4 shadow-sm focus-within:border-[#CF0D0D] transition-colors duration-150 relative">
                    <div className="h-full flex items-center">
                      <label className="absolute -top-2 left-4 bg-white px-1 text-[12px] text-black">
                        Enter your address and then select from the choices.
                      </label>
                      <input
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Enter address"
                        className="w-full text-[15px] text-[#050B20] font-['Albert_Sans'] border-none outline-none bg-transparent h-full placeholder-transparent focus:placeholder-transparent"
                      />
                    </div>
                  </div>
                </div>

                <div className="relative md:col-span-1">
                  <div className="w-full h-[54px] rounded-xl border border-[#B2B2B2] bg-white px-4 shadow-sm focus-within:border-[#CF0D0D] transition-colors duration-150 relative">
                    <div className="h-full flex items-center">
                      <label className="absolute -top-2 left-4 bg-white px-1 text-[12px] text-black">
                        Longitude:
                      </label>
                      <input
                        value={longitude}
                        onChange={(e) => setLongitude(e.target.value)}
                        placeholder="Longitude"
                        className="w-full text-[15px] text-[#050B20] font-['DM_Sans'] border-none outline-none bg-transparent h-full placeholder-transparent focus:placeholder-transparent"
                      />
                    </div>
                  </div>
                </div>

                <div className="relative md:col-span-1">
                  <div className="w-full h-[54px] rounded-xl border border-[#B2B2B2] bg-white px-4 shadow-sm focus-within:border-[#CF0D0D] transition-colors duration-150 relative">
                    <div className="h-full flex items-center">
                      <label className="absolute -top-2 left-4 bg-white px-1 text-[12px] text-black">
                        Latitude
                      </label>
                      <input
                        value={latitude}
                        onChange={(e) => setLatitude(e.target.value)}
                        placeholder="Latitude"
                        className="w-full text-[15px] text-[#050B20] font-['DM_Sans'] border-none outline-none bg-transparent h-full placeholder-transparent focus:placeholder-transparent"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {sellerType === "Dealer" && (
        <section
          className="bg-white rounded-lg p-8 mt-5"
          style={{ border: "0.8px solid rgba(171,171,171,1)" }}
        >
          <h3 className="text-[24px] font-medium text-[#24272C] mb-5 font-['Albert_Sans']">
            Dealership Information
          </h3>

          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
              {/* Row 1 */}
              <div className="relative">
                <div className="w-full h-[54px] rounded-xl border border-[#B2B2B2] bg-white px-4 shadow-sm focus-within:border-[#CF0D0D] transition-colors duration-150 relative">
                  <div className="h-full flex items-center">
                    <label className="absolute -top-2 left-4 bg-white px-1 text-[12px] text-black">
                      Do you sell new or used vehicles?
                    </label>
                    <div className="relative w-full" ref={vehicleTypeRef}>
                      <button
                        type="button"
                        onClick={() => {
                          setVehicleTypeOpen((v) => !v);
                        }}
                        className="w-full h-full flex items-center justify-between border-none rounded-xl bg-transparent text-[15px] text-[#050B20]"
                        aria-haspopup="listbox"
                        aria-expanded={vehicleTypeOpen}
                      >
                        <span className="truncate flex-1 text-left">
                          {vehicleType}
                        </span>
                        <svg
                          viewBox="0 0 10 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4 ml-2"
                        >
                          <path
                            d="M9.86941 3.02782C9.68892 2.83638 9.38702 2.82925 9.19653 3.00924L4.99976 6.98505L0.803467 3.00926C0.612983 2.82878 0.311545 2.8364 0.130592 3.02784C-0.0503606 3.21879 -0.0422749 3.52023 0.148697 3.70118L4.67261 7.987C4.76404 8.07368 4.88214 8.11748 4.99976 8.11748C5.11737 8.11748 5.23594 8.07368 5.32738 7.987L9.8513 3.70118C10.0423 3.52021 10.0504 3.21879 9.86941 3.02782Z"
                            fill="#CF0D0D"
                          />
                        </svg>
                      </button>

                      {vehicleTypeOpen && (
                        <ul
                          role="listbox"
                          className="absolute mt-2 bg-white border border-[#E1E1E1] rounded-md shadow-lg z-50"
                          style={{
                            left: 0,
                            right: 0,
                            top: "calc(100% + 8px)",
                            boxSizing: "border-box",
                          }}
                        >
                          <li
                            role="option"
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => {
                              setVehicleType("New/Used");
                              setVehicleTypeOpen(false);
                            }}
                          >
                            New/Used
                          </li>
                          <li
                            role="option"
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => {
                              setVehicleType("Used");
                              setVehicleTypeOpen(false);
                            }}
                          >
                            Used
                          </li>
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="w-full h-[54px] rounded-xl border border-[#B2B2B2] bg-white px-4 shadow-sm focus-within:border-[#CF0D0D] transition-colors duration-150 relative">
                  <div className="h-full flex items-center">
                    <label className="absolute -top-2 left-4 bg-white px-1 text-[12px] text-black">
                      Email lead alerts user 1
                    </label>
                    <input
                      value={emailAlert1}
                      onChange={(e) => setEmailAlert1(e.target.value)}
                      placeholder="Enter an additional alert email address"
                      className="w-full text-[15px] text-[#050B20] font-['Albert_Sans'] border-none outline-none bg-transparent h-full placeholder-transparent focus:placeholder-transparent"
                    />
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="w-full h-[54px] rounded-xl border border-[#B2B2B2] bg-white px-4 shadow-sm focus-within:border-[#CF0D0D] transition-colors duration-150 relative">
                  <div className="h-full flex items-center">
                    <label className="absolute -top-2 left-4 bg-white px-1 text-[12px] text-black">
                      Dealerships CRM provider
                    </label>
                    <input
                      value={crmProvider}
                      onChange={(e) => setCrmProvider(e.target.value)}
                      placeholder="Enter your Crm provider"
                      className="w-full text-[15px] text-[#050B20] font-['Albert_Sans'] border-none outline-none bg-transparent h-full placeholder-transparent focus:placeholder-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Row 2 */}
              <div className="relative">
                <div className="w-full h-[54px] rounded-xl border border-[#B2B2B2] bg-white px-4 shadow-sm focus-within:border-[#CF0D0D] transition-colors duration-150 relative">
                  <div className="h-full flex items-center">
                    <label className="absolute -top-2 left-4 bg-white px-1 text-[12px] text-black">
                      Dealership website
                    </label>
                    <input
                      value={dealershipWebsite}
                      onChange={(e) => setDealershipWebsite(e.target.value)}
                      className="w-full text-[15px] text-[#050B20] font-['DM_Sans'] border-none outline-none bg-transparent h-full placeholder-transparent focus:placeholder-transparent"
                    />
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="w-full h-[54px] rounded-xl border border-[#B2B2B2] bg-white px-4 shadow-sm focus-within:border-[#CF0D0D] transition-colors duration-150 relative">
                  <div className="h-full flex items-center">
                    <label className="absolute -top-2 left-4 bg-white px-1 text-[12px] text-black">
                      Email lead alerts user 2
                    </label>
                    <input
                      value={emailAlert2}
                      onChange={(e) => setEmailAlert2(e.target.value)}
                      placeholder="Enter an additional alert email address"
                      className="w-full text-[15px] text-[#050B20] font-['Albert_Sans'] border-none outline-none bg-transparent h-full placeholder-transparent focus:placeholder-transparent"
                    />
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="w-full h-[54px] rounded-xl border border-[#B2B2B2] bg-white px-4 shadow-sm focus-within:border-[#CF0D0D] transition-colors duration-150 relative">
                  <div className="h-full flex items-center">
                    <label className="absolute -top-2 left-4 bg-white px-1 text-[12px] text-black">
                      CRM Account #
                    </label>
                    <input
                      value={crmAccount}
                      onChange={(e) => setCrmAccount(e.target.value)}
                      placeholder="Enter your Crm account #"
                      className="w-full text-[15px] text-[#050B20] font-['Albert_Sans'] border-none outline-none bg-transparent h-full placeholder-transparent focus:placeholder-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Row 3 */}
              <div className="relative">
                <div className="w-full h-[54px] rounded-xl border border-[#B2B2B2] bg-white px-4 shadow-sm focus-within:border-[#CF0D0D] transition-colors duration-150 relative">
                  <div className="h-full flex items-center">
                    <label className="absolute -top-2 left-4 bg-white px-1 text-[12px] text-black">
                      XML or CSV vehicle Feed url
                    </label>
                    <input
                      value={websiteProvider}
                      onChange={(e) => setWebsiteProvider(e.target.value)}
                      className="w-full text-[15px] text-[#050B20] font-['Albert_Sans'] border-none outline-none bg-transparent h-full placeholder-transparent focus:placeholder-transparent"
                    />
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="w-full h-[54px] rounded-xl border border-[#B2B2B2] bg-white px-4 shadow-sm focus-within:border-[#CF0D0D] transition-colors duration-150 relative">
                  <div className="h-full flex items-center">
                    <label className="absolute -top-2 left-4 bg-white px-1 text-[12px] text-black">
                      Email lead alerts user 3
                    </label>
                    <input
                      value={emailAlert3}
                      onChange={(e) => setEmailAlert3(e.target.value)}
                      placeholder="Enter an additional alert email address"
                      className="w-full text-[15px] text-[#050B20] font-['Albert_Sans'] border-none outline-none bg-transparent h-full placeholder-transparent focus:placeholder-transparent"
                    />
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="w-full h-[54px] rounded-xl border border-[#B2B2B2] bg-white px-4 shadow-sm focus-within:border-[#CF0D0D] transition-colors duration-150 relative">
                  <div className="h-full flex items-center">
                    <label className="absolute -top-2 left-4 bg-white px-1 text-[12px] text-black">
                      Dealerships CRM email
                    </label>
                    <input
                      value={crmEmail}
                      onChange={(e) => setCrmEmail(e.target.value)}
                      placeholder="Enter your Crm alert email address"
                      className="w-full text-[15px] text-[#050B20] font-['Albert_Sans'] border-none outline-none bg-transparent h-full placeholder-transparent focus:placeholder-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Row 4 */}
              <div className="relative">
                <div className="w-full h-[54px] rounded-xl border border-[#B2B2B2] bg-white px-4 shadow-sm focus-within:border-[#CF0D0D] transition-colors duration-150 relative">
                  <div className="h-full flex items-center">
                    <label className="absolute -top-2 left-4 bg-white px-1 text-[12px] text-black">
                      Website provider information
                    </label>
                    <input
                      value={websiteProvider}
                      onChange={(e) => setWebsiteProvider(e.target.value)}
                      placeholder="Enter your inventory provider"
                      className="w-full text-[15px] text-[#050B20] font-['Albert_Sans'] border-none outline-none bg-transparent h-full placeholder-transparent focus:placeholder-transparent"
                    />
                  </div>
                </div>
              </div>

              <div></div>
              <div></div>
            </div>
          </div>
        </section>
      )}

      <section
        className="bg-white rounded-lg p-8 mt-5"
        style={{ border: "0.8px solid rgba(171,171,171,1)" }}
      >
        <h3 className="text-[24px] font-medium text-[#24272C] mb-5 font-['Albert_Sans']">
          Billing Information
        </h3>

        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {/* Row 1 */}
            <div className="relative">
              <div className="w-full h-[54px] rounded-xl border border-[#B2B2B2] bg-white px-4 shadow-sm focus-within:border-[#CF0D0D] transition-colors duration-150 relative">
                <div className="h-full flex items-center">
                  <label className="absolute -top-2 left-4 bg-white px-1 text-[12px] text-black">
                    Billing contact
                  </label>
                  <input
                    value={billingContact}
                    onChange={(e) => setBillingContact(e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full text-[15px] text-[#050B20] font-['Albert_Sans'] border-none outline-none bg-transparent h-full placeholder-transparent focus:placeholder-transparent"
                  />
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="w-full h-[54px] rounded-xl border border-[#B2B2B2] bg-white px-4 shadow-sm focus-within:border-[#CF0D0D] transition-colors duration-150 relative">
                <div className="h-full flex items-center">
                  <label className="absolute -top-2 left-4 bg-white px-1 text-[12px] text-black">
                    Street address
                  </label>
                  <input
                    value={billingStreetAddress}
                    onChange={(e) => setBillingStreetAddress(e.target.value)}
                    placeholder="Enter your street address"
                    className="w-full text-[15px] text-[#050B20] font-['Albert_Sans'] border-none outline-none bg-transparent h-full placeholder-transparent focus:placeholder-transparent"
                  />
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="w-full h-[54px] rounded-xl border border-[#B2B2B2] bg-white px-4 shadow-sm focus-within:border-[#CF0D0D] transition-colors duration-150 relative">
                <div className="h-full flex items-center">
                  <label className="absolute -top-2 left-4 bg-white px-1 text-[12px] text-black">
                    City
                  </label>
                  <input
                    value={billingCity}
                    onChange={(e) => setBillingCity(e.target.value)}
                    placeholder="Enter your city"
                    className="w-full text-[15px] text-[#050B20] font-['Albert_Sans'] border-none outline-none bg-transparent h-full placeholder-transparent focus:placeholder-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="relative">
              <div className="w-full h-[54px] rounded-xl border border-[#B2B2B2] bg-white px-4 shadow-sm focus-within:border-[#CF0D0D] transition-colors duration-150 relative">
                <div className="h-full flex items-center">
                  <label className="absolute -top-2 left-4 bg-white px-1 text-[12px] text-black">
                    State
                  </label>
                  <input
                    value={billingState}
                    onChange={(e) => setBillingState(e.target.value)}
                    placeholder="Enter your state"
                    className="w-full text-[15px] text-[#050B20] font-['Albert_Sans'] border-none outline-none bg-transparent h-full placeholder-transparent focus:placeholder-transparent"
                  />
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="w-full h-[54px] rounded-xl border border-[#B2B2B2] bg-white px-4 shadow-sm focus-within:border-[#CF0D0D] transition-colors duration-150 relative">
                <div className="h-full flex items-center">
                  <label className="absolute -top-2 left-4 bg-white px-1 text-[12px] text-black">
                    Zip code
                  </label>
                  <input
                    value={billingZip}
                    onChange={(e) => setBillingZip(e.target.value)}
                    placeholder="Enter your zip code"
                    className="w-full text-[15px] text-[#050B20] font-['Albert_Sans'] border-none outline-none bg-transparent h-full placeholder-transparent focus:placeholder-transparent"
                  />
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="w-full h-[54px] rounded-xl border border-[#B2B2B2] bg-white px-4 shadow-sm focus-within:border-[#CF0D0D] transition-colors duration-150 relative">
                <div className="h-full flex items-center">
                  <label className="absolute -top-2 left-4 bg-white px-1 text-[12px] text-black">
                    Country
                  </label>
                  <input
                    value={billingCountry}
                    onChange={(e) => setBillingCountry(e.target.value)}
                    placeholder="USA"
                    className="w-full text-[15px] text-[#050B20] font-['Albert_Sans'] border-none outline-none bg-transparent h-full placeholder-transparent focus:placeholder-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Row 3 */}
            <div className="relative">
              <div className="w-full h-[54px] rounded-xl border border-[#B2B2B2] bg-white px-4 shadow-sm focus-within:border-[#CF0D0D] transition-colors duration-150 relative">
                <div className="h-full flex items-center">
                  <label className="absolute -top-2 left-4 bg-white px-1 text-[12px] text-black">
                    Billing email address
                  </label>
                  <input
                    value={billingEmail}
                    onChange={(e) => setBillingEmail(e.target.value)}
                    placeholder="Billing email"
                    className="w-full text-[15px] text-[#050B20] font-['Albert_Sans'] border-none outline-none bg-transparent h-full placeholder-transparent focus:placeholder-transparent"
                  />
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="w-full h-[54px] rounded-xl border border-[#B2B2B2] bg-white px-4 shadow-sm focus-within:border-[#CF0D0D] transition-colors duration-150 relative">
                <div className="h-full flex items-center">
                  <label className="absolute -top-2 left-4 bg-white px-1 text-[12px] text-black">
                    Billing phone
                  </label>
                  <input
                    value={billingPhone}
                    onChange={(e) => setBillingPhone(e.target.value)}
                    placeholder=""
                    className="w-full text-[15px] text-[#050B20] font-['Albert_Sans'] border-none outline-none bg-transparent h-full placeholder-transparent focus:placeholder-transparent"
                  />
                </div>
              </div>
            </div>

            <div className="text-center mt-4">
              <button onClick={handleSave} className="bg-[#E82121] text-white px-4 py-2 rounded-md">Save</button>
              <button onClick={handleReset} className="ml-2 bg-gray-200 px-4 py-2 rounded-md">Reset</button>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Details - Step 1 (template) */}
      <div className="mb-12 relative">
        <div className="mb-6">
          <h1 className="text-[20px] font-semibold font-['Albert_Sans']">
            <span className="text-[#090909] font-semibold">Vehicle Details- </span>
            <span className="text-[#E82121] font-semibold">Step 1</span>
          </h1>
          <div className="text-[14px] text-[#000] max-w-[955px] font-['Albert_Sans']">Enter or edit your vehicle details</div>
          <div className="w-full my-6" style={{ height: 0.5, backgroundColor: '#B9B9B9' }} />
        </div>

        <div className="bg-white rounded-2xl pb-[30px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
            {/* Column 1 */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[14px] font-medium text-[#24272C]">Vin#</label>
                <input placeholder="Enter Vin#" className="w-full h-[54px] px-[18px] py-4 border border-[#B2B2B2] rounded-lg bg-white text-[14px] text-[#050B20] outline-none focus:border-[#E82121]" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[14px] font-medium text-[#24272C]">Model</label>
                <select className="w-full h-[54px] rounded-lg border border-[#B2B2B2] px-[18px] text-[14px] text-[#24272C] bg-white outline-none focus:border-[#E82121]">
                  <option value="">Select Model</option>
                  <option>Model A</option>
                  <option>Model B</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[14px] font-medium text-[#24272C]">Is certified</label>
                <select className="w-full h-[54px] rounded-lg border border-[#B2B2B2] px-[18px] text-[14px] text-[#24272C] bg-white outline-none focus:border-[#E82121]">
                  <option value="">Select one</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[14px] font-medium text-[#24272C]">Exterior Color</label>
                <select className="w-full h-[54px] rounded-lg border border-[#B2B2B2] px-[18px] text-[14px] text-[#24272C] bg-white outline-none focus:border-[#E82121]">
                  <option value="">Select color</option>
                  <option>White</option>
                  <option>Black</option>
                </select>
              </div>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[14px] font-medium text-[#24272C]">Year</label>
                <select className="w-full h-[54px] rounded-lg border border-[#B2B2B2] px-[18px] text-[14px] text-[#24272C] bg-white outline-none focus:border-[#E82121]">
                  <option value="">Enter Year</option>
                  <option>2025</option>
                  <option>2024</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[14px] font-medium text-[#24272C]">Trim</label>
                <input placeholder="Enter Trim" className="w-full h-[54px] px-[18px] py-4 border border-[#B2B2B2] rounded-lg bg-white text-[14px] text-[#050B20] outline-none focus:border-[#E82121]" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[14px] font-medium text-[#24272C]">Mileage</label>
                <input placeholder="Enter Miles" className="w-full h-[54px] px-[18px] py-4 border border-[#B2B2B2] rounded-lg bg-white text-[14px] text-[#050B20] outline-none focus:border-[#E82121]" />
              </div>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[14px] font-medium text-[#24272C]">Title Status</label>
                <select className="w-full h-[54px] rounded-lg border border-[#B2B2B2] px-[18px] text-[14px] text-[#24272C] bg-white outline-none focus:border-[#E82121]">
                  <option value="">Select title status</option>
                  <option>Clean</option>
                  <option>Salvage</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[14px] font-medium text-[#24272C]">Condition</label>
                <select className="w-full h-[54px] rounded-lg border border-[#B2B2B2] px-[18px] text-[14px] text-[#24272C] bg-white outline-none focus:border-[#E82121]">
                  <option value="">Select Condition</option>
                  <option>New</option>
                  <option>Used</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[14px] font-medium text-[#24272C]">Stock#</label>
                <input placeholder="Enter Stock Number" className="w-full h-[54px] px-[18px] py-4 border border-[#B2B2B2] rounded-lg bg-white text-[14px] text-[#050B20] outline-none focus:border-[#E82121]" />
              </div>
            </div>
          </div>
        </div>
      </div>

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
