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
      {/* Bottom Content Section */}
<div className="bg-white text-center px-4 sm:px-6 py-12">
  <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-8">
    Our Technology Services
  </h2>

  <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto">
    {/* Tab 1 */}
    <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
      <h3 className="text-lg font-semibold text-[#0a1c2c] mb-3">UI/UX Design</h3>
      <p className="text-sm text-gray-600">
        Creating elegant, user-centric designs that align brand identity with 
        seamless usability across web and mobile platforms.
      </p>
    </div>

    {/* Tab 2 */}
    <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
      <h3 className="text-lg font-semibold text-[#0a1c2c] mb-3">Web Development</h3>
      <p className="text-sm text-gray-600">
        Delivering high-performing websites with modern stacks like 
        React, Next.js, and Tailwind — optimized for speed and scalability.
      </p>
    </div>

    {/* Tab 3 */}
    <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
      <h3 className="text-lg font-semibold text-[#0a1c2c] mb-3">App Development</h3>
      <p className="text-sm text-gray-600">
        Building robust mobile applications that connect businesses 
        with users through intuitive and reliable digital products.
      </p>
    </div>

    {/* Tab 4 */}
    <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
      <h3 className="text-lg font-semibold text-[#0a1c2c] mb-3">Testing & QA</h3>
      <p className="text-sm text-gray-600">
        Ensuring performance, security, and flawless user journeys 
        through rigorous manual and automated testing processes.
      </p>
    </div>

    {/* Tab 5 */}
    <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
      <h3 className="text-lg font-semibold text-[#0a1c2c] mb-3">AI & Automation</h3>
      <p className="text-sm text-gray-600">
        Leveraging Artificial Intelligence and automation to drive smarter 
        workflows, predictive insights, and innovative user experiences.
      </p>
    </div>

    {/* Tab 6 */}
    <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
      <h3 className="text-lg font-semibold text-[#0a1c2c] mb-3">Cloud & Deployment</h3>
      <p className="text-sm text-gray-600">
        Scalable hosting and cloud-native deployment strategies 
        that ensure uptime, speed, and secure digital infrastructure.
      </p>
    </div>
  </div>

  <p className="mt-10 text-sm text-gray-500 italic max-w-2xl mx-auto">
    “From design to deployment — we engineer the future of digital experiences.”
  </p>
</div>

    </section>
  );
};

export default HeroSection;
