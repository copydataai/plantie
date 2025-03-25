import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Plantie",
  description: "Eco-friendly plants delivered to your doorstep",
  icons: [
    {
      rel: "icon",
      url: "/favicon.ico",
    }
  ],
  keywords: ["plantie", "plant", "eco-friendly", "plants", "houseplants", "air plants", "tropical plants", "succulents", "greenery", "plant care", "plant delivery"],
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
