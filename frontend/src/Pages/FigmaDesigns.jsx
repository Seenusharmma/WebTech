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
    <section className="min-h-screen bg-white text-gray-900 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16"
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
              className="rounded-2xl overflow-hidden border border-gray-200 shadow-md bg-white group hover:shadow-xl transition-shadow"
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
              <h3 className="text-lg font-semibold text-center py-4 text-gray-700 group-hover:text-gray-900 transition-colors">
                {design.title}
              </h3>

              {/* View Button */}
              <div className="flex justify-center pb-6">
                <a
                  href={design.embed}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 rounded-lg bg-black text-white font-medium shadow hover:bg-gray-800 transition"
                >
                  View on Figma
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Back button */}
        <div className="text-center mt-16">
          <Link
            to="/"
            className="px-6 py-3 rounded-lg bg-black text-white font-semibold shadow hover:bg-gray-800 transition"
          >
            ⬅ Back to Services
          </Link>
        </div>
      </div>
    </section>
  );
}
