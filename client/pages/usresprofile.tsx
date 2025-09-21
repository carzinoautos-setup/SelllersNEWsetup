import { useState } from "react";
import { DashboardLayout } from "../components/DashboardLayout";

export default function UsresProfile() {
  const [accountType, setAccountType] = useState("Private Seller");

  return (
    <DashboardLayout>
      <div className="flex-1 overflow-y-auto">
        <div className="py-6 md:py-10 lg:px-[30px] px-4 sm:px-6">
          <div className="max-w-[1480px] mx-auto">
            {/* Get Started with Carzino Block */}
            <div className="flex flex-col lg:flex-row items-center gap-[9px] justify-center p-5 bg-white rounded-2xl border border-[#E1E1E1]">
              {/* Left Content */}
              <div className="flex-1 space-y-6">
                <div className="space-y-3">
                  <h2 className="text-2xl font-bold text-[#24272C] font-albert">
                    Get Started with Carzino
                  </h2>
                  <div className="space-y-4">
                    <p className="text-xs text-[#111928] font-albert leading-[140%] max-w-[470px]">
                      Please fill out the form below with your information to create your listing. You'll be asked to choose whether you're
                      listing as a Private Seller or a Dealer. If you're a dealer and would like to use your feed for automatic vehicle listings,
                      please contact us for details.
                    </p>
                  </div>
                </div>

                {/* Account Type Dropdown */}
                <div className="w-full max-w-[423px]">
                  <div className="relative">
                    <div className="w-full h-[60px] border border-[#B2B2B2] rounded-xl bg-white px-4 py-3 flex flex-col justify-center">
                      <div className="text-[13px] text-black font-albert font-bold mb-1">
                        Select your Account type
                      </div>
                      <div className="text-[15px] text-[#050B20] font-dm">
                        {accountType}
                      </div>
                    </div>

                    {/* Red chevron */}
                    <div className="pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                        <path d="M9.86941 2.52782C9.68892 2.33638 9.38702 2.32925 9.19653 2.50924L4.99976 6.48505L0.803467 2.50926C0.612983 2.32878 0.311545 2.3364 0.130592 2.52784C-0.0503606 2.71879 -0.0422749 3.02023 0.148697 3.20118L4.67261 7.487C4.76404 7.57368 4.88214 7.61748 4.99976 7.61748C5.11737 7.61748 5.23594 7.57368 5.32738 7.487L9.8513 3.20118C10.0423 3.02021 10.0504 2.71879 9.86941 2.52782Z" fill="#E82121" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Center Upload Icon */}
              <div className="flex-shrink-0 flex flex-col items-center gap-4">
                <div className="relative w-[163px] flex flex-col items-center">
                  <svg width="109" height="112" viewBox="0 0 111 112" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="55.8517" cy="55.6389" rx="52.8068" ry="54.1935" fill="url(#pattern0_2996_28399)" />
                    <path d="M55.501 0.5C85.3491 0.500188 109.567 25.336 109.567 56C109.567 86.664 85.3491 111.5 55.501 111.5C25.6527 111.5 1.43359 86.6641 1.43359 56C1.43359 25.3359 25.6527 0.5 55.501 0.5Z" stroke="#242760" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M89.1913 93.1377C89.1913 92.6692 89.5418 92.2891 89.9745 92.2891H95.1969C95.6297 92.2891 95.9802 92.6692 95.9802 93.1377C95.9802 93.6061 95.6297 93.9863 95.1969 93.9863H89.9745C89.5418 93.9863 89.1913 93.6061 89.1913 93.1377ZM90.7001 107.564H94.4713C97.1198 107.564 98.4445 107.564 99.3958 106.951C99.8051 106.688 100.159 106.347 100.436 105.947C101.072 105.031 101.072 103.754 101.072 101.199C101.072 98.6452 101.072 97.3688 100.435 96.4515C100.158 96.0519 99.8048 95.7108 99.3958 95.4476C98.4445 94.8349 97.1198 94.8349 94.4713 94.8349H90.7001C88.0516 94.8349 86.7269 94.8349 85.7756 95.4476C85.3666 95.7108 85.0134 96.0519 84.7361 96.4515C84.0996 97.368 84.0996 98.6452 84.0996 101.198V101.199C84.0996 103.754 84.0996 105.03 84.7352 105.947C85.0102 106.345 85.3632 106.686 85.7756 106.951C86.7269 107.564 88.0516 107.564 90.7001 107.564ZM89.0496 101.199C89.0496 99.3156 90.6331 97.7898 92.5857 97.7898C94.5384 97.7898 96.1219 99.3164 96.1219 101.199C96.1219 103.083 94.5375 104.609 92.5857 104.609C90.6331 104.609 89.0496 103.082 89.0496 101.199ZM90.4642 101.199C90.4642 100.069 91.4146 99.1543 92.5857 99.1543C93.7568 99.1543 94.7072 100.07 94.7072 101.199C94.7072 102.329 93.7568 103.245 92.5857 103.245C91.4146 103.245 90.4642 102.329 90.4642 101.199ZM97.7716 97.7898C97.3812 97.7898 97.0647 98.0953 97.0647 98.472C97.0647 98.848 97.3812 99.1535 97.7716 99.1535H98.2434C98.6338 99.1535 98.9503 98.848 98.9503 98.472C98.9503 98.0953 98.6338 97.7898 98.2434 97.7898H97.7716Z" fill="#E82121" />
                    <defs>
                      <pattern id="pattern0_2996_28399" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlinkHref="#image0_2996_28399" transform="matrix(0.00257069 0 0 0.00250491 0 -0.307835)" />
                      </pattern>
                    </defs>
                  </svg>
                  <div className="text-center text-[#6B7280] font-inter text-base font-light leading-[150%] mt-4">
                    Upload
                  </div>
                </div>
              </div>

              {/* Right Content - Account Number */}
              <div className="w-full lg:w-[273px] flex flex-col justify-end items-start gap-4">
                <div className="flex items-center gap-8">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" />
                  
                  <div className="flex flex-col items-start gap-2">
                    <h3 className="text-[16px] font-medium text-[#050B20] font-dm leading-7">
                      Your Account Number
                    </h3>
                    <div className="text-[12px] text-[#111928] font-albert leading-[140%]">
                      5555
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
