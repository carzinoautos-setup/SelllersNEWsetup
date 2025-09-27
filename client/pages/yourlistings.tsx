import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DashboardLayout } from "../components/DashboardLayout";

export default function YourListingsPage() {
  const [showMobileFilters, setShowMobileFilters] = useState(false);

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
              <div className="flex items-center gap-2 mb-3 md:hidden">
                <div className="flex-1">
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

                <button
                  onClick={() => setShowMobileFilters(true)}
                  aria-label="Open filters"
                  className="p-2 rounded-xl border border-[#EDEDED] bg-white"
                >
                  <svg
                    className="w-5 h-5"
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

                {/* Mobile sort select */}
                <select
                  aria-label="Sort"
                  className="ml-2 p-2 rounded-xl border border-[#EDEDED] bg-white text-sm sm:hidden"
                >
                  <option>Sort</option>
                  <option value="newest">Newest</option>
                  <option value="price_low">Price: Low to High</option>
                  <option value="price_high">Price: High to Low</option>
                </select>
              </div>

              {/* Search Input (desktop) */}
              <div className="hidden md:flex flex-1 relative items-center gap-3 px-3 py-2 rounded-xl border border-[#B6B6B6] bg-white min-w-0 flex-shrink-0">
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
              <div className="hidden md:flex md:flex-row gap-3 flex-1 min-w-0 flex-nowrap">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* Sample Car Listings - Replace with actual data */}
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="flex flex-col bg-white rounded-2xl shadow-sm border border-[#EDEDED] overflow-hidden"
              >
                {/* Car Image */}
                <label className="relative h-[156px] bg-gray-200 rounded-t-2xl overflow-hidden cursor-pointer">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F4d1f1909a98e4ebc8068632229306ce4%2F0937c70c237c49be9cdf73a0306be0ed?format=webp"
                    alt="2017 BMW X1 xDrive 20d xline"
                    className="w-full h-full object-cover object-center"
                  />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e: any) => {
                      const file = e.target.files && e.target.files[0];
                      if (!file) return;
                      const img = e.target
                        .closest("label")
                        ?.querySelector("img");
                      if (img) img.src = URL.createObjectURL(file);
                    }}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                </label>

                {/* Card Content */}
                <div className="p-4 flex flex-col gap-[13px]">
                  {/* Main Content */}
                  <div className="flex flex-col gap-1.5">
                    {/* Title Section */}
                    <div className="flex flex-col gap-2">
                      <h3 className="text-[#24272C] font-outfit text-[20px] sm:text-[16px] font-medium">
                        2017 BMW X1 xDrive 20d xline
                      </h3>

                      {/* Details Rows */}
                      <div className="flex flex-col gap-0">
                        {/* Price & Stock Row */}
                        <div className="flex items-center gap-2.5">
                          <span className="text-[#696665] font-albert text-[16px] sm:text-[12px] font-normal leading-[140%]">
                            <b>Price:</b> $72,000
                          </span>
                          <span className="text-[#696665] font-albert text-[16px] sm:text-[12px] font-normal leading-[140%]">
                            <strong>Stock#:&nbsp;</strong>
                            <span>K5866</span>
                          </span>
                        </div>

                        {/* Condition & Type Row */}
                        <div className="flex items-center gap-2.5">
                          <span className="text-[#696665] font-albert text-[16px] sm:text-[12px] font-normal leading-[140%]">
                            Condition: New
                          </span>
                          <span className="text-[#696665] font-albert text-[16px] sm:text-[12px] font-normal leading-[140%]">
                            Type: Sedan
                          </span>
                        </div>

                        {/* Miles & Listed Row */}
                        <div className="flex items-center gap-2.5">
                          <span className="text-[#696665] font-albert text-[16px] sm:text-[12px] font-normal leading-[140%]">
                            Miles: 109,658
                          </span>
                          <span className="text-[#696665] font-albert text-[16px] sm:text-[12px] font-normal leading-[140%]">
                            Listed: 12-12-25
                          </span>
                        </div>

                        <div className="flex items-center gap-2.5 mx-auto">
                          <div className="text-[#696665] font-albert text-[16px] sm:text-[12px] font-normal leading-[140%]">
                            <span>Days remaining 5</span>
                          </div>
                          <div className="text-[#696665] font-albert text-[16px] sm:text-[12px] font-normal leading-[140%]">
                            <strong>
                              <span>Repost Ad</span>
                            </strong>
                          </div>
                        </div>

                        {/* Seller Account Row */}
                        <div className="flex items-center gap-2.5">
                          <span className="text-[#696665] font-albert text-[16px] sm:text-[12px] font-normal leading-[140%]">
                            Seller account #  here
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-[#EDEDED]"></div>

                  {/* Action Section */}
                  <div className="flex justify-between items-center">
                    {/* Action Buttons */}
                    <div className="flex items-center gap-1.5">
                      {/* Delete Button */}
                      <button className="w-10 h-10 rounded-2xl border border-[#E1E1E1] bg-[#F9FBFC] flex items-center justify-center hover:bg-gray-100 transition-colors">
                        <svg
                          className="w-[18px] h-[18px]"
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
                      </button>

                      {/* Edit Button */}
                      <Link
                        to="/enter-vehicle-details-2"
                        className="w-10 h-10 rounded-2xl border border-[#E1E1E1] bg-white flex items-center justify-center hover:bg-gray-50 transition-colors"
                      >
                        <svg
                          className="w-[18px] h-[18px]"
                          viewBox="0 0 19 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.4546 15.1836H10.6719C10.3614 15.1836 10.1094 14.9316 10.1094 14.6211C10.1094 14.3106 10.3614 14.0586 10.6719 14.0586H15.4546C15.7651 14.0586 16.0171 14.3106 16.0171 14.6211C16.0171 14.9316 15.7651 15.1836 15.4546 15.1836Z"
                            fill="#050B20"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12.6986 8.39263L13.619 7.16645C14.075 6.55895 14.267 5.81046 14.1598 5.0582C14.0525 4.30595 13.6595 3.64145 13.052 3.18545C11.7988 2.24495 10.0123 2.4977 9.07105 3.75245L4.00704 10.4987C2.49804 12.511 3.84054 14.908 3.89829 15.0092C3.97629 15.145 4.10754 15.2417 4.26054 15.277C4.30404 15.2875 4.72404 15.3805 5.30979 15.3805C6.25704 15.3805 7.63554 15.1382 8.55505 13.9127L12.5815 8.54871C12.6049 8.52666 12.6267 8.50236 12.6467 8.47581C12.6667 8.44918 12.684 8.42136 12.6986 8.39263ZM4.76304 14.2202C5.34879 14.2915 6.82629 14.3417 7.65504 13.237L11.4021 8.24511L8.6536 6.1815L4.90629 11.1737C4.06104 12.3017 4.52604 13.6825 4.76304 14.2202ZM9.32875 5.28215L12.0776 7.34514L12.719 6.4907C13.2883 5.73321 13.1345 4.65395 12.377 4.0847C11.6188 3.51695 10.5388 3.67071 9.9703 4.42745L9.32875 5.28215Z"
                            fill="#050B20"
                          />
                        </svg>
                      </Link>
                    </div>

                    {/* Featured Button */}
                    <button
                      className={`px-2.5 py-2.5 rounded-xl border border-[#E82121] transition-colors ${index === 0 ? "bg-[#E82121]" : "bg-white hover:bg-red-50"}`}
                    >
                      <span
                        className={`${index === 0 ? "text-white" : "text-black"} font-albert text-[16px] sm:text-[12px] font-medium`}
                      >
                        {index === 0 ? "Featured" : "Feature This"}
                      </span>
                    </button>
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
