import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import { useState, useEffect, useRef } from "react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Abhijit Sahu",
      role: "Founder, Snatchers",
      text: "This team built an amazing website for our company. The process was smooth, and the results exceeded expectations.",
    },
    {
      name: "Ms Karan",
      role: "Founder, M/S Karan Enterprises",
      text: "We loved their attention to detail and creative approach. Our Webn App launch was a big success thanks to their work.",
    },
    {
      name: "Mayank Kumar",
      role: "Founder, CGU Marketplace",
      text: "Professional, responsive, and highly skilled team. I’d definitely work with them again for future projects.",
    },
    {
      name: "Ranjit Sharma",
      role: "Founder, MyKart",
      text: "Their development expertise helped us bring our vision to life with great quality and timely delivery.",
    },
  ];

  // 🔹 States
  const [reviews, setReviews] = useState([]);
  const [form, setForm] = useState({ name: "", role: "", feedback: "" });
  const [showForm, setShowForm] = useState(false);

  const containerRef = useRef(null);

  const API_URL = "https://web-tech-q3bf.onrender.com/api/reviews";
  const dummyReviews = testimonials;

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setReviews([...dummyReviews, ...data]);
    } catch (error) {
      console.error("Error fetching reviews:", error);
      setReviews(dummyReviews);
    }
  };

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.name && form.role && form.feedback) {
      try {
        const res = await fetch(API_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
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

  // 🔹 Auto sliding (custom effect if needed)
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const slideInterval = setInterval(() => {
      const cardWidth = container.querySelector("div")?.offsetWidth || 300;
      if (
        container.scrollLeft + container.offsetWidth >=
        container.scrollWidth
      ) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: cardWidth + 24, behavior: "smooth" });
      }
    }, 3000);

    return () => clearInterval(slideInterval);
  }, [reviews]);

  return (
    <section className="py-16 bg-gradient-to-t from-gray-100 to-gray-50 text-black rounded-b-4xl mt-10">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-6">
          What Our Clients Say
        </h2>

        <motion.p
          className="text-gray-500 text-lg md:text-xl text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.2 }}
        >
          Hear from our happy clients and add your own review!
        </motion.p>

        <button
          onClick={() => setShowForm(!showForm)}
          className="mt-6 mb-8 px-6 py-2 rounded-lg bg-black text-white hover:scale-105 transition-transform duration-300 font-semibold block mx-auto"
        >
          {showForm ? "Close Form" : "Add Your Review"}
        </button>

        {showForm && (
          <motion.form
            className="bg-gray-100 p-6 rounded-2xl shadow-xl mb-12 max-w-2xl mx-auto"
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
              className="w-full mb-4 px-4 py-2 rounded-lg bg-gray-300 text-black focus:outline-none"
            />
            <input
              type="text"
              name="role"
              value={form.role}
              onChange={handleChange}
              placeholder="Your Role / Company"
              className="w-full mb-4 px-4 py-2 rounded-lg bg-gray-300 text-black focus:outline-none"
            />
            <textarea
              name="feedback"
              value={form.feedback}
              onChange={handleChange}
              placeholder="Your Feedback"
              className="w-full mb-4 px-4 py-2 rounded-lg bg-gray-300 text-black focus:outline-none"
              rows="4"
            />
            <button
              type="submit"
              className="px-6 py-2 rounded-lg bg-black text-white hover:scale-105 transition-transform duration-300 font-semibold block mx-auto"
            >
              Submit Review
            </button>
          </motion.form>
        )}

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {reviews.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white rounded-3xl p-8 h-full flex flex-col transform transition duration-500 hover:-translate-y-2 border border-gray-300">
                <p className="text-gray-700 italic mb-6 flex-grow leading-relaxed">
                  “{t.text || t.feedback}”
                </p>
                <div className="mt-auto">
                  <h4 className="font-semibold text-gray-900">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}