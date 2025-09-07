import { useParams, Link } from "react-router-dom";


const serviceDetails = {
  "web-development": {
    title: "Web Development",
    details: `We build fast, scalable, and secure websites using the latest technologies like React, Node.js, and MongoDB. 
    Our web apps are optimized for performance and user experience.`,
  },
  "app-development": {
    title: "App Development",
    details: `We create responsive and interactive web/mobile applications with modern frameworks. 
    From e-commerce to booking apps, we deliver customized solutions.`,
  },
  "ui-ux": {
    title: "UI/UX Design",
    details: `We design engaging user interfaces with a focus on user experience. 
    Our designs are modern, creative, and highly user-friendly.`,
  },
  "graphics-design": {
    title: "Graphics Design",
    details: `We craft high-quality visuals, logos, banners, and branding material that make your business stand out.`,
  },
};

export default function ServiceDetail() {
  const { id } = useParams();
  const service = serviceDetails[id];

  if (!service) {
    return (
      <div className="text-center p-20 text-white bg-gray-900">
        <h2 className="text-2xl font-bold">Service not found</h2>
        <Link to="/services" className="text-blue-400 underline mt-4 block">
        
          Back to Services
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-8 py-20">
      <h1 className="text-5xl font-bold mb-6">{service.title}</h1>
      <p className="max-w-2xl text-lg text-gray-300 text-center leading-relaxed">
        {service.details}
      </p>
      <Link
        to="/services"
        className="mt-10 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold"
      >
        ← Back to Services
      </Link>
    </div>
  );
}
