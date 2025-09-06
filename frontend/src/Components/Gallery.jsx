import React from "react";
import { motion } from "framer-motion";

const images = [
  {
    src: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2Vic2l0ZXN8ZW58MHx8MHx8fDA%3D",
    title: "1",
    link: "",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1721922203081-4b1bbf3f9265?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdlYnNpdGVzfGVufDB8fDB8fHww",
    title: "2",
    link: "",
  },
  {
    src: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z2FsYXh5fGVufDB8fDB8fHww",
    title: "3",
    link: "",
  },
  {
    src: "https://media.istockphoto.com/id/2092028381/photo/ai-image-creation-technology-man-use-ai-software-on-a-laptop-to-generate-images-showcasing-a.webp?a=1&b=1&s=612x612&w=0&k=20&c=1aoPeThJIYG5ueX3di0rbNq3Dh1l3vipraPtXGh2OtE=",
    title: "4",
    link: "",
  },
  {
    src: "https://images.unsplash.com/photo-1522124624696-7ea32eb9592c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGdhbGF4eXxlbnwwfHwwfHx8MA%3D%3D",
    title: "5",
    link: "",
  },
  {
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdlYnNpdGVzfGVufDB8fDB8fHww",
    title: "6",
    link: "",
  },
];

const Gallery = () => {
  return (
    <section className="bg-gray-900 text-white py-20 px-5 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6 tracking-wide"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our Gallery
        </motion.h2>

        <motion.p
          className="text-gray-400 text-lg md:text-xl mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.2 }}
        >
          Explore some of our recent work and projects that we are proud of.
        </motion.p>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((item, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded-xl shadow-lg cursor-pointer relative group"
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
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-opacity duration-500 space-y-3">
                <p className="text-white text-lg font-semibold">{item.title}</p>
                
                {/* Galaxy Button */}
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-block px-6 py-2 rounded-lg text-white font-semibold text-lg overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 animate-gradient-x blur-lg opacity-70"></span>
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
