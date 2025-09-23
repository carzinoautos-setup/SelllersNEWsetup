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

  const [listPhone, setListPhone] = useState(true);
  const [sellerPhone, setSellerPhone] = useState("");
  const [address, setAddress] = useState("");
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");

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
      } catch (e) {
        console.warn(e);
      }
    }
  }, []);

  useEffect(() => {
    const data = { sellerName, city, stateVal, zip, emailLead, accountEmail, sellerType, listPhone, sellerPhone, address, longitude, latitude };
    localStorage.setItem("usresprofile.draft", JSON.stringify(data));
  }, [sellerName, city, stateVal, zip, emailLead, accountEmail, sellerType, listPhone, sellerPhone, address, longitude, latitude]);

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
              <div className="relative w-full max-w-[310px]" ref={sellerTypeRef}>
                <button
                  type="button"
                  onClick={() => setSellerTypeOpen(v => !v)}
                  className="w-full h-[44px] flex items-center justify-between rounded-xl border border-[#B2B2B2] bg-white px-4 text-[15px] text-[#050B20]"
                  aria-haspopup="listbox"
                  aria-expanded={sellerTypeOpen}
                >
                  <span className="truncate">{sellerType || 'Select Seller Type'}</span>
                  <svg className="w-4 h-4 text-[#E82121] ml-2" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.86941 3.02782C9.68892 2.83638 9.38702 2.82925 9.19653 3.00924L4.99976 6.98505L0.803467 3.00926C0.612983 2.82878 0.311545 2.8364 0.130592 3.02784C-0.0503606 3.21879 -0.0422749 3.52023 0.148697 3.70118L4.67261 7.987C4.76404 8.07368 4.88214 8.11748 4.99976 8.11748C5.11737 8.11748 5.23594 8.07368 5.32738 7.987L9.8513 3.70118C10.0423 3.52021 10.0504 3.21879 9.86941 3.02782Z" fill="#E82121"/></svg>
                </button>

                {sellerTypeOpen && (
                  <ul role="listbox" className="absolute left-0 mt-2 w-full bg-white border border-[#E1E1E1] rounded-md shadow-lg z-50">
                    <li role="option" className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => { setSellerType(''); setSellerTypeOpen(false); }}>Select Seller Type</li>
                    <li role="option" className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => { setSellerType('Private Seller'); setSellerTypeOpen(false); }}>Private Seller</li>
                    <li role="option" className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => { setSellerType('Dealer'); setSellerTypeOpen(false); }}>Dealer</li>
                  </ul>
                )}
              </div>

              <div className="relative w-[160px]" ref={listPhoneRef}>
                <button
                  type="button"
                  onClick={() => setListPhoneOpen(v => !v)}
                  className="w-full h-[44px] flex items-center justify-between rounded-xl border border-[#B2B2B2] bg-white px-4 text-[15px] text-[#050B20]"
                  aria-haspopup="listbox"
                  aria-expanded={listPhoneOpen}
                >
                  <span className="truncate">{listPhone ? 'Yes' : 'No'}</span>
                  <svg className="w-4 h-4 text-[#050B20] ml-2" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.86941 3.02782C9.68892 2.83638 9.38702 2.82925 9.19653 3.00924L4.99976 6.98505L0.803467 3.00926C0.612983 2.82878 0.311545 2.8364 0.130592 3.02784C-0.0503606 3.21879 -0.0422749 3.52023 0.148697 3.70118L4.67261 7.987C4.76404 8.07368 4.88214 8.11748 4.99976 8.11748C5.11737 8.11748 5.23594 8.07368 5.32738 7.987L9.8513 3.70118C10.0423 3.52021 10.0504 3.21879 9.86941 3.02782Z" fill="#050B20"/></svg>
                </button>

                {listPhoneOpen && (
                  <ul role="listbox" className="absolute left-0 mt-2 w-full bg-white border border-[#E1E1E1] rounded-md shadow-lg z-50">
                    <li role="option" className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => { setListPhone(true); setListPhoneOpen(false); }}>Yes</li>
                    <li role="option" className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => { setListPhone(false); setListPhoneOpen(false); }}>No</li>
                  </ul>
                )}
              </div>
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
                <div className="pt-2 flex items-center justify-between">
                  <div>
                    <label className="absolute -top-2 left-4 bg-white px-1 text-[12px] text-black">List your phone# on ads</label>
                    <div className="block text-[15px] text-[#050B20] font-['DM_Sans'] h-full flex items-center">{listPhone ? 'Yes' : 'No'}</div>
                  </div>
                </div>
              </div>
            </div>

            <div></div>

            {/* Row 4 */}
            <div className="relative">
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

            <div className="relative">
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

            <div className="relative">
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
