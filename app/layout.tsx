import type { Metadata } from "next";
import "./globals.css";
import "./_styles/outfit-font.css";
import "./_styles/n27-font.css";
import "./_styles/dm-mono-font.css";
import StateProvider from "@/app/_provider/StateProvider";
import { user } from "@/app/_lib/constants";
import Header from "./_components/layout/Header";
import SearchBar from "./_components/layout/SearchBar";
import Navbar from "./_components/layout/Navbar";
import CookieModal from "./_components/common/CookieModal";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${user.website} - Website Development`,
  description: `Website run by ${user.name}`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`} //font-[family-name:var(--font-geist-sans)]
      >
        <StateProvider>
          <main
            style={{ fontFamily: "N27" }}
            className={`flex flex-grow flex-col justify-center items-center text-sm cursor-pointer`}
          >
            <Header className="text-[--text-color-primary] fixed top-0 z-50 " />
            <SearchBar />
            <Navbar />
            {children}

            <CookieModal />
          </main>
        </StateProvider>
      </body>
    </html>
  );
}
