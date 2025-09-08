import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function WebDevelopment() {
  const webDesigns = [
    {
      id: 1,
      title: "Railway Website",
      url: "https://www.figma.com/design/8jnZ8eR6ko7IngJAEv93Es/IRCTC-Redesign---ux.alok--Community---Copy-?node-id=9-944&p=f",
      image: "https://s3-alpha.figma.com/hub/file/2211011021468060144/19b79ba9-e61c-4c2c-b86a-7fa081e18daf-cover.png",
    },
    {
      id: 2,
      title: "Construction Website",
      url: "https://www.figma.com/community/file/1132260373602410007/web-design-for-construction-company",
      image: "https://s3-alpha.figma.com/hub/file/6172254313/e59be541-97c9-403b-997a-3c8636b9342d-cover.png",
    },
    {
      id: 3,
      title: "Library Management System",
      url: "https://www.figma.com/community/file/1264939926166709073/library-management-system",
      image: "https://files.codingninjas.in/article_images/custom-upload-1681454804.webp",
    },
    {
      id: 4,
      title: "E-Commerce Website",
      url: "https://www.figma.com/community/file/1184498378829556800/ecommerce-website-design",
      image: "https://templatesjungle.com/wp-content/uploads/edd/2022/01/ultras-casual-wear-ecommerce-figma-template-cover-1024x768.jpg",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-indigo-950 to-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-12 mt-8
          bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 
          bg-clip-text text-transparent drop-shadow-[0_0_25px_#22c55e]"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Web Development Figma Designs
        </motion.h2>

        {/* Grid of projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {webDesigns.map((design, i) => (
            <motion.div
              key={design.id}
              className="rounded-xl overflow-hidden border border-gray-700 shadow-lg bg-gray-900 group"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
            >
              {/* Image Preview */}
              <div className="relative w-full h-60 overflow-hidden">
                <img
                  src={design.image}
                  alt={design.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-center py-3 bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
                {design.title}
              </h3>

              {/* Button */}
              <div className="flex justify-center pb-4">
                <a
                  href={design.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-lg bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 
                  hover:opacity-90 transition font-medium shadow-md"
                >
                  View on Figma
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Back button */}
        <div className="text-center mt-12">
          <Link
            to="/"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 
            hover:opacity-90 transition font-semibold shadow-lg"
          >
            ⬅ Back to Services
          </Link>
        </div>
      </div>
    </section>
  );
}
