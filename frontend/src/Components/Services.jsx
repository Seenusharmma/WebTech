import { useState } from "react";
import { motion } from "framer-motion";
import { Brain, Laptop, Router, Smartphone, Stars, Telescope, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Services() {
  const [showFigma, setShowFigma] = useState(false);

  const services = [
    {
      id: "web-development",
      title: "Web Development",
      desc: "We craft fast, reliable, and user-friendly websites tailored to your business goals.",
      icon: <Laptop size={44} />,
      bgColor: "bg-blue-600",
      action: () => window.location.href = "/web-development",
    },
    {
      id: "app-development",
      title: "App Development",
      desc: "We develop interactive, feature-rich web and mobile applications for seamless user engagement.",
      icon: <Smartphone size={44} />,
      bgColor: "bg-green-600",
      action: () => window.location.href = "/app-development",
    },
    {
      id: "graphics-design",
      title: "Graphics Design",
      desc: "We produce captivating visuals and memorable brand identities that set you apart.",
      icon: <Telescope size={44} />,
      bgColor: "bg-yellow-500",
      action: () => window.location.href = "/graphics-design",
    },
    {
      id: "ui-ux",
      title: "UI/UX",
      desc: "We design intuitive and visually appealing interfaces for an exceptional user experience.",
      icon: <Stars size={44} />,
      bgColor: "bg-indigo-600",
      action: () => setShowFigma(true),
    },
    {
      id: "cloud-deployment",
      title: "Cloud & Deplment",
      desc: "Scalable cloud hosting and deployment solutions ensuring maximum uptime, security and global performance for your digital infrastructure.",
      icon: <Router size={44} />, 
      bgColor: "bg-indigo-600",
      action: () => setShowFigma(true),
    },
    {
      id: "ai-automation",
      title: "AI & Automation",
      desc: "Integrating AI and automation to enhance workflows, provide predictive insights, and create smarter user experiences.",
      icon: <Brain size={44} />,
      bgColor: "bg-indigo-600",
      action: () => setShowFigma(true),
    },
  ];

  return (
    <section className="relative py-20 bg-gray-900 text-white overflow-hidden"> 
      {/* Section Heading */}
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-14"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Services
      </motion.h2>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        {services.map((service, i) => (
          <motion.div
            key={service.id}
            onClick={service.action ? service.action : undefined}
            className={`p-8 rounded-2xl shadow-lg ${service.bgColor} text-white text-center cursor-pointer relative overflow-hidden`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.8 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
          >
            {/* Icon Animation */}
            <motion.div
              className="flex items-center justify-center mb-6"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              {service.icon}
            </motion.div>

            {/* Title */}
            <h3 className="text-xl sm:text-2xl font-bold mb-3">{service.title}</h3>
            
            {/* Description */}
            <p className="text-gray-100 text-sm sm:text-base leading-relaxed">{service.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Figma Modal */}
      {showFigma && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4">
          <div className="relative bg-gray-800 rounded-2xl p-6 w-full max-w-5xl shadow-2xl">
            <button
              onClick={() => setShowFigma(false)}
              className="absolute top-4 right-4 text-white hover:text-red-400"
            >
              <X size={28} />
            </button>

            <h3 className="text-2xl font-bold mb-4 text-center">UI/UX Design Preview</h3>

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
