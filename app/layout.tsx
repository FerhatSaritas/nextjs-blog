import React from "react";
import { Footer, Header } from "./_components/organism";
import "@styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <Header />
        <div className='container py-8'>{children}</div>
        <Footer />
      </body>
    </html>
  );
}

