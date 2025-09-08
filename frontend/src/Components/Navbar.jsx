import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/gallery" },
    { name: "Reviews", path: "/reviews" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 bg-gradient-to-r from-black via-indigo-950 to-black shadow-lg border-b border-purple-800/40 backdrop-blur-lg"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.h1
          className="text-3xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_12px_#9333ea]"
          whileHover={{ scale: 1.1, textShadow: "0px 0px 20px #a855f7" }}
        >
          WebUi
        </motion.h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-white font-semibold">
          {navItems.map((item, i) => (
            <motion.li
              key={i}
              className="relative cursor-pointer group"
              whileHover={{ scale: 1.15 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Link
                to={item.path}
                className="group-hover:text-purple-400 transition duration-300"
              >
                {item.name}
              </Link>
              {/* Animated underline */}
              <motion.div className="absolute left-0 right-0 h-[2px] bg-purple-500 rounded-full scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="md:hidden bg-gradient-to-b from-black via-indigo-950 to-black text-white px-6 py-6 space-y-6 shadow-lg"
        >
          {navItems.map((item, i) => (
            <Link
              key={i}
              to={item.path}
              className="block text-lg font-medium cursor-pointer hover:text-purple-400"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
