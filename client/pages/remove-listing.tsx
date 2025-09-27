import React from "react";

export default function RemoveListing() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      {/* Delete Listing Modal */}
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-[0_6px_10px_4px_rgba(0,0,0,0.15),0_2px_3px_0_rgba(0,0,0,0.30)] overflow-hidden lg:transform lg:scale-[0.7] lg:origin-center">
        {/* Close Button */}
        <button className="absolute top-5 right-5 z-10 w-5 h-5 text-red-600 hover:text-red-700 transition-colors">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 11.6678L2.54753 18.7815C2.26869 19.0477 1.91381 19.1808 1.48289 19.1808C1.05196 19.1808 0.697084 19.0477 0.41825 18.7815C0.139416 18.5154 0 18.1766 0 17.7653C0 17.3539 0.139416 17.0152 0.41825 16.749L7.87072 9.6353L0.41825 2.52158C0.139416 2.25542 0 1.91667 0 1.50533C0 1.09399 0.139416 0.755242 0.41825 0.489083C0.697084 0.222923 1.05196 0.0898438 1.48289 0.0898438C1.91381 0.0898438 2.26869 0.222923 2.54753 0.489083L10 7.60281L17.4525 0.489083C17.7313 0.222923 18.0862 0.0898438 18.5171 0.0898438C18.948 0.0898438 19.3029 0.222923 19.5817 0.489083C19.8606 0.755242 20 1.09399 20 1.50533C20 1.91667 19.8606 2.25542 19.5817 2.52158L12.1293 9.6353L19.5817 16.749C19.8606 17.0152 20 17.3539 20 17.7653C20 18.1766 19.8606 18.5154 19.5817 18.7815C19.3029 19.0477 18.948 19.1808 18.5171 19.1808C18.0862 19.1808 17.7313 19.0477 17.4525 18.7815L10 11.6678Z" fill="currentColor"/>
          </svg>
        </button>

        {/* Content */}
        <div className="px-6 pt-16 pb-6 transform scale-[0.7] origin-center md:transform md:scale-[1]">
          {/* Delete Icon */}
          <div className="flex justify-center mb-8">
            <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="68" height="68" rx="34" fill="#E82121"/>
              <path d="M51.25 22.4622C44.8675 21.8297 38.4467 21.5039 32.045 21.5039C28.25 21.5039 24.455 21.6956 20.66 22.0789L16.75 22.4622" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M27.291 20.5245L27.7127 18.0137C28.0193 16.1929 28.2493 14.832 31.4885 14.832H36.5102C39.7494 14.832 39.9985 16.2695 40.286 18.0329L40.7077 20.5245" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M47.1294 28.5195L45.8836 47.8204C45.6728 50.8295 45.5003 53.1679 40.1528 53.1679H27.8478C22.5003 53.1679 22.3278 50.8295 22.1169 47.8204L20.8711 28.5195" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M30.7988 42.625H37.1813" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M29.209 34.957H38.7923" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Heading */}
          <div className="text-center mb-6">
            <h1 className="text-4xl sm:text-5xl font-bold text-black mb-4 font-albert">Delete Listing</h1>
            <p className="text-lg sm:text-xl text-black font-light font-albert">Do you really want to delete your listing?</p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-6 mb-8 px-4">
            <button className="flex-1 h-14 bg-gray-600 hover:bg-gray-700 text-white rounded-xl font-medium transition-colors">
              Cancel
            </button>
            <button className="flex-1 h-14 bg-red-700 hover:bg-red-800 text-white rounded-xl font-medium transition-colors">
              Delete
            </button>
          </div>

          {/* Warning Text */}
          <div className="text-center">
            <p className="text-sm text-black font-albert">Listings cannot be restored.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
