// src/pages/AppDevelopment.jsx ----- This the routing pages @Neha
import { motion } from "framer-motion";
import { Smartphone } from "lucide-react";
import { Link } from "react-router-dom";

export default function AppDevelopment() {
  const apps = [
    {
      id: 1,
      title: "E-Commerce Mobile App",
      desc: "A fast, secure, and intuitive mobile shopping experience.",
      image:
        "https://cdn.dribbble.com/userupload/10034993/file/original-8abaf94a7b6f663d2d14c0f0e46a12b1.png", // Dribbble sample
    },
    {
      id: 2,
      title: "Banking & Finance App",
      desc: "Smart, simple, and secure digital banking on the go.",
      image:
        "https://cdn.dribbble.com/userupload/11049772/file/original-8a3dd6f1e933dc13.png", // Dribbble sample
    },
    {
      id: 3,
      title: "Healthcare & Fitness App",
      desc: "Track health, fitness, and wellness with an engaging UI.",
      image:
        "https://cdn.dribbble.com/userupload/10718846/file/original-009a2ab9c9c2cf38.png", // Dribbble sample
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
          Mobile App Development
        </motion.h2>

        {/* Icon & intro */}
        <div className="flex flex-col items-center text-center mb-14">
          <Smartphone size={56} className="mb-4 text-pink-500" />
          <p className="text-lg text-gray-300 max-w-2xl">
            We craft modern, high-performing mobile applications for iOS and
            Android. Our apps are built with clean UI, smooth UX, and powerful
            functionality to keep your users engaged.
          </p>
        </div>

        {/* Mobile app showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {apps.map((app, i) => (
            <motion.div
              key={app.id}
              className="rounded-xl overflow-hidden border border-gray-700 shadow-xl bg-gray-900 hover:scale-[1.03] transition-transform"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
            >
              <img
                src={app.image}
                alt={app.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                  {app.title}
                </h3>
                <p className="text-gray-300 text-sm">{app.desc}</p>
              </div>
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
