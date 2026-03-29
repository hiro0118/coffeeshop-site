"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-1">
      {routing.locales.map((loc) => (
        <button
          key={loc}
          onClick={() => router.replace(pathname, { locale: loc })}
          aria-current={loc === locale ? "true" : undefined}
          className={`font-label text-xs uppercase tracking-widest px-2 py-1 rounded transition-colors duration-200 ${
            loc === locale
              ? "text-[#FBFBE2] bg-white/10"
              : "text-[#D4C3BF] hover:text-[#FBFBE2]"
          }`}
        >
          {loc.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
