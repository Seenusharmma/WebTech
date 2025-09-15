import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="w-full">
      {/* Top Background Section */}
      <div className="bg-[#0a1c2c] text-white text-center px-6 py-16 md:py-24 rounded-b-4xl">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug">
            Welcome to the <br /> WebUi 
          </h1>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-300">
            At WebUi, we design intuitive and engaging web app interfaces that put your users first. Our UI/UX services focus on creating seamless user journeys, clean layouts, and responsive designs that work flawlessly across all devices.
          </p>
          <Link to='/Contact'>
          <button className="mt-6 px-6 py-3 bg-red-600 hover:bg-red-700 transition rounded-lg text-white font-medium">
            Contact Us
          </button>
          </Link>
        </div>

        {/* Laptop & Mobile Image */}
        <div className="relative flex justify-center mt-12">
          <img
            src="/Website.svg"
            alt="POS Software"
            className="w-[90%] max-w-[900px] h-auto drop-shadow-xl"
          />
        </div>
      </div>

      {/* Bottom Content Section */}
      <div className="bg-white text-center px-3 py-9 ">
        {/* Tabs */}
        
        {/* Text */}
        
      </div>
    </section>
  );
};

export default HeroSection;
