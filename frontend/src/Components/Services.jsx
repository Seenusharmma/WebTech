import { useState } from "react";
import { motion } from "framer-motion";
import {
  Brain,
  Laptop,
  Router,
  Smartphone,
  Stars,
  Telescope,
  X,
} from "lucide-react";

export default function Services() {
  const [showFigma, setShowFigma] = useState(false);

  const services = [
    {
      id: "web-development",
      title: "Web Development",
      desc: "We craft fast, reliable, and user-friendly websites tailored to your business goals.",
      icon: <Laptop size={44} className="text-blue-600" />,
      action: () => (window.location.href = "/web-development"),
    },
    {
      id: "app-development",
      title: "App Development",
      desc: "We develop interactive, feature-rich web and mobile applications for seamless user engagement.",
      icon: <Smartphone size={44} className="text-green-600" />,
      action: () => (window.location.href = "/app-development"),
    },
    {
      id: "graphics-design",
      title: "Graphics Design",
      desc: "We produce captivating visuals and memorable brand identities that set you apart.",
      icon: <Telescope size={44} className="text-purple-600" />,
      action: () => (window.location.href = "/graphics-design"),
    },
    {
      id: "ui-ux",
      title: "UI/UX",
      desc: "We design intuitive and visually appealing interfaces for an exceptional user experience.",
      icon: <Stars size={44} className="text-pink-600" />,
      action: () => setShowFigma(true),
    },
    {
      id: "cloud-deployment",
      title: "Cloud & Deployment",
      desc: "Scalable cloud hosting and deployment solutions ensuring uptime, security and performance.",
      icon: <Router size={44} className="text-cyan-600" />,
      action: () => setShowFigma(true),
    },
    {
      id: "ai-automation",
      title: "AI & Automation",
      desc: "Integrating AI & automation to enhance workflows, predict insights, and create smarter solutions.",
      icon: <Brain size={44} className="text-orange-600" />,
      action: () => setShowFigma(true),
    },
  ];

  return (
    <section className="relative py-20 bg-white text-gray-900">
      {/* Section Heading */}
      <motion.h2
        className="text-4xl sm:text-5xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Services
      </motion.h2>

      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 text-lg">
        At WebUI, we provide end-to-end digital solutions designed to help your
        business grow, scale, and succeed in today’s digital world.
      </p>

      {/* Image */}
      <div className="max-w-5xl mx-auto mb-16 px-6">
        <img
          src="OUR SERVICES.jpg"
          alt="Our Services"
          className="w-full rounded-xl shadow-md object-cover"
        />
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
        {services.map((service, i) => (
          <motion.div
            key={service.id}
            onClick={service.action ? service.action : undefined}
            className="p-8 rounded-xl shadow-lg border border-gray-200 bg-white text-center hover:shadow-xl transition cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.7 }}
            whileHover={{ scale: 1.03 }}
          >
            {/* Icon */}
            <div className="flex items-center justify-center mb-6">
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold mb-3">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Figma Modal */}
      {showFigma && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <motion.div
            className="relative bg-gray-200 rounded-2xl p-6 w-full max-w-5xl shadow-2xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <button
              onClick={() => setShowFigma(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-red-500"
            >
              <X size={28} />
            </button>

            <h3 className="text-2xl font-bold mb-4 text-center text-gray-800">
              UI/UX Design Preview
            </h3>

            <div className="aspect-video w-full rounded-lg overflow-hidden border border-gray-300 shadow-md">
              <iframe
                className="w-full h-full"
                src="https://www.figma.com/community/file/1219312065205187851/full-e-commerce-website-ui-ux-design"
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}