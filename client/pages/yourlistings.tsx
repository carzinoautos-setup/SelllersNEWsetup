import React, { useState } from "react";
import Link from "next/link";
import { DashboardLayout } from "../components/DashboardLayout";

export default function YourListingsPage() {
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [mobileSortOpen, setMobileSortOpen] = useState(false);
  const [mobileSortValue, setMobileSortValue] = useState('sort');
  const mobileSortOptions = [
    { value: 'sort', label: 'Sort' },
    { value: 'newest', label: 'Newest' },
    { value: 'price_low', label: 'Price: Low to High' },
    { value: 'price_high', label: 'Price: High to Low' },
  ];

  return (
    <DashboardLayout>
      <div className="flex-1 overflow-visible">
        <div className="pt-8 px-4 sm:px-6 lg:px-8 xl:px-[60px] w-full max-w-[1290px] mx-auto">
          <div className="mb-6">
            <h1 className="text-2xl font-semibold text-[#24272C]">
              Your Listings
            </h1>
            <p className="text-sm text-[#6B6B6B] mt-2">
              Manage and edit your vehicle listings here.
            </p>
          </div>

          {/* Search Filter Section */}
          <div className="mb-8">
            <div className="bg-white rounded-2xl shadow-[0_4px_26px_0_rgba(66,71,76,0.08)] p-4 sm:p-6 md:flex md:items-center md:gap-3">
              {/* Mobile top row: search, filter icon, sort (mobile only) */}
              <div className="md:hidden mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-3/4">
                    <div className="relative flex items-center gap-2 px-3 py-2 rounded-xl border border-[#B6B6B6] bg-white min-w-0">
                      <input
                        aria-label="Search"
                        placeholder="Search"
                        className="w-full text-sm text-[#5B5B5B] font-outfit bg-transparent outline-none"
                      />
                      <svg
                        className="w-4 h-4 ml-2 text-[#B9B9B9]"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.9419 17.0595L14.0302 13.1485C15.1639 11.7874 15.7293 10.0415 15.6086 8.27409C15.488 6.5067 14.6906 4.85387 13.3823 3.65943C12.074 2.46499 10.3557 1.8209 8.58462 1.86115C6.81357 1.9014 5.12622 2.62289 3.87358 3.87554C2.62094 5.12818 1.89945 6.81553 1.8592 8.58657C1.81895 10.3576 2.46304 12.076 3.65748 13.3843C4.85192 14.6925 6.50475 15.4899 8.27214 15.6106C10.0395 15.7312 11.7854 15.1659 13.1466 14.0321L17.0575 17.9438C17.1156 18.0019 17.1845 18.048 17.2604 18.0794C17.3363 18.1108 17.4176 18.127 17.4997 18.127C17.5818 18.127 17.6631 18.1108 17.739 18.0794C17.8149 18.048 17.8838 18.0019 17.9419 17.9438C17.9999 17.8858 18.046 17.8168 18.0774 17.741C18.1089 17.6651 18.125 17.5838 18.125 17.5016C18.125 17.4195 18.1089 17.3382 18.0774 17.2623C18.046 17.1865 17.9999 17.1175 17.9419 17.0595ZM3.12469 8.75164C3.12469 7.63912 3.45459 6.55159 4.07267 5.62656C4.69076 4.70153 5.56926 3.98056 6.5971 3.55482C7.62493 3.12908 8.75593 3.01768 9.84707 3.23473C10.9382 3.45177 11.9405 3.9875 12.7272 4.77417C13.5138 5.56084 14.0496 6.56312 14.2666 7.65426C14.4837 8.7454 14.3723 9.8764 13.9465 10.9042C13.5208 11.9321 12.7998 12.8106 11.8748 13.4287C10.9497 14.0467 9.86221 14.3766 8.74969 14.3766C7.25836 14.375 5.82858 13.7818 4.77404 12.7273C3.71951 11.6728 3.12634 10.243 3.12469 8.75164Z"
                          fill="#B9B9B9"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="w-1/4 flex-shrink-0">
                    <button
                      onClick={() => setShowMobileFilters(true)}
                      aria-label="Open filters"
                      className="w-full px-3 py-2 rounded-xl border border-[#EDEDED] bg-white h-10"
                    >
                      <svg
                        className="w-5 h-5 mx-auto"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3 5h14v2H3V5zm3 4h8v2H6V9zm3 4h2v2H9v-2z"
                          fill="#696665"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Mobile sort custom dropdown (full width below) */}
                <div
                  className="relative w-full mt-2"
                  tabIndex={0}
                  onBlur={() => setMobileSortOpen(false)}
                >
                  <button
                    type="button"
                    onClick={() => setMobileSortOpen((o) => !o)}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-xl border border-[#EDEDED] bg-white text-sm h-10"
                    aria-haspopup="listbox"
                    aria-expanded={mobileSortOpen}
                  >
                    <span className="text-[#333]">
                      {mobileSortOptions.find((o) => o.value === mobileSortValue)?.label || 'Sort'}
                    </span>
                    <svg className="w-4 h-4 text-[#696665]" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 8l5 5 5-5" stroke="#696665" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>

                  {mobileSortOpen && (
                    <ul
                      role="listbox"
                      className="absolute left-0 top-full mt-2 w-full bg-white border border-[#EDEDED] rounded-lg shadow-lg z-50"
                    >
                      {mobileSortOptions.map((opt) => (
                        <li
                          key={opt.value}
                          role="option"
                          onMouseDown={() => {
                            // onMouseDown used to prevent blur before click
                            setMobileSortValue(opt.value);
                            setMobileSortOpen(false);
                          }}
                          className="px-3 py-2 cursor-pointer hover:bg-gray-100"
                        >
                          {opt.label}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              {/* Search Input (desktop) */}
              <div className="hidden md:flex md:w-2/5 relative items-center gap-3 px-3 py-2 rounded-xl border border-[#B6B6B6] bg-white min-w-0">
                <span className="text-[#5B5B5B] font-outfit text-base font-normal">
                  Search
                </span>
                <svg
                  className="w-5 h-5 flex-shrink-0 ml-auto"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.9419 17.0595L14.0302 13.1485C15.1639 11.7874 15.7293 10.0415 15.6086 8.27409C15.488 6.5067 14.6906 4.85387 13.3823 3.65943C12.074 2.46499 10.3557 1.8209 8.58462 1.86115C6.81357 1.9014 5.12622 2.62289 3.87358 3.87554C2.62094 5.12818 1.89945 6.81553 1.8592 8.58657C1.81895 10.3576 2.46304 12.076 3.65748 13.3843C4.85192 14.6925 6.50475 15.4899 8.27214 15.6106C10.0395 15.7312 11.7854 15.1659 13.1466 14.0321L17.0575 17.9438C17.1156 18.0019 17.1845 18.048 17.2604 18.0794C17.3363 18.1108 17.4176 18.127 17.4997 18.127C17.5818 18.127 17.6631 18.1108 17.739 18.0794C17.8149 18.048 17.8838 18.0019 17.9419 17.9438C17.9999 17.8858 18.046 17.8168 18.0774 17.741C18.1089 17.6651 18.125 17.5838 18.125 17.5016C18.125 17.4195 18.1089 17.3382 18.0774 17.2623C18.046 17.1865 17.9999 17.1175 17.9419 17.0595ZM3.12469 8.75164C3.12469 7.63912 3.45459 6.55159 4.07267 5.62656C4.69076 4.70153 5.56926 3.98056 6.5971 3.55482C7.62493 3.12908 8.75593 3.01768 9.84707 3.23473C10.9382 3.45177 11.9405 3.9875 12.7272 4.77417C13.5138 5.56084 14.0496 6.56312 14.2666 7.65426C14.4837 8.7454 14.3723 9.8764 13.9465 10.9042C13.5208 11.9321 12.7998 12.8106 11.8748 13.4287C10.9497 14.0467 9.86221 14.3766 8.74969 14.3766C7.25836 14.375 5.82858 13.7818 4.77404 12.7273C3.71951 11.6728 3.12634 10.243 3.12469 8.75164Z"
                    fill="#B9B9B9"
                  />
                </svg>
              </div>

              {/* Filter Dropdowns */}
              <div className="hidden md:flex md:flex-row gap-3 md:flex-1 min-w-0 flex-nowrap">
                {/* Make Dropdown */}
                <div className="relative flex items-center justify-between px-3 py-2 rounded-xl border border-[#EDEDED] bg-white min-w-0 flex-1">
                  <span className="text-[#696665] font-outfit text-sm font-normal leading-[140%]">
                    Make
                  </span>
                  <svg
                    className="w-4 h-4 flex-shrink-0"
                    viewBox="0 0 19 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.2733 7.14828L9.64828 12.7733C9.59604 12.8256 9.534 12.8671 9.46572 12.8954C9.39743 12.9237 9.32423 12.9383 9.25031 12.9383C9.17639 12.9383 9.1032 12.9237 9.03491 12.8954C8.96662 12.8671 8.90458 12.8256 8.85234 12.7733L3.22734 7.14828C3.1218 7.04273 3.0625 6.89958 3.0625 6.75031C3.0625 6.60105 3.1218 6.45789 3.22734 6.35234C3.33289 6.2468 3.47605 6.1875 3.62531 6.1875C3.77458 6.1875 3.91773 6.2468 4.02328 6.35234L9.25031 11.5801L14.4773 6.35234C14.5296 6.30008 14.5917 6.25863 14.6599 6.23034C14.7282 6.20206 14.8014 6.1875 14.8753 6.1875C14.9492 6.1875 15.0224 6.20206 15.0907 6.23034C15.159 6.25863 15.221 6.30008 15.2733 6.35234C15.3255 6.40461 15.367 6.46665 15.3953 6.53493C15.4236 6.60322 15.4381 6.6764 15.4381 6.75031C15.4381 6.82422 15.4236 6.89741 15.3953 6.96569C15.367 7.03398 15.3255 7.09602 15.2733 7.14828Z"
                      fill="#696665"
                    />
                  </svg>
                </div>

                {/* Model Dropdown */}
                <div className="relative flex items-center justify-between px-3 py-2 rounded-xl border border-[#EDEDED] bg-white min-w-0 flex-1">
                  <span className="text-[#696665] font-outfit text-sm font-normal leading-[140%]">
                    Model
                  </span>
                  <svg
                    className="w-4 h-4 flex-shrink-0"
                    viewBox="0 0 19 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.5233 7.14828L9.89828 12.7733C9.84604 12.8256 9.784 12.8671 9.71572 12.8954C9.64743 12.9237 9.57423 12.9383 9.50031 12.9383C9.42639 12.9383 9.3532 12.9237 9.28491 12.8954C9.21662 12.8671 9.15458 12.8256 9.10234 12.7733L3.47734 7.14828C3.3718 7.04273 3.3125 6.89958 3.3125 6.75031C3.3125 6.60105 3.3718 6.45789 3.47734 6.35234C3.58289 6.2468 3.72605 6.1875 3.87531 6.1875C4.02458 6.1875 4.16773 6.2468 4.27328 6.35234L9.50031 11.5801L14.7273 6.35234C14.7796 6.30008 14.8417 6.25863 14.9099 6.23034C14.9782 6.20206 15.0514 6.1875 15.1253 6.1875C15.1992 6.1875 15.2724 6.20206 15.3407 6.23034C15.409 6.25863 15.471 6.30008 15.5233 6.35234C15.5755 6.40461 15.617 6.46665 15.6453 6.53493C15.6736 6.60322 15.6881 6.6764 15.6881 6.75031C15.6881 6.82422 15.6736 6.89741 15.6453 6.96569C15.617 7.03398 15.5755 7.09602 15.5233 7.14828Z"
                      fill="#696665"
                    />
                  </svg>
                </div>

                {/* Body Style Dropdown */}
                <div className="relative flex items-center justify-between px-3 py-2 rounded-xl border border-[#EDEDED] bg-white min-w-0 flex-1">
                  <span className="text-[#696665] font-outfit text-sm font-normal leading-[140%]">
                    Body Style
                  </span>
                  <svg
                    className="w-4 h-4 flex-shrink-0"
                    viewBox="0 0 19 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.7733 7.14828L10.1483 12.7733C10.096 12.8256 10.034 12.8671 9.96572 12.8954C9.89743 12.9237 9.82423 12.9383 9.75031 12.9383C9.67639 12.9383 9.6032 12.9237 9.53491 12.8954C9.46662 12.8671 9.40458 12.8256 9.35234 12.7733L3.72734 7.14828C3.6218 7.04273 3.5625 6.89958 3.5625 6.75031C3.5625 6.60105 3.6218 6.45789 3.72734 6.35234C3.83289 6.2468 3.97605 6.1875 4.12531 6.1875C4.27458 6.1875 4.41773 6.2468 4.52328 6.35234L9.75031 11.5801L14.9773 6.35234C15.0296 6.30008 15.0917 6.25863 15.1599 6.23034C15.2282 6.20206 15.3014 6.1875 15.3753 6.1875C15.4492 6.1875 15.5224 6.20206 15.5907 6.23034C15.659 6.25863 15.721 6.30008 15.7733 6.35234C15.8255 6.40461 15.867 6.46665 15.8953 6.53493C15.9236 6.60322 15.9381 6.6764 15.9381 6.75031C15.9381 6.82422 15.9236 6.89741 15.8953 6.96569C15.867 7.03398 15.8255 7.09602 15.7733 7.14828Z"
                      fill="#696665"
                    />
                  </svg>
                </div>

                {/* Sort Dropdown */}
                <div className="relative flex items-center justify-between px-3 py-2 rounded-xl border border-[#EDEDED] bg-white min-w-0 flex-1">
                  <span className="text-[#696665] font-outfit text-sm font-normal leading-[140%]">
                    Sort
                  </span>
                  <svg
                    className="w-4 h-4 flex-shrink-0"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.0228 7.14828L9.39779 12.7733C9.34555 12.8256 9.28351 12.8671 9.21523 12.8954C9.14694 12.9237 9.07375 12.9383 8.99982 12.9383C8.9259 12.9383 8.85271 12.9237 8.78442 12.8954C8.71613 12.8671 8.6541 12.8256 8.60186 12.7733L2.97686 7.14828C2.87131 7.04273 2.81201 6.89958 2.81201 6.75031C2.81201 6.60105 2.87131 6.45789 2.97686 6.35234C3.0824 6.2468 3.22556 6.1875 3.37482 6.1875C3.52409 6.1875 3.66725 6.2468 3.77279 6.35234L8.99982 11.5801L14.2269 6.35234C14.2791 6.30008 14.3412 6.25863 14.4094 6.23034C14.4777 6.20206 14.5509 6.1875 14.6248 6.1875C14.6987 6.1875 14.7719 6.20206 14.8402 6.23034C14.9085 6.25863 14.9705 6.30008 15.0228 6.35234C15.0751 6.40461 15.1165 6.46665 15.1448 6.53493C15.1731 6.60322 15.1876 6.6764 15.1876 6.75031C15.1876 6.82422 15.1731 6.89741 15.1448 6.96569C15.1165 7.03398 15.0751 7.09602 15.0228 7.14828Z"
                      fill="#E82121"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Filters Drawer */}
          {showMobileFilters && (
            <div className="fixed inset-0 z-50 flex items-start sm:hidden">
              <div
                className="absolute inset-0 bg-black opacity-40"
                onClick={() => setShowMobileFilters(false)}
              ></div>
              <div className="relative w-full bg-white rounded-b-2xl p-4 max-h-[90vh] overflow-auto mt-16">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium">Filters</h3>
                  <button
                    onClick={() => setShowMobileFilters(false)}
                    className="p-2 rounded-md"
                  >
                    Close
                  </button>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="relative flex items-center justify-between px-4 py-3 rounded-xl border border-[#EDEDED] bg-white">
                    <span className="text-[#696665] font-outfit text-sm">
                      Make
                    </span>
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 19 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.2733 7.14828L9.64828 12.7733C9.59604 12.8256 9.534 12.8671 9.46572 12.8954C9.39743 12.9237 9.32423 12.9383 9.25031 12.9383C9.17639 12.9383 9.1032 12.9237 9.03491 12.8954C8.96662 12.8671 8.90458 12.8256 8.85234 12.7733L3.22734 7.14828C3.1218 7.04273 3.0625 6.89958 3.0625 6.75031C3.0625 6.60105 3.1218 6.45789 3.22734 6.35234C3.33289 6.2468 3.47605 6.1875 3.62531 6.1875C3.77458 6.1875 3.91773 6.2468 4.02328 6.35234L9.25031 11.5801L14.4773 6.35234C14.5296 6.30008 14.5917 6.25863 14.6599 6.23034C14.7282 6.20206 14.8014 6.1875 14.8753 6.1875C14.9492 6.1875 15.0224 6.20206 15.0907 6.23034C15.159 6.25863 15.221 6.30008 15.2733 6.35234C15.3255 6.40461 15.367 6.46665 15.3953 6.53493C15.4236 6.60322 15.4381 6.6764 15.4381 6.75031C15.4381 6.82422 15.4236 6.89741 15.3953 6.96569C15.367 7.03398 15.3255 7.09602 15.2733 7.14828Z"
                        fill="#696665"
                      />
                    </svg>
                  </div>

                  <div className="relative flex items-center justify-between px-4 py-3 rounded-xl border border-[#EDEDED] bg-white">
                    <span className="text-[#696665] font-outfit text-sm">
                      Model
                    </span>
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 19 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.5233 7.14828L9.89828 12.7733C9.84604 12.8256 9.784 12.8671 9.71572 12.8954C9.64743 12.9237 9.57423 12.9383 9.50031 12.9383C9.42639 12.9383 9.3532 12.9237 9.28491 12.8954C9.21662 12.8671 9.15458 12.8256 9.10234 12.7733L3.47734 7.14828C3.3718 7.04273 3.3125 6.89958 3.3125 6.75031C3.3125 6.60105 3.3718 6.45789 3.47734 6.35234C3.58289 6.2468 3.72605 6.1875 3.87531 6.1875C4.02458 6.1875 4.16773 6.2468 4.27328 6.35234L9.50031 11.5801L14.7273 6.35234C14.7796 6.30008 14.8417 6.25863 14.9099 6.23034C14.9782 6.20206 15.0514 6.1875 15.1253 6.1875C15.1992 6.1875 15.2724 6.20206 15.3407 6.23034C15.409 6.25863 15.471 6.30008 15.5233 6.35234C15.5755 6.40461 15.617 6.46665 15.6453 6.53493C15.6736 6.60322 15.6881 6.6764 15.6881 6.75031C15.6881 6.82422 15.6736 6.89741 15.6453 6.96569C15.617 7.03398 15.5755 7.09602 15.5233 7.14828Z"
                        fill="#696665"
                      />
                    </svg>
                  </div>

                  <div className="relative flex items-center justify-between px-4 py-3 rounded-xl border border-[#EDEDED] bg-white">
                    <span className="text-[#696665] font-outfit text-sm">
                      Body Style
                    </span>
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 19 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.7733 7.14828L10.1483 12.7733C10.096 12.8256 10.034 12.8671 9.96572 12.8954C9.89743 12.9237 9.82423 12.9383 9.75031 12.9383C9.67639 12.9383 9.6032 12.9237 9.53491 12.8954C9.46662 12.8671 9.40458 12.8256 9.35234 12.7733L3.72734 7.14828C3.6218 7.04273 3.5625 6.89958 3.5625 6.75031C3.5625 6.60105 3.6218 6.45789 3.72734 6.35234C3.83289 6.2468 3.97605 6.1875 4.12531 6.1875C4.27458 6.1875 4.41773 6.2468 4.52328 6.35234L9.75031 11.5801L14.9773 6.35234C15.0296 6.30008 15.0917 6.25863 15.1599 6.23034C15.2282 6.20206 15.3014 6.1875 15.3753 6.1875C15.4492 6.1875 15.5224 6.20206 15.5907 6.23034C15.659 6.25863 15.721 6.30008 15.7733 6.35234C15.8255 6.40461 15.867 6.46665 15.8953 6.53493C15.9236 6.60322 15.9381 6.6764 15.9381 6.75031C15.9381 6.82422 15.9236 6.89741 15.8953 6.96569C15.867 7.03398 15.8255 7.09602 15.7733 7.14828Z"
                        fill="#696665"
                      />
                    </svg>
                  </div>

                  <div className="mt-4 flex gap-3">
                    <button className="flex-1 px-4 py-3 rounded-xl bg-[#E82121] text-white">
                      Apply
                    </button>
                    <button
                      onClick={() => setShowMobileFilters(false)}
                      className="flex-1 px-4 py-3 rounded-xl border border-[#EDEDED]"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12 px-[10px] sm:px-0">
            {/* Sample Car Listings - Replace with actual data */}
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="flex flex-col">
                {/* Image */}
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/6975da1c4e84f2b56c87e6eeef4d7045c7b852fd?width=695"
                  alt="2017 BMW 7 Series xDrive 20d xline"
                  className="w-full h-[218px] object-cover object-center rounded-t-2xl self-stretch"
                />

                {/* Main Content */}
                <div className="flex p-4 flex-col items-start gap-3 self-stretch rounded-b-2xl border-r border-b border-l border-[#EDEDED] bg-white">
                  {/* Content */}
                  <div className="flex flex-col items-start self-stretch">
                    {/* Title */}
                    <div className="flex flex-col items-start gap-0.5 self-stretch">
                      <div className="text-[#24272C] font-outfit text-[16px] font-medium leading-normal">
                        2017 BMW 7 Series xDrive 20d xline
                      </div>

                      {/* Description Rows */}
                      <div className="flex items-start gap-2.5 self-stretch">
                        <div className="flex items-center gap-1">
                          <div className="text-[#696665] font-albert text-[12px] font-normal leading-[140%]">
                            <b>Year:</b> 2000
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="text-[#696665] font-albert text-[12px] font-normal leading-[140%]">
                            <b>Make:</b> BMW
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start gap-2.5 self-stretch">
                        <div className="flex items-center gap-1">
                          <div className="text-[#696665] font-albert text-[12px] font-normal leading-[140%]">
                            <b>Model:</b> 7 Series
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="text-[#696665] font-albert text-[12px] font-normal leading-[140%]">
                            <b>Type</b>: Sedan
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start gap-2.5 self-stretch">
                        <div className="flex items-center gap-1">
                          <div className="text-[#696665] font-albert text-[12px] font-normal leading-[140%]">
                            <b>Condition: </b>New
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="text-[#696665] font-albert text-[12px] font-normal leading-[140%]">
                            <b>Miles:</b> 109,996
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start gap-2.5 self-stretch">
                        <div className="flex items-center gap-1">
                          <div className="text-[#696665] font-albert text-[12px] font-normal leading-[140%]">
                            <b>Days Left:</b> 5
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="text-[#696665] font-albert text-[12px] font-normal leading-[140%]">
                            <b>Posted:</b> 12-12-25
                          </div>
                        </div>
                      </div>

                      <div className="grid gap-2.5 self-stretch grid-cols-2">
                        <div className="inline-flex items-center gap-1">
                          <div className="text-[#696665] font-albert text-[12px] font-normal leading-[140%]">
                            <b>Status:</b>&nbsp;Active
                          </div>
                        </div>
                        <div className="inline-flex items-center gap-1">
                          <div className="text-[#696665] font-albert text-[12px] font-normal leading-[140%]">
                            <b>Stock#</b>: K87873
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="flex flex-col items-start gap-2 self-stretch">
                      <div className="flex items-start gap-2.5 self-stretch">
                        <div className="flex items-center gap-1">
                          <div className="text-[#696665] font-albert text-[12px] font-normal leading-[140%]">
                            <div className="inline font-bold">Price:</div>
                            &nbsp;$74,000
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px self-stretch bg-[#EDEDED]"></div>

                  {/* Info Section */}
                  <div className="flex justify-between items-start self-stretch">
                    {/* Action Buttons */}
                    <div className="flex w-[104px] items-center gap-1.5 mr-5">
                      <div className="flex w-12 items-start gap-2.5 h-10">
                        <Link
                          href="/remove-listing"
                          className="w-10 h-10 flex-shrink-0 rounded-2xl border border-[#E1E1E1] bg-[#F9FBFC] relative cursor-pointer"
                        >
                          <svg
                            className="w-[18px] h-[18px] absolute left-[11px] top-[11px]"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.06907 7.69033C7.37819 7.65943 7.65382 7.88496 7.68472 8.19411L8.05972 11.9441C8.0907 12.2532 7.8651 12.5289 7.55602 12.5598C7.2469 12.5907 6.97124 12.3652 6.94033 12.056L6.56533 8.30601C6.53442 7.99693 6.75995 7.72123 7.06907 7.69033Z"
                              fill="#050B20"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M10.931 7.69033C11.2401 7.72123 11.4656 7.99693 11.4347 8.30601L11.0597 12.056C11.0288 12.3652 10.7532 12.5907 10.444 12.5598C10.135 12.5289 9.90943 12.2532 9.94033 11.9441L10.3153 8.19411C10.3462 7.88496 10.6219 7.65943 10.931 7.69033Z"
                              fill="#050B20"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.59236 0.937514H10.1285C10.2908 0.937409 10.4322 0.937319 10.5657 0.958642C11.0931 1.04287 11.5496 1.37186 11.7963 1.84563C11.8587 1.96555 11.9034 2.09971 11.9546 2.2537L12.0383 2.50488C12.0525 2.5474 12.0565 2.55943 12.06 2.56891C12.1913 2.932 12.5318 3.17744 12.9178 3.18723C12.9279 3.18748 12.9404 3.18753 12.9854 3.18753H15.2354C15.5461 3.18753 15.7979 3.43936 15.7979 3.75003C15.7979 4.06069 15.5461 4.31253 15.2354 4.31253H2.48535C2.17469 4.31253 1.92285 4.06069 1.92285 3.75003C1.92285 3.43936 2.17469 3.18753 2.48535 3.18753H4.73542C4.78045 3.18753 4.79288 3.18748 4.80303 3.18723C5.18902 3.17744 5.52953 2.93202 5.66087 2.56893C5.66432 2.55938 5.6683 2.54761 5.68254 2.50488L5.76624 2.25372C5.81747 2.09973 5.8621 1.96555 5.92454 1.84563C6.17125 1.37186 6.6277 1.04287 7.15517 0.958642C7.28869 0.937319 7.43008 0.937409 7.59236 0.937514ZM6.61646 3.18753C6.6551 3.11176 6.68933 3.03303 6.71879 2.95161C6.72773 2.92688 6.7365 2.90056 6.74777 2.86675L6.82262 2.64219C6.891 2.43706 6.90674 2.39522 6.92236 2.36523C7.0046 2.2073 7.15675 2.09764 7.33257 2.06956C7.36597 2.06423 7.41062 2.06253 7.62686 2.06253H10.094C10.3102 2.06253 10.3548 2.06423 10.3883 2.06956C10.5641 2.09764 10.7163 2.2073 10.7985 2.36523C10.8141 2.39522 10.8298 2.43705 10.8982 2.64219L10.973 2.86662L11.0021 2.95162C11.0315 3.03304 11.0658 3.11176 11.1044 3.18753H6.61646Z"
                              fill="#050B20"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M3.83663 5.81377C4.1466 5.7931 4.41463 6.02763 4.4353 6.3376L4.78026 11.5119C4.84764 12.5228 4.89567 13.2262 5.00109 13.7554C5.10336 14.2688 5.2461 14.5405 5.45117 14.7323C5.65623 14.9241 5.93685 15.0485 6.45585 15.1164C6.9909 15.1864 7.69592 15.1875 8.70902 15.1875H9.28907C10.3022 15.1875 11.0072 15.1864 11.5422 15.1164C12.0612 15.0485 12.3419 14.9241 12.5469 14.7323C12.752 14.5405 12.8948 14.2688 12.997 13.7554C13.1024 13.2262 13.1504 12.5228 13.2179 11.5119L13.5628 6.3376C13.5834 6.02763 13.8515 5.7931 14.1614 5.81377C14.4714 5.83443 14.7059 6.10246 14.6853 6.41244L14.3377 11.6262C14.2736 12.5883 14.2218 13.3654 14.1003 13.9752C13.974 14.6092 13.7592 15.1388 13.3155 15.5538C12.8718 15.9689 12.3291 16.148 11.6882 16.2319C11.0716 16.3125 10.2928 16.3125 9.32859 16.3125H8.66949C7.70529 16.3125 6.92646 16.3125 6.30993 16.2319C5.66894 16.148 5.12628 15.9689 4.68258 15.5538C4.23888 15.1388 4.02407 14.6092 3.89778 13.9752C3.77629 13.3654 3.7245 12.5883 3.66038 11.6262L3.31279 6.41244C3.29212 6.10246 3.52665 5.83443 3.83663 5.81377Z"
                              fill="#050B20"
                            />
                          </svg>
                        </Link>
                      </div>
                      <div className="inline-flex items-start gap-2.5 w-10 h-10">
                        <Link
                          href="/edit-listing"
                          className="w-10 h-10 rounded-2xl border border-[#E1E1E1] bg-white relative"
                        >
                          <div className="flex w-[18px] h-[18px] justify-center items-center absolute left-[11px] top-[11px]">
                            <svg
                              className="w-[18px] h-[18px] flex-shrink-0"
                              viewBox="0 0 19 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M15.0494 15.1836H10.2666C9.9561 15.1836 9.7041 14.9316 9.7041 14.6211C9.7041 14.3106 9.9561 14.0586 10.2666 14.0586H15.0494C15.3599 14.0586 15.6119 14.3106 15.6119 14.6211C15.6119 14.9316 15.3599 15.1836 15.0494 15.1836Z"
                                fill="#050B20"
                              />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M12.2934 8.39263L13.2138 7.16645C13.6698 6.55895 13.8618 5.81046 13.7545 5.0582C13.6473 4.30595 13.2543 3.64145 12.6468 3.18545C11.3935 2.24495 9.60703 2.4977 8.66578 3.75245L3.60177 10.4987C2.09277 12.511 3.43527 14.908 3.49302 15.0092C3.57102 15.145 3.70227 15.2417 3.85527 15.277C3.89877 15.2875 4.31877 15.3805 4.90452 15.3805C5.85177 15.3805 7.23027 15.1382 8.14978 13.9127L12.1762 8.54871C12.1996 8.52666 12.2215 8.50236 12.2414 8.47581C12.2614 8.44918 12.2788 8.42136 12.2934 8.39263ZM4.35777 14.2202C4.94352 14.2915 6.42102 14.3417 7.24977 13.237L10.9969 8.24511L8.24833 6.1815L4.50102 11.1737C3.65577 12.3017 4.12077 13.6825 4.35777 14.2202ZM8.92348 5.28215L11.6724 7.34514L12.3138 6.4907C12.883 5.73321 12.7293 4.65395 11.9718 4.0847C11.2135 3.51695 10.1335 3.67071 9.56503 4.42745L8.92348 5.28215Z"
                                fill="#050B20"
                              />
                            </svg>
                          </div>
                        </Link>
                      </div>
                    </div>

                    {/* Change Status Button */}
                    <Link
                      href="/change-status"
                      className="flex w-[153px] h-[38px] p-2 px-[4px] justify-center items-center gap-1 rounded-[14px] border border-[#B9B9B9]"
                    >
                      <div className="text-black font-albert text-[11px] font-medium leading-[16.5px]">
                        Change Status
                      </div>
                    </Link>
                  </div>

                  {/* Featured Button */}
                  <div className="flex justify-center items-center self-stretch">
                    <Link
                      href="/feature-mycar"
                      className="flex w-[150px] h-[38px] py-[5px] px-2.5 justify-center items-center gap-1 rounded-[14px]"
                      style={{ border: "0.8px solid rgba(74, 74, 74, 1)" }}
                    >
                      <div className="text-black font-albert text-[12px] font-medium leading-normal">
                        Feature this
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
