import React from "react";
import "../../client/global.css";
import ClientAppWrapper from "../components/ClientAppWrapper";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white font-albert">
        <ClientAppWrapper>{children}</ClientAppWrapper>
      </body>
    </html>
  );
}
