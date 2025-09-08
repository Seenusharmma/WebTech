import { useState } from "react";
import { motion } from "framer-motion";
import { Laptop, Smartphone, Stars, Telescope, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Services() {
  const [showFigma, setShowFigma] = useState(false);

  const services = [
    {
  id: "web-development",
  title: "Web Development",
  desc: "We build fast, responsive, and user-friendly websites.",
  icon: <Laptop size={44} />,
  color: "from-purple-600 via-indigo-600 to-indigo-800",
  action: () => window.location.href = "/web-development",
},

    {
      id: "app-development",
      title: "App Development",
      desc: "We create interactive web and mobile applications.",
      icon: <Smartphone size={44} />,
      color: "from-pink-500 via-purple-500 to-indigo-600",
      action: () => window.location.href = "/app-development",
    },

    {
      id: "graphics-design",
      title: "Graphics Design",
      desc: "We create stunning visuals and brand identity.",
      icon: <Telescope size={44} />,
      color: "from-yellow-500 via-orange-500 to-red-500",
      action: () => window.location.href = "/graphics-design",
    },
    {
      id: "ui-ux",
      title: "UI/UX",
      desc: "We design beautiful and engaging interfaces.",
      icon: <Stars size={44} />,
      color: "from-blue-500 via-cyan-500 to-teal-500",
      action: () => (window.location.href = "/figma-designs"), // redirect
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-black via-indigo-950 to-black text-white overflow-hidden">
      {/* Section Heading */}
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-14 
        bg-gradient-to-r from-pink-500 via-purple-400 to-blue-500 
        bg-clip-text text-transparent drop-shadow-[0_0_25px_#a855f7]"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Services
      </motion.h2>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        {services.map((service, i) => (
          <div
            key={service.id}
            onClick={service.action ? service.action : undefined}
          >
            <motion.div
              className={`p-8 rounded-3xl shadow-xl bg-gradient-to-br ${service.color} 
              text-white text-center relative overflow-hidden group cursor-pointer`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              whileHover={{
                scale: 1.05,
                rotate: 1,
              }}
            >
              <motion.div
                className="flex items-center justify-center mb-6 text-white"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                {service.icon}
              </motion.div>

              <h3 className="text-xl sm:text-2xl font-bold mb-3 group-hover:scale-105 transition-transform duration-300">
                {service.title}
              </h3>
              <p className="text-gray-100 text-sm sm:text-base leading-relaxed">
                {service.desc}
              </p>

              <div className="absolute inset-0 rounded-3xl bg-white/10 opacity-0 group-hover:opacity-100 transition duration-500 blur-2xl"></div>
            </motion.div>
          </div>
        ))}
      </div>

      {/* 🔹 Figma Modal */}
      {showFigma && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4">
          <div className="relative bg-gray-900 rounded-2xl p-6 w-full max-w-5xl shadow-2xl">
            {/* Close button */}
            <button
              onClick={() => setShowFigma(false)}
              className="absolute top-4 right-4 text-white hover:text-pink-400"
            >
              <X size={28} />
            </button>

            <h3 className="text-2xl font-bold mb-4 text-center text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
              UI/UX Design Preview
            </h3>

            {/* Figma Embed */}
            <div className="aspect-video w-full rounded-xl overflow-hidden border border-gray-700 shadow-lg">
              <iframe
                className="w-full h-full"
                src="https://www.figma.com/community/file/1219312065205187851/full-e-commerce-website-ui-ux-design"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
