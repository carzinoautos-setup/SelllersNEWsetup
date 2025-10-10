import React, { useState, useEffect, useRef } from "react";
import { DashboardLayout } from "../components/DashboardLayout";
import { Select } from "../components/ui/select";

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <label
      className="text-[14px] font-medium text-[#24272C] mb-2"
      style={{ fontFamily: "Albert Sans" }}
    >
      {children}
    </label>
  );
}

export function UsersProfileCard() {
  const [sellerName, setSellerName] = useState("");
  const [city, setCity] = useState("");
  const [stateVal, setStateVal] = useState("");
  const [zip, setZip] = useState("");
  const [emailLead, setEmailLead] = useState("");
  const [accountEmail, setAccountEmail] = useState("");
  const [accountNumber, setAccountNumber] = useState("");

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

  // Profile image upload state
  const [profileImage, setProfileImage] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setProfileImage(url);
    }
  };
  const [latitude, setLatitude] = useState("");

  // Dealership information fields
  const [vehicleType, setVehicleType] = useState("");
  const [dealershipWebsite, setDealershipWebsite] = useState("");
  const [websiteProvider, setWebsiteProvider] = useState("");
  const [productFeedUrl, setProductFeedUrl] = useState("");
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
        setAccountNumber(data.accountNumber || "");
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
        setProductFeedUrl(data.productFeedUrl || "");
        setEmailAlert2(data.emailAlert2 || "");
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
      accountNumber,
      sellerType,
      listPhone,
      sellerPhone,
      address,
      longitude,
      latitude,
      vehicleType,
      dealershipWebsite,
      websiteProvider,
      productFeedUrl,
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
    accountNumber,
    sellerType,
    listPhone,
    sellerPhone,
    address,
    longitude,
    latitude,
    vehicleType,
    dealershipWebsite,
    websiteProvider,
    productFeedUrl,
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
    setAccountNumber("");
    setSellerType("");
    setListPhone(true);
    setSellerPhone("");
    setAddress("");
    setLongitude("");
    setLatitude("");
    setProductFeedUrl("");
  };

  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* New Figma Design Section */}
      <section
        className="bg-white rounded-lg mb-6 mx-auto"
        style={{
          border: "0.8px none rgb(178, 178, 178)",
          paddingBottom: "32px",
        }}
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Left Content */}
          <div className="w-full md:w-[70%] max-w-[725px]">
            <div className="flex flex-col mb-6">
              <h2 className="text-[24px] font-bold text-[#24272C] font-['Albert_Sans']">
                Your Profile
              </h2>
              <p className="text-[15px] text-[#222] leading-[28px] font-['DM_Sans']">
                <span className="inline font-['Albert_Sans']">
                  Select Private Seller or a Dealer. If you’re a dealer and
                  would like to use your feed for automatic vehicle listings,
                  please contact us for details.
                </span>
              </p>
            </div>

            {/* Dropdown + Account Number */}
            <div className="flex items-start gap-4">
              <div className="relative w-full md:w-[310px]">
                <FieldLabel>Select your Account type</FieldLabel>
                <div ref={sellerTypeRef}>
                  <button
                    type="button"
                    onClick={() => setSellerTypeOpen((v) => !v)}
                    className="w-full h-[54px] flex items-center justify-between rounded-lg border border-[#B2B2B2] bg-white px-[18px]"
                    aria-haspopup="listbox"
                    aria-expanded={sellerTypeOpen}
                  >
                    <div className="leading-none text-[15px] text-[#050B20]">
                      {sellerType || "Private Seller"}
                    </div>
                    <svg
                      className="w-4 h-4 text-[#CF0D0D]"
                      viewBox="0 0 10 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.86941 3.02782C9.68892 2.83638 9.38702 2.82925 9.19653 3.00924L4.99976 6.98505L0.803467 3.00926C0.612983 2.82878 0.311545 2.8364 0.130592 3.02784C-0.0503606 3.21879 -0.0422749 3.52023 0.148697 3.70118L4.67261 7.987C4.76404 8.07368 4.88214 8.11748 4.99976 8.11748C5.11737 8.11748 5.23594 8.07368 5.32738 7.987L9.8513 3.70118C10.0423 3.52021 10.0504 3.21879 9.86941 3.02782Z"
                        fill="#CF0D0D"
                      />
                    </svg>
                  </button>

                  {sellerTypeOpen && (
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
                          setSellerType("Private Seller");
                          setSellerTypeOpen(false);
                        }}
                      >
                        Private Seller
                      </li>
                      <li
                        role="option"
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => {
                          setSellerType("Dealer");
                          setSellerTypeOpen(false);
                        }}
                      >
                        Dealer
                      </li>
                    </ul>
                  )}
                </div>
              </div>

              <div className="flex-1 min-w-[160px]">
                <FieldLabel>Account Number</FieldLabel>
                <input
                  value={accountNumber}
                  onChange={(e) => setAccountNumber(e.target.value)}
                  placeholder="Enter account number"
                  className="w-full h-[54px] px-[18px] py-4 border border-[#B2B2B2] rounded-lg bg-white text-[14px] text-[#696665] leading-[140%] outline-none focus:border-[#E82121]"
                  style={{ fontFamily: "Albert Sans" }}
                />
              </div>
            </div>
          </div>

          {/* Right Content - Image Upload */}
          <div className="w-full md:w-[30%] flex flex-col items-center justify-center gap-2 mx-auto md:mx-0">
            <img
              src={
                profileImage ||
                "https://api.builder.io/api/v1/image/assets/TEMP/b5268fe2ce0b253f68ffbcfbc6c8d468d124ef20?width=256"
              }
              alt="Profile"
              className="w-[84px] h-[84px] rounded-full object-cover flex-shrink-0 mx-auto md:mx-0"
            />
            <div className="flex flex-col gap-1 w-full md:max-w-[364px] justify-center items-center mx-auto">
              <div className="text-[14px] font-medium text-[#24272C] font-['Albert_Sans'] text-center">
                Profile Photo
              </div>
              <div className="flex items-center justify-center w-full md:max-w-[320px] h-[54px] mx-auto md:mx-0">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() =>
                    fileInputRef.current && fileInputRef.current.click()
                  }
                  className="bg-black rounded-[10px] text-white gap-[10px] h-[42px] w-[142px] flex items-center justify-center px-[14px] py-[8px] font-['Albert_Sans'] text-[12px] leading-[18px] font-medium"
                >
                  {profileImage ? "Change Image" : "Choose file"}
                </button>
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
          Profile Details
        </h3>

        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {/* Row 1 */}
            <div>
              <FieldLabel>Seller or dealer name</FieldLabel>
              <input
                value={sellerName}
                onChange={(e) => setSellerName(e.target.value)}
                placeholder="Enter your full name"
                className="w-full h-[54px] px-[18px] py-4 border border-[#B2B2B2] rounded-lg bg-white text-[14px] text-[#696665] leading-[140%] outline-none focus:border-[#E82121]"
                style={{ fontFamily: "Albert Sans" }}
              />
            </div>

            <div>
              <FieldLabel>address</FieldLabel>
              <input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter address"
                className="w-full h-[54px] px-[18px] py-4 border border-[#B2B2B2] rounded-lg bg-white text-[14px] text-[#696665] leading-[140%] outline-none focus:border-[#E82121]"
                style={{ fontFamily: "Albert Sans" }}
              />
            </div>

            <div>
              <FieldLabel>City</FieldLabel>
              <input
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="City"
                className="w-full h-[54px] px-[18px] py-4 border border-[#B2B2B2] rounded-lg bg-white text-[14px] text-[#696665] leading-[140%] outline-none focus:border-[#E82121]"
                style={{ fontFamily: "Albert Sans" }}
              />
            </div>

            <div>
              <FieldLabel>State</FieldLabel>
              <input
                value={stateVal}
                onChange={(e) => setStateVal(e.target.value)}
                placeholder="Enter your state"
                className="w-full h-[54px] px-[18px] py-4 border border-[#B2B2B2] rounded-lg bg-white text-[14px] text-[#696665] leading-[140%] outline-none focus:border-[#E82121]"
                style={{ fontFamily: "Albert Sans" }}
              />
            </div>

            {/* Row 2 */}
            <div>
              <FieldLabel>Zip code</FieldLabel>
              <input
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                placeholder="Zip code"
                className="w-full h-[54px] px-[18px] py-4 border border-[#B2B2B2] rounded-lg bg-white text-[14px] text-[#696665] leading-[140%] outline-none focus:border-[#E82121]"
                style={{ fontFamily: "Albert Sans" }}
              />
            </div>

            <div>
              <FieldLabel>Email lead alert address</FieldLabel>
              <input
                value={emailLead}
                onChange={(e) => setEmailLead(e.target.value)}
                placeholder="Email address"
                className="w-full h-[54px] px-[18px] py-4 border border-[#B2B2B2] rounded-lg bg-white text-[14px] text-[#696665] leading-[140%] outline-none focus:border-[#E82121]"
                style={{ fontFamily: "Albert Sans" }}
              />
            </div>

            <div>
              <FieldLabel>Account holder email Address</FieldLabel>
              <input
                value={accountEmail}
                onChange={(e) => setAccountEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full h-[54px] px-[18px] py-4 border border-[#B2B2B2] rounded-lg bg-white text-[14px] text-[#696665] leading-[140%] outline-none focus:border-[#E82121]"
                style={{ fontFamily: "Albert Sans" }}
              />
            </div>

            {/* Row 3 */}
            <div>
              <FieldLabel>Seller Phone</FieldLabel>
              <input
                value={sellerPhone}
                onChange={(e) => setSellerPhone(e.target.value)}
                className="w-full h-[54px] px-[18px] py-4 border border-[#B2B2B2] rounded-lg bg-white text-[14px] text-[#696665] leading-[140%] outline-none focus:border-[#E82121]"
                style={{ fontFamily: "Albert Sans" }}
              />
            </div>

            <div>
              <FieldLabel>List your phone# on ads?</FieldLabel>
              <div className="relative w-full" ref={listPhoneFormRef}>
                <button
                  type="button"
                  onClick={() => setListPhoneFormOpen((v) => !v)}
                  className="w-full h-[54px] flex items-center justify-between rounded-lg border border-[#B2B2B2] bg-white px-[18px] text-[15px] text-[#24272C]"
                  aria-haspopup="listbox"
                  aria-expanded={listPhoneFormOpen}
                >
                  <span className="truncate flex-1 text-left">
                    {listPhone ? "Yes" : "No"}
                  </span>
                  <svg
                    className="w-4 h-4 ml-2 text-[#CF0D0D]"
                    viewBox="0 0 10 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
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

            <div></div>

            {/* Row 4 */}
            <div className="md:col-span-3 w-full">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-7">
                <div className="md:col-span-2">
                  <FieldLabel>
                    Enter your address and then select from the choices.
                  </FieldLabel>
                  <input
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Enter address"
                    className="w-full h-[54px] px-[18px] py-4 border border-[#B2B2B2] rounded-lg bg-white text-[14px] text-[#696665] leading-[140%] outline-none focus:border-[#E82121]"
                    style={{ fontFamily: "Albert Sans" }}
                  />
                </div>

                <div>
                  <FieldLabel>Longitude:</FieldLabel>
                  <input
                    value={longitude}
                    onChange={(e) => setLongitude(e.target.value)}
                    placeholder="Longitude"
                    className="w-full h-[54px] px-[18px] py-4 border border-[#B2B2B2] rounded-lg bg-white text-[14px] text-[#696665] leading-[140%] outline-none focus:border-[#E82121]"
                    style={{ fontFamily: "Albert Sans" }}
                  />
                </div>

                <div>
                  <FieldLabel>Latitude</FieldLabel>
                  <input
                    value={latitude}
                    onChange={(e) => setLatitude(e.target.value)}
                    placeholder="Latitude"
                    className="w-full h-[54px] px-[18px] py-4 border border-[#B2B2B2] rounded-lg bg-white text-[14px] text-[#696665] leading-[140%] outline-none focus:border-[#E82121]"
                    style={{ fontFamily: "Albert Sans" }}
                  />
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
              <div>
                <FieldLabel>Do you sell new or used vehicles?</FieldLabel>
                <div className="relative w-full" ref={vehicleTypeRef}>
                  <button
                    type="button"
                    onClick={() => setVehicleTypeOpen((v) => !v)}
                    className="w-full h-[54px] flex items-center justify-between rounded-lg border border-[#B2B2B2] bg-white px-[18px] text-[15px] text-[#24272C]"
                    aria-haspopup="listbox"
                    aria-expanded={vehicleTypeOpen}
                  >
                    <span className="truncate flex-1 text-left">
                      {vehicleType || "New/Used"}
                    </span>
                    <svg
                      className="w-4 h-4 ml-2 text-[#CF0D0D]"
                      viewBox="0 0 10 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
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

              <div>
                <FieldLabel>
                  <div style={{ fontWeight: 500 }}>Show payments on all vehicles?</div>
                </FieldLabel>
                <input
                  value={emailAlert1}
                  onChange={(e) => setEmailAlert1(e.target.value)}
                  placeholder=""
                  className="w-full h-[54px] px-[18px] py-4 border border-[#B2B2B2] rounded-lg bg-white text-[14px] text-[#696665] leading-[140%] outline-none focus:border-[#E82121]"
                  style={{ fontFamily: "Albert Sans" }}
                />
              </div>

              <div>
                <FieldLabel><span style={{whiteSpace: 'pre'}}>{'Dealership website'}</span></FieldLabel>
                <input
                  value={crmProvider}
                  onChange={(e) => setCrmProvider(e.target.value)}
                  placeholder="Enter your Crm provider"
                  className="w-full h-[54px] px-[18px] py-4 border border-[#B2B2B2] rounded-lg bg-white text-[14px] text-[#696665] leading-[140%] outline-none focus:border-[#E82121]"
                  style={{ fontFamily: "Albert Sans" }}
                />
              </div>

              <div>
                <FieldLabel><span style={{whiteSpace: 'pre'}}>{'Email lead alerts user 1'}</span></FieldLabel>
                <input
                  value={dealershipWebsite}
                  onChange={(e) => setDealershipWebsite(e.target.value)}
                  className="w-full h-[54px] px-[18px] py-4 border border-[#B2B2B2] rounded-lg bg-white text-[14px] text-[#696665] leading-[140%] outline-none focus:border-[#E82121]"
                  style={{ fontFamily: "Albert Sans" }}
                />
              </div>

              <div>
                <FieldLabel>Email lead alerts user 2</FieldLabel>
                <input
                  value={emailAlert2}
                  onChange={(e) => setEmailAlert2(e.target.value)}
                  placeholder=""
                  className="w-full h-[54px] px-[18px] py-4 border border-[#B2B2B2] rounded-lg bg-white text-[14px] text-[#696665] leading-[140%] outline-none focus:border-[#E82121]"
                  style={{ fontFamily: "Albert Sans" }}
                />
              </div>

              <div>
                <FieldLabel><span style={{whiteSpace: 'pre'}}>{'Email lead alerts user 3'}</span></FieldLabel>
                <input
                  value={crmAccount}
                  onChange={(e) => setCrmAccount(e.target.value)}
                  placeholder=""
                  className="w-full h-[54px] px-[18px] py-4 border border-[#B2B2B2] rounded-lg bg-white text-[14px] text-[#696665] leading-[140%] outline-none focus:border-[#E82121]"
                  style={{ fontFamily: "Albert Sans" }}
                />
              </div>

              <div>
                <FieldLabel><span style={{whiteSpace: 'pre'}}>{'Dealerships CRM provider'}</span></FieldLabel>
                <input
                  value={websiteProvider}
                  onChange={(e) => setWebsiteProvider(e.target.value)}
                  placeholder=""
                  className="w-full h-[54px] px-[18px] py-4 border border-[#B2B2B2] rounded-lg bg-white text-[14px] text-[#696665] leading-[140%] outline-none focus:border-[#E82121]"
                  style={{ fontFamily: "Albert Sans" }}
                />
              </div>

              <div>
                <FieldLabel><span style={{whiteSpace: 'pre'}}>{'CRM Account # :'}</span></FieldLabel>
                <input
                  value={emailAlert3}
                  onChange={(e) => setEmailAlert3(e.target.value)}
                  placeholder=""
                  className="w-full h-[54px] px-[18px] py-4 border border-[#B2B2B2] rounded-lg bg-white text-[14px] text-[#696665] leading-[140%] outline-none focus:border-[#E82121]"
                  style={{ fontFamily: "Albert Sans" }}
                />
              </div>

              <div>
                <FieldLabel>Dealerships CRM email</FieldLabel>
                <input
                  value={crmEmail}
                  onChange={(e) => setCrmEmail(e.target.value)}
                  placeholder=""
                  className="w-full h-[54px] px-[18px] py-4 border border-[#B2B2B2] rounded-lg bg-white text-[14px] text-[#696665] leading-[140%] outline-none focus:border-[#E82121]"
                  style={{ fontFamily: "Albert Sans" }}
                />
              </div>

              <div>
                <FieldLabel>Website provider information</FieldLabel>
                <input
                  value={websiteProvider}
                  onChange={(e) => setWebsiteProvider(e.target.value)}
                  placeholder=""
                  className="w-full h-[54px] px-[18px] py-4 border border-[#B2B2B2] rounded-lg bg-white text-[14px] text-[#696665] leading-[140%] outline-none focus:border-[#E82121]"
                  style={{ fontFamily: "Albert Sans" }}
                />
              </div>

                        <div>
                          <FieldLabel><span style={{whiteSpace: 'pre'}}>{' product Feed url'}</span></FieldLabel>
                          <input
                            placeholder=""
                            value={productFeedUrl}
                            onChange={(e) => setProductFeedUrl(e.target.value)}
                            className="w-full h-[54px] px-[18px] py-4 border border-[#B2B2B2] rounded-lg bg-white text-[14px] text-[#696665] leading-[140%] outline-none focus:border-[#E82121]"
                            style={{ fontFamily: "Albert Sans" }}
                          />
                        </div>
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
            <div>
              <FieldLabel>Billing contact</FieldLabel>
              <input
                value={billingContact}
                onChange={(e) => setBillingContact(e.target.value)}
                placeholder="Enter your full name"
                className="w-full h-[54px] px-[18px] py-4 border border-[#B2B2B2] rounded-lg bg-white text-[14px] text-[#696665] leading-[140%] outline-none focus:border-[#E82121]"
                style={{ fontFamily: "Albert Sans" }}
              />
            </div>

            <div>
              <FieldLabel>Street address</FieldLabel>
              <input
                value={billingStreetAddress}
                onChange={(e) => setBillingStreetAddress(e.target.value)}
                placeholder="Enter your street address"
                className="w-full h-[54px] px-[18px] py-4 border border-[#B2B2B2] rounded-lg bg-white text-[14px] text-[#696665] leading-[140%] outline-none focus:border-[#E82121]"
                style={{ fontFamily: "Albert Sans" }}
              />
            </div>

            <div>
              <FieldLabel>City</FieldLabel>
              <input
                value={billingCity}
                onChange={(e) => setBillingCity(e.target.value)}
                placeholder="Enter your city"
                className="w-full h-[54px] px-[18px] py-4 border border-[#B2B2B2] rounded-lg bg-white text-[14px] text-[#696665] leading-[140%] outline-none focus:border-[#E82121]"
                style={{ fontFamily: "Albert Sans" }}
              />
            </div>

            <div>
              <FieldLabel>State</FieldLabel>
              <input
                value={billingState}
                onChange={(e) => setBillingState(e.target.value)}
                placeholder="Enter your state"
                className="w-full h-[54px] px-[18px] py-4 border border-[#B2B2B2] rounded-lg bg-white text-[14px] text-[#696665] leading-[140%] outline-none focus:border-[#E82121]"
                style={{ fontFamily: "Albert Sans" }}
              />
            </div>

            <div>
              <FieldLabel>Zip code</FieldLabel>
              <input
                value={billingZip}
                onChange={(e) => setBillingZip(e.target.value)}
                placeholder="Enter your zip code"
                className="w-full h-[54px] px-[18px] py-4 border border-[#B2B2B2] rounded-lg bg-white text-[14px] text-[#696665] leading-[140%] outline-none focus:border-[#E82121]"
                style={{ fontFamily: "Albert Sans" }}
              />
            </div>

            <div>
              <FieldLabel>Country</FieldLabel>
              <input
                value={billingCountry}
                onChange={(e) => setBillingCountry(e.target.value)}
                placeholder="USA"
                className="w-full h-[54px] px-[18px] py-4 border border-[#B2B2B2] rounded-lg bg-white text-[14px] text-[#696665] leading-[140%] outline-none focus:border-[#E82121]"
                style={{ fontFamily: "Albert Sans" }}
              />
            </div>

            <div>
              <FieldLabel>Billing email address</FieldLabel>
              <input
                value={billingEmail}
                onChange={(e) => setBillingEmail(e.target.value)}
                placeholder="Billing email"
                className="w-full h-[54px] px-[18px] py-4 border border-[#B2B2B2] rounded-lg bg-white text-[14px] text-[#696665] leading-[140%] outline-none focus:border-[#E82121]"
                style={{ fontFamily: "Albert Sans" }}
              />
            </div>

            <div>
              <FieldLabel>Billing phone</FieldLabel>
              <input
                value={billingPhone}
                onChange={(e) => setBillingPhone(e.target.value)}
                placeholder=""
                className="w-full h-[54px] px-[18px] py-4 border border-[#B2B2B2] rounded-lg bg-white text-[14px] text-[#696665] leading-[140%] outline-none focus:border-[#E82121]"
                style={{ fontFamily: "Albert Sans" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-start">
        <button
          type="button"
          className="flex items-center justify-center px-6 py-5 h-[51px] bg-[#CF0D0D] text-white rounded-xl font-medium transition-colors hover:bg-[#b60b0b] w-full sm:w-auto min-w-[161px]"
          style={{ fontFamily: 'DM Sans', fontSize: '15px', lineHeight: '26px' }}
        >
          Save Profile
        </button>
        <button
          type="button"
          className="flex items-center justify-center px-6 py-5 h-[51px] bg-[#24272C] text-white rounded-xl font-medium transition-colors hover:bg-[#1a1d21] w-full sm:w-auto min-w-[162px]"
          style={{ fontFamily: 'DM Sans', fontSize: '15px', lineHeight: '26px' }}
        >
          Delete account
        </button>
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
