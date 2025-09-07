import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

// 🔹 API base URL (adjust if backend runs elsewhere)
// const API_URL = "http://localhost:5000/api/reviews";
const API_URL = "https://web-tech-q3bf.onrender.com/api/reviews";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [form, setForm] = useState({ name: "", role: "", feedback: "" });
  const [showForm, setShowForm] = useState(false);

  const containerRef = useRef(null);
  const [scrollWidth, setScrollWidth] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // 🔹 Fetch reviews on load
  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setReviews(data);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const handleScroll = () => setScrollLeft(container.scrollLeft);
    container.addEventListener("scroll", handleScroll);
    setScrollWidth(container.scrollWidth - container.clientWidth);

    return () => container.removeEventListener("scroll", handleScroll);
  }, [reviews]);

  const scrollProgress = scrollWidth ? scrollLeft / scrollWidth : 0;

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  // 🔹 Submit review to backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.name && form.role && form.feedback) {
      try {
        const res = await fetch(API_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...form, avatar: "/images/default-avatar.jpg" }),
        });

        const savedReview = await res.json();
        setReviews([savedReview, ...reviews]);
        setForm({ name: "", role: "", feedback: "" });
        setShowForm(false);
      } catch (error) {
        console.error("Error submitting review:", error);
      }
    }
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
                key={review._id || index}
                className="relative min-w-[280px] max-w-[320px] flex-shrink-0"
              >
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
        </div>
      </div>
    </section>
  );
};

export default Reviews;
