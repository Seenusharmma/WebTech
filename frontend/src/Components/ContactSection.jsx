import React, { useState } from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaLocationArrow, FaPhoneAlt, FaClock } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const resetForm = () => {
    setForm({ name: "", email: "", message: "" });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleSendWhatsApp = () => {
    if (form.name && form.email && form.message) {
      const phoneNumber = "919065895424";
      const message = `Hello, my name is ${form.name}. My email is ${form.email}. Message: ${form.message}`;
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message
      )}`;
      window.open(url, "_blank");

      toast.success("Message sent to WhatsApp ✅", {
        position: "top-right",
        autoClose: 3000,
        theme: "dark",
      });

      resetForm();
    } else {
      toast.error("Please fill all fields ❌", {
        position: "top-right",
        autoClose: 3000,
        theme: "dark",
      });
    }
  };

  const handleSendEmail = () => {
    if (form.name && form.email && form.message) {
      const subject = "New Contact Form Message";
      const body = `Hello, my name is ${form.name}. My email is ${form.email}. ${form.message}`;
      window.location.href = `mailto:webuisolution@gmail.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;

      toast.success("Message sent successfully 🎉", {
        position: "top-right",
        autoClose: 3000,
        theme: "dark",
      });

      resetForm();
    } else {
      toast.error("Please fill all fields ❌", {
        position: "top-right",
        autoClose: 3000,
        theme: "dark",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl text-gray-900 font-bold mb-2">
            Let's Talk
          </h1>
          <div className="w-20 h-1 bg-primary mx-auto mb-3"></div>
          <p className="text-gray-500 text-base sm:text-lg">
            We'll Love To Work For You
          </p>
        </div>

        {/* Main Container */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
          {/* Left Container */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Contact Info Blocks */}
            {[
              {
                icon: <FaLocationArrow />,
                title: "Address",
                value: (
                  <>
                    751012, Nayapalli, <br /> Bhubaneswar, Odisha, <br /> India
                  </>
                ),
              },
              {
                icon: <FaPhoneAlt />,
                title: "Phone",
                value: "+91 90658 95424, +91 62996 16299",
              },
              {
                icon: <IoIosMail />,
                title: "Email",
                value: "webuisolution@gmail.com",
              },
              {
                icon: <FaClock />,
                title: "Hours",
                value: (
                  <>
                    Mon - Fri: 9:00 AM - 10:00 PM <br />
                    Sat: 9:00 AM - 9:00 PM <br />
                    Available
                  </>
                ),
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-start sm:items-center gap-4 bg-gray-50 p-4 rounded-lg shadow-sm mb-5"
              >
                <div className="w-12 h-12 bg-gray-200 text-gray-800 rounded-full flex items-center justify-center text-xl shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </p>
                  <p className="text-gray-600 text-sm sm:text-base">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right Container */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-full rounded-xl shadow-lg bg-gray-50 border border-gray-200 p-6 sm:p-8">
              <h1 className="mb-6 text-2xl sm:text-3xl text-gray-900 font-bold text-center">
                Contact With Us
              </h1>

              {/* Form */}
              <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-4"
              >
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-primary outline-none"
                />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-primary outline-none"
                />
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-500 resize-none focus:ring-2 focus:ring-primary outline-none"
                />

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    onClick={handleSendEmail}
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 rounded-lg bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600 text-white font-semibold shadow-md transition"
                  >
                    {submitted ? "Message Ready!" : "Send Message"}
                  </motion.button>

                  <motion.button
                    type="button"
                    onClick={handleSendWhatsApp}
                    className="w-full py-3 rounded-lg bg-gradient-to-r from-green-700 via-green-600 to-green-500 text-white font-semibold shadow-md hover:scale-105 transition-transform"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Send to WhatsApp
                  </motion.button>
                </div>
              </motion.form>
              <ToastContainer />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
