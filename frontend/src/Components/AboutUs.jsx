import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section className="bg-gradient-to-b from-black via-indigo-950 to-black text-white  py-20 px-5 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
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
          We are a passionate team dedicated to delivering top-notch digital solutions. 
          Our mission is to transform ideas into engaging experiences that captivate users.
        </motion.p>

        {/* Features Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Innovation",
              desc: "We bring creative and modern solutions to every project.",
            },
            {
              title: "Expertise",
              desc: "Our team has extensive experience across multiple domains.",
            },
            {
              title: "Commitment",
              desc: "We prioritize client satisfaction and high-quality delivery.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 * index, duration: 0.8 }}
            >
              <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-400">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
