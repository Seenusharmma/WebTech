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
      const phoneNumber = "917752067196";
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
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h1 className="text-4xl text-dark font-bold mb-1">Let's Talk</h1>
          <div className="w-20 h-1 bg-primary mx-auto mb-2"></div>
          <p className="text-grey-400 text-xl">We'll Love To Work For You</p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left Container */}
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Address */}
            <div className="w-full overflow-hidden px-14 mb-6">
              <h1 className="text-3xl mb-4 text-dark font-bold">Get In Touch</h1>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-gray-200 text-gray-800 rounded-full flex items-center justify-center text-2xl">
                  <FaLocationArrow />
                </div>
                <div className="mt-4">
                  <p className="text-xl text-dark font-semibold">Address</p>
                  <p className="w-60">
                    751012, Nayapalli, <br />
                    Bhubaneswar, Odisha, <br />
                    India
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="w-full overflow-hidden px-14 mb-6">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-gray-200 text-gray-800 rounded-full flex items-center justify-center text-2xl">
                  <FaPhoneAlt />
                </div>
                <div className="mt-4">
                  <p className="text-xl text-dark font-semibold">Phone</p>
                  <p className="w-60">+91 77520 67196</p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="w-full overflow-hidden px-14 mb-6">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-gray-200 text-gray-800 rounded-full flex items-center justify-center text-2xl">
                  <IoIosMail />
                </div>
                <div className="mt-4">
                  <p className="text-xl text-dark font-semibold">Email</p>
                  <p className="w-60">webuisolution@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="w-full overflow-hidden px-14 mb-6">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-gray-200 text-gray-800 rounded-full flex items-center justify-center text-2xl">
                  <FaClock />
                </div>
                <div className="mt-4">
                  <p className="text-xl text-dark font-semibold">Hours</p>
                  <p className="w-50">
                    Monday - Friday: 9:00 AM - 10:00 PM <br />
                    Saturday: 9:00 AM - 9:00 PM <br />
                    Available
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Container */}
          <motion.div
            className="md:w-1/2 w-full"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="w-full rounded-2xl shadow-xl bg-gray-100 border border-gray-400 overflow-hidden p-8 md:p-10">
              <h1 className="mb-6 text-2xl md:text-3xl text-gray-900 font-bold">
                Contact With Us
              </h1>
              <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-5"
              >
                {/* Name */}
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-500 outline-none transition bg-gray-300"
                  />
                </div>

                {/* Email */}
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-500 outline-none transition bg-gray-300"
                  />
                </div>

                {/* Message */}
                <div className="relative">
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg border border-gray-500 outline-none transition resize-none bg-gray-300"
                  />
                </div>

                {/* Buttons */}
                <div className="flex flex-col md:flex-row gap-4">
                  <motion.button
                    onClick={handleSendEmail}
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 rounded-lg bg-gradient-to-r from-gray-600 via-gray-400 to-gray-600 text-white font-semibold shadow-md hover:bg-primary/90 transition"
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

              {/* Toast Container */}
              <ToastContainer />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;