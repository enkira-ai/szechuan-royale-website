import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import SignatureDishes from "./components/SignatureDishes";
import PhotoMenuGallery from "./components/PhotoMenuGallery";
import Gallery from "./components/Gallery";
import OnlineOrderingBanner from "./components/OnlineOrderingBanner";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
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
        <SignatureDishes />
        <PhotoMenuGallery />
        <Gallery />
        <OnlineOrderingBanner />
        <Testimonials />
        <About />
        <LocationHours />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
