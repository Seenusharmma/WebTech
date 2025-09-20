import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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
      className="fixed top-0 w-full z-50 bg-gray-800 shadow-xl border-b border-gray-600 backdrop-blur-lg rounded-b-4xl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.h1
  className="font-caveat font-normal text-2xl sm:text-3xl bg-white bg-clip-text text-transparent"
  whileHover={{ scale: 1.1 }}
>
  <Link to="/">WebUi</Link>
</motion.h1>


        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 lg:space-x-12 text-white font-medium">
          {navItems.map((item, i) => {
            const isActive = location.pathname === item.path;
            return (
              <motion.li
                key={i}
                className="relative cursor-pointer group"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Link
                  to={item.path}
                  className={`transition duration-300 ${
                    isActive ? "text-red-400 font-bold" : "text-white"
                  }`}
                >
                  {item.name}
                </Link>

                {/* Active underline */}
                <motion.div
                  className={`absolute left-0 right-0 h-[2px] bg-red-400 rounded-full transition-transform duration-300 ${
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  } origin-left`}
                />
              </motion.li>
            );
          })}
        </ul>

        {/* Contact Button (Desktop Only) */}
        <button
          onClick={() => navigate("/contact")}
          className="hidden md:block bg-gray-200 hover:bg-gray-300 text-black px-4 py-2 rounded-lg transition"
        >
          CONTACT US
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
          transition={{ duration: 0.4 }}
          className="md:hidden bg-gray-900 text-white px-6 py-6 space-y-6 shadow-lg"
        >
          {navItems.map((item, i) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={i}
                to={item.path}
                className={`block text-lg font-medium ${
                  isActive ? "text-red-400 font-bold" : "text-gray-200"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            );
          })}

          {/* Contact Button in Mobile */}
          <button
            onClick={() => {
              setIsOpen(false);
              navigate("/contact");
            }}
            className="w-full bg-gray-100 hover:bg-gray-300 text-black px-4 py-2 rounded-lg transition"
          >
            CONTACT US
          </button>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
