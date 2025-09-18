import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="w-full">
      {/* Top Background Section */}
      <div className="bg-[#0a1c2c] text-white text-center px-4 sm:px-6 py-12 sm:py-16 md:py-24 rounded-b-3xl">
        {/* Main Content */}
        <motion.div
          className="max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto px-2"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.h1
            className="text-xl sm:text-3xl md:text-4xl lg:text-5xl  text-[60px]  text-gray-100"
            transition={{ duration: 0.3 }}
          >
            Welcome to <br /> WebUi
          </motion.h1>

          <motion.p
            className="mt-4 text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 px-2 sm:px-4"
            transition={{ duration: 0.3 }}
          >
            We design <strong>intuitive, conversion-focused web experiences</strong> that your
            users will love to navigate. By blending data-driven UX strategy with pixel-perfect
            UI design, we build interfaces that reduce bounce rates, drive engagement, and turn
            visitors into loyal customers.
          </motion.p>

          <Link to="/Contact">
            <motion.button
              className="mt-6 px-5 sm:px-6 py-2.5 sm:py-3 bg-red-600 rounded-lg text-sm sm:text-base text-white font-medium shadow-md"
              whileHover={{
                scale: 1.1,
                backgroundColor: "#b91c1c",
                boxShadow: "0px 8px 20px rgba(0,0,0,0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Contact Us
            </motion.button>
          </Link>
        </motion.div>

        {/* Laptop & Mobile Image */}
        <motion.div
          className="relative flex justify-center mt-8 sm:mt-12"
          whileHover={{ scale: 1.05, y: -10 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <motion.img
            src="/Website.svg"
            alt="POS Software"
            className="w-[95%] sm:w-[85%] md:w-[75%] max-w-[900px] h-auto drop-shadow-xl"
            whileHover={{ rotate: 2, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
        </motion.div>
      </div>

      {/* Bottom Content Section */}
      <div className="bg-white text-center px-3 py-9">
        {/* Future Tabs / Content */}
      </div>
    </section>
  );
};

export default HeroSection;
