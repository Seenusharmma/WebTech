// src/components/ServicesShowcase.jsx
import React from "react";

const services = [
  {
    id: 1,
    title: "WE DESIGN",
    description:
      "We develop static, dynamic and complete flash websites. Our web development service will make your online business great.",
    image: "https://c8.alamy.com/comp/2B61545/web-design-studio-web-site-responsive-design-presentation-on-computer-display-laptop-smart-phone-and-tablet-blue-wall-with-web-design-concept-eleme-2B61545.jpg", // replace with your own
    tilt: "-rotate-0",
  },
  {
    id: 2,
    title: "WE DEVELOP",
    description:
      "Content management system plays a key role in bring the right visitors to the site. We develop custom content management system.",
    image: "https://images.pexels.com/photos/6424590/pexels-photo-6424590.jpeg", //
    tilt: "rotate-0",
  },
  {
    id: 3,
    title: "WE TEST IT",
    description:
      "Our application development team tests the developed apps thoroughly from the root and ensures satisfactory solution delivery within stipulated time.",
    image: "https://thumbs.dreamstime.com/b/laptop-screen-website-optimization-concept-d-closeup-landing-page-mobile-computer-display-background-conference-hall-77914870.jpg", // replace with your own
    tilt: "rotate-0",
  },
];

export default function ServicesShowcase() {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex-1 text-center text-black max-w-sm"
          >
            {/* Tilted image */}
            <div className="mb-6">
              <img
                src={service.image}
                alt={service.title}
                className={`w-80 mx-auto shadow-2xl transform rounded-2xl ${service.tilt}`}
              />
            </div>
            {/* Title */}
            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
            {/* Description */}
            <p className="text-sm leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
