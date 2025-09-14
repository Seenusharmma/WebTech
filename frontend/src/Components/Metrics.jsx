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
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
        {/* Left text section */}
        <div className="flex flex-col justify-center pr-8 mb-10 lg:mb-0">
          <p className="text-gray-400 text-2xl mb-3">How we build trust</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Amplifying The <br /> Key Metrics <br /> That Matter
          </h2>
        </div>

        {/* Right stats section */}
        <div className="grid grid-cols-3 divide-x divide-gray-700">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-col items-center justify-center px-4"
            >
              <img
                src={stat.icon}
                alt={stat.label}
                className="w-30 h-30 mb-3 hover:scale-[1.1]"
              />
              <h3 className="text-3xl font-bold">{stat.value}</h3>
              <p className="text-gray-400 mt-1 text-center">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
