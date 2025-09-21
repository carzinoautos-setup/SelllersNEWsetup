import React, { useState, useRef, useEffect } from "react";
import { DashboardLayout } from "../components/DashboardLayout";

export default function UsresProfile() {
  const [accountType, setAccountType] = useState("Select");
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <DashboardLayout>
      <div className="flex-1 overflow-visible">
        <div className="-mb-[1px] pt-[34px] pb-[20px] px-5">
          <div className="w-full max-w-[1280px] mx-auto">
            <div className="flex flex-col items-start justify-start border border-[#E4E4E4] rounded-[14px] p-[7px] md:pt-[7px] md:pb-[21px] md:px-[48px]">
              <div className="flex flex-col md:flex-row justify-start md:justify-between items-stretch md:items-start gap-8 md:gap-0 bg-white w-full max-w-[1280px]">

                <div className="flex-1 max-w-[896px] space-y-10 flex flex-col md:flex-row md:items-start justify-start items-start md:gap-10">
                  <div className="flex flex-col items-start gap-4 self-stretch w-full md:w-[70%] mr-0 md:mr-0 pl-2 md:pl-0 md:justify-start">
                    <h1 className="text-2xl font-semibold text-[#24272C] font-albert w-full pt-[35px]">Get Started with Carzino</h1>
                    <div className="flex flex-col items-start gap-4">
                      <p className="text-xs text-[#111928] font-albert leading-[140%] max-w-[640px] w-full">
                        Please fill out the form below with your information to create your listing. You'll be asked to choose whether you're listing as a Private Seller or a Dealer. If you're a dealer and would like to use your feed for automatic vehicle listings, please contact us for details.
                      </p>
                    </div>

                    <div ref={dropdownRef} className="w-full max-w-[423px] relative">
                      <div>
                        <button
                          type="button"
                          onClick={() => setOpen((s) => !s)}
                          className="w-full h-[60px] border border-[#B2B2B2] rounded-xl bg-white px-4 py-3 pr-10 text-[15px] font-dm flex items-center justify-between"
                        >
                          <div className="text-left">
                            <div className="text-[13px] text-black font-albert font-semibold mb-1">Select your Account type</div>
                            <div className="text-[15px] text-[#050B20]">{accountType}</div>
                          </div>

                          {accountType !== "Select" && (
                            <svg className="w-4 h-4 mr-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M20 6L9 17l-5-5" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          )}

                          <svg className={(open ? "rotate-180" : "") + " transition-transform"} width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.86941 2.52782C9.68892 2.33638 9.38702 2.32925 9.19653 2.50924L4.99976 6.48505L0.803467 2.50926C0.612983 2.32878 0.311545 2.3364 0.130592 2.52784C-0.0503606 2.71879 -0.0422749 3.02023 0.148697 3.20118L4.67261 7.487C4.76404 7.57368 4.88214 7.61748 4.99976 7.61748C5.11737 7.61748 5.23594 7.57368 5.32738 7.487L9.8513 3.20118C10.0423 3.02021 10.0504 2.71879 9.86941 2.52782Z" fill="#E82121" />
                          </svg>
                        </button>

                        {open && (
                          <ul className="absolute left-0 z-50 mt-2 w-full bg-white border border-[#B2B2B2] rounded-md max-h-[260px] overflow-auto text-left">
                            <li className="flex justify-between items-center px-4 py-3 hover:bg-[#F3F4F6] cursor-pointer" onClick={() => { setAccountType("Select"); setOpen(false); }}>
                              <span>Select</span>
                              {accountType === "Select" && (
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M20 6L9 17l-5-5" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                              )}
                            </li>

                            <li className="flex justify-between items-center px-4 py-3 hover:bg-[#F3F4F6] cursor-pointer" onClick={() => { setAccountType("Private Seller"); setOpen(false); }}>
                              <span>Private Seller</span>
                              {accountType === "Private Seller" && (
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M20 6L9 17l-5-5" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                              )}
                            </li>

                            <li className="flex justify-between items-center px-4 py-3 hover:bg-[#F3F4F6] cursor-pointer" onClick={() => { setAccountType("Dealer"); setOpen(false); }}>
                              <span>Dealer</span>
                              {accountType === "Dealer" && (
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M20 6L9 17l-5-5" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                              )}
                            </li>
                          </ul>
                        )}

                      </div>
                    </div>

                  </div>

                  <div className="w-full md:w-[30%] flex flex-row md:flex-col items-center md:items-end gap-4 md:gap-2 mt-10 md:self-end md:justify-end">
                    <div className="w-full bg-transparent md:bg-white md:border md:border-[#E4E4E4] rounded-[14px] md:pt-5 md:px-4 md:pb-4 p-0 -mt-5 pb-[5px] md:-mt-1 flex flex-row md:flex-col items-center md:items-start justify-center gap-4 md:gap-2">
                      <div className="relative flex-shrink-0">
                        <div className="w-[72px] h-[72px] md:w-24 md:h-24 rounded-full overflow-hidden flex items-start justify-start md:block">
                          <svg className="w-full h-full" viewBox="0 0 97 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <ellipse cx="48.7901" cy="49.6803" rx="46.9132" ry="48.1452" fill="url(#pattern0_2997_28513)" />
                            <path d="M48.4766 0.75C74.9614 0.75 96.4541 22.7877 96.4541 50C96.4541 77.2123 74.9614 99.25 48.4766 99.25C21.9919 99.2498 0.5 77.2122 0.5 50C0.5 22.7878 21.9919 0.750224 48.4766 0.75Z" stroke="#242760" />
                            <defs>
                              <pattern id="pattern0_2997_28513" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use xlinkHref="#image0_2997_28513" transform="matrix(0.00257069 0 0 0.00250491 0 -0.307835)" />
                              </pattern>
                            </defs>
                          </svg>
                        </div>

                        <div className="absolute -right-1 md:-right-1 -bottom-1 w-6 h-6 bg-[#E82121] rounded-full flex items-center justify-center">
                          <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 9a3 3 0 100 6 3 3 0 000-6z" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M20 7h-3.2l-1.4-1.8A1.5 1.5 0 0014.2 4H9.8a1.5 1.5 0 00-1.2.9L7.2 6H4a1 1 0 00-1 1v10a1 1 0 001 1h16a1 1 0 001-1V8a1 1 0 00-1-1z" stroke="#fff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      </div>

                      <div className="flex flex-col items-start gap-2">
                        <p className="text-xs text-[#111928] font-albert leading-[140%]">Upload Photo</p>
                        <p className="text-xs text-[#111928] font-albert leading-[140%]">Account number: 556568995</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Enter your Details Form */}
            <div className="flex flex-col items-start gap-5 w-full max-w-[1484px] mx-auto mt-8">
              <h2 className="text-2xl font-medium text-[#24272C] font-albert">Enter your Details</h2>

              <div className="w-full border border-[#B2B2B2] rounded-lg p-[30px] bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] w-full">

                  {/* Seller or dealer name */}
                  <div className="flex flex-col">
                    <div className="w-full h-[60px] border border-[#B2B2B2] rounded-xl bg-white px-4 py-[10px] flex flex-col justify-center">
                      <label className="text-sm text-[#24272C] font-albert mb-1">Seller or dealer name</label>
                      <input
                        type="text"
                        placeholder="Enter your full name"
                        className="text-[15px] text-[#050B20] font-dm bg-transparent outline-none border-none"
                      />
                    </div>
                  </div>

                  {/* City */}
                  <div className="flex flex-col">
                    <div className="w-full h-[60px] border border-[#B2B2B2] rounded-xl bg-white px-4 py-[10px] flex flex-col justify-center">
                      <label className="text-[13px] text-[#24272C] font-dm mb-1">City</label>
                      <input
                        type="text"
                        placeholder="City"
                        className="text-[15px] text-[#24272C] font-dm bg-transparent outline-none border-none"
                      />
                    </div>
                  </div>

                  {/* State */}
                  <div className="flex flex-col">
                    <div className="w-full h-[60px] border border-[#B2B2B2] rounded-xl bg-white px-4 py-[10px] flex flex-col justify-center">
                      <label className="text-[13px] text-[#24272C] font-dm mb-1">State</label>
                      <input
                        type="text"
                        placeholder="Enter your state"
                        className="text-[15px] text-[#050B20] font-dm bg-transparent outline-none border-none"
                      />
                    </div>
                  </div>

                  {/* Zip code */}
                  <div className="flex flex-col">
                    <div className="w-full h-[60px] border border-[#B2B2B2] rounded-xl bg-white px-4 py-[10px] flex flex-col justify-center">
                      <label className="text-[13px] text-[#24272C] font-dm mb-1">Zip code</label>
                      <input
                        type="text"
                        placeholder="Zip code"
                        className="text-[15px] text-[#050B20] font-dm bg-transparent outline-none border-none"
                      />
                    </div>
                  </div>

                  {/* Email lead alert address */}
                  <div className="flex flex-col">
                    <div className="w-full h-[60px] border border-[#B2B2B2] rounded-xl bg-white px-4 py-[10px] flex flex-col justify-center">
                      <label className="text-[13px] text-[#24272C] font-dm mb-1">Email lead alert address</label>
                      <input
                        type="email"
                        placeholder="Email address"
                        className="text-[15px] text-[#050B20] font-dm bg-transparent outline-none border-none"
                      />
                    </div>
                  </div>

                  {/* Account holder email Address */}
                  <div className="flex flex-col">
                    <div className="w-full h-[60px] border border-[#B2B2B2] rounded-xl bg-white px-4 py-[10px] flex flex-col justify-center">
                      <label className="text-[13px] text-[#24272C] font-dm mb-1">Account holder email Address</label>
                      <input
                        type="email"
                        placeholder="Enter your email address"
                        className="text-[15px] text-[#050B20] font-dm bg-transparent outline-none border-none"
                      />
                    </div>
                  </div>

                  {/* List your phone# on ads */}
                  <div className="flex flex-col">
                    <div className="w-full h-[60px] border border-[#B2B2B2] rounded-xl bg-white px-4 py-[10px] flex items-center justify-between relative">
                      <div className="flex flex-col">
                        <label className="text-[13px] text-[#24272C] font-dm mb-1">List your phone# on ads</label>
                        <span className="text-[15px] text-[#050B20] font-dm">Yes</span>
                      </div>
                      <svg className="w-[10px] h-[10px] flex-shrink-0" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.86941 2.52782C9.68892 2.33638 9.38702 2.32925 9.19653 2.50924L4.99976 6.48505L0.803467 2.50926C0.612983 2.32878 0.311545 2.3364 0.130592 2.52784C-0.0503606 2.71879 -0.0422749 3.02023 0.148697 3.20118L4.67261 7.487C4.76404 7.57368 4.88214 7.61748 4.99976 7.61748C5.11737 7.61748 5.23594 7.57368 5.32738 7.487L9.8513 3.20118C10.0423 3.02021 10.0504 2.71879 9.86941 2.52782Z" fill="#050B20"/>
                      </svg>
                    </div>
                  </div>

                  {/* Seller Phone */}
                  <div className="flex flex-col">
                    <div className="w-full h-[60px] border border-[#B2B2B2] rounded-xl bg-white px-4 py-[10px] flex flex-col justify-center">
                      <label className="text-[13px] text-[#24272C] font-dm mb-1">Seller Phone</label>
                      <input
                        type="tel"
                        placeholder=""
                        className="text-[15px] text-[#050B20] font-dm bg-transparent outline-none border-none"
                      />
                    </div>
                  </div>

                  {/* Empty cell for 3-column layout alignment */}
                  <div className="hidden lg:block"></div>

                  {/* Enter your address */}
                  <div className="flex flex-col">
                    <div className="w-full h-[60px] border border-[#B2B2B2] rounded-xl bg-white px-4 py-[10px] flex flex-col justify-center">
                      <label className="text-[13px] text-[#24272C] font-albert mb-1">Enter your address and then select from the choices.</label>
                      <input
                        type="text"
                        placeholder="Enter address"
                        className="text-[15px] text-[#050B20] font-albert bg-transparent outline-none border-none"
                      />
                    </div>
                  </div>

                  {/* Longitude */}
                  <div className="flex flex-col">
                    <div className="w-full h-[60px] border border-[#B2B2B2] rounded-xl bg-white px-4 py-[10px] flex flex-col justify-center">
                      <label className="text-[13px] text-[#24272C] font-dm mb-1">Longitude:</label>
                      <input
                        type="text"
                        placeholder="Longitude"
                        className="text-[15px] text-[#050B20] font-dm bg-transparent outline-none border-none"
                      />
                    </div>
                  </div>

                  {/* Latitude */}
                  <div className="flex flex-col">
                    <div className="w-full h-[60px] border border-[#B2B2B2] rounded-xl bg-white px-4 py-[10px] flex flex-col justify-center">
                      <label className="text-[13px] text-[#24272C] font-dm mb-1">Latitude</label>
                      <input
                        type="text"
                        placeholder="Latitude"
                        className="text-[15px] text-[#050B20] font-dm bg-transparent outline-none border-none"
                      />
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Enter your Details Form - Enhanced Version */}
            <div className="flex flex-col items-start gap-5 w-full max-w-[1484px] mx-auto mt-8">
              <h2 className="text-2xl font-medium text-[#24272C] font-albert">Enter your Details</h2>

              <div className="w-full border border-[#B2B2B2] rounded-lg p-[30px] bg-white shadow-[0_1px_2px_0_rgba(0,0,0,0.3),0_1px_3px_1px_rgba(0,0,0,0.15)]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] w-full">

                  {/* Seller or dealer name */}
                  <div className="flex flex-col">
                    <div className="w-full h-[60px] border border-[#B2B2B2] rounded-xl bg-white px-4 py-[10px] flex flex-col justify-center">
                      <label className="text-sm text-[#24272C] font-albert mb-1">Seller or dealer name</label>
                      <input
                        type="text"
                        placeholder="Enter your full name"
                        className="text-[15px] text-[#050B20] font-dm bg-transparent outline-none border-none"
                      />
                    </div>
                  </div>

                  {/* City */}
                  <div className="flex flex-col">
                    <div className="w-full h-[60px] border border-[#B2B2B2] rounded-xl bg-white px-4 py-[10px] flex flex-col justify-center">
                      <label className="text-[13px] text-[#24272C] font-dm mb-1">City</label>
                      <input
                        type="text"
                        placeholder="City"
                        className="text-[15px] text-[#24272C] font-dm bg-transparent outline-none border-none"
                      />
                    </div>
                  </div>

                  {/* State */}
                  <div className="flex flex-col">
                    <div className="w-full h-[60px] border border-[#B2B2B2] rounded-xl bg-white px-4 py-[10px] flex flex-col justify-center">
                      <label className="text-[13px] text-[#24272C] font-dm mb-1">State</label>
                      <input
                        type="text"
                        placeholder="Enter your state"
                        className="text-[15px] text-[#050B20] font-dm bg-transparent outline-none border-none"
                      />
                    </div>
                  </div>

                  {/* Zip code */}
                  <div className="flex flex-col">
                    <div className="w-full h-[60px] border border-[#B2B2B2] rounded-xl bg-white px-4 py-[10px] flex flex-col justify-center">
                      <label className="text-[13px] text-[#24272C] font-dm mb-1">Zip code</label>
                      <input
                        type="text"
                        placeholder="Zip code"
                        className="text-[15px] text-[#050B20] font-dm bg-transparent outline-none border-none"
                      />
                    </div>
                  </div>

                  {/* Email lead alert address */}
                  <div className="flex flex-col">
                    <div className="w-full h-[60px] border border-[#B2B2B2] rounded-xl bg-white px-4 py-[10px] flex flex-col justify-center">
                      <label className="text-[13px] text-[#24272C] font-dm mb-1">Email lead alert address</label>
                      <input
                        type="email"
                        placeholder="Email address"
                        className="text-[15px] text-[#050B20] font-dm bg-transparent outline-none border-none"
                      />
                    </div>
                  </div>

                  {/* Account holder email Address */}
                  <div className="flex flex-col">
                    <div className="w-full h-[60px] border border-[#B2B2B2] rounded-xl bg-white px-4 py-[10px] flex flex-col justify-center">
                      <label className="text-[13px] text-[#24272C] font-dm mb-1">Account holder email Address</label>
                      <input
                        type="email"
                        placeholder="Enter your email address"
                        className="text-[15px] text-[#050B20] font-dm bg-transparent outline-none border-none"
                      />
                    </div>
                  </div>

                  {/* List your phone# on ads */}
                  <div className="flex flex-col">
                    <div className="w-full h-[60px] border border-[#B2B2B2] rounded-xl bg-white px-4 py-[10px] flex items-center justify-between relative">
                      <div className="flex flex-col">
                        <label className="text-[13px] text-[#24272C] font-dm mb-1">List your phone# on ads</label>
                        <span className="text-[15px] text-[#050B20] font-dm">Yes</span>
                      </div>
                      <svg className="w-[10px] h-[10px] flex-shrink-0" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.86941 2.52782C9.68892 2.33638 9.38702 2.32925 9.19653 2.50924L4.99976 6.48505L0.803467 2.50926C0.612983 2.32878 0.311545 2.3364 0.130592 2.52784C-0.0503606 2.71879 -0.0422749 3.02023 0.148697 3.20118L4.67261 7.487C4.76404 7.57368 4.88214 7.61748 4.99976 7.61748C5.11737 7.61748 5.23594 7.57368 5.32738 7.487L9.8513 3.20118C10.0423 3.02021 10.0504 2.71879 9.86941 2.52782Z" fill="#050B20"/>
                      </svg>
                    </div>
                  </div>

                  {/* Seller Phone */}
                  <div className="flex flex-col">
                    <div className="w-full h-[60px] border border-[#B2B2B2] rounded-xl bg-white px-4 py-[10px] flex flex-col justify-center">
                      <label className="text-[13px] text-[#24272C] font-dm mb-1">Seller Phone</label>
                      <input
                        type="tel"
                        placeholder=""
                        className="text-[15px] text-[#050B20] font-dm bg-transparent outline-none border-none"
                      />
                    </div>
                  </div>

                  {/* Empty cell for 3-column layout alignment */}
                  <div className="hidden lg:block"></div>

                  {/* Enter your address */}
                  <div className="flex flex-col">
                    <div className="w-full h-[60px] border border-[#B2B2B2] rounded-xl bg-white px-4 py-[10px] flex flex-col justify-center">
                      <label className="text-[13px] text-[#24272C] font-albert mb-1">Enter your address and then select from the choices.</label>
                      <input
                        type="text"
                        placeholder="Enter address"
                        className="text-[15px] text-[#050B20] font-albert bg-transparent outline-none border-none"
                      />
                    </div>
                  </div>

                  {/* Longitude */}
                  <div className="flex flex-col">
                    <div className="w-full h-[60px] border border-[#B2B2B2] rounded-xl bg-white px-4 py-[10px] flex flex-col justify-center">
                      <label className="text-[13px] text-[#24272C] font-dm mb-1">Longitude:</label>
                      <input
                        type="text"
                        placeholder="Longitude"
                        className="text-[15px] text-[#050B20] font-dm bg-transparent outline-none border-none"
                      />
                    </div>
                  </div>

                  {/* Latitude */}
                  <div className="flex flex-col">
                    <div className="w-full h-[60px] border border-[#B2B2B2] rounded-xl bg-white px-4 py-[10px] flex flex-col justify-center">
                      <label className="text-[13px] text-[#24272C] font-dm mb-1">Latitude</label>
                      <input
                        type="text"
                        placeholder="Latitude"
                        className="text-[15px] text-[#050B20] font-dm bg-transparent outline-none border-none"
                      />
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
