import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import StorySection from "@/components/StorySection";
import MenuSection from "@/components/MenuSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";

export default function Home() {
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
