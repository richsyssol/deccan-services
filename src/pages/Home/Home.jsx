import React from "react";
import HeroSection from "./HeroSection";
import AboutUs from "./AboutUs";
import Services from "./Services";
import WhyChooseUsPage from "./WhyChoose";

function Home() {
  return (
    <div>
      <HeroSection />
      <AboutUs />
      <Services />
      <WhyChooseUsPage />
    </div>
  );
}

export default Home;
