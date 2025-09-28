import React from "react";
import { Link } from "react-router-dom";

export default function ChangeStatus() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 container-minw-0 min-w-0">
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

        {/* Content */}
        <div className="p-[10px] transform scale-[0.7] origin-center md:pt-16 md:px-6 md:pb-6 md:transform md:scale-[1]">
          {/* Speedometer Icon */}
          <div className="flex justify-center mb-8">
            <svg
              width="68"
              height="68"
              viewBox="0 0 68 68"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="68" height="68" rx="34" fill="#E82121" />
              <path
                d="M34 38.5067C35.9183 38.5067 37.4878 36.9372 37.4878 35.019C37.4878 33.9727 37.0343 33.031 36.3019 32.4032L40.3477 22.6027L39.0921 22.0098L34 31.5312C32.0818 31.5312 30.5123 33.1007 30.5123 35.019C30.5123 36.9372 32.0818 38.5067 34 38.5067ZM26.327 46.1797H41.673V41.2969H26.327V46.1797ZM36.7902 41.9944H40.9755V45.4821H36.7902V41.9944ZM31.9074 41.9944H36.0927V45.4821H31.9074V41.9944ZM27.0246 41.9944H31.2098V45.4821H27.0246V41.9944ZM34 12C21.6884 12 11.6786 22.0098 11.6786 34.3214C11.6786 46.6331 21.6884 56.6429 34 56.6429C46.3117 56.6429 56.3215 46.6331 56.3215 34.3214C56.3215 22.0098 46.3117 12 34 12ZM53.322 40.3552L50.0436 39.1694L49.5553 40.4947L52.8686 41.6805C49.9389 49.214 42.6147 54.5502 34.0349 54.5502C25.8039 54.5502 18.6889 49.5977 15.55 42.5525L18.8284 41.0876L18.2704 39.7972L15.0617 41.2271C14.4339 39.4833 14.0154 37.6348 13.8759 35.7165H20.7467V33.6239H13.7712C13.841 31.5312 14.2246 29.5084 14.8873 27.625L18.2704 28.8457L18.7587 27.5204L15.3756 26.2997C16.2824 24.207 17.538 22.2888 19.0726 20.6147L23.7112 25.2533L25.1761 23.7885L20.6072 19.1847C22.0023 17.964 23.5369 16.9177 25.2458 16.1155L27.0246 19.7776L28.2802 19.1498L26.5014 15.5226C28.5941 14.6855 30.896 14.1973 33.2676 14.0926V21.0681H35.3602V14.1624C37.3831 14.3019 39.3362 14.7553 41.1499 15.4528L39.7548 19.115L41.0452 19.6032L42.4403 15.976C44.3586 16.8828 46.1373 18.0686 47.6719 19.4986L42.9635 24.207L44.4283 25.6719L49.1367 20.9634C50.3923 22.3934 51.4386 23.9629 52.2757 25.7068L49.0321 27.1367L49.5901 28.4272L52.7989 26.9972C53.601 29.055 54.0893 31.2871 54.1591 33.6239H47.1836V35.7165H54.1242C54.0544 37.3209 53.7754 38.8555 53.322 40.3552Z"
                fill="white"
              />
            </svg>
          </div>

          {/* Heading */}
          <div className="text-center mb-6">
            <h1 className="text-4xl sm:text-5xl font-bold text-black mb-4 font-albert">
              Update Status
            </h1>
            <p className="text-lg sm:text-xl text-black font-light font-albert">
              Turn your add on or off
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-6 mb-8 px-4">
            <button className="flex-1 h-14 bg-gray-600 hover:bg-gray-700 text-white rounded-xl font-medium transition-colors">
              Make Active
            </button>
            <button className="flex-1 h-14 bg-red-700 hover:bg-red-800 text-white rounded-xl font-medium transition-colors">
              Disable Ad
            </button>
          </div>

          {/* Helper Text */}
          <div className="text-center">
            <p className="text-sm text-black font-albert">
              To delete your ad go to{" "}
              <Link to="/yourlistings" className="text-red-600 font-medium">
                your listings page
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
