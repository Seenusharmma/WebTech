import React from "react";

const features = [
  {
    title: "Continuous Innovation",
    description:
      "We continuously research and develop our solutions and provide regular updates with new features to improve performance.",
    img: "https://petpoojaweb.gumlet.io/images/home-new/who-we-are-1.svg?w=160&dpr=1.5", // replacing with images and contents
  },
  {
    title: "Pricing",
    description:
      "Industry-low, transparent pricing models designed to scale your business",
    img: "https://petpoojaweb.gumlet.io/images/home-new/who-we-are-2.svg?w=330&dpr=1.5",
  },
  {
    title: "24x7 Support",
    description:
      "Our dedicated support team is always ready to help you, you can reach out to us via call or email anytime.",
    img: "https://petpoojaweb.gumlet.io/images/home-new/who-we-are-4.svg?w=160&dpr=1.5",
  },
];

const Refers = () => {
  return (
    <div className="bg-[#0a1c2c] min-h-screen px-6 py-16">
      <div className="hidden text-center mb-12 md:block">
        <div>
          <button className="px-5 py-2 md:px-6 md:py-[10px] text-center font-semibold section-head-top leading-[1] bg-[#213C53] border border-2-[#FFFFFF] rounded-full text-[#FFFFFF] mb-5 inline-block !tracking-[0.0625em]">
            WHY OUR CLIENT PREFER US
          </button>
          <h2 className=" text-center font-bold text-4xl mt-1 text-[#FFFFFF]">
            Simplicity meets excellence <br /> our products excel in every
            aspect
          </h2>
          <p className=" pb-16 text-center section-subtitle-new text-[#9EAAB4] m-auto">
            We design our products to be the best in every way, so you get the
            most out of them. We focus <br className="hidden md:block" /> on
            quality, ease of use, and great performance to make your life easier
          </p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-[#0f2740] p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
          >
            <h2 className="text-white text-2xl font-semibold mb-3">
              {feature.title}
            </h2>
            <p className="text-gray-300 mb-6">{feature.description}</p>
            <div className="flex justify-center">
              <img
                src={feature.img}
                alt={feature.title}
                className="w-60 h-60"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Refers;