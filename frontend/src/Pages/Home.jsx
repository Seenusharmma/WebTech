import React from "react";
import Hero from "../Components/Hero";
import Testimonials from "../Components/Testimonials";
import ContactBanner from "../Components/ContactBanner";
import TeamCarousel from "../Components/TeamCarousel";
import ServicesShowcase from "../Components/ServicesShowcase";
import ImageOverlap from "../Components/ImageOverlap";
import Refers from "../Components/Refers";
import Metrics from "../Components/Metrics";
import FAQs from "../Components/FAQs";

const Home = () => {
  return (
    <div>
      <Hero />
      <ImageOverlap/> 
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