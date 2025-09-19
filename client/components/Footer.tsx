export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between py-6">
          <div className="text-sm text-gray-600">© 2025 Carzino. All rights reserved.</div>

          <div className="mt-3 md:mt-0 flex items-center gap-6">
            <nav className="flex items-center gap-4 text-sm text-gray-600">
              <a href="#" className="hover:text-gray-900">Terms</a>
              <a href="#" className="hover:text-gray-900">Privacy</a>
              <a href="#" className="hover:text-gray-900">Contact</a>
            </nav>

            <div className="flex items-center gap-3">
              <a href="#" aria-label="Twitter" className="text-gray-600 hover:text-gray-900">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 19c7.333 0 11.333-6 11.333-11.333v-.516A8.139 8.139 0 0020 6.25a8.185 8.185 0 01-2.357.646A4.11 4.11 0 0019.448 4.4a8.224 8.224 0 01-2.606.996A4.103 4.103 0 0013.847 3c-2.266 0-4.103 1.838-4.103 4.103 0 .322.036.636.106.937A11.64 11.64 0 013 4.998a4.103 4.103 0 001.27 5.478A4.066 4.066 0 012.8 10.5v.052c0 2.018 1.436 3.703 3.342 4.088a4.09 4.09 0 01-1.853.07c.523 1.633 2.04 2.82 3.837 2.853A8.233 8.233 0 013 18.54a11.616 11.616 0 006.29 1.84" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="#" aria-label="Facebook" className="text-gray-600 hover:text-gray-900">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 2h-3a4 4 0 00-4 4v3H8v4h3v8h4v-8h3l1-4h-4V6a1 1 0 011-1h3V2z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
