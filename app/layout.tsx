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
        <div className='container py-8 bg-neutral'>{children}</div>
        <Footer className='fixed bottom-0' />
      </body>
    </html>
  );
}

