import React from "react";

const stats = [
  {
    id: 1,
    icon: "https://petpoojaweb.gumlet.io/images/home-new/matrics-1.svg?w=240&dpr=1.5",
    value: "100k+",
    label: "Businesses trust us",
  },
  {
    id: 2,
    icon: "https://petpoojaweb.gumlet.io/images/home-new/matrics-2.svg?w=240&dpr=1.5",
    value: "14+",
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
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        {/* Left text section */}
        <div className="flex flex-col justify-center mb-10 lg:mb-0">
          <p className="text-gray-400 text-xl sm:text-2xl mb-3">
            How we build trust
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug">
            Amplifying The <br /> Key Metrics <br /> That Matter
          </h2>
        </div>

        {/* Right stats section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-col items-center justify-center px-4 py-6 sm:py-0"
            >
              <img
                src={stat.icon}
                alt={stat.label}
                className="w-20 h-20 sm:w-24 sm:h-24 mb-3 transition-transform duration-300 hover:scale-110"
              />
              <h3 className="text-2xl sm:text-3xl font-bold">{stat.value}</h3>
              <p className="text-gray-400 mt-1 text-center text-sm sm:text-base">
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
