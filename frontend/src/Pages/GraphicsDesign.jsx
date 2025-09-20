// src/pages/GraphicsDesign.jsx this the link routing @Neha
import { motion } from "framer-motion";
import { Telescope } from "lucide-react";
import { Link } from "react-router-dom";

export default function GraphicsDesign() {
  const designs = [
    {
      id: 1,
      title: "Brand Logo",
      desc: "Clean, minimal, and memorable brand identity logos.",
      image:
        "https://cdn.dribbble.com/userupload/12250163/file/original-03faeb436d5f6e2a7b90aa1a71f3a8b6.png", // Logo design
    },
    {
      id: 2,
      title: "Creative Poster",
      desc: "Eye-catching posters for events, campaigns, and marketing.",
      image:
        "https://cdn.dribbble.com/userupload/12250876/file/original-76dd0a9fefefbcb9c5a672f3cf3c9f0f.png", // Poster
    },
    {
      id: 3,
      title: "Social Media Kit",
      desc: "Modern social media post & banner design for businesses.",
      image:
        "https://cdn.dribbble.com/userupload/12114493/file/original-2a7f78f2f67b4db1f2c8e912a2f5e548.png", // Social media kit
    },
    {
      id: 4,
      title: "Business Card",
      desc: "Professional business card designs to leave a strong impression.",
      image:
        "https://cdn.dribbble.com/userupload/12095461/file/original-3f5e84e6e3a1b7e6.png", // Business card
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-indigo-950 to-black text-white py-16 px-6 mt-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-16 
          bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 
          bg-clip-text text-transparent drop-shadow-[0_0_25px_#facc15]"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Graphics Design Showcase
        </motion.h2>

        {/* Icon & intro */}
        <div className="flex flex-col items-center text-center mb-14">
          <Telescope size={56} className="mb-4 text-yellow-400" />
          <p className="text-lg text-gray-300 max-w-2xl">
            We create stunning visuals and branding materials to give your
            business a unique identity. From logos to social media kits, we bring
            creativity to life with our design expertise.
          </p>
        </div>

        {/* Grid of graphic designs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {designs.map((item, i) => (
            <motion.div
              key={item.id}
              className="rounded-xl overflow-hidden border border-gray-700 shadow-xl bg-gray-900 hover:scale-[1.03] transition-transform"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Back button */}
        <div className="text-center mt-16">
          <Link
            to="/"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 
            hover:opacity-90 transition font-semibold shadow-lg"
          >
            ⬅ Back to Services
          </Link>
        </div>
      </div>
    </section>
  );
}
