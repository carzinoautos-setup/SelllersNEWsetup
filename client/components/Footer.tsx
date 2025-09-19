export function Footer() {
  return (
    <footer className="left-0 w-screen relative">
      {/* Full-bleed promo bar */}
      <div className="w-full bg-[#f8f8f8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center relative py-3 px-4">
            <div className="w-full text-center">
              <div className="mb-2"></div>
              <div className="text-gray-700">"Find it. Love it. Drive it. Carzino it."</div>
              <div className="text-gray-500 mt-2">Dealers: Exclusive early access now available- enjoy three 3-6 months of free listings. Learn more.</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom footer full-bleed background with centered content */}
      <div className="w-full bg-white border-t border-gray-200 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" />
      </div>
    </footer>
  );
}
