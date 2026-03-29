import { setRequestLocale } from "next-intl/server";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import StorySection from "@/components/StorySection";
import MenuSection from "@/components/MenuSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";

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
        <Hero />
        <StorySection />
        <MenuSection />
        <LocationSection />
      </main>
      <Footer />
    </>
  );
}
