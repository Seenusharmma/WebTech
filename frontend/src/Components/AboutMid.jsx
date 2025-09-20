// src/pages/About.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaFigma,
} from "react-icons/fa";
import { SiMongodb, SiNextdotjs, SiBlender, SiVercel, SiRender, SiNetlify } from "react-icons/si";

const techStacks = [
  {
    id: 1,
    name: "MERN",
    icon: <FaReact className="text-sky-400 text-4xl" />,
    desc: "MongoDB, Express, React, Node.js for full-stack web apps.",
  },
  {
    id: 2,
    name: "Next.js",
    icon: <SiNextdotjs className="text-black text-4xl" />,
    desc: "React framework for SSR, SSG, and modern frontend apps.",
  },
  {
    id: 3,
    name: "React Native",
    icon: <FaReact className="text-blue-500 text-4xl" />,
    desc: "Cross-platform mobile app development using React.",
  },
  {
    id: 4,
    name: "Blender",
    icon: <SiBlender className="text-orange-500 text-4xl" />,
    desc: "3D modeling, animation & rendering for visual content.",
  },
  {
    id: 5,
    name: "Figma",
    icon: <FaFigma className="text-pink-500 text-4xl" />,
    desc: "UI/UX design and prototyping for modern web & apps.",
  },
  {
    id: 6,
    name: "Vercel",
    icon: <SiVercel className="text-black text-4xl" />,
    desc: "Fast, scalable hosting for frontend apps.",
  },
  {
    id: 7,
    name: "Render",
    icon: <SiRender className="text-purple-500 text-4xl" />,
    desc: "Cloud platform for deploying web services & APIs.",
  },
  {
    id: 8,
    name: "Netlify",
    icon: <SiNetlify className="text-green-500 text-4xl" />,
    desc: "Deploy & host static sites with serverless functions.",
  },
];

const AboutMid = () => {
  return (
    <div className="min-h-screen flex flex-col w-full">
      {/* Technologies Section */}
      <section className="bg-gradient-to-r from-gray-50 via-white to-gray-100 py-16 px-6 md:px-12 lg:px-20 w-full">
        <h3 className="text-center text-3xl font-bold mb-20">Technologies We Use</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full">
          {techStacks.map((tech, index) => (
            <motion.div
              key={tech.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ scale: 1.05, boxShadow: "0px 8px 20px rgba(0,0,0,0.15)" }}
              className="bg-white rounded-xl p-6 flex flex-col items-center text-center shadow-md w-full"
            >
              {tech.icon}
              <h4 className="text-lg font-semibold mt-3">{tech.name}</h4>
              <p className="text-sm text-gray-600 mt-2">{tech.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutMid;
