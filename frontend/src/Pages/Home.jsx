import React from "react";

import Testimonials from "../Components/Testimonials";
import ContactBanner from "../Components/ContactBanner";
import TeamCarousel from "../Components/TeamCarousel";
import ServicesShowcase from "../Components/ServicesShowcase";

import Refers from "../Components/Refers";
import Metrics from "../Components/Metrics";
import FAQs from "../Components/FAQs";
import HeroSection from "../Components/HeroSection";

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <Refers/>
      <ContactBanner />
      <ServicesShowcase />
      <TeamCarousel />
      <Metrics/>
      <Testimonials />
      <FAQs/>

    </div>
  );
};

export default Home;

