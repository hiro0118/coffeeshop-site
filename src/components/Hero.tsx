import Image from "next/image";
import { shopInfo, images } from "@/lib/db";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <Image
          src={images.heroBg}
          alt="Close-up of dark roasted coffee beans with warm dramatic lighting"
          fill
          className="object-cover opacity-60 brightness-50"
          priority
        />
      </div>
      <div className="relative z-10 text-center flex flex-col items-center">
        <h1 className="font-headline italic text-white tracking-tighter text-shadow-elegant text-4xl md:text-7xl">
          <div className="flex items-center justify-center gap-4 md:gap-8">
            <Image
              src={images.heroLogo}
              alt="Pig-nic & Brew logo"
              width={96}
              height={96}
              className="w-16 h-16 md:w-24 md:h-24 rounded-[9999px] object-cover border-2 border-white/10 shadow-lg"
            />
            <span>{shopInfo.name}</span>
          </div>
        </h1>
        <p className="mt-4 font-label text-white/80 uppercase tracking-[0.4em] text-sm">
          {shopInfo.tagline}
        </p>
      </div>
    </section>
  );
}
