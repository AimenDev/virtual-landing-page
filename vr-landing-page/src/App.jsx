import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Workflow from "./components/Workflow";
import scrollreveal from "scrollreveal";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "top",
      distance: "90px",
      duration: 1000,
      reset: true,
    });
    sr.reveal(
      `
        
        #hero,
      #features,
        #video,
        #workflow,
        #pricing,
        #testimonials,
        footer
        `,
      {
        opacity: 0,
        interval: 300,
      }
    );
  }, []);
  return (
    <div className="bg-gradient-to-r from-zinc-900 to-zinc-800 z-20 ">
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection />
        <Workflow />
        <Pricing />
        <Testimonials />
        <Footer />
      </div>
    </div>
  );
}

export default App;
