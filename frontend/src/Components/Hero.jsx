import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative min-h-96  h-[37rem] flex items-center justify-center text-center overflow-hidden  bg-gray-900 text-white px-4 py-12 sm:py-20">
      {/* Floating Stars Background */}
      <div className="absolute mb-[500px] inset-0">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white"
            initial={{
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
              opacity: 0,
            }}
            animate={{
              opacity: [0, 1, 0],
              y: "+=20",
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              repeatType: "mirror",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="max-w-3xl px-2 sm:px-6 z-10">
        {/* Heading */}
        <motion.h1
          className="text-3xl sm:text-5xl md:text-7xl font-lg text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to the <br /> Web-Design <br /> Services
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          We design modern and responsive websites according to your branch and{" "}
          <br />
          business needs.
        </motion.p>

        <button
          onClick={() => navigate("/contact")}
          className="bg-red-700 hover:bg-red-800 text-white font-lg px-2 py-2 mt-4 rounded-lg transition z-15"
        >
          <Link to={"/contact"}>CONTACT US</Link>
        </button>
      </div>
    </section>
  );
}