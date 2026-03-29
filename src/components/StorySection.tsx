import Image from "next/image";
import { images } from "@/lib/db";

export default function StorySection() {
  return (
    <section
      className="relative py-32 bg-[#351F1B] text-[#FBFBE2] overflow-hidden"
      id="story"
    >
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-12 gap-16 items-center">
        <div className="md:col-span-5 order-2 md:order-1">
          <span className="font-label text-[#D4C3BF] uppercase tracking-widest text-xs mb-4 block">
            The Transformation
          </span>
          <h2 className="font-headline italic text-4xl md:text-6xl mb-8 leading-tight">
            From Earth to <br />
            Essence.
          </h2>
          <p className="text-[#D4C3BF] font-body text-lg leading-relaxed mb-8 max-w-md">
            Every bean tells a story of the soil it left behind. We respect that
            narrative by mastering the alchemy of the grind, extracting the hidden
            notes of cherry, chocolate, and smoke that define our signature artisanal
            profile.
          </p>
          <button className="inline-flex items-center gap-3 text-[#D4C3BF] border-b border-[#D4C3BF]/30 pb-1 hover:border-[#FBFBE2] hover:text-[#FBFBE2] transition-all font-label uppercase tracking-wider text-xs">
            Learn Our Process{" "}
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>
        <div className="md:col-span-7 order-1 md:order-2">
          <div className="relative group">
            <div className="absolute -top-6 -left-6 w-full h-full border border-white/10 rounded-xl" />
            <Image
              src={images.storyImage}
              alt="Vintage hand-crank coffee grinder with ground coffee on dark wooden surface"
              width={800}
              height={500}
              className="rounded-xl shadow-2xl w-full h-[500px] object-cover relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
