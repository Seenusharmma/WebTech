import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden bg-gradient-to-b from-black via-indigo-950 to-black text-white">
      {/* Floating Stars Background */}
      <div className="absolute inset-0 -z-10">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
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
      <div className="max-w-3xl px-6 z-10">
        {/* Heading */}
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_#a855f7]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to the <br /> Web Design Services
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="mt-6 text-lg md:text-xl text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          We design modern and responsive websites according to your branch and
          business needs.✨
        </motion.p>

        {/* Button */}
        <motion.button
          className="mt-10 px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold shadow-lg"
          whileHover={{
            scale: 1.1,
            boxShadow: "0 0 30px #9333ea, 0 0 50px #3b82f6",
          }}
          whileTap={{ scale: 0.9 }}
        >
          🚀 Assign Us!
        </motion.button>
      </div>

      {/* Floating Planet (decorative) */}
      <motion.div
        className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-gradient-to-r from-purple-600 to-indigo-700 shadow-[0_0_50px_#9333ea]"
        animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
    </section>
  );
}
