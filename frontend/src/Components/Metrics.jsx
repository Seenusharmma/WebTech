import React from "react";

const stats = [
  {
    id: 1,
    icon: "https://petpoojaweb.gumlet.io/images/home-new/matrics-1.svg?w=240&dpr=1.5",
    value: "30+",
    label: "Businesses trust us",
  },
  {
    id: 2,
    icon: "https://petpoojaweb.gumlet.io/images/home-new/matrics-2.svg?w=240&dpr=1.5",
    value: "1+",
    label: "Years of excellence",
  },
  {
    id: 3,
    icon: "https://petpoojaweb.gumlet.io/images/us-canada/matrics-3.svg?w=240&dpr=1.5",
    value: "0%",
    label: "Processing errors",
  },
];

const MetricsSection = () => {
  return (
    <section className="bg-gradient-to-b from-[#0a1c2c] to-[#0f2740] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left text section */}
        <div className="text-center lg:text-left">
          <p className="text-gray-400 text-lg sm:text-xl md:text-2xl mb-3">
            How we build trust
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-snug">
            Amplifying The <br className="hidden sm:block" /> Key Metrics <br className="hidden sm:block" /> That Matter
          </h2>
        </div>

        {/* Right stats section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 md:gap-10">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-col items-center text-center bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition-colors duration-300"
            >
              <img
                src={stat.icon}
                alt={stat.label}
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mb-4 transition-transform duration-300 hover:scale-110"
              />
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">{stat.value}</h3>
              <p className="text-gray-400 mt-2 text-sm sm:text-base md:text-lg">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;