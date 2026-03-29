import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { shopInfo, images } from "@/lib/db";

export default async function Hero() {
  const t = await getTranslations("Hero");
  const tDb = await getTranslations("db");

  return (
    <section className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <Image
          src={images.heroBg}
          alt={t("heroBgAlt")}
          fill
          className="object-cover opacity-60 brightness-50"
          priority
        />
      </div>
      <div className="relative z-10 text-center flex flex-col items-center">
        <h1 className="font-headline text-white tracking-tighter text-shadow-elegant text-4xl md:text-7xl">
          <div className="flex flex-col items-center justify-center gap-4 md:gap-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.svg"
              alt={t("logoAlt")}
              className="w-32 h-32 md:w-48 md:h-48"
            />
            <span>{shopInfo.name}</span>
          </div>
        </h1>
        <p className="mt-4 font-label text-white/80 uppercase tracking-[0.4em] text-sm">
          {tDb("shopInfo.tagline")}
        </p>
      </div>
    </section>
  );
}
