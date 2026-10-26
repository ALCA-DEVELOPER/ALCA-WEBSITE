"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageContext";


export default function Footer() {
  const { t } = useLanguage();
  const currentYear = 2026;

  return (
    <footer className="bg-transparent border-t border-gray-200 pt-16 pb-8 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <Image src="/logo.png" alt="Nama Perusahaan Logo" width={32} height={32} className="w-8 h-8 object-contain" />
              <div className="text-2xl font-bold tracking-tighter flex items-center">
                <span className="text-gray-900">Nama</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-500 ml-1.5">
                  Perusahaan
                </span>
              </div>
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              {t("foot_desc")}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-4">{t("foot_services")}</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><Link href="#" className="hover:text-blue-600 transition-colors">{t("foot_serv_1")}</Link></li>
              <li><Link href="#" className="hover:text-blue-600 transition-colors">{t("foot_serv_2")}</Link></li>
              <li><Link href="#" className="hover:text-blue-600 transition-colors">{t("foot_serv_3")}</Link></li>
              <li><Link href="#" className="hover:text-blue-600 transition-colors">{t("foot_serv_4")}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 font-semibold mb-4">{t("foot_company")}</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><Link href="#features" className="hover:text-blue-600 transition-colors">{t("foot_comp_1")}</Link></li>
              <li><Link href="#portfolio" className="hover:text-blue-600 transition-colors">{t("foot_comp_2")}</Link></li>
              <li><Link href="#services" className="hover:text-blue-600 transition-colors">{t("foot_comp_3")}</Link></li>
              <li><Link href="#faq" className="hover:text-blue-600 transition-colors">{t("foot_comp_4")}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 font-semibold mb-4">{t("foot_contact")}</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="mailto:kontak@namaperusahaan.com" className="hover:text-blue-600 transition-colors">kontak@namaperusahaan.com</a></li>
              <li><a href="https://wa.me/6285700654110" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">085700654110</a></li>
              <li>Purbalingga, Jawa Tengah, Indonesia</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Nama Perusahaan. {t("foot_rights")}
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="#" className="hover:text-blue-600 transition-colors">{t("foot_privacy")}</Link>
            <Link href="#" className="hover:text-blue-600 transition-colors">{t("foot_terms")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
