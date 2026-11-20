
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Hero from "./components/home/Hero";
import Features from "./components/home/Features";
import Benefits from "./components/home/Benefits";
import HowItWorks from "./components/home/HowItWorks";
import CTA from "./components/home/CTA";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Features />
        <Benefits />
        <HowItWorks />
        <CTA />
      </main>

      <Footer />
    </>
  );
}