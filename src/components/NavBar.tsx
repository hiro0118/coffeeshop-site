"use client";

import { useEffect, useState } from "react";
import { shopInfo } from "@/lib/db";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 border-b border-white/5 transition-all duration-300 ${
        scrolled ? "bg-[#351F1B]/95 backdrop-blur-xl" : "bg-[#351F1B]/90 backdrop-blur-xl"
      }`}
    >
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <a href="#" className="text-2xl font-headline italic text-[#FBFBE2] tracking-tighter">
          {shopInfo.name}
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#story"
            className="text-[#D4C3BF] font-medium hover:text-[#FBFBE2] transition-colors duration-300"
          >
            Our Story
          </a>
          <a
            href="#brew"
            className="text-[#D4C3BF] font-medium hover:text-[#FBFBE2] transition-colors duration-300"
          >
            The Brew
          </a>
          <a
            href="#menu"
            className="text-[#D4C3BF] font-medium hover:text-[#FBFBE2] transition-colors duration-300"
          >
            Menu
          </a>
          <a
            href="#location"
            className="text-[#D4C3BF] font-medium hover:text-[#FBFBE2] transition-colors duration-300"
          >
            Location
          </a>
        </div>
        <button className="bg-[#FBFBE2] text-[#351F1B] px-6 py-2 rounded-xl font-label text-xs uppercase tracking-widest hover:opacity-90 active:scale-95 transition-all">
          Order Now
        </button>
      </div>
    </nav>
  );
}
