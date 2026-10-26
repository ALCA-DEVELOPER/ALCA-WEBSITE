import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nama Perusahaan | Elevate Your Digital Presence",
  description: "We build fast, scalable, and stunning websites for businesses and individuals.",
};

import LanguageWrapper from "@/components/LanguageWrapper";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="min-h-screen font-sans antialiased overflow-x-hidden selection:bg-sky-500 selection:text-white" suppressHydrationWarning>
        <LanguageWrapper>{children}</LanguageWrapper>
      </body>
    </html>
  );
}
