import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section className="bg-gray-900 text-white  py-5 px-5 md:px-20 rounded-xl">
      <div className="max-w-6xl mx-auto text-center">
        {/* Features Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Innovation",
              desc: "We deliver inventive, future-ready solutions that give every project a creativeedge.",
            },
            {
              title: "Expertise",
              desc: "Our diverse team brings deep technical know-how and versatile experienceto each challenge.",
            },
            {
              title: "Commitment",
              desc: "Client success is at the heart of everything—we guarantee quality, reliability, and outstanding service every time.",
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