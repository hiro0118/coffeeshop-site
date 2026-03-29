import Image from "next/image";
import { menuItems, images } from "@/lib/db";

export default function MenuSection() {
  const regularItems = menuItems.filter((item) => !item.featured);
  const featuredItem = menuItems.find((item) => item.featured);

  return (
    <section className="py-32 bg-[#351F1B]" id="brew">
      <div id="menu" className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <span className="font-label text-[#D4C3BF] uppercase tracking-widest text-xs mb-4 block">
              The Alchemy
            </span>
            <h2 className="font-headline italic text-4xl md:text-6xl text-[#FBFBE2] leading-tight">
              A Refined Collection of Specialty Brews.
            </h2>
          </div>
          <div className="w-24 h-[1px] bg-white/10 mb-4 hidden md:block" />
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Sidebar: Featured Image + Quote */}
          <div className="md:col-span-1">
            <div className="sticky top-32">
              <Image
                src={images.menuFeatured}
                alt="Pour-over coffee being brewed with elegant steam rising"
                width={400}
                height={600}
                className="rounded-xl w-full h-[600px] object-cover shadow-lg"
              />
              <div className="mt-6 p-6 bg-surface-container-low rounded-xl border border-white/5">
                <p className="font-headline italic text-xl text-[#FBFBE2]">
                  &ldquo;The best coffee is the one that tastes like a memory.&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Bento Grid */}
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {regularItems.map((item, index) => (
              <div
                key={item.id}
                className={`p-8 rounded-xl flex flex-col justify-between hover:-translate-y-1 transition-transform border border-white/5 ${
                  index % 2 === 0 ? "bg-surface-container-low" : "bg-surface-container-high"
                }`}
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-headline text-2xl text-[#FBFBE2]">{item.name}</h3>
                    <span className="font-headline text-lg text-[#D4C3BF] ml-4 shrink-0">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-[#D4C3BF]/80 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>
                <span className="font-label text-[10px] uppercase tracking-widest text-[#D4C3BF]/50">
                  {item.tag}
                </span>
              </div>
            ))}

            {/* Featured Item: full-width */}
            {featuredItem && (
              <div className="md:col-span-2 bg-[#2b1613] p-8 rounded-xl text-[#FBFBE2] border border-white/5">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-1">
                    <h3 className="font-headline italic text-3xl mb-4 text-[#FBFBE2]">
                      {featuredItem.name}
                    </h3>
                    <p className="text-[#D4C3BF]/80 text-sm leading-relaxed mb-6">
                      {featuredItem.description}
                    </p>
                    <a
                      href={featuredItem.ctaHref ?? "#location"}
                      className="inline-block bg-[#FBFBE2] text-[#351F1B] px-8 py-3 rounded-[9999px] font-label text-[10px] uppercase tracking-widest hover:bg-white transition-colors"
                    >
                      {featuredItem.ctaLabel}
                    </a>
                  </div>
                  <div className="w-full md:w-48 h-32 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                    <span className="material-symbols-outlined text-4xl text-[#D4C3BF]">
                      liquor
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
