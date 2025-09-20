import React from "react";
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative bg-gray-900 text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-20 rounded-b-[3rem]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
        
        {/* Left: Video */}
        <div className="flex justify-center">
          <video
            src="/hero.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="rounded-2xl shadow-lg w-full max-w-[500px] object-cover"
          />
        </div>

        {/* Right: Text */}
        <div className="text-center md:text-left mt-10 md:mt-0">
          {/* Animated Heading */}
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About Us
          </motion.h2>

          {/* Animated Subheading */}
          <motion.p
            className="text-gray-300 text-base sm:text-lg md:text-xl mb-8 md:mb-12 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            WebUi transforms business visions into powerful digital experiences. 
            Founded by passionate developers who understand the startup journey, 
            we specialize in creating responsive, high-performance websites using 
            modern technologies like <span className="text-indigo-400 font-semibold">React, Next.js,</span> 
            and <span className="text-indigo-400 font-semibold">Tailwind CSS</span>.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 sm:px-8 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-xl font-semibold transition text-sm sm:text-base"
          >
            Learn More
          </motion.button>
        </div>
      </div>
    </section>
  );
}
