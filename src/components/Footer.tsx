import { shopInfo } from "@/lib/db";

export default function Footer() {
  return (
    <footer className="bg-[#2b1613] w-full py-12 border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-center px-12 gap-8 text-center md:text-left max-w-7xl mx-auto">
        <div className="text-lg font-headline italic text-[#FBFBE2]">{shopInfo.name}</div>
        <div className="flex flex-wrap justify-center gap-8 font-label text-xs uppercase tracking-widest text-[#D4C3BF]">
          <a href="#" className="hover:text-white transition-colors duration-200">
            Instagram
          </a>
          <a href="#" className="hover:text-white transition-colors duration-200">
            Facebook
          </a>
          <a href="#" className="hover:text-white transition-colors duration-200">
            Directions
          </a>
          <a href="#" className="hover:text-white transition-colors duration-200">
            Privacy
          </a>
        </div>
        <div className="font-label text-xs uppercase tracking-widest text-[#D4C3BF]">
          © {shopInfo.foundedYear} {shopInfo.name}. The Modern Alchemist.
        </div>
      </div>
    </footer>
  );
}
