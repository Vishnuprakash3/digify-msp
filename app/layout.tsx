import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import ThemeToggle from "./components/ThemeToggle";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Digify MSP — Performance Marketing",
  description: "Digify MSP — performance marketing, academy and consulting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex min-h-screen flex-col">
        <header className="bg-gradient-to-r from-[#2563eb] to-[#0b61ff] text-white">
          <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
           <Navbar/>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="mx-auto mt-12 max-w-6xl px-6 pb-12 text-sm text-slate-500">
         <Footer/>
        </footer>
      </body>
    </html>
  );
}
