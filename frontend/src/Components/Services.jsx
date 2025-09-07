import { motion } from "framer-motion";
import { Laptop, Smartphone, Stars, Telescope } from "lucide-react";
import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    {
      id: "web-development",
      title: "Web Development",
      desc: "We build fast, responsive, and user-friendly websites.",
      icon: <Laptop size={40} />,
      color: "from-purple-600 to-indigo-600",
    },
    {
      id: "app-development",
      title: "App Development",
      desc: "We create interactive web and mobile applications.",
      icon: <Smartphone size={40} />,
      color: "from-pink-500 to-purple-500",
    },
    {
      id: "ui-ux",
      title: "UI/UX",
      desc: "We design beautiful and engaging interfaces.",
      icon: <Stars size={40} />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: "graphics-design",
      title: "Graphics Design",
      desc: "We create stunning visuals and brand identity.",
      icon: <Telescope size={40} />,
      color: "from-yellow-500 to-orange-500",
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-black via-indigo-950 to-black text-white overflow-hidden">
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-pink-500 via-purple-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_#a855f7]"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Services
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-6">
        {services.map((service, i) => (
          <Link key={service.id} to={`/services/${service.id}`}>
            <motion.div
              className={`p-8 rounded-2xl shadow-lg bg-gradient-to-br ${service.color} text-white text-center relative overflow-hidden`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              whileHover={{
                scale: 1.08,
                boxShadow: "0 0 30px rgba(168,85,247,0.8)",
                rotate: 2,
              }}
            >
              <motion.div
                className="flex items-center justify-center mb-6 text-white"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                {service.icon}
              </motion.div>
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-200">{service.desc}</p>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}
