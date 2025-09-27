import React from "react";

export default function RemoveListingConfirmed() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      {/* Delete Listing Modal */}
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-[0_6px_10px_4px_rgba(0,0,0,0.15),0_2px_3px_0_rgba(0,0,0,0.30)] overflow-hidden lg:transform lg:scale-[0.7] lg:origin-center">
        {/* Close Button */}
        <button className="absolute top-5 right-5 z-10 w-5 h-5 text-red-600 hover:text-red-700 transition-colors">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 11.6678L2.54753 18.7815C2.26869 19.0477 1.91381 19.1808 1.48289 19.1808C1.05196 19.1808 0.697084 19.0477 0.41825 18.7815C0.139416 18.5154 0 18.1766 0 17.7653C0 17.3539 0.139416 17.0152 0.41825 16.749L7.87072 9.6353L0.41825 2.52158C0.139416 2.25542 0 1.91667 0 1.50533C0 1.09399 0.139416 0.755242 0.41825 0.489083C0.697084 0.222923 1.05196 0.0898438 1.48289 0.0898438C1.91381 0.0898438 2.26869 0.222923 2.54753 0.489083L10 7.60281L17.4525 0.489083C17.7313 0.222923 18.0862 0.0898438 18.5171 0.0898438C18.948 0.0898438 19.3029 0.222923 19.5817 0.489083C19.8606 0.755242 20 1.09399 20 1.50533C20 1.91667 19.8606 2.25542 19.5817 2.52158L12.1293 9.6353L19.5817 16.749C19.8606 17.0152 20 17.3539 20 17.7653C20 18.1766 19.8606 18.5154 19.5817 18.7815C19.3029 19.0477 18.948 19.1808 18.5171 19.1808C18.0862 19.1808 17.7313 19.0477 17.4525 18.7815L10 11.6678Z"
              fill="currentColor"
            />
          </svg>
        </button>

      </div>
    </div>
  );
}
