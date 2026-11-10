import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MeoM | Elevate Your Digital Presence",
  description: "We build fast, scalable, and stunning websites for businesses and individuals.",
  icons: {
    icon: [
      { url: "/meom-logo.png?v=10", type: "image/png" },
      { url: "/favicon.ico?v=10", sizes: "any" },
      { url: "/favicon.png?v=10", type: "image/png" },
    ],
    shortcut: "/meom-logo.png?v=10",
    apple: "/apple-touch-icon.png?v=10",
  },
};

import LanguageWrapper from "@/components/LanguageWrapper";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" data-theme="light" className={`${inter.variable} scroll-smooth light`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/meom-logo.png?v=10" type="image/png" />
        <link rel="shortcut icon" href="/meom-logo.png?v=10" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=10" />
      </head>
      <body className="min-h-screen font-sans antialiased overflow-x-clip selection:bg-[#C6F432] selection:text-[#0B0B0C]" suppressHydrationWarning>
        <LanguageWrapper>{children}</LanguageWrapper>
      </body>
    </html>
  );
}
