"use client";

import { LanguageProvider } from "@/i18n/LanguageContext";

export default function LanguageWrapper({ children }: { children: React.ReactNode }) {
  return <LanguageProvider>{children}</LanguageProvider>;
}
