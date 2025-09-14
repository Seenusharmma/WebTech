import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/gallery" },
    { name: "Reviews", path: "/reviews" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 bg-gray-800 shadow-xl border-b border-gray-400 backdrop-blur-lg rounded-b-4xl"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.h1
          className="text-3xl font-extrabold bg-white bg-clip-text text-transparent"
          whileHover={{ scale: 1.1 }}
        >
          <Link to="/">WebUi</Link>
        </motion.h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-white font-bold ml-14">
          {navItems.map((item, i) => {
            const isActive = location.pathname === item.path;
            return (
              <motion.li
                key={i}
                className="relative cursor-pointer group"
                whileHover={{ scale: 1.15 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Link
                  to={item.path}
                  className={`transition duration-300 ${
                    isActive ? "text-white font-bold" : "text-white"
                  }`}
                >
                  {item.name}
                </Link>

                {/* Animated underline if active */}
                <motion.div
                  className={`absolute left-0 right-0 h-[2px] bg-red-400 rounded-full transition-transform duration-300 ${
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  } origin-left`}
                />
              </motion.li>
              
            );
            
          })}
        </ul>

        <button
          onClick={() => navigate("/contact")}
          className="bg-red-700 hover:bg-red-800 text-white font-lg px-2 py-2 rounded-lg transition z-15 ml-22"
        >
          <Link to={"/contact"}>CONTACT US</Link>
        </button>

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
          {navItems.map((item, i) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={i}
                to={item.path}
                className={`block text-lg font-medium cursor-pointer ${
                  isActive ? "text-blue-400 font-bold" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            );
          })}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
