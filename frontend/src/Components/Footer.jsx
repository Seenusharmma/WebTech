import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const socialLinks = [
    { icon: <FaFacebookF />, url: "https://www.facebook.com/people/WebUi/61580214405199/" },
    { icon: <FaTwitter />, url: "https://x.com/WebuiStudio" },
    { icon: <FaInstagram />, url: "https://www.instagram.com/webui.build/" },
    { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/roshan-sharma70/" }, // In feture when we gonna start hiring for our bulding team then that time we create a fresh one Linkdin Profile
  ];

  return (
    <footer className="relative bg-gradient-to-b from-black via-indigo-950 to-black text-white  overflow-hidden">
      {/* Floating Stars */}
      <div className="absolute inset-0 -z-10">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white/70"
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
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              repeatType: "mirror",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        {/* Logo + Tagline */}
        <div className="text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_12px_#9333ea]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            WebUi
          </motion.h2>
          <motion.p
            className="mt-4 text-gray-300 text-base md:text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            We craft modern, scalable and user-friendly websites and mobile
            apps to power your business growth.
          </motion.p>
        </div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center flex-wrap gap-4 mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {socialLinks.map((link, i) => (
            <motion.a
              key={i}
              href={link.url}
              className="w-11 h-11 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg text-white text-lg md:text-xl"
              whileHover={{
                scale: 1.15,
                boxShadow: "0 0 25px #a855f7",
                rotate: 8,
              }}
              whileTap={{ scale: 0.9 }}
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Links */}
        <motion.ul
          className="flex flex-wrap justify-center gap-4 md:gap-8 mt-10 text-gray-400 text-sm md:text-base"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          {/* {["Home", "About Us", "Services", "Projects", "Reviews", "Contact"].map(
            (item, i) => (
              <motion.li
                key={i}
                className="cursor-pointer hover:text-purple-400 transition"
                whileHover={{ scale: 1.1 }}
              >
                {item}
              </motion.li>
            )
          )} */}
        </motion.ul>

        {/* Bottom Text */}
        <motion.div
          className="mt-10 text-center text-xs md:text-sm text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          © {new Date().getFullYear()} WebUi — All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
}
