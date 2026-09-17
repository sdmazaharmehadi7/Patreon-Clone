import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import SessionWrapper from "./Component/SessionWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Get-Me-A-Chai",
  description: "Website For Project Contribution",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >

      <body className="min-h-full flex flex-col ">
        <SessionWrapper>

          <Navbar />
          <div className="min-h-[84vh] bg-black">

            {children}
          </div>
          <Footer />
        </SessionWrapper>

      </body>
    </html>
  );
}
