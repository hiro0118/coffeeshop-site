import Image from "next/image";
import { locationInfo, socialLinks, images } from "@/lib/db";

export default function LocationSection() {
  return (
    <section
      className="py-32 bg-[#351F1B] relative overflow-hidden"
      id="location"
    >
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div>
            <span className="font-label text-[#D4C3BF] uppercase tracking-widest text-xs mb-4 block">
              The Finale
            </span>
            <h2 className="font-headline italic text-4xl md:text-6xl text-[#FBFBE2] mb-12">
              Visit the Sanctuary.
            </h2>
            <div className="space-y-12">
              <div className="flex gap-6">
                <span className="material-symbols-outlined text-[#D4C3BF] text-3xl">
                  location_on
                </span>
                <div>
                  <h4 className="font-headline text-xl text-[#FBFBE2] mb-2">
                    {locationInfo.locationName}
                  </h4>
                  <p className="text-[#D4C3BF]/80 text-sm leading-relaxed">
                    {locationInfo.address.map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < locationInfo.address.length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <span className="material-symbols-outlined text-[#D4C3BF] text-3xl">
                  schedule
                </span>
                <div>
                  <h4 className="font-headline text-xl text-[#FBFBE2] mb-2">Hours of Calm</h4>
                  <p className="text-[#D4C3BF]/80 text-sm leading-relaxed">
                    {locationInfo.hours.map((entry, i) => (
                      <span key={i}>
                        {entry.days}: {entry.hours}
                        {i < locationInfo.hours.length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <span className="material-symbols-outlined text-[#D4C3BF] text-3xl">share</span>
                <div>
                  <h4 className="font-headline text-xl text-[#FBFBE2] mb-2">Join the Circle</h4>
                  <div className="flex gap-4 mt-2">
                    {socialLinks.map((link) => (
                      <a
                        key={link.platform}
                        href={link.href}
                        aria-label={link.label}
                        className="w-10 h-10 rounded-[9999px] bg-white/5 border border-white/10 flex items-center justify-center text-[#FBFBE2] hover:bg-[#FBFBE2] hover:text-[#351F1B] transition-all"
                      >
                        <span className="material-symbols-outlined text-lg">{link.icon}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-surface-container-high rounded-[9999px] overflow-hidden border-[16px] border-[#3c2a26] shadow-2xl">
              <Image
                src={images.locationImage}
                alt="Perfect porcelain cup of latte with leaf latte art on dark marble cafe table"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-surface-container-low p-4 rounded-xl shadow-xl hidden lg:block border border-white/10">
              <div className="w-full h-full bg-white/5 grayscale opacity-50 flex items-center justify-center rounded-lg">
                <span className="material-symbols-outlined text-4xl text-[#D4C3BF]">map</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-black/20 to-transparent pointer-events-none" />
    </section>
  );
}
