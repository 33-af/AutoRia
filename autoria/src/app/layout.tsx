import type { Metadata } from "next";
import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const geistPlusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"], // Поддерживаемые символы
  weight: ["400", "500", "600", "700", "800"], // Какие начертания нужны
  variable: "--font-jakarta", // CSS-переменная для шрифта
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${geistPlusJakartaSans.variable} antialiased`}
      >
        
          <Header />
          {children}
          <Footer />
       
      </body>
    </html>
  );
}
