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

      {/* Dark footer section (full width background, centered content) */}
      <div className="w-full bg-[#24272C] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-10">
          {/* Links grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-10">
            <div>
              <h4 className="font-medium text-[18px] leading-7 mb-4">Links</h4>
              <nav className="space-y-3 text-sm opacity-80">
                <a className="block">Trade in your Cars</a>
                <a className="block">Careers With Us</a>
                <a className="block">Terms &amp; Conditions</a>
                <a className="block">Privacy Policy</a>
                <a className="block">Corporate Policies</a>
                <a className="block">Investors</a>
                <a className="block">FAQs</a>
              </nav>
            </div>

            <div>
              <h4 className="font-medium text-[18px] leading-7 mb-4">Popular used car</h4>
              <nav className="space-y-3 text-sm opacity-80">
                <a className="block">Chevrolet</a>
                <a className="block">Land Rover</a>
                <a className="block">Tesla</a>
                <a className="block">Volkswagen</a>
                <a className="block">Honda</a>
                <a className="block">Hyundai</a>
                <a className="block">Mercedes benz</a>
              </nav>
            </div>

            <div>
              <h4 className="font-medium text-[18px] leading-7 mb-4">Other</h4>
              <nav className="space-y-3 text-sm opacity-80">
                <a className="block">How it work</a>
                <a className="block">Terms and Conditions</a>
                <a className="block">Privacy Policy</a>
                <a className="block">Copyrights</a>
                <a className="block">Help center</a>
                <a className="block">Car sales trends</a>
                <a className="block">Personal loan</a>
              </nav>
            </div>

            <div>
              <h4 className="font-medium text-[18px] leading-7 mb-4">Newsletter</h4>
              <p className="text-sm opacity-80 mb-4">Stay on top of the latest car trends, tips, and tricks for selling your car.</p>
              <div className="space-y-3">
                <input placeholder="Your email address" className="w-full rounded-lg h-12 px-4 bg-white/5 placeholder-white/60 text-white" />
                <button className="w-full bg-red-600 rounded-lg h-12 text-white font-medium">Send</button>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 flex items-center justify-between">
            <div className="text-sm">© 2025 Carzino. All rights reserved</div>
            <div className="flex items-center gap-3">
              <a className="w-10 h-10 rounded-full bg-white/8 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none"><path d="M8 19c7.333 0 11.333-6 11.333-11.333v-.516A8.139 8.139 0 0020 6.25a8.185 8.185 0 01-2.357.646A4.11 4.11 0 0019.448 4.4a8.224 8.224 0 01-2.606.996A4.103 4.103 0 0013.847 3c-2.266 0-4.103 1.838-4.103 4.103 0 .322.036.636.106.937A11.64 11.64 0 013 4.998a4.103 4.103 0 001.27 5.478A4.066 4.066 0 012.8 10.5v.052c0 2.018 1.436 3.703 3.342 4.088a4.09 4.09 0 01-1.853.07c.523 1.633 2.04 2.82 3.837 2.853A8.233 8.233 0 013 18.54a11.616 11.616 0 006.29 1.84" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
              <a className="w-10 h-10 rounded-full bg-white/8 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none"><path d="M18 2h-3a4 4 0 00-4 4v3H8v4h3v8h4v-8h3l1-4h-4V6a1 1 0 011-1h3V2z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}
