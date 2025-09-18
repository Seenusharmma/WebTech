import React from "react";
import { motion } from "framer-motion";

const images = [
  {
    src: "https://i.ibb.co/YFQYKCPD/Screenshot-2025-09-07-085436.png",
    title: "E-Commerce",
    link: "https://www.snatchers.in",
  },
  {
    src: "https://i.ibb.co/CspKgfzL/Screenshot-2025-09-07-084332.png",
    title: "Construction Website",
    link: "https://construct-rose.vercel.app",
  },
  {
    src: "https://i.ibb.co/whPNYYXX/Screenshot-2025-09-07-094013.png",
    title: "General Marketplace",
    link: "https://www.cgumarketplace.com",
  },
  {
    src: "https://i.ibb.co/FqnddVff/Screenshot-2025-09-07-084241.png",
    title: "E-Commerce Website",
    link: "https://mycart-three.vercel.app",
  },
  {
    src: "./expense.png",
    title: "Expense Tracker",
    link: "https://mybudget-xi.vercel.app",
  },
  {
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdlYnNpdGVzfGVufDB8fDB8fHww",
    title: "6",
    link: "",
  },
];

const Gallery = () => {
  return (
    <section className="bg-gray-100 text-gray-800 py-20 px-5 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6 tracking-wide"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our Projects
        </motion.h2>

        <motion.p
          className="text-gray-500 text-lg md:text-xl mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.2 }}
        >
          Explore some of our recent works and projects that we are proud of by being part of it.
        </motion.p>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((item, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded-xl shadow-2xl cursor-pointer relative group"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 * index, duration: 0.8 }}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div
                className="absolute inset-0 bg-gray-900/60 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-opacity duration-500 space-y-3"
              >
                <p className="text-gray-100 text-2xl font-semibold">
                  {item.title}
                </p>

                {/* Galaxy Button */}
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-block px-6 py-2 rounded-lg text-white font-semibold text-lg overflow-hidden font-italiana text-[18px] leading-[28px]"
                >
                  <span className="absolute inset-0 bg-gradient-to-tr from-red-900/80 via-red-700/70 to-red-500/60 animate-gradient-x blur-xs"></span>
                  <span className="relative z-10">Visit Website</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;