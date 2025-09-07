import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSendWhatsApp = () => {
    const phoneNumber = "917752067196"; // replace with your WhatsApp number
    const message = `Hello, my name is ${form.name}. My email is ${form.email}. Message: ${form.message}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  const handleSendEmail = () => {
    const subject = "New Contact Form Message";
    const body = `Hello, my name is ${form.name}. My email is ${form.email}. Message: ${form.message}`;
    window.location.href = `mailto:roshansharma7250@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email && form.message) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000); // reset after 3 sec
    }
  };

  return (
    <section className="bg-gray-900 text-white py-20 px-5 md:px-20">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6 tracking-wide bg-gradient-to-r from-pink-500 via-purple-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_#a855f7]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Get In Touch
        </motion.h2>

        <motion.p
          className="text-gray-400 text-lg md:text-xl mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Have a project in mind? Send us a message and we’ll get back to you!
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-gray-800 p-8 rounded-3xl shadow-xl max-w-3xl mx-auto space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >

          <div className="relative">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="peer w-full px-4 py-3 rounded-xl bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="relative">
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="peer w-full px-4 py-3 rounded-xl bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="relative">
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              className="peer w-full px-4 py-3 rounded-xl bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <motion.button
            onClick={handleSendEmail}
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 hover:scale-105 transition-transform duration-300 font-semibold shadow-lg"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              {submitted ? "Message Ready!" : "Send Message"}
            </motion.button>

            <motion.button
              type="button"
              onClick={handleSendWhatsApp}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:scale-105 transition-transform duration-300 font-semibold shadow-lg"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              Send to WhatsApp
            </motion.button>
          </div>
        </motion.form>

        <motion.div
          className="mt-12 grid md:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="font-semibold text-lg text-purple-400 mb-2">Email</h3>
            <p className="text-gray-300">contact@webtech.com</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="font-semibold text-lg text-purple-400 mb-2">Phone</h3>
            <p className="text-gray-300">+91 77520 67196</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="font-semibold text-lg text-purple-400 mb-2">
              Location
            </h3>
            <p className="text-gray-300">Bhubaneswar, India</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
