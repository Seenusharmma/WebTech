import React from "react";
import { Link } from "react-router-dom";

const images = [
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80",
];

export default function JoinUs() {
  return (
    <section className="w-full bg-gray-100 py-10 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row gap-6 md:gap-12 items-center">

        {/* Content */}
        <div className="w-full md:w-1/2 text-center md:text-left px-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-5">
            Connect With Us
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-5 sm:mb-6">
            "Together, we build the future of innovation and technology."
          </p>
          <Link to="/gallery">
            <button className="w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 bg-black text-white font-semibold rounded-lg shadow-md transition hover:bg-gray-800">
              Our Works
            </button>
          </Link>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          {images.map((img, i) => (
            <div key={i} className="w-full rounded-2xl overflow-hidden shadow-lg">
              <img
                src={img}
                alt={`image-${i}`}
                className="w-full h-[180px] sm:h-[220px] md:h-[250px] lg:h-[300px] object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
