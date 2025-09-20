import React from "react";
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative bg-gray-900 text-white py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left: Video */}
        <div className="flex justify-center">
          <video
            src="/hero.mp4" 
            autoPlay
            muted
            loop
            playsInline
            className="rounded-2xl shadow-lg w-full mt-10 md:w-10/1 object-cover"
          />
        </div>

        {/* Right: Text */}
        <div className="mt-16">
           {/* Animated Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6 "
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Us
        </motion.h2>

        {/* Animated Subheading */}
        <motion.p
          className="text-gray-300 text-lg md:text-xl mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.2 }}
        >
          WebUi transforms business visions into powerful digital experiences. Founded by passionate developers who understand the startup journey, wespecialize in creating responsive, high-performance websites using moderntechnologies like React, Next.js, and Tailwind CSS.
        </motion.p>
          <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-xl font-semibold transition">
            Learn More
          </button>
        </div>
      </div>
      
    </section>
  );
}