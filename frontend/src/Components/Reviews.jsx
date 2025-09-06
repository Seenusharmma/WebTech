import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const initialReviews = [
  {
    name: "Alice Johnson",
    role: "CEO, TechCorp",
    feedback:
      "WebTech delivered an outstanding website for our company. The design is modern, responsive, and user-friendly.",
    avatar:
      "https://images.unsplash.com/photo-1705912090259-195fd30509e2?q=80&w=698&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Mark Davis",
    role: "Founder, StartupX",
    feedback:
      "Their team is highly professional and creative. We loved the animations and interactive design!",
    avatar: "/images/avatar2.jpg",
  },
  {
    name: "Sophia Lee",
    role: "Marketing Head, BrandHub",
    feedback:
      "Excellent service and attention to detail. Our clients love the new website, and so do we!",
    avatar: "/images/avatar3.jpg",
  },
];

const Reviews = () => {
  const [reviews, setReviews] = useState(initialReviews);
  const [form, setForm] = useState({ name: "", role: "", feedback: "" });
  const [showForm, setShowForm] = useState(false);

  const containerRef = useRef(null);
  const [scrollWidth, setScrollWidth] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    const handleScroll = () => setScrollLeft(container.scrollLeft);
    container.addEventListener("scroll", handleScroll);
    setScrollWidth(container.scrollWidth - container.clientWidth);

    return () => container.removeEventListener("scroll", handleScroll);
  }, [reviews]);

  const scrollProgress = scrollWidth ? scrollLeft / scrollWidth : 0;

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.role && form.feedback) {
      const newReview = {
        ...form,
        avatar: "/images/default-avatar.jpg",
      };
      setReviews([newReview, ...reviews]);
      setForm({ name: "", role: "", feedback: "" });
      setShowForm(false);
    }
  };

  const handleDelete = (index) => {
    const newReviews = reviews.filter((_, i) => i !== index);
    setReviews(newReviews);
  };

  return (
    <section className="bg-gray-900 text-white py-20 px-5 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6 tracking-wide"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          What Our Clients Say
        </motion.h2>

        <motion.p
          className="text-gray-400 text-lg md:text-xl mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.2 }}
        >
          Hear from our happy clients and add your own review!
        </motion.p>

        <button
          onClick={() => setShowForm(!showForm)}
          className="mb-8 px-6 py-2 rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 hover:scale-105 transition-transform duration-300 font-semibold"
        >
          {showForm ? "Close Form" : "Add Your Review"}
        </button>

        {showForm && (
          <motion.form
            className="bg-gray-800 p-6 rounded-2xl shadow-lg mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full mb-4 px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none"
            />
            <input
              type="text"
              name="role"
              value={form.role}
              onChange={handleChange}
              placeholder="Your Role / Company"
              className="w-full mb-4 px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none"
            />
            <textarea
              name="feedback"
              value={form.feedback}
              onChange={handleChange}
              placeholder="Your Feedback"
              className="w-full mb-4 px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none"
              rows="4"
            />
            <button
              type="submit"
              className="px-6 py-2 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:scale-105 transition-transform duration-300 font-semibold"
            >
              Submit Review
            </button>
          </motion.form>
        )}

        <div className="relative">
          <div
            ref={containerRef}
            className="flex overflow-x-auto space-x-6 py-6 px-2 scroll-smooth scrollbar-hide"
          >
            {reviews.map((review, index) => (
              <div
                key={index}
                className="relative min-w-[280px] max-w-[320px] flex-shrink-0"
              >
                {/* 
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full border-4 border-purple-500 overflow-hidden shadow-lg">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-full h-full object-cover"
                  />
                </div> */}

                <motion.div
                  className="bg-gray-800 p-6 pt-14 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500 relative overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 * index, duration: 0.8 }}
                >
                  <p className="text-gray-300 text-md mb-4">
                    {review.feedback}
                  </p>
                  <h3 className="text-white font-semibold text-lg">
                    {review.name}
                  </h3>
                  <p className="text-purple-400 text-sm">{review.role}</p>

                  <button
                    onClick={() => handleDelete(index)}
                    className="absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center
                               bg-gradient-to-r from-red-600 via-red-400 to-pink-600 text-white
                               hover:scale-110 hover:shadow-[0_0_25px_rgba(255,0,0,0.7)] transition-transform duration-300"
                  >
                    🗑️
                  </button>

                  <motion.div
                    className="absolute top-0 left-0 w-full h-full rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-10 blur-3xl pointer-events-none"
                    animate={{ rotate: [0, 360] }}
                    transition={{
                      repeat: Infinity,
                      duration: 25,
                      ease: "linear",
                    }}
                  />
                </motion.div>
              </div>
            ))}
          </div>

{/* Caraousal */}
          {/* <div className="absolute bottom-0 left-0 w-full h-2 bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              className="h-2 bg-gradient-to-r from-red-600 via-red-400 to-pink-600 rounded-full"
              style={{
                overflowX: "hidden",
                width: `${scrollProgress * 100}%`,
              }}
              transition={{ type: "spring", stiffness: 100 }}
            />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
