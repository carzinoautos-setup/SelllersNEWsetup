import React, { useState, useRef, useEffect } from "react";
import { DashboardLayout } from "../components/DashboardLayout";

export default function UsresProfile() {
  const [accountType, setAccountType] = useState("Select");
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const [phoneListed, setPhoneListed] = useState("Yes");
  const [phoneOpen, setPhoneOpen] = useState(false);
  const phoneRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
      if (phoneRef.current && !phoneRef.current.contains(e.target as Node)) {
        setPhoneOpen(false);
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
                    <h1 className="text-2xl font-semibold text-[#24272C] font-albert w-full pt-[35px]">
                      Get Started with Carzino
                    </h1>
                    <div className="flex flex-col items-start gap-4">
                      <p className="text-xs text-[#111928] font-albert leading-[140%] max-w-[640px] w-full">
                        Please fill out the form below with your information to
                        create your listing. You'll be asked to choose whether
                        you're listing as a Private Seller or a Dealer. If
                        you're a dealer and would like to use your feed for
                        automatic vehicle listings, please contact us for
                        details.
                      </p>
                    </div>

                    <div
                      ref={dropdownRef}
                      className="w-full max-w-[423px] relative"
                    >
                      <div>
                        <button
                          type="button"
                          onClick={() => setOpen((s) => !s)}
                          style={
                            open
                              ? { boxShadow: "0 4px 10px rgba(0,0,0,0.06)" }
                              : undefined
                          }
                          className="w-full h-[60px] border border-[#E6E6E6] focus-within:border-[#E82121] rounded-xl bg-white px-4 pt-6 pb-[10px] pr-10 text-[15px] font-dm flex items-center justify-between relative"
                        >
                          <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-black">
                            Select your Account type
                          </label>
                          <div className="text-[15px] text-[#050B20]">
                            {accountType}
                          </div>

                          <div className="flex items-center gap-2">
                            {accountType !== "Select" && (
                              <svg
                                className="w-4 h-4"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M20 6L9 17l-5-5"
                                  stroke="#16A34A"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            )}

                            <svg
                              className={
                                (open ? "rotate-180" : "") +
                                " transition-transform"
                              }
                              width="11.5"
                              height="11.5"
                              style={{ transformOrigin: "center" }}
                              viewBox="0 0 10 10"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9.86941 2.52782C9.68892 2.33638 9.38702 2.32925 9.19653 2.50924L4.99976 6.48505L0.803467 2.50926C0.612983 2.32878 0.311545 2.3364 0.130592 2.52784C-0.0503606 2.71879 -0.0422749 3.02023 0.148697 3.20118L4.67261 7.487C4.76404 7.57368 4.88214 7.61748 4.99976 7.61748C5.11737 7.61748 5.23594 7.57368 5.32738 7.487L9.8513 3.20118C10.0423 3.02021 10.0504 2.71879 9.86941 2.52782Z"
                                fill="#E82121"
                                stroke="#E82121"
                                strokeWidth="1"
                              />
                            </svg>
                          </div>
                        </button>

                        {open && (
                          <ul
                            className={`absolute left-0 z-50 mt-2 w-full bg-white border border-[#E6E6E6] rounded-md max-h-[260px] overflow-auto text-left ${open && accountType !== "Select" ? "shadow-[0_6px_20px_rgba(0,0,0,0.06)]" : ""}`}
                          >
                            <li
                              className="flex justify-between items-center px-4 py-3 hover:bg-[#F3F4F6] cursor-pointer"
                              onClick={() => {
                                setAccountType("Select");
                                setOpen(false);
                              }}
                            >
                              <span>Select</span>
                              {accountType === "Select" && (
                                <svg
                                  className="w-5 h-5"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M20 6L9 17l-5-5"
                                    stroke="#16A34A"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              )}
                            </li>

                            <li
                              className="flex justify-between items-center px-4 py-3 hover:bg-[#F3F4F6] cursor-pointer"
                              onClick={() => {
                                setAccountType("Private Seller");
                                setOpen(false);
                              }}
                            >
                              <span>Private Seller</span>
                              {accountType === "Private Seller" && (
                                <svg
                                  className="w-5 h-5"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M20 6L9 17l-5-5"
                                    stroke="#16A34A"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              )}
                            </li>

                            <li
                              className="flex justify-between items-center px-4 py-3 hover:bg-[#F3F4F6] cursor-pointer"
                              onClick={() => {
                                setAccountType("Dealer");
                                setOpen(false);
                              }}
                            >
                              <span>Dealer</span>
                              {accountType === "Dealer" && (
                                <svg
                                  className="w-5 h-5"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M20 6L9 17l-5-5"
                                    stroke="#16A34A"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
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
                          <img src="https://cdn.builder.io/api/v1/image/assets%2F4d1f1909a98e4ebc8068632229306ce4%2Fd3b69236eb3240d09279f432fca9be0d" alt="Profile" className="w-full h-full object-cover" />
                        </div>

                        <div className="absolute -right-1 md:-right-1 -bottom-1 w-6 h-6 bg-[#E82121] rounded-full flex items-center justify-center">
                          <svg
                            className="w-3 h-3"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 9a3 3 0 100 6 3 3 0 000-6z"
                              stroke="#fff"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M20 7h-3.2l-1.4-1.8A1.5 1.5 0 0014.2 4H9.8a1.5 1.5 0 00-1.2.9L7.2 6H4a1 1 0 00-1 1v10a1 1 0 001 1h16a1 1 0 001-1V8a1 1 0 00-1-1z"
                              stroke="#fff"
                              strokeWidth="1"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>

                      <div className="flex flex-col items-start gap-2">
                        <p className="text-xs text-[#111928] font-albert leading-[140%]">
                          Upload Photo
                        </p>
                        <p className="text-xs text-[#111928] font-albert leading-[140%]">
                          Account number: 556568995
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enter your Details Form - Enhanced Version */}
            <div className="flex flex-col items-start gap-5 w-full max-w-[1484px] mx-auto mt-8">
              <div className="-mt-[3px] w-full border border-[#E6E6E6] rounded-lg p-[30px] bg-white shadow-[0_1px_2px_0_rgba(0,0,0,0.225),0_1px_3px_1px_rgba(0,0,0,0.1125)]">
                <div className="text-[20px] font-semibold text-[#24272C] mb-3">
                  Enter your Details
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] w-full py-[20px]">
                  {/* Seller or dealer name */}
                  <div className="flex flex-col">
                    <div className="relative w-full h-[60px] border border-[#E6E6E6] focus-within:border-[#E82121] rounded-xl bg-white px-4 pt-6 pb-[10px] flex flex-col justify-start">
                      <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-black">
                        Seller or dealer name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your full name"
                        data-placeholder="Enter your full name"
                        onFocus={(e) => {
                          e.currentTarget.placeholder = "";
                        }}
                        onBlur={(e) => {
                          e.currentTarget.placeholder =
                            e.currentTarget.getAttribute("data-placeholder") ||
                            "";
                        }}
                        className="text-[15px] text-[#050B20] font-dm bg-transparent outline-none border-none placeholder:text-gray-300"
                      />
                    </div>
                  </div>

                  {/* City */}
                  <div className="flex flex-col">
                    <div className="relative w-full h-[60px] border border-[#E6E6E6] focus-within:border-[#E82121] rounded-xl bg-white px-4 pt-6 pb-[10px] flex flex-col justify-start">
                      <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-black">
                        City
                      </label>
                      <input
                        type="text"
                        placeholder="City"
                        data-placeholder="City"
                        onFocus={(e) => {
                          e.currentTarget.placeholder = "";
                        }}
                        onBlur={(e) => {
                          e.currentTarget.placeholder =
                            e.currentTarget.getAttribute("data-placeholder") ||
                            "";
                        }}
                        className="text-[15px] text-[#24272C] font-dm bg-transparent outline-none border-none placeholder:text-gray-300"
                      />
                    </div>
                  </div>

                  {/* State */}
                  <div className="flex flex-col">
                    <div className="relative w-full h-[60px] border border-[#E6E6E6] focus-within:border-[#E82121] rounded-xl bg-white px-4 pt-6 pb-[10px] flex flex-col justify-start">
                      <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-black">
                        State
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your state"
                        data-placeholder="Enter your state"
                        onFocus={(e) => {
                          e.currentTarget.placeholder = "";
                        }}
                        onBlur={(e) => {
                          e.currentTarget.placeholder =
                            e.currentTarget.getAttribute("data-placeholder") ||
                            "";
                        }}
                        className="text-[15px] text-[#050B20] font-dm bg-transparent outline-none border-none placeholder:text-gray-300"
                      />
                    </div>
                  </div>

                  {/* Zip code */}
                  <div className="flex flex-col">
                    <div className="relative w-full h-[60px] border border-[#E6E6E6] focus-within:border-[#E82121] rounded-xl bg-white px-4 pt-6 pb-[10px] flex flex-col justify-start">
                      <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-black">
                        Zip code
                      </label>
                      <input
                        type="text"
                        placeholder="Zip code"
                        data-placeholder="Zip code"
                        onFocus={(e) => {
                          e.currentTarget.placeholder = "";
                        }}
                        onBlur={(e) => {
                          e.currentTarget.placeholder =
                            e.currentTarget.getAttribute("data-placeholder") ||
                            "";
                        }}
                        className="text-[15px] text-[#050B20] font-dm bg-transparent outline-none border-none placeholder:text-gray-300"
                      />
                    </div>
                  </div>

                  {/* Email lead alert address */}
                  <div className="flex flex-col">
                    <div className="relative w-full h-[60px] border border-[#E6E6E6] focus-within:border-[#E82121] rounded-xl bg-white px-4 pt-6 pb-[10px] flex flex-col justify-start">
                      <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-black">
                        Email lead alert address
                      </label>
                      <input
                        type="email"
                        placeholder="Email address"
                        data-placeholder="Email address"
                        onFocus={(e) => {
                          e.currentTarget.placeholder = "";
                        }}
                        onBlur={(e) => {
                          e.currentTarget.placeholder =
                            e.currentTarget.getAttribute("data-placeholder") ||
                            "";
                        }}
                        className="text-[15px] text-[#050B20] font-dm bg-transparent outline-none border-none placeholder:text-gray-300"
                      />
                    </div>
                  </div>

                  {/* Account holder email Address */}
                  <div className="flex flex-col">
                    <div className="relative w-full h-[60px] border border-[#E6E6E6] focus-within:border-[#E82121] rounded-xl bg-white px-4 pt-6 pb-[10px] flex flex-col justify-start">
                      <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-black">
                        Account holder email Address
                      </label>
                      <input
                        type="email"
                        placeholder="Enter your email address"
                        data-placeholder="Enter your email address"
                        onFocus={(e) => {
                          e.currentTarget.placeholder = "";
                        }}
                        onBlur={(e) => {
                          e.currentTarget.placeholder =
                            e.currentTarget.getAttribute("data-placeholder") ||
                            "";
                        }}
                        className="text-[15px] text-[#050B20] font-dm bg-transparent outline-none border-none placeholder:text-gray-300"
                      />
                    </div>
                  </div>

                  {/* List your phone# on ads */}
                  <div className="flex flex-col">
                    <div ref={phoneRef} className="w-full relative">
                      <div>
                        <button
                          type="button"
                          onClick={() => setPhoneOpen((s) => !s)}
                          style={
                            phoneOpen && phoneListed
                              ? { boxShadow: "0 4px 10px rgba(0,0,0,0.06)" }
                              : undefined
                          }
                          className="w-full h-[60px] border border-[#E6E6E6] focus-within:border-[#E82121] rounded-xl bg-white px-4 pt-6 pb-[10px] pr-10 text-[15px] font-dm flex items-center justify-between relative"
                        >
                          <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-black">
                            List your phone# on ads
                          </label>
                          <div className="text-[15px] text-[#050B20]">
                            {phoneListed}
                          </div>

                          <div className="flex items-center gap-2">
                            {phoneListed && (
                              <svg
                                className="w-4 h-4"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M20 6L9 17l-5-5"
                                  stroke="#16A34A"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            )}

                            <svg
                              className={
                                (phoneOpen ? "rotate-180" : "") +
                                " transition-transform"
                              }
                              width="11.5"
                              height="11.5"
                              style={{ transformOrigin: "center" }}
                              viewBox="0 0 10 10"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9.86941 2.52782C9.68892 2.33638 9.38702 2.32925 9.19653 2.50924L4.99976 6.48505L0.803467 2.50926C0.612983 2.32878 0.311545 2.3364 0.130592 2.52784C-0.0503606 2.71879 -0.0422749 3.02023 0.148697 3.20118L4.67261 7.487C4.76404 7.57368 4.88214 7.61748 4.99976 7.61748C5.11737 7.61748 5.23594 7.57368 5.32738 7.487L9.8513 3.20118C10.0423 3.02021 10.0504 2.71879 9.86941 2.52782Z"
                                fill="#E82121"
                                stroke="#E82121"
                                strokeWidth="1"
                              />
                            </svg>
                          </div>
                        </button>

                        {phoneOpen && (
                          <ul
                            className={`absolute left-0 z-50 mt-2 w-full bg-white border border-[#E6E6E6] rounded-md max-h-[260px] overflow-auto text-left ${phoneOpen && phoneListed ? "shadow-[0_6px_20px_rgba(0,0,0,0.06)]" : ""}`}
                          >
                            <li
                              className="flex justify-between items-center px-4 py-3 hover:bg-[#F3F4F6] cursor-pointer"
                              onClick={() => {
                                setPhoneListed("Yes");
                                setPhoneOpen(false);
                              }}
                            >
                              <span>Yes</span>
                              {phoneListed === "Yes" && (
                                <svg
                                  className="w-5 h-5"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M20 6L9 17l-5-5"
                                    stroke="#16A34A"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              )}
                            </li>

                            <li
                              className="flex justify-between items-center px-4 py-3 hover:bg-[#F3F4F6] cursor-pointer"
                              onClick={() => {
                                setPhoneListed("No");
                                setPhoneOpen(false);
                              }}
                            >
                              <span>No</span>
                              {phoneListed === "No" && (
                                <svg
                                  className="w-5 h-5"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M20 6L9 17l-5-5"
                                    stroke="#16A34A"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              )}
                            </li>
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Seller Phone */}
                  <div className="flex flex-col">
                    <div className="relative w-full h-[60px] border border-[#E6E6E6] focus-within:border-[#E82121] rounded-xl bg-white px-4 pt-6 pb-[10px] flex flex-col justify-start">
                      <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-black">
                        Seller Phone
                      </label>
                      <input
                        type="tel"
                        placeholder=""
                        data-placeholder=""
                        onFocus={(e) => {
                          e.currentTarget.placeholder = "";
                        }}
                        onBlur={(e) => {
                          e.currentTarget.placeholder =
                            e.currentTarget.getAttribute("data-placeholder") ||
                            "";
                        }}
                        className="text-[15px] text-[#050B20] font-dm bg-transparent outline-none border-none placeholder:text-gray-300"
                      />
                    </div>
                  </div>

                  {/* Empty cell for 3-column layout alignment */}
                  <div className="hidden lg:block"></div>

                  {/* Enter your address */}
                  <div className="flex flex-col">
                    <div className="relative w-full h-[60px] border border-[#E6E6E6] focus-within:border-[#E82121] rounded-xl bg-white px-4 pt-6 pb-[10px] flex flex-col justify-start">
                      <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-black">
                        Enter your address and then select from the choices.
                      </label>
                      <input
                        type="text"
                        placeholder="Enter address"
                        data-placeholder="Enter address"
                        onFocus={(e) => {
                          e.currentTarget.placeholder = "";
                        }}
                        onBlur={(e) => {
                          e.currentTarget.placeholder =
                            e.currentTarget.getAttribute("data-placeholder") ||
                            "";
                        }}
                        className="text-[15px] text-[#050B20] font-albert bg-transparent outline-none border-none placeholder:text-gray-300"
                      />
                    </div>
                  </div>

                  {/* Longitude */}
                  <div className="flex flex-col">
                    <div className="relative w-full h-[60px] border border-[#E6E6E6] focus-within:border-[#E82121] rounded-xl bg-white px-4 pt-6 pb-[10px] flex flex-col justify-start">
                      <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-black">
                        Longitude:
                      </label>
                      <input
                        type="text"
                        placeholder="Longitude"
                        data-placeholder="Longitude"
                        onFocus={(e) => {
                          e.currentTarget.placeholder = "";
                        }}
                        onBlur={(e) => {
                          e.currentTarget.placeholder =
                            e.currentTarget.getAttribute("data-placeholder") ||
                            "";
                        }}
                        className="text-[15px] text-[#050B20] font-dm bg-transparent outline-none border-none placeholder:text-gray-300"
                      />
                    </div>
                  </div>

                  {/* Latitude */}
                  <div className="flex flex-col">
                    <div className="relative w-full h-[60px] border border-[#E6E6E6] focus-within:border-[#E82121] rounded-xl bg-white px-4 pt-6 pb-[10px] flex flex-col justify-start">
                      <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-black">
                        Latitude
                      </label>
                      <input
                        type="text"
                        placeholder="Latitude"
                        data-placeholder="Latitude"
                        onFocus={(e) => {
                          e.currentTarget.placeholder = "";
                        }}
                        onBlur={(e) => {
                          e.currentTarget.placeholder =
                            e.currentTarget.getAttribute("data-placeholder") ||
                            "";
                        }}
                        className="text-[15px] text-[#050B20] font-dm bg-transparent outline-none border-none placeholder:text-gray-300"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {accountType === "Dealer" && (
            <div className="flex flex-col items-start gap-5 w-full max-w-[1484px] mx-auto mt-8">
              <div className="-mt-[3px] w-full border border-[#E6E6E6] rounded-lg p-[30px] bg-white shadow-[0_1px_2px_0_rgba(0,0,0,0.225),0_1px_3px_1px_rgba(0,0,0,0.1125)]">
                <div className="text-[20px] font-semibold text-[#24272C] mb-3">
                  Dealership Information
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] w-full py-[20px]">

                  {/* Do you sell new or used vehicles? */}
                  <div className="flex flex-col">
                    <div className="relative w-full h-[60px] border border-[#E6E6E6] focus-within:border-[#E82121] rounded-xl bg-white px-4 pt-6 pb-[10px] flex flex-col justify-start">
                      <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-black">
                        Do you sell new or used vehicles?
                      </label>
                      <select className="text-[15px] text-[#050B20] font-dm bg-transparent outline-none border-none">
                        <option value="">Select an option</option>
                        <option value="new">New vehicles</option>
                        <option value="used">Used vehicles</option>
                        <option value="both">Both new and used</option>
                      </select>
                    </div>
                  </div>

                  {/* Dealership website */}
                  <div className="flex flex-col">
                    <div className="relative w-full h-[60px] border border-[#E6E6E6] focus-within:border-[#E82121] rounded-xl bg-white px-4 pt-6 pb-[10px] flex flex-col justify-start">
                      <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-black">
                        Dealership website
                      </label>
                      <input
                        type="url"
                        placeholder="Enter your website URL"
                        data-placeholder="Enter your website URL"
                        onFocus={(e) => {
                          e.currentTarget.placeholder = "";
                        }}
                        onBlur={(e) => {
                          e.currentTarget.placeholder =
                            e.currentTarget.getAttribute("data-placeholder") ||
                            "";
                        }}
                        className="text-[15px] text-[#050B20] font-dm bg-transparent outline-none border-none placeholder:text-gray-300"
                      />
                    </div>
                  </div>

                  {/* Website provider information */}
                  <div className="flex flex-col">
                    <div className="relative w-full h-[60px] border border-[#E6E6E6] focus-within:border-[#E82121] rounded-xl bg-white px-4 pt-6 pb-[10px] flex flex-col justify-start">
                      <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-black">
                        Website provider information
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your inventory provider"
                        data-placeholder="Enter your inventory provider"
                        onFocus={(e) => {
                          e.currentTarget.placeholder = "";
                        }}
                        onBlur={(e) => {
                          e.currentTarget.placeholder =
                            e.currentTarget.getAttribute("data-placeholder") ||
                            "";
                        }}
                        className="text-[15px] text-[#050B20] font-dm bg-transparent outline-none border-none placeholder:text-gray-300"
                      />
                    </div>
                  </div>

                  {/* XML or CSV vehicle Feed url */}
                  <div className="flex flex-col">
                    <div className="relative w-full h-[60px] border border-[#E6E6E6] focus-within:border-[#E82121] rounded-xl bg-white px-4 pt-6 pb-[10px] flex flex-col justify-start">
                      <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-black">
                        XML or CSV vehicle Feed url
                      </label>
                      <input
                        type="url"
                        placeholder="Enter feed URL"
                        data-placeholder="Enter feed URL"
                        onFocus={(e) => {
                          e.currentTarget.placeholder = "";
                        }}
                        onBlur={(e) => {
                          e.currentTarget.placeholder =
                            e.currentTarget.getAttribute("data-placeholder") ||
                            "";
                        }}
                        className="text-[15px] text-[#050B20] font-dm bg-transparent outline-none border-none placeholder:text-gray-300"
                      />
                    </div>
                  </div>

                  {/* Email lead alerts user 1 */}
                  <div className="flex flex-col">
                    <div className="relative w-full h-[60px] border border-[#E6E6E6] focus-within:border-[#E82121] rounded-xl bg-white px-4 pt-6 pb-[10px] flex flex-col justify-start">
                      <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-black">
                        Email lead alerts user 1
                      </label>
                      <input
                        type="email"
                        placeholder="Enter an additional alert email address"
                        data-placeholder="Enter an additional alert email address"
                        onFocus={(e) => {
                          e.currentTarget.placeholder = "";
                        }}
                        onBlur={(e) => {
                          e.currentTarget.placeholder =
                            e.currentTarget.getAttribute("data-placeholder") ||
                            "";
                        }}
                        className="text-[15px] text-[#050B20] font-dm bg-transparent outline-none border-none placeholder:text-gray-300"
                      />
                    </div>
                  </div>

                  {/* Email lead alerts user 2 */}
                  <div className="flex flex-col">
                    <div className="relative w-full h-[60px] border border-[#E6E6E6] focus-within:border-[#E82121] rounded-xl bg-white px-4 pt-6 pb-[10px] flex flex-col justify-start">
                      <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-black">
                        Email lead alerts user 2
                      </label>
                      <input
                        type="email"
                        placeholder="Enter an additional alert email address"
                        data-placeholder="Enter an additional alert email address"
                        onFocus={(e) => {
                          e.currentTarget.placeholder = "";
                        }}
                        onBlur={(e) => {
                          e.currentTarget.placeholder =
                            e.currentTarget.getAttribute("data-placeholder") ||
                            "";
                        }}
                        className="text-[15px] text-[#050B20] font-dm bg-transparent outline-none border-none placeholder:text-gray-300"
                      />
                    </div>
                  </div>

                  {/* Email lead alerts user 3 */}
                  <div className="flex flex-col">
                    <div className="relative w-full h-[60px] border border-[#E6E6E6] focus-within:border-[#E82121] rounded-xl bg-white px-4 pt-6 pb-[10px] flex flex-col justify-start">
                      <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-black">
                        Email lead alerts user 3
                      </label>
                      <input
                        type="email"
                        placeholder="Enter an additional alert email address"
                        data-placeholder="Enter an additional alert email address"
                        onFocus={(e) => {
                          e.currentTarget.placeholder = "";
                        }}
                        onBlur={(e) => {
                          e.currentTarget.placeholder =
                            e.currentTarget.getAttribute("data-placeholder") ||
                            "";
                        }}
                        className="text-[15px] text-[#050B20] font-dm bg-transparent outline-none border-none placeholder:text-gray-300"
                      />
                    </div>
                  </div>

                  {/* Dealerships CRM provider */}
                  <div className="flex flex-col">
                    <div className="relative w-full h-[60px] border border-[#E6E6E6] focus-within:border-[#E82121] rounded-xl bg-white px-4 pt-6 pb-[10px] flex flex-col justify-start">
                      <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-black">
                        Dealerships CRM provider
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your Crm provider"
                        data-placeholder="Enter your Crm provider"
                        onFocus={(e) => {
                          e.currentTarget.placeholder = "";
                        }}
                        onBlur={(e) => {
                          e.currentTarget.placeholder =
                            e.currentTarget.getAttribute("data-placeholder") ||
                            "";
                        }}
                        className="text-[15px] text-[#050B20] font-dm bg-transparent outline-none border-none placeholder:text-gray-300"
                      />
                    </div>
                  </div>

                  {/* CRM Account # */}
                  <div className="flex flex-col">
                    <div className="relative w-full h-[60px] border border-[#E6E6E6] focus-within:border-[#E82121] rounded-xl bg-white px-4 pt-6 pb-[10px] flex flex-col justify-start">
                      <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-black">
                        CRM Account #
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your Crm account #"
                        data-placeholder="Enter your Crm account #"
                        onFocus={(e) => {
                          e.currentTarget.placeholder = "";
                        }}
                        onBlur={(e) => {
                          e.currentTarget.placeholder =
                            e.currentTarget.getAttribute("data-placeholder") ||
                            "";
                        }}
                        className="text-[15px] text-[#050B20] font-dm bg-transparent outline-none border-none placeholder:text-gray-300"
                      />
                    </div>
                  </div>

                  {/* Dealerships CRM email */}
                  <div className="flex flex-col">
                    <div className="relative w-full h-[60px] border border-[#E6E6E6] focus-within:border-[#E82121] rounded-xl bg-white px-4 pt-6 pb-[10px] flex flex-col justify-start">
                      <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-black">
                        Dealerships CRM email
                      </label>
                      <input
                        type="email"
                        placeholder="Enter your Crm alert email address"
                        data-placeholder="Enter your Crm alert email address"
                        onFocus={(e) => {
                          e.currentTarget.placeholder = "";
                        }}
                        onBlur={(e) => {
                          e.currentTarget.placeholder =
                            e.currentTarget.getAttribute("data-placeholder") ||
                            "";
                        }}
                        className="text-[15px] text-[#050B20] font-dm bg-transparent outline-none border-none placeholder:text-gray-300"
                      />
                    </div>
                  </div>

                </div>
              </div>
            </div>

            )}

            {/* Billing Information Form (copied styling from Enter your Details) */}
            <div className="flex flex-col items-start gap-5 w-full max-w-[1484px] mx-auto mt-8">
              <div className="-mt-[3px] w-full border border-[#E6E6E6] rounded-lg p-[30px] bg-white shadow-[0_1px_2px_0_rgba(0,0,0,0.225),0_1px_3px_1px_rgba(0,0,0,0.1125)]">
                <div className="text-[20px] font-semibold text-[#24272C] mb-3">
                  Billing Information
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] w-full py-[20px]">

                  {/* Billing contact */}
                  <div className="flex flex-col">
                    <div className="relative w-full h-[60px] border border-[#E6E6E6] focus-within:border-[#E82121] rounded-xl bg-white px-4 pt-6 pb-[10px] flex flex-col justify-start">
                      <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-black">
                        Billing contact
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your full name"
                        data-placeholder="Enter your full name"
                        onFocus={(e) => {
                          e.currentTarget.placeholder = "";
                        }}
                        onBlur={(e) => {
                          e.currentTarget.placeholder =
                            e.currentTarget.getAttribute("data-placeholder") ||
                            "";
                        }}
                        className="text-[15px] text-[#050B20] font-dm bg-transparent outline-none border-none placeholder:text-gray-300"
                      />
                    </div>
                  </div>

                  {/* Street address */}
                  <div className="flex flex-col">
                    <div className="relative w-full h-[60px] border border-[#E6E6E6] focus-within:border-[#E82121] rounded-xl bg-white px-4 pt-6 pb-[10px] flex flex-col justify-start">
                      <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-black">
                        Street address
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your street address"
                        data-placeholder="Enter your street address"
                        onFocus={(e) => {
                          e.currentTarget.placeholder = "";
                        }}
                        onBlur={(e) => {
                          e.currentTarget.placeholder =
                            e.currentTarget.getAttribute("data-placeholder") ||
                            "";
                        }}
                        className="text-[15px] text-[#050B20] font-dm bg-transparent outline-none border-none placeholder:text-gray-300"
                      />
                    </div>
                  </div>

                  {/* Zip code */}
                  <div className="flex flex-col">
                    <div className="relative w-full h-[60px] border border-[#E6E6E6] focus-within:border-[#E82121] rounded-xl bg-white px-4 pt-6 pb-[10px] flex flex-col justify-start">
                      <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-black">
                        Zip code
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your zip code"
                        data-placeholder="Enter your zip code"
                        onFocus={(e) => {
                          e.currentTarget.placeholder = "";
                        }}
                        onBlur={(e) => {
                          e.currentTarget.placeholder =
                            e.currentTarget.getAttribute("data-placeholder") ||
                            "";
                        }}
                        className="text-[15px] text-[#050B20] font-dm bg-transparent outline-none border-none placeholder:text-gray-300"
                      />
                    </div>
                  </div>

                  {/* Billing phone */}
                  <div className="flex flex-col">
                    <div className="relative w-full h-[60px] border border-[#E6E6E6] focus-within:border-[#E82121] rounded-xl bg-white px-4 pt-6 pb-[10px] flex flex-col justify-start">
                      <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-black">
                        Billing phone
                      </label>
                      <input
                        type="tel"
                        placeholder="Enter your phone number"
                        data-placeholder="Enter your phone number"
                        onFocus={(e) => {
                          e.currentTarget.placeholder = "";
                        }}
                        onBlur={(e) => {
                          e.currentTarget.placeholder =
                            e.currentTarget.getAttribute("data-placeholder") ||
                            "";
                        }}
                        className="text-[15px] text-[#050B20] font-dm bg-transparent outline-none border-none placeholder:text-gray-300"
                      />
                    </div>
                  </div>

                  {/* City */}
                  <div className="flex flex-col">
                    <div className="relative w-full h-[60px] border border-[#E6E6E6] focus-within:border-[#E82121] rounded-xl bg-white px-4 pt-6 pb-[10px] flex flex-col justify-start">
                      <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-black">
                        City
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your city"
                        data-placeholder="Enter your city"
                        onFocus={(e) => {
                          e.currentTarget.placeholder = "";
                        }}
                        onBlur={(e) => {
                          e.currentTarget.placeholder =
                            e.currentTarget.getAttribute("data-placeholder") ||
                            "";
                        }}
                        className="text-[15px] text-[#050B20] font-dm bg-transparent outline-none border-none placeholder:text-gray-300"
                      />
                    </div>
                  </div>

                  {/* Country */}
                  <div className="flex flex-col">
                    <div className="relative w-full h-[60px] border border-[#E6E6E6] focus-within:border-[#E82121] rounded-xl bg-white px-4 pt-6 pb-[10px] flex flex-col justify-start">
                      <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-black">
                        Country
                      </label>
                      <select className="text-[15px] text-[#050B20] font-dm bg-transparent outline-none border-none">
                        <option value="USA">USA</option>
                        <option value="Canada">Canada</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Billing email address */}
                  <div className="flex flex-col">
                    <div className="relative w-full h-[60px] border border-[#E6E6E6] focus-within:border-[#E82121] rounded-xl bg-white px-4 pt-6 pb-[10px] flex flex-col justify-start">
                      <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-black">
                        Billing email address
                      </label>
                      <input
                        type="email"
                        placeholder="Billing email"
                        data-placeholder="Billing email"
                        onFocus={(e) => {
                          e.currentTarget.placeholder = "";
                        }}
                        onBlur={(e) => {
                          e.currentTarget.placeholder =
                            e.currentTarget.getAttribute("data-placeholder") ||
                            "";
                        }}
                        className="text-[15px] text-[#050B20] font-dm bg-transparent outline-none border-none placeholder:text-gray-300"
                      />
                    </div>
                  </div>

                  {/* State */}
                  <div className="flex flex-col">
                    <div className="relative w-full h-[60px] border border-[#E6E6E6] focus-within:border-[#E82121] rounded-xl bg-white px-4 pt-6 pb-[10px] flex flex-col justify-start">
                      <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-black">
                        State
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your state"
                        data-placeholder="Enter your state"
                        onFocus={(e) => {
                          e.currentTarget.placeholder = "";
                        }}
                        onBlur={(e) => {
                          e.currentTarget.placeholder =
                            e.currentTarget.getAttribute("data-placeholder") ||
                            "";
                        }}
                        className="text-[15px] text-[#050B20] font-dm bg-transparent outline-none border-none placeholder:text-gray-300"
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
