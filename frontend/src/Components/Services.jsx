import { motion } from "framer-motion";
import { Laptop, Smartphone , Stars, Telescope } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Web Deveploment",
      desc: "Web Development is the process of designing, building, and maintaining websites that are fast, responsive, and user-friendly.",
      icon: <Laptop size={40}/>,
      color: "from-purple-600 to-indigo-600",
    },
    {
      title: "App Development",
      desc: "App development for a website is the process of creating interactive web applications that let users perform tasks online.",
      icon: <Smartphone size={40}/>,
      color: "from-pink-500 to-purple-500",
    },
    {
      title: "UI/UX",
      desc: "UI/UX in web app development refers to designing the User Interface (UI) and User Experience (UX) to make a website/app easy, attractive, and enjoyable to use.",
      icon: <Stars size={40} />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Graphics Designs",
      desc: "Graphics design in web app development refers to creating visual elements that make a website or app appealing, engaging, and easy to understand.",
      icon: <Telescope size={40} />,
      color: "from-yellow-500 to-orange-500",
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-black via-indigo-950 to-black text-white overflow-hidden">
      {/* Stars Background */}
      <div className="absolute inset-0 -z-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1  rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
            }}
            animate={{
              opacity: [0, 1, 0],
              y: "+=15",
            }}
            transition={{
              duration: Math.random() * 4 + 2,
              repeat: Infinity,
              repeatType: "mirror",
            }}
          />
        ))}
      </div>

      {/* Section Title */}
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-pink-500 via-purple-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_#a855f7]"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Services
      </motion.h2>

      {/* Service Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-6">
        {services.map((service, i) => (
          <motion.div
            key={i}
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
            {/* Floating Icon */}
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
        ))}
      </div>
    </section>
  );
}
