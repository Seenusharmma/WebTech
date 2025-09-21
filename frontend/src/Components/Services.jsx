import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Laptop, Smartphone, Stars, Telescope, Router, Brain } from "lucide-react";
import { motion } from "framer-motion";

export default function Services() {
  const navigate = useNavigate();
  const [showFigma, setShowFigma] = useState(false);

  const services = [
    {
      id: "web-development",
      title: "Web Development",
      desc: "We craft fast, reliable, and user-friendly websites tailored to your business goals.",
      icon: <Laptop size={44} className="text-black" />,
      path: "/web-development",
    },
    {
      id: "app-development",
      title: "App Development",
      desc: "We develop interactive, feature-rich web and mobile applications for seamless user engagement.",
      icon: <Smartphone size={44} className="text-black" />,
      path: "/app-development",
    },
    {
      id: "graphics-design",
      title: "Graphics Design",
      desc: "We produce captivating visuals and memorable brand identities that set you apart.",
      icon: <Telescope size={44} className="text-black" />,
      path: "/graphics-design",
    },
    {
      id: "ui-ux",
      title: "UI/UX",
      desc: "We design intuitive and visually appealing interfaces for an exceptional user experience.",
      icon: <Stars size={44} className="text-black" />,
      path: "/figma-designs",
    },
    {
      id: "cloud-deployment",
      title: "Cloud & Deployment",
      desc: "Scalable cloud hosting and deployment solutions ensuring uptime, security and performance.",
      icon: <Router size={44} className="text-black" />,
      path: "/cloud-deployment",
    },
    {
      id: "ai-automation",
      title: "AI & Automation",
      desc: "Integrating AI & automation to enhance workflows, predict insights, and create smarter solutions.",
      icon: <Brain size={44} className="text-black" />,
      path: "/ai-automation",
    },
  ];

  return (
    <section className="min-h-screen bg-white text-gray-900 py-16 px-6 mt-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16">
          Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              className="rounded-2xl border border-gray-200 shadow-md p-6 cursor-pointer hover:shadow-xl transition"
              whileHover={{ scale: 1.03 }}
              onClick={() => navigate(service.path)}
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-center mb-2">{service.title}</h3>
              <p className="text-gray-700 text-center">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
