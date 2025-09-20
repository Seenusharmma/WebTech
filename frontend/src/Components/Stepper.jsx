import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt ,
  FaComments,
  FaPencilRuler,
  FaTags,
  FaTools,
  FaCheckCircle,
  FaTruck,
} from "react-icons/fa";

const steps = [
  { id: 1, label: "Contact", icon: <FaPhoneAlt  /> },
  { id: 2, label: "Discuss", icon: <FaComments /> },
  { id: 3, label: "Designs", icon: <FaPencilRuler /> },
  { id: 4, label: "Price", icon: <FaTags /> },
  { id: 5, label: "Building Project", icon: <FaTools /> },
  { id: 6, label: "Testing", icon: <FaCheckCircle /> },
  { id: 7, label: "Delivered", icon: <FaTruck /> },
];

const Stepper = () => {
  const [currentStep, setCurrentStep] = useState(1);

  // Auto progression effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev === steps.length ? 1 : prev + 1));
    }, 3000); // switch every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex flex-col items-center px-4 py-10">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8">
        Our Process Of Working
      </h2>

      {/* Stepper */}
      <div className="flex flex-row md:flex-row md:justify-between justify-start md:space-x-0 space-x-6 overflow-x-auto w-full max-w-5xl relative pb-4 scrollbar-hide">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            className="flex flex-col items-center md:w-full min-w-[70px] sm:min-w-[90px] relative"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
          >
            {/* Circle */}
            <div
              className={`flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full transition-colors duration-300 ${
                currentStep >= step.id
                  ? "bg-black text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              {step.icon}
            </div>

            {/* Label */}
            <p
              className={`mt-2 text-xs sm:text-sm md:text-base font-medium text-center ${
                currentStep >= step.id ? "text-black" : "text-gray-500"
              }`}
            >
              {step.label}
            </p>

            {/* Connector line (desktop only) */}
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-6 left-[60%] w-full h-1 bg-gray-200 -z-10">
                <motion.div
                  className="h-1 bg-black"
                  initial={{ width: 0 }}
                  animate={{
                    width: currentStep > step.id ? "100%" : "0%",
                  }}
                  transition={{ duration: 0.2 }}
                />
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Current Step Description */}
      <motion.div
        key={currentStep}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-10 p-5 sm:p-6 rounded-xl bg-gray-100 shadow-md w-full max-w-lg text-center"
      >
        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-black mb-2">
          Step {currentStep}: {steps.find((s) => s.id === currentStep)?.label}
        </h3>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          {currentStep === 1 && "Reach out to us and share your requirements."}
          {currentStep === 2 &&
            "We will discuss ideas, goals, and solutions together."}
          {currentStep === 3 &&
            "Our team creates stunning designs for your project."}
          {currentStep === 4 && "We provide a clear pricing structure."}
          {currentStep === 5 &&
            "We start building your dream project with precision."}
          {currentStep === 6 &&
            "Rigorous testing ensures quality and performance."}
          {currentStep === 7 && "Finally, we deliver the project successfully to you."}
        </p>
      </motion.div>
    </div>
  );
};

export default Stepper;