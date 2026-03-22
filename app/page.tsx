import Navigation from "./components/Navigation";
import FloatingOrderButton from "./components/FloatingOrderButton";
import Hero from "./components/Hero";
import MenuHighlights from "./components/MenuHighlights";
import OnlineOrderingBanner from "./components/OnlineOrderingBanner";
import About from "./components/About";
import Gallery from "./components/Gallery";
import LocationHours from "./components/LocationHours";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import JsonLd from "./components/JsonLd";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Navigation />
      <main>
        <Hero />
        <MenuHighlights />
        <Gallery />
        <OnlineOrderingBanner />
        <About />
        <LocationHours />
        <Contact />
      </main>
      <Footer />
      <FloatingOrderButton />
    </>
  );
}
