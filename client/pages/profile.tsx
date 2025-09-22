import React, { useState, useRef, useEffect } from "react";
import { DashboardLayout } from "../components/DashboardLayout";

export default function Profile() {
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
                              className={(open ? "rotate-180" : "") + " transition-transform"}
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
                          <img
                            src="https://cdn.builder.io/api/v1/image/assets%2F4d1f1909a98e4ebc8068632229306ce4%2Fd3b69236eb3240d09279f432fca9be0d"
                            alt="Profile"
                            className="w-full h-full object-cover"
                          />
                        </div>

(The file continues)