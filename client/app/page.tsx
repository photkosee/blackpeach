import HeroSection from "./components/HeroSection";
import NewSection from "./components/NewSection";
import CollectionSection from "./components/CollectionSection";
import BestSection from "./components/BestSection";
import ShopSection from "./components/ShopSection";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <HeroSection />
      <NewSection />
      <CollectionSection />
      <BestSection />
      <ShopSection />
    </main>
  );
}
