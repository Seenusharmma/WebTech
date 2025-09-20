// src/components/ContactBanner.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function ContactBanner() {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-[#0f2740] py-12 px-6 flex flex-col md:flex-row items-center justify-between relative">
      {/* Left side text */}
      <div className="text-center md:text-left max-w-2xl z-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-200">
          Send your requirements.
        </h2>
        <p className="mt-3 text-gray-100 text-lg">
          If you have any questions feel free to contact us!
        </p>
      </div>

      {/* Right side button */}
      <div className="mt-6 md:mt-0 z-20">
        {/* Use a native button and navigate programmatically to avoid Link-related surprises */}
        <button
          onClick={() => navigate("/contact")}
          className="bg-gray-100 text-black hover:bg-gray-200 hover:text-black font-semibold px-6 py-3 rounded-md transition z-20"
        >
          CONTACT US
        </button>
      </div>

      {/* Background triangle — pointer-events-none so it won't block clicks */}
      <div className="absolute right-0 top-0 w-0 h-0
                      border-t-[200px] border-t-transparent
                      border-l-[220px] border-l-gray-300
                      hidden md:block pointer-events-none" />
    </section>
  );
}