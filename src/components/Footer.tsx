import { getTranslations } from "next-intl/server";
import { shopInfo } from "@/lib/db";

export default async function Footer() {
  const t = await getTranslations("Footer");

  return (
    <footer className="bg-[#2b1613] w-full py-12 border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-center px-12 gap-8 text-center md:text-left max-w-7xl mx-auto">
        <div className="text-lg font-headline italic text-[#FBFBE2]">{shopInfo.name}</div>
        <div className="flex flex-wrap justify-center gap-8 font-label text-xs uppercase tracking-widest text-[#D4C3BF]">
          <a href="#" className="hover:text-white transition-colors duration-200">
            {t("instagram")}
          </a>
          <a href="#" className="hover:text-white transition-colors duration-200">
            {t("facebook")}
          </a>
          <a href="#" className="hover:text-white transition-colors duration-200">
            {t("directions")}
          </a>
          <a href="#" className="hover:text-white transition-colors duration-200">
            {t("privacy")}
          </a>
        </div>
        <div className="font-label text-xs uppercase tracking-widest text-[#D4C3BF]">
          © {shopInfo.foundedYear} {shopInfo.name}. {t("tagline")}
        </div>
      </div>
    </footer>
  );
}
