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
  }, // In future when we gonna start hiring for our bulding team then that time we create a fresh one Linkdin Profile
];

const Footer = () => {
  return (
    <div className="relative bg-gray-900 text-white  overflow-hidden rounded-t-4xl">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* First Column */}
          <div>
            <motion.h1
              className="text-xl font-semibold mb-4 "
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              WebUi
              <p className="font-medium">
                Experience The Finest Work In WebUi Services.
              </p>
            </motion.h1>
          </div>

          {/* Second Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-xl text-gray-100 font-semibold mb-4">
              Quick Links
            </h1>
            <ul className="space-y-2">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/gallery">Projects</a>
              </li>
              <li>
                <a href="/reviews">Reviews</a>
              </li>
            </ul>
          </motion.div>

          {/* Third Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-xl text-white font-semibold mb-4">
              Contact Info
            </h1>
            <ul className="space-y-4">
              <li>
                751012, Nayapalli, <br />
                Bhubaneswar, Odisha, <br />
                India
              </li>
              <li>+91 77520 67196</li>
              <li>webuisolution@gmail.com</li>
            </ul>
          </motion.div>

          {/* Fourth Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-xl text-white font-semibold mb-4">Follow Us</h1>
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
                  className="w-11 h-11 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-gray-100 text-black text-3xl md:text-xl hover:bg-white"
                  whileHover={{
                    scale: 1.15,
                    boxShadow: "0 0 25px #DCDCDC",
                    rotate: 8,
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
      <hr />
      <motion.div
        className="mt-6 text-center text-xs md:text-sm text-gray-300 mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        © {new Date().getFullYear()} WebUi — All rights reserved.
      </motion.div>
    </div>
  );
};

export default Footer;