import { useState } from "react";
import { DashboardLayout } from "../components/DashboardLayout";

export default function UsresProfile() {
  const [accountType, setAccountType] = useState("Private Seller");

  return (
    <DashboardLayout>
      <div className="flex-1 overflow-y-auto">
        <div className="py-16 px-5">
          <div className="w-full max-w-[1280px] mx-auto">
            {/* Hero Section with Border */}
            <div className="flex flex-col items-center border border-[#E4E4E4] rounded-[14px] p-5">
              <div className="flex flex-col lg:flex-row justify-end items-center gap-8 lg:gap-[167px] bg-white w-full max-w-[1280px]">
                {/* Left Content */}
                <div className="flex-1 max-w-[872px] space-y-10">
                  {/* Title & Description */}
                  <div className="flex flex-col items-start gap-4 self-stretch">
                    <h1 className="text-2xl font-semibold text-[#24272C] font-albert w-full md:w-[353px]">
                      Get Started with Carzino
                    </h1>
                    <div className="flex flex-col items-start gap-4">
                      <p className="text-xs text-[#111928] font-albert leading-[140%] w-[640px]">
                        Please fill out the form below with your information to create your listing. You'll be asked to choose whether you're
                        listing as a Private Seller or a Dealer. If you're a dealer and would like to use your feed for automatic vehicle listings,
                        please contact us for details.
                      </p>
                    </div>

                    {/* Account Type Dropdown */}
                    <div className="w-[423px] h-[60px] relative">
                      <div className="w-full h-full border border-[#B2B2B2] rounded-xl bg-white absolute left-0 top-0"></div>
                      
                      {/* Red chevron */}
                      <div className="absolute left-[398px] top-[25px]">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <mask id="path-1-inside-1_2997_28453" fill="white">
                            <path d="M9.86941 2.52782C9.68892 2.33638 9.38702 2.32925 9.19653 2.50924L4.99976 6.48505L0.803467 2.50926C0.612983 2.32878 0.311545 2.3364 0.130592 2.52784C-0.0503606 2.71879 -0.0422749 3.02023 0.148697 3.20118L4.67261 7.487C4.76404 7.57368 4.88214 7.61748 4.99976 7.61748C5.11737 7.61748 5.23594 7.57368 5.32738 7.487L9.8513 3.20118C10.0423 3.02021 10.0504 2.71879 9.86941 2.52782Z"/>
                          </mask>
                          <path d="M9.86941 2.52782C9.68892 2.33638 9.38702 2.32925 9.19653 2.50924L4.99976 6.48505L0.803467 2.50926C0.612983 2.32878 0.311545 2.3364 0.130592 2.52784C-0.0503606 2.71879 -0.0422749 3.02023 0.148697 3.20118L4.67261 7.487C4.76404 7.57368 4.88214 7.61748 4.99976 7.61748C5.11737 7.61748 5.23594 7.57368 5.32738 7.487L9.8513 3.20118C10.0423 3.02021 10.0504 2.71879 9.86941 2.52782Z" fill="#E82121"/>
                          <path d="M9.86941 2.52782L9.14178 3.2138L9.14351 3.21563L9.86941 2.52782ZM9.19653 2.50924L8.50972 1.78241L8.5088 1.78328L9.19653 2.50924ZM4.99976 6.48505L4.31198 7.21097L4.99972 7.86257L5.68749 7.21101L4.99976 6.48505ZM0.803467 2.50926L0.115671 3.23517L0.11569 3.23519L0.803467 2.50926ZM0.130592 2.52784L0.85645 3.21568L0.857326 3.21476L0.130592 2.52784ZM0.148697 3.20118L-0.539111 3.92707L-0.539048 3.92713L0.148697 3.20118ZM4.67261 7.487L5.36063 6.76131L5.36036 6.76105L4.67261 7.487ZM5.32738 7.487L4.63964 6.76105L4.63944 6.76123L5.32738 7.487ZM9.8513 3.20118L10.539 3.92713L10.5391 3.92704L9.8513 3.20118ZM9.86941 2.52782L10.597 1.84184C10.0341 1.24477 9.09849 1.22605 8.50972 1.78241L9.19653 2.50924L9.88335 3.23608C9.67554 3.43244 9.34371 3.42799 9.14178 3.2138L9.86941 2.52782ZM9.19653 2.50924L8.5088 1.78328L4.31202 5.75909L4.99976 6.48505L5.68749 7.21101L9.88427 3.2352L9.19653 2.50924ZM4.99976 6.48505L5.68753 5.75913L1.49124 1.78334L0.803467 2.50926L0.11569 3.23519L4.31198 7.21097L4.99976 6.48505ZM0.803467 2.50926L1.49126 1.78336C0.900461 1.22357 -0.0346104 1.24684 -0.596141 1.84092L0.130592 2.52784L0.857326 3.21476C0.6577 3.42595 0.325505 3.43399 0.115671 3.23517L0.803467 2.50926ZM0.130592 2.52784L-0.595265 1.83999C-1.15606 2.43178 -1.13106 3.36618 -0.539111 3.92707L0.148697 3.20118L0.836506 2.47529C1.04651 2.67427 1.05534 3.0058 0.856449 3.21568L0.130592 2.52784ZM0.148697 3.20118L-0.539048 3.92713L3.98487 8.21295L4.67261 7.487L5.36036 6.76105L0.836442 2.47523L0.148697 3.20118ZM4.67261 7.487L3.98459 8.21269C4.26826 8.48163 4.6352 8.61748 4.99976 8.61748V7.61748V6.61748C5.12908 6.61748 5.25981 6.66572 5.36063 6.76131L4.67261 7.487ZM4.99976 7.61748V8.61748C5.36329 8.61748 5.73095 8.48232 6.01533 8.21276L5.32738 7.487L4.63944 6.76123C4.74093 6.66504 4.87145 6.61748 4.99976 6.61748V7.61748ZM5.32738 7.487L6.01513 8.21295L10.539 3.92713L9.8513 3.20118L9.16356 2.47523L4.63964 6.76105L5.32738 7.487ZM9.8513 3.20118L10.5391 3.92704C11.131 3.36613 11.156 2.43181 10.5953 1.84001L9.86941 2.52782L9.14351 3.21563C8.94467 3.00577 8.9535 2.67428 9.16345 2.47533L9.8513 3.20118Z" fill="#E82121" mask="url(#path-1-inside-1_2997_28453)"/>
                        </svg>
                      </div>

                      {/* Inner content */}
                      <div className="w-[152px] h-[40px] absolute left-[15px] top-[10px]">
                        <div className="text-[13px] text-black font-albert font-semibold absolute left-0 top-0 w-[152px] h-[16px]">
                          Select your Account type
                        </div>
                        <div className="text-[15px] text-[#050B20] font-dm absolute left-0 top-[20px] w-[94px] h-[20px]">
                          Private  Seller
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Content */}
                <div className="w-[241px] flex flex-col items-start gap-[6px]">
                  {/* Upload Photo Section */}
                  <div className="flex flex-col items-center">
                    <svg width="97" height="100" viewBox="0 0 97 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <ellipse cx="48.7901" cy="49.6803" rx="46.9132" ry="48.1452" fill="url(#pattern0_2997_28513)"/>
                      <path d="M48.4766 0.75C74.9614 0.75 96.4541 22.7877 96.4541 50C96.4541 77.2123 74.9614 99.25 48.4766 99.25C21.9919 99.2498 0.5 77.2122 0.5 50C0.5 22.7878 21.9919 0.750224 48.4766 0.75Z" stroke="#242760"/>
                      <path fillRule="evenodd" clipRule="evenodd" d="M78.4062 82.9922C78.4062 82.576 78.7176 82.2383 79.1021 82.2383H83.7416C84.126 82.2383 84.4374 82.576 84.4374 82.9922C84.4374 83.4083 84.126 83.7461 83.7416 83.7461H79.1021C78.7176 83.7461 78.4062 83.4083 78.4062 82.9922ZM79.7466 95.8085H83.097C85.4499 95.8085 86.6267 95.8085 87.4719 95.2642C87.8355 95.0304 88.1495 94.7273 88.3961 94.3723C88.9608 93.5581 88.9608 92.4235 88.9608 90.1542C88.9608 87.885 88.9608 86.7511 88.3954 85.9362C88.149 85.5812 87.8352 85.2781 87.4719 85.0443C86.6267 84.5 85.4499 84.5 83.097 84.5H79.7466C77.3937 84.5 76.2169 84.5 75.3718 85.0443C75.0084 85.2781 74.6946 85.5812 74.4482 85.9362C73.8828 86.7504 73.8828 87.885 73.8828 90.1527V90.1542C73.8828 92.4235 73.8828 93.5573 74.4475 94.3723C74.6917 94.7251 75.0054 95.0282 75.3718 95.2642C76.2169 95.8085 77.3937 95.8085 79.7466 95.8085ZM78.2803 90.1542C78.2803 88.4806 79.6871 87.1251 81.4218 87.1251C83.1565 87.1251 84.5633 88.4813 84.5633 90.1542C84.5633 91.8271 83.1558 93.1834 81.4218 93.1834C79.6871 93.1834 78.2803 91.8264 78.2803 90.1542ZM79.5371 90.1542C79.5371 89.15 80.3814 88.3373 81.4218 88.3373C82.4622 88.3373 83.3066 89.1508 83.3066 90.1542C83.3066 91.1577 82.4622 91.9711 81.4218 91.9711C80.3814 91.9711 79.5371 91.1577 79.5371 90.1542ZM86.0289 87.1251C85.6821 87.1251 85.4009 87.3965 85.4009 87.7312C85.4009 88.0652 85.6821 88.3366 86.0289 88.3366H86.4481C86.7949 88.3366 87.0761 88.0652 87.0761 87.7312C87.0761 87.3965 86.7949 87.1251 86.4481 87.1251H86.0289Z" fill="#E82121"/>
                      <defs>
                        <pattern id="pattern0_2997_28513" patternContentUnits="objectBoundingBox" width="1" height="1">
                          <use xlinkHref="#image0_2997_28513" transform="matrix(0.00257069 0 0 0.00250491 0 -0.307835)"/>
                        </pattern>
                      </defs>
                    </svg>
                  </div>

                  {/* Upload Photo Text */}
                  <div className="flex flex-col items-start gap-6 self-stretch">
                    <div className="flex w-[143px] flex-col items-start gap-4">
                      <p className="text-xs text-[#111928] font-albert leading-[140%] w-24">
                        Upload Photo
                      </p>
                    </div>
                  </div>

                  {/* Account Number */}
                  <div className="flex flex-col items-start gap-6 self-stretch">
                    <div className="flex flex-col items-start gap-4 self-stretch">
                      <p className="text-xs text-[#111928] font-albert leading-[140%] self-stretch">
                        Account number: 556568995
                      </p>
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
