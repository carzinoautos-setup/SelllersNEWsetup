import React from "react";
import "../../client/global.css";
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="fusion-extension-loaded">
      <body className="bg-white font-albert">
        {children}
      </body>
    </html>
  );
}
