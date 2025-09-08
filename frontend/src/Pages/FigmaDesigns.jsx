// src/pages/FigmaDesigns.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function FigmaDesigns() {
  const figmaLinks = [
    {
      id: 1,
      title: "E-Commerce UI Kit",
      embed: "https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/community/file/1219312065205187851/full-e-commerce-website-ui-ux-design",
    },
    {
      id: 2,
      title: "Mobile Banking App",
      embed: "https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/community/file/1217446658227734370/mobile-banking-app-ui-kit",
    },
    {
      id: 3,
      title: "Portfolio Website",
      embed: "https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/community/file/1218957105631199810/portfolio-website-template",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-indigo-950 to-black text-white py-16 px-6 mt-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-16 
          bg-gradient-to-r from-pink-500 via-purple-400 to-blue-500 
          bg-clip-text text-transparent drop-shadow-[0_0_25px_#a855f7]"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          UI/UX Figma Designs
        </motion.h2>

        {/* Figma design cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {figmaLinks.map((design, i) => (
            <motion.div
              key={design.id}
              className="rounded-xl overflow-hidden border border-gray-700 shadow-xl bg-gray-900 hover:scale-[1.02] transition-transform"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
            >
              <div className="aspect-video w-full">
                <iframe
                  className="w-full h-full"
                  src={design.embed}
                  allowFullScreen
                />
              </div>
              <h3 className="text-lg font-semibold text-center py-3 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
                {design.title}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Back button */}
        <div className="text-center mt-16">
          <Link
            to="/"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600 
            hover:opacity-90 transition font-semibold shadow-lg"
          >
            ⬅ Back to Services
          </Link>
        </div>
      </div>
    </section>
  );
}
