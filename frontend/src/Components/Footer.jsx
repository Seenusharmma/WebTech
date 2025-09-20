import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socialLinks = [
  {
    icon: <FaFacebookF className="text-blue-700" />,
    url: "https://www.facebook.com/people/WebUi/61580214405199/",
  },
  {
    icon: <FaXTwitter className="text-xl" />,
    url: "https://x.com/WebuiStudio",
  },
  {
    icon: <FaInstagram className="text-pink-700 hover:text-pink-900" />,
    url: "https://www.instagram.com/webui.team/",
  },
  {
    icon: <FaLinkedin className="text-blue-700" />,
    url: "https://www.linkedin.com/in/roshan-sharma70/",
  },
];

const Footer = () => {
  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden rounded-t-3xl">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center md:text-left">
          
          {/* Brand */}
          <div>
            <motion.h1
              className="text-2xl font-bold mb-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              WebUi
            </motion.h1>
            <p className="text-gray-300 text-sm">
              Experience The Finest Work In WebUi Services.
            </p>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/gallery">Projects</a></li>
              <li><a href="/reviews">Reviews</a></li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-lg font-semibold mb-3">Contact Info</h2>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                751012, Nayapalli, <br />
                Bhubaneswar, Odisha, India
              </li>
              <li>+91 77520 67196</li>
              <li>webuisolution@gmail.com</li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-lg font-semibold mb-3">Follow Us</h2>
            <div className="flex justify-center md:justify-start flex-wrap gap-4 mt-4">
              {socialLinks.map((link, i) => (
                <motion.a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 flex items-center justify-center rounded-full bg-gray-100 text-black text-xl hover:bg-white transition"
                  whileHover={{
                    scale: 1.15,
                    boxShadow: "0 0 20px #DCDCDC",
                    rotate: 6,
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <hr className="border-gray-700" />

      {/* Bottom Note */}
      <motion.div
        className="mt-6 text-center text-xs md:text-sm text-gray-400 pb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        © {new Date().getFullYear()} WebUi — All rights reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;
