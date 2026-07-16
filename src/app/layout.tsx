import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Clealabs | Elevate Your Digital Presence",
  description: "We build fast, scalable, and stunning websites for businesses and individuals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen bg-gray-50 text-gray-900 font-sans antialiased overflow-x-hidden selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
