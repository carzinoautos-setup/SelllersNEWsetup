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
        setListPhone(typeof data.listPhone === 'boolean' ? data.listPhone : true);
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
      } catch (e) {
        console.warn(e);
      }
    }
  }, []);

  useEffect(() => {
    const data = { sellerName, city, stateVal, zip, emailLead, accountEmail, sellerType, listPhone, sellerPhone, address, longitude, latitude, vehicleType, dealershipWebsite, websiteProvider, emailAlert1, emailAlert2, emailAlert3, crmProvider, crmAccount, crmEmail };
    localStorage.setItem("usresprofile.draft", JSON.stringify(data));
  }, [sellerName, city, stateVal, zip, emailLead, accountEmail, sellerType, listPhone, sellerPhone, address, longitude, latitude, vehicleType, dealershipWebsite, websiteProvider, emailAlert1, emailAlert2, emailAlert3, crmProvider, crmAccount, crmEmail]);

  // close dropdowns on outside click
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (sellerTypeRef.current && !(sellerTypeRef.current as any).contains(e.target)) {
        setSellerTypeOpen(false);
      }
      if (listPhoneRef.current && !(listPhoneRef.current as any).contains(e.target)) {
        setListPhoneOpen(false);
      }
      if (listPhoneFormRef.current && !(listPhoneFormRef.current as any).contains(e.target)) {
        setListPhoneFormOpen(false);
      }
      if (vehicleTypeRef.current && !(vehicleTypeRef.current as any).contains(e.target)) {
        setVehicleTypeOpen(false);
      }
    }
    document.addEventListener('click', onDocClick);
    return () => document.removeEventListener('click', onDocClick);
  }, []);

  const handleSave = () => {
    alert('Saved locally');
  };

  const handleReset = () => {
    localStorage.removeItem('usresprofile.draft');
    setSellerName(''); setCity(''); setStateVal(''); setZip(''); setEmailLead(''); setAccountEmail(''); setSellerType(''); setListPhone(true); setSellerPhone(''); setAddress(''); setLongitude(''); setLatitude('');
  };

  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <section className="bg-white border border-[#B2B2B2] rounded-lg mb-6 p-8">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-7 md:gap-16">
          <div className="flex-1">
            <h2 className="text-[24px] font-bold text-[#24272C] mb-2">Get Started with Carzino</h2>
            <p className="text-[15px] text-[#222] mb-4 leading-6">Please fill out the form below with your information to create your listing. You’ll be asked to choose whether you’re listing as a Private Seller or a Dealer. If you’re a dealer and would like to use your feed for automatic vehicle listings, please contact us for details.</p>

            <div className="flex items-center gap-4">
              <div className="relative flex-1" ref={sellerTypeRef}>
                <button
                  type="button"
                  onClick={() => { setSellerTypeOpen(v => !v); }}
                  className="w-full h-[44px] relative rounded-xl border border-[#B2B2B2] bg-white px-4 pr-10 text-[15px] text-[#050B20]"
                  aria-haspopup="listbox"
                  aria-expanded={sellerTypeOpen}
                >
                  <div className="inline flex-shrink-0 overflow-hidden whitespace-nowrap text-left overflow-x-hidden overflow-y-hidden">{sellerType || 'Select Seller Type'}</div>
                  <svg viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 absolute right-4 top-1/2 transform -translate-y-1/2"><path d="M9.86941 3.02782C9.68892 2.83638 9.38702 2.82925 9.19653 3.00924L4.99976 6.98505L0.803467 3.00926C0.612983 2.82878 0.311545 2.8364 0.130592 3.02784C-0.0503606 3.21879 -0.0422749 3.52023 0.148697 3.70118L4.67261 7.987C4.76404 8.07368 4.88214 8.11748 4.99976 8.11748C5.11737 8.11748 5.23594 8.07368 5.32738 7.987L9.8513 3.70118C10.0423 3.52021 10.0504 3.21879 9.86941 3.02782Z" fill="#CF0D0D"/></svg>
                </button>

                {sellerTypeOpen && (
                  <ul role="listbox" className="absolute mt-2 bg-white border border-[#E1E1E1] rounded-md shadow-lg z-50" style={{ left: 0, right: 0, top: 'calc(100% + 8px)', boxSizing: 'border-box' }}>
                    <li role="option" className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => { setSellerType(''); setSellerTypeOpen(false); }}>Select Seller Type</li>
                    <li role="option" className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => { setSellerType('Private Seller'); setSellerTypeOpen(false); }}>Private Seller</li>
                    <li role="option" className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => { setSellerType('Dealer'); setSellerTypeOpen(false); }}>Dealer</li>
                  </ul>
                )}
              </div>

              <div className="relative w-[280px]" ref={listPhoneRef} />
            </div>

          </div>

          <div className="w-full md:w-1/4 flex items-start gap-4">
            <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center border border-[#242760]"> </div>
            <div className="text-sm text-[#111928]">
              <div>Upload Photo</div>
              <div>Account #: 556568995</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-lg p-8" style={{ border: '0.8px solid rgba(171,171,171,1)' }}>
        <h3 className="text-[24px] font-medium text-[#24272C] mb-5 font-['Albert_Sans']">Enter your Details</h3>

        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {/* Row 1 */}
            <div className="relative">
              <div className="w-full h-[54px] rounded-xl border border-[#B2B2B2] bg-white px-4 shadow-sm focus-within:border-[#CF0D0D] transition-colors duration-150 relative">
                <div className="pt-2">
                  <label className="absolute -top-2 left-4 bg-white px-1 text-[12px] text-black">Seller or dealer name</label>
                  <input
                    value={sellerName}
                    onChange={(e)=>setSellerName(e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full text-[15px] text-[#050B20] font-['DM_Sans'] border-none outline-none bg-transparent h-full placeholder-transparent focus:placeholder-transparent"
                  />
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="w-full h-[54px] rounded-xl border border-[#B2B2B2] bg-white px-4 shadow-sm focus-within:border-[#CF0D0D] transition-colors duration-150 relative">
                <div className="pt-2">
                  <label className="absolute -top-2 left-4 bg-white px-1 text-[12px] text-black">City</label>
                  <input
                    value={city}
                    onChange={(e)=>setCity(e.target.value)}
                    placeholder="City"
                    className="w-full text-[15px] text-[#24272C] font-['DM_Sans'] border-none outline-none bg-transparent h-full placeholder-transparent focus:placeholder-transparent"
                  />
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="w-full h-[54px] rounded-xl border border-[#B2B2B2] bg-white px-4 shadow-sm focus-within:border-[#CF0D0D] transition-colors duration-150 relative">
                <div className="pt-2">
                  <label className="absolute -top-2 left-4 bg-white px-1 text-[12px] text-black">State</label>
                  <input
                    value={stateVal}
                    onChange={(e)=>setStateVal(e.target.value)}
                    placeholder="Enter your state"
                    className="w-full text-[15px] text-[#050B20] font-['DM_Sans'] border-none outline-none bg-transparent h-full placeholder-transparent focus:placeholder-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="relative">
              <div className="w-full h-[54px] rounded-xl border border-[#B2B2B2] bg-white px-4 shadow-sm focus-within:border-[#CF0D0D] transition-colors duration-150 relative">
                <div className="pt-2">
                  <label className="absolute -top-2 left-4 bg-white px-1 text-[12px] text-black">Zip code</label>
                  <input
                    value={zip}
                    onChange={(e)=>setZip(e.target.value)}
                    placeholder="Zip code"
                    className="w-full text-[15px] text-[#050B20] font-['DM_Sans'] border-none outline-none bg-transparent h-full placeholder-transparent focus:placeholder-transparent"
                  />
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="w-full h-[54px] rounded-xl border border-[#B2B2B2] bg-white px-4 shadow-sm focus-within:border-[#CF0D0D] transition-colors duration-150 relative">
                <div className="pt-2">
                  <label className="absolute -top-2 left-4 bg-white px-1 text-[12px] text-black">Email lead alert address</label>
                  <input
                    value={emailLead}
                    onChange={(e)=>setEmailLead(e.target.value)}
                    placeholder="Email address"
                    className="w-full text-[15px] text-[#050B20] font-['DM_Sans'] border-none outline-none bg-transparent h-full placeholder-transparent focus:placeholder-transparent"
                  />
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="w-full h-[54px] rounded-xl border border-[#B2B2B2] bg-white px-4 shadow-sm focus-within:border-[#CF0D0D] transition-colors duration-150 relative">
                <div className="pt-2">
                  <label className="absolute -top-2 left-4 bg-white px-1 text-[12px] text-black">Account holder email Address</label>
                  <input
                    value={accountEmail}
                    onChange={(e)=>setAccountEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full text-[15px] text-[#050B20] font-['DM_Sans'] border-none outline-none bg-transparent h-full placeholder-transparent focus:placeholder-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Row 3 */}
            <div className="relative">
              <div className="w-full h-[54px] rounded-xl border border-[#B2B2B2] bg-white px-4 shadow-sm focus-within:border-[#CF0D0D] transition-colors duration-150 relative">
                <div className="pt-2">
                  <label className="absolute -top-2 left-4 bg-white px-1 text-[12px] text-black">Seller Phone</label>
                  <input
                    value={sellerPhone}
                    onChange={(e)=>setSellerPhone(e.target.value)}
                    className="w-full text-[15px] text-[#050B20] font-['DM_Sans'] border-none outline-none bg-transparent h-full placeholder-transparent focus:placeholder-transparent"
                  />
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="w-full h-[54px] rounded-xl border border-[#B2B2B2] bg-white px-4 shadow-sm focus-within:border-[#CF0D0D] transition-colors duration-150 relative">
                <div className="pt-2">
                  <label className="absolute -top-2 left-4 bg-white px-1 text-[12px] text-black">List your phone# on ads?</label>
                  <div className="relative w-full" ref={listPhoneFormRef}>
                    <button
                      type="button"
                      onClick={() => setListPhoneFormOpen(v => !v)}
                      className="inline-block w-full h-full border-none rounded-xl bg-transparent text-[15px] text-[#050B20] leading-[22.5px] relative text-left"
                      aria-haspopup="listbox"
                      aria-expanded={listPhoneFormOpen}
                    >
                      <span className="truncate block text-left">{listPhone ? 'Yes' : 'No'}</span>
                      <svg viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 absolute right-4 top-1/2 transform -translate-y-1/2"><path d="M9.86941 3.02782C9.68892 2.83638 9.38702 2.82925 9.19653 3.00924L4.99976 6.98505L0.803467 3.00926C0.612983 2.82878 0.311545 2.8364 0.130592 3.02784C-0.0503606 3.21879 -0.0422749 3.52023 0.148697 3.70118L4.67261 7.987C4.76404 8.07368 4.88214 8.11748 4.99976 8.11748C5.11737 8.11748 5.23594 8.07368 5.32738 7.987L9.8513 3.70118C10.0423 3.52021 10.0504 3.21879 9.86941 3.02782Z" fill="#CF0D0D"/></svg>
                    </button>

                    {listPhoneFormOpen && (
                      <ul role="listbox" className="absolute mt-2 bg-white border border-[#E1E1E1] rounded-md shadow-lg z-50" style={{ left: 0, right: 0, top: 'calc(100% + 8px)', boxSizing: 'border-box' }}>
                        <li role="option" className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => { setListPhone(true); setListPhoneFormOpen(false); }}>Yes</li>
                        <li role="option" className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => { setListPhone(false); setListPhoneFormOpen(false); }}>No</li>
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
                    <div className="pt-2">
                      <label className="absolute -top-2 left-4 bg-white px-1 text-[12px] text-black">Enter your address and then select from the choices.</label>
                      <input
                        value={address}
                        onChange={(e)=>setAddress(e.target.value)}
                        placeholder="Enter address"
                        className="w-full text-[15px] text-[#050B20] font-['Albert_Sans'] border-none outline-none bg-transparent h-full placeholder-transparent focus:placeholder-transparent"
                      />
                    </div>
                  </div>
                </div>

                <div className="relative md:col-span-1">
                  <div className="w-full h-[54px] rounded-xl border border-[#B2B2B2] bg-white px-4 shadow-sm focus-within:border-[#CF0D0D] transition-colors duration-150 relative">
                    <div className="pt-2">
                      <label className="absolute -top-2 left-4 bg-white px-1 text-[12px] text-black">Longitude:</label>
                      <input
                        value={longitude}
                        onChange={(e)=>setLongitude(e.target.value)}
                        placeholder="Longitude"
                        className="w-full text-[15px] text-[#050B20] font-['DM_Sans'] border-none outline-none bg-transparent h-full placeholder-transparent focus:placeholder-transparent"
                      />
                    </div>
                  </div>
                </div>

                <div className="relative md:col-span-1">
                  <div className="w-full h-[54px] rounded-xl border border-[#B2B2B2] bg-white px-4 shadow-sm focus-within:border-[#CF0D0D] transition-colors duration-150 relative">
                    <div className="pt-2">
                      <label className="absolute -top-2 left-4 bg-white px-1 text-[12px] text-black">Latitude</label>
                      <input
                        value={latitude}
                        onChange={(e)=>setLatitude(e.target.value)}
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

      <section className="bg-white rounded-lg p-8 mt-5" style={{ border: '0.8px solid rgba(171,171,171,1)' }}>
        <h3 className="text-[24px] font-medium text-[#24272C] mb-5 font-['Albert_Sans']">Dealership Information</h3>

        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {/* Row 1 */}
            <div className="relative">
              <div className="w-full h-[54px] rounded-xl border border-[#B2B2B2] bg-white px-4 shadow-sm focus-within:border-[#CF0D0D] transition-colors duration-150 relative">
                <div className="pt-2">
                  <label className="absolute -top-2 left-4 bg-white px-1 text-[12px] text-black">Do you sell new or used vehicles?</label>
                  <div className="relative w-full" ref={vehicleTypeRef}>
                    <button
                      type="button"
                      onClick={() => { setVehicleTypeOpen(v => !v); }}
                      className="inline-block w-full h-full border-none rounded-xl bg-transparent text-[15px] text-[#050B20] leading-[22.5px] relative text-left"
                      aria-haspopup="listbox"
                      aria-expanded={vehicleTypeOpen}
                    >
                      <span className="truncate block text-left">{vehicleType}</span>
                      <svg viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 absolute right-4 top-1/2 transform -translate-y-1/2"><path d="M9.86941 3.02782C9.68892 2.83638 9.38702 2.82925 9.19653 3.00924L4.99976 6.98505L0.803467 3.00926C0.612983 2.82878 0.311545 2.8364 0.130592 3.02784C-0.0503606 3.21879 -0.0422749 3.52023 0.148697 3.70118L4.67261 7.987C4.76404 8.07368 4.88214 8.11748 4.99976 8.11748C5.11737 8.11748 5.23594 8.07368 5.32738 7.987L9.8513 3.70118C10.0423 3.52021 10.0504 3.21879 9.86941 3.02782Z" fill="#CF0D0D"/></svg>
                    </button>

                    {vehicleTypeOpen && (
                      <ul role="listbox" className="absolute mt-2 bg-white border border-[#E1E1E1] rounded-md shadow-lg z-50" style={{ left: 0, right: 0, top: 'calc(100% + 8px)', boxSizing: 'border-box' }}>
                                                <li role="option" className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => { setVehicleType('New/Used'); setVehicleTypeOpen(false); }}>New/Used</li>
                        <li role="option" className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => { setVehicleType('Used'); setVehicleTypeOpen(false); }}>Used</li>
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="w-full h-[54px] rounded-xl border border-[#B2B2B2] bg-white px-4 shadow-sm focus-within:border-[#CF0D0D] transition-colors duration-150 relative">
                <div className="pt-2">
                  <label className="absolute -top-2 left-4 bg-white px-1 text-[12px] text-black">Email lead alerts user 1</label>
                  <input
                    value={emailAlert1}
                    onChange={(e)=>setEmailAlert1(e.target.value)}
                    placeholder="Enter an additional alert email address"
                    className="w-full text-[15px] text-[#050B20] font-['Albert_Sans'] border-none outline-none bg-transparent h-full placeholder-transparent focus:placeholder-transparent"
                  />
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="w-full h-[54px] rounded-xl border border-[#B2B2B2] bg-white px-4 shadow-sm focus-within:border-[#CF0D0D] transition-colors duration-150 relative">
                <div className="pt-2">
                  <label className="absolute -top-2 left-4 bg-white px-1 text-[12px] text-black">Dealerships CRM provider</label>
                  <input
                    value={crmProvider}
                    onChange={(e)=>setCrmProvider(e.target.value)}
                    placeholder="Enter your Crm provider"
                    className="w-full text-[15px] text-[#050B20] font-['Albert_Sans'] border-none outline-none bg-transparent h-full placeholder-transparent focus:placeholder-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="relative">
              <div className="w-full h-[54px] rounded-xl border border-[#B2B2B2] bg-white px-4 shadow-sm focus-within:border-[#CF0D0D] transition-colors duration-150 relative">
                <div className="pt-2">
                  <label className="absolute -top-2 left-4 bg-white px-1 text-[12px] text-black">Dealership website</label>
                  <input
                    value={dealershipWebsite}
                    onChange={(e)=>setDealershipWebsite(e.target.value)}
                    className="w-full text-[15px] text-[#050B20] font-['DM_Sans'] border-none outline-none bg-transparent h-full placeholder-transparent focus:placeholder-transparent"
                  />
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="w-full h-[54px] rounded-xl border border-[#B2B2B2] bg-white px-4 shadow-sm focus-within:border-[#CF0D0D] transition-colors duration-150 relative">
                <div className="pt-2">
                  <label className="absolute -top-2 left-4 bg-white px-1 text-[12px] text-black">Email lead alerts user 2</label>
                  <input
                    value={emailAlert2}
                    onChange={(e)=>setEmailAlert2(e.target.value)}
                    placeholder="Enter an additional alert email address"
                    className="w-full text-[15px] text-[#050B20] font-['Albert_Sans'] border-none outline-none bg-transparent h-full placeholder-transparent focus:placeholder-transparent"
                  />
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="w-full h-[54px] rounded-xl border border-[#B2B2B2] bg-white px-4 shadow-sm focus-within:border-[#CF0D0D] transition-colors duration-150 relative">
                <div className="pt-2">
                  <label className="absolute -top-2 left-4 bg-white px-1 text-[12px] text-black">CRM Account #</label>
                  <input
                    value={crmAccount}
                    onChange={(e)=>setCrmAccount(e.target.value)}
                    placeholder="Enter your Crm account #"
                    className="w-full text-[15px] text-[#050B20] font-['Albert_Sans'] border-none outline-none bg-transparent h-full placeholder-transparent focus:placeholder-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Row 3 */}
            <div className="relative">
              <div className="w-full h-[54px] rounded-xl border border-[#B2B2B2] bg-white px-4 shadow-sm focus-within:border-[#CF0D0D] transition-colors duration-150 relative">
                <div className="pt-2">
                  <label className="absolute -top-2 left-4 bg-white px-1 text-[12px] text-black">XML or CSV vehicle Feed url</label>
                  <input
                    value={websiteProvider}
                    onChange={(e)=>setWebsiteProvider(e.target.value)}
                    className="w-full text-[15px] text-[#050B20] font-['Albert_Sans'] border-none outline-none bg-transparent h-full placeholder-transparent focus:placeholder-transparent"
                  />
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="w-full h-[54px] rounded-xl border border-[#B2B2B2] bg-white px-4 shadow-sm focus-within:border-[#CF0D0D] transition-colors duration-150 relative">
                <div className="pt-2">
                  <label className="absolute -top-2 left-4 bg-white px-1 text-[12px] text-black">Email lead alerts user 3</label>
                  <input
                    value={emailAlert3}
                    onChange={(e)=>setEmailAlert3(e.target.value)}
                    placeholder="Enter an additional alert email address"
                    className="w-full text-[15px] text-[#050B20] font-['Albert_Sans'] border-none outline-none bg-transparent h-full placeholder-transparent focus:placeholder-transparent"
                  />
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="w-full h-[54px] rounded-xl border border-[#B2B2B2] bg-white px-4 shadow-sm focus-within:border-[#CF0D0D] transition-colors duration-150 relative">
                <div className="pt-2">
                  <label className="absolute -top-2 left-4 bg-white px-1 text-[12px] text-black">Dealerships CRM email</label>
                  <input
                    value={crmEmail}
                    onChange={(e)=>setCrmEmail(e.target.value)}
                    placeholder="Enter your Crm alert email address"
                    className="w-full text-[15px] text-[#050B20] font-['Albert_Sans'] border-none outline-none bg-transparent h-full placeholder-transparent focus:placeholder-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Row 4 */}
            <div className="relative">
              <div className="w-full h-[54px] rounded-xl border border-[#B2B2B2] bg-white px-4 shadow-sm focus-within:border-[#CF0D0D] transition-colors duration-150 relative">
                <div className="pt-2">
                  <label className="absolute -top-2 left-4 bg-white px-1 text-[12px] text-black">Website provider information</label>
                  <input
                    value={websiteProvider}
                    onChange={(e)=>setWebsiteProvider(e.target.value)}
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
