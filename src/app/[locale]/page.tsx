import { setRequestLocale } from "next-intl/server";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import StorySection from "@/components/StorySection";
import MenuSection from "@/components/MenuSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
import BeanAnimation from "@/components/BeanAnimation";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <NavBar />
      <main>
        <div className="relative">
          <Hero />
          <StorySection />
          <BeanAnimation />
        </div>
        <MenuSection />
        <LocationSection />
      </main>
      <Footer />
    </>
  );
}
