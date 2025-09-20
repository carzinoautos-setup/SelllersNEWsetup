export function GetStartedTest() {
  return (
    <div className="mt-8 bg-white p-6 lg:p-8 rounded-2xl border border-gray-100">
      <div className="max-w-[1483px] mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-24">
          {/* Left Content */}
          <div className="flex-1 max-w-[640px] space-y-4">
            {/* Header Section */}
            <div className="space-y-3">
              <h1 className="text-2xl font-semibold text-[#24272C] font-sans">
                Get Started with Carzino
              </h1>
              <h2 className="text-xl font-normal text-[#111928] font-sf-pro leading-[125%] tracking-[-0.45px]">
                Enter Your Account Details
              </h2>
            </div>

            {/* Form Fields */}
            <div className="space-y-4 max-w-[453px]">
              {/* Account Type Dropdown */}
              <div className="relative">
                <div className="w-full h-[60px] border border-[#B2B2B2] rounded-xl bg-white px-4 py-3 flex items-center justify-between">
                  <div className="flex flex-col justify-center">
                    <div className="text-[13px] font-bold text-black font-sans mb-1">
                      Select your Account type
                    </div>
                    <div className="text-[15px] text-[#050B20] font-dm">
                      Private Seller
                    </div>
                  </div>
                  {/* Dropdown Arrow */}
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.86941 2.52782C9.68892 2.33638 9.38702 2.32925 9.19653 2.50924L4.99976 6.48505L0.803467 2.50926C0.612983 2.32878 0.311545 2.3364 0.130592 2.52784C-0.0503606 2.71879 -0.0422749 3.02023 0.148697 3.20118L4.67261 7.487C4.76404 7.57368 4.88214 7.61748 4.99976 7.61748C5.11737 7.61748 5.23594 7.57368 5.32738 7.487L9.8513 3.20118C10.0423 3.02021 10.0504 2.71879 9.86941 2.52782Z" fill="#E82121"/>
                  </svg>
                </div>
              </div>

              {/* Account Number Input */}
              <div className="w-full h-[67px] border border-[#E1E1E1] rounded-xl bg-white px-4 py-3 flex flex-col justify-center">
                <div className="text-[13px] text-[#818181] font-dm mb-1">
                  Account Number
                </div>
                <div className="text-[15px] text-[#050B20] font-dm">
                  Account Number here
                </div>
              </div>

              {/* Red Separator Line */}
              <div className="w-[194px] h-px bg-[#E82121] mt-4"></div>
            </div>
          </div>

          {/* Right Content - Image Upload Section */}
          <div className="flex-1 space-y-4">
            {/* Image Row */}
            <div className="flex gap-8 items-start">
              {/* Profile Image with Action Buttons */}
              <div className="relative w-[122px] h-[107px] flex-shrink-0">
                {/* Background */}
                <div className="w-full h-full rounded-lg bg-[#C4C4C4] overflow-hidden">
                  <img 
                    src="https://api.builder.io/api/v1/image/assets/TEMP/f126bef54aa0eaeef95ddcaab70a998ff8cf97c8?width=279" 
                    alt="Profile"
                    className="w-[140px] h-[123px] object-cover -ml-2 -mt-2"
                  />
                </div>
                
                {/* Action Buttons Overlay */}
                <div className="absolute inset-0 flex items-center justify-center gap-3">
                  {/* Delete Button */}
                  <button className="w-10 h-10 bg-white rounded-2xl border border-white flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                    <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M7.06907 8.59658C7.37819 8.56568 7.65382 8.79121 7.68472 9.10036L8.05972 12.8504C8.0907 13.1594 7.8651 13.4351 7.55602 13.466C7.2469 13.4969 6.97124 13.2714 6.94033 12.9623L6.56533 9.21226C6.53442 8.90318 6.75995 8.62748 7.06907 8.59658Z" fill="#050B20"/>
                      <path fillRule="evenodd" clipRule="evenodd" d="M10.931 8.59658C11.2401 8.62748 11.4656 8.90318 11.4347 9.21226L11.0597 12.9623C11.0288 13.2714 10.7532 13.4969 10.444 13.466C10.135 13.4351 9.90943 13.1594 9.94033 12.8504L10.3153 9.10036C10.3462 8.79121 10.6219 8.56568 10.931 8.59658Z" fill="#050B20"/>
                      <path fillRule="evenodd" clipRule="evenodd" d="M7.59334 1.84376H10.1295C10.2918 1.84366 10.4331 1.84357 10.5666 1.86489C11.0941 1.94912 11.5506 2.27811 11.7972 2.75188C11.8597 2.8718 11.9043 3.00596 11.9556 3.15995L12.0393 3.41113C12.0534 3.45365 12.0575 3.46568 12.0609 3.47516C12.1923 3.83825 12.5328 4.08369 12.9188 4.09348C12.9289 4.09373 12.9414 4.09378 12.9864 4.09378H15.2364C15.5471 4.09378 15.7989 4.34561 15.7989 4.65628C15.7989 4.96694 15.5471 5.21878 15.2364 5.21878H2.48633C2.17567 5.21878 1.92383 4.96694 1.92383 4.65628C1.92383 4.34561 2.17567 4.09378 2.48633 4.09378H4.7364C4.78143 4.09378 4.79385 4.09373 4.80401 4.09348C5.19 4.08369 5.53051 3.83827 5.66185 3.47518C5.6653 3.46563 5.66928 3.45386 5.68352 3.41113L5.76722 3.15997C5.81844 3.00598 5.86308 2.8718 5.92552 2.75188C6.17223 2.27811 6.62868 1.94912 7.15615 1.86489C7.28967 1.84357 7.43106 1.84366 7.59334 1.84376ZM6.61744 4.09378C6.65607 4.01801 6.69031 3.93928 6.71976 3.85786C6.7287 3.83313 6.73748 3.80681 6.74874 3.773L6.8236 3.54844C6.89198 3.34331 6.90772 3.30147 6.92334 3.27148C7.00557 3.11355 7.15773 3.00389 7.33355 2.97581C7.36695 2.97048 7.4116 2.96878 7.62784 2.96878H10.095C10.3112 2.96878 10.3558 2.97048 10.3893 2.97581C10.5651 3.00389 10.7172 3.11355 10.7994 3.27148C10.815 3.30147 10.8308 3.3433 10.8992 3.54844L10.974 3.77287L11.0031 3.85787C11.0325 3.93929 11.0667 4.01801 11.1054 4.09378H6.61744Z" fill="#050B20"/>
                      <path fillRule="evenodd" clipRule="evenodd" d="M3.83761 6.72002C4.14757 6.69935 4.41561 6.93388 4.43628 7.24385L4.78123 12.4182C4.84862 13.4291 4.89664 14.1324 5.00207 14.6616C5.10433 15.175 5.24708 15.4467 5.45214 15.6386C5.6572 15.8304 5.93782 15.9548 6.45682 16.0227C6.99187 16.0926 7.6969 16.0938 8.71 16.0938H9.29004C10.3031 16.0938 11.0081 16.0926 11.5432 16.0227C12.0622 15.9548 12.3428 15.8304 12.5479 15.6386C12.7529 15.4467 12.8957 15.175 12.998 14.6616C13.1034 14.1324 13.1514 13.4291 13.2188 12.4182L13.5638 7.24385C13.5844 6.93388 13.8524 6.69935 14.1624 6.72002C14.4724 6.74068 14.7069 7.00871 14.6863 7.31869L14.3387 12.5325C14.2745 13.4946 14.2228 14.2716 14.1013 14.8815C13.975 15.5154 13.7602 16.045 13.3165 16.4601C12.8728 16.8752 12.3301 17.0543 11.6891 17.1381C11.0726 17.2188 10.2938 17.2188 9.32957 17.2188H8.67047C7.70627 17.2188 6.92743 17.2188 6.3109 17.1381C5.66991 17.0543 5.12725 16.8752 4.68356 16.4601C4.23986 16.045 4.02505 15.5154 3.89875 14.8815C3.77727 14.2716 3.72547 13.4946 3.66136 12.5325L3.31377 7.31869C3.2931 7.00871 3.52763 6.74068 3.83761 6.72002Z" fill="#050B20"/>
                    </svg>
                  </button>

                  {/* Edit Button */}
                  <button className="w-10 h-10 bg-white rounded-2xl border border-white flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.6441 16.0898H10.8613C10.5508 16.0898 10.2988 15.8378 10.2988 15.5273C10.2988 15.2168 10.5508 14.9648 10.8613 14.9648H15.6441C15.9546 14.9648 16.2066 15.2168 16.2066 15.5273C16.2066 15.8378 15.9546 16.0898 15.6441 16.0898Z" fill="#050B20"/>
                      <path fillRule="evenodd" clipRule="evenodd" d="M12.8881 9.29888L13.8085 8.0727C14.2645 7.4652 14.4565 6.71671 14.3493 5.96445C14.242 5.2122 13.849 4.5477 13.2415 4.0917C11.9883 3.1512 10.2018 3.40395 9.2605 4.6587L4.19649 11.405C2.68749 13.4172 4.02999 15.8142 4.08774 15.9155C4.16574 16.0512 4.29699 16.148 4.44999 16.1832C4.49349 16.1937 4.91349 16.2867 5.49924 16.2867C6.44649 16.2867 7.825 16.0445 8.7445 14.819L12.771 9.45496C12.7944 9.43291 12.8162 9.40861 12.8361 9.38206C12.8562 9.35543 12.8735 9.32761 12.8881 9.29888ZM4.95249 15.1265C5.53824 15.1977 7.01574 15.248 7.84449 14.1432L11.5916 9.15136L8.84305 7.08775L5.09574 12.08C4.25049 13.208 4.71549 14.5887 4.95249 15.1265ZM9.5182 6.1884L12.2671 8.25139L12.9085 7.39695C13.4778 6.63946 13.324 5.5602 12.5665 4.99095C11.8083 4.4232 10.7283 4.57696 10.1598 5.3337L9.5182 6.1884Z" fill="#050B20"/>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Upload Placeholder */}
              <div className="w-[122px] h-[107px] border border-dashed border-[#E4E4E4] bg-[#E9F2FF] rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-[#E9F2FF]/80 transition-colors">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-2">
                  <path fillRule="evenodd" clipRule="evenodd" d="M11.1568 13.5806C10.779 13.5806 10.4727 13.2766 10.4727 12.9015V1.99938C10.4727 1.62434 10.779 1.32031 11.1568 1.32031C11.5346 1.32031 11.8409 1.62434 11.8409 1.99938V12.9015C11.8409 13.2766 11.5346 13.5806 11.1568 13.5806Z" fill="#050B20"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M8.01583 5.1316C7.74811 4.86696 7.74721 4.437 8.01384 4.17126L10.6738 1.52019C10.8022 1.39224 10.9766 1.32031 11.1586 1.32031C11.3405 1.32031 11.515 1.39224 11.6433 1.52019L14.3033 4.17126C14.5699 4.437 14.569 4.86696 14.3013 5.1316C14.0335 5.39625 13.6004 5.39537 13.3338 5.12963L11.1586 2.9617L8.98336 5.12963C8.71673 5.39537 8.28355 5.39625 8.01583 5.1316Z" fill="#050B20"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M4.16074 8.79299C4.68575 8.08973 5.54405 7.73817 7.12423 7.59359C7.50049 7.55917 7.77737 7.22852 7.74269 6.85506C7.70801 6.48161 7.37489 6.20677 6.99864 6.24119C5.31317 6.3954 3.94571 6.79986 3.06138 7.98441C2.21354 9.12011 1.92578 10.8312 1.92578 13.2553C1.92578 16.4694 2.43345 18.4456 4.09675 19.4596C4.8895 19.943 5.8713 20.1566 6.9952 20.2604C8.1147 20.3638 9.4596 20.3638 11.0189 20.3638H11.0766C12.6359 20.3638 13.9808 20.3638 15.1002 20.2604C16.2242 20.1566 17.206 19.943 17.9987 19.4596C19.662 18.4456 20.1697 16.4694 20.1697 13.2553C20.1697 10.8312 19.8819 9.12011 19.0341 7.98441C18.1497 6.79986 16.7823 6.3954 15.0968 6.24119C14.7206 6.20677 14.3875 6.48161 14.3528 6.85506C14.318 7.22852 14.595 7.55917 14.9713 7.59359C16.5514 7.73817 17.4097 8.08973 17.9347 8.79299C18.4963 9.54511 18.8014 10.8536 18.8014 13.2553C18.8014 16.4707 18.2554 17.7092 17.2825 18.3024C16.7572 18.6228 16.0251 18.811 14.9734 18.9081C13.9243 19.005 12.6415 19.0057 11.0477 19.0057C9.45394 19.0057 8.17116 19.005 7.12197 18.9081C6.07029 18.811 5.3383 18.6228 4.81293 18.3024C3.83999 17.7092 3.29407 16.4707 3.29407 13.2553C3.29407 10.8536 3.59924 9.54511 4.16074 8.79299Z" fill="#050B20"/>
                </svg>
                <span className="text-[15px] font-medium text-[#050B20] font-dm text-center">
                  Upload
                </span>
              </div>
            </div>

            {/* Profile Photo Info */}
            <div className="space-y-2">
              <h3 className="text-base font-medium text-[#050B20] font-dm">
                Profile Photo
              </h3>
              <p className="text-[15px] font-normal text-[#050B20] font-dm leading-[173%]">
                Max file size is 1MB, Minimum dimension: 330x300 And Suitable files are .jpg & .png
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
