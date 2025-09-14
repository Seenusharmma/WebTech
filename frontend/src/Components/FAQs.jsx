import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";

const questions = [
  { id: 1, question: "qwertyuiop", answer: "123" },
  { id: 2, question: "asdfghjkl", answer: "456" },
  { id: 3, question: "zxcvbnm", answer: "789" },
  { id: 4, question: "zaqwedcfrtgb", answer: "0987" },
  { id: 5, question: "eztrxdtycfyvgubhnj", answer: "654321" },
];

const FAQs = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  return (
    <div className="w-screen min-h-screen bg-[linear-gradient(to_top,_#d5d4d0_0%,_#d5d4d0_1%,_#eeeeec_31%,_#efeeec_75%,_#e9e9e7_100%)] flex justify-center items-start py-10">
      <div className="w-[89%] m-auto max-w-[800px] bg-gray-300 p-6 rounded-lg shadow-md">
        <h2 className="text-3xl md:text-4xl mb-6 font-semibold text-center md:text-left">
          Frequently Asked Questions!
        </h2>

        {questions.map((q) => (
          <div key={q.id} className="mb-4 last:mb-0">
            <button
              className={`w-full text-left text-lg md:text-2xl focus:outline-none p-4 rounded-lg shadow-md flex justify-between items-center transition-colors duration-300 
              ${
                activeQuestion === q.id
                  ? "bg-red-700 text-white"
                  : "bg-gray-200 hover:bg-gray-400"
              }`}
              onClick={() =>
                setActiveQuestion(activeQuestion === q.id ? null : q.id)
              }
            >
              {q.question}
              {activeQuestion === q.id ? (
                <IoMdArrowDropdown />
              ) : (
                <IoMdArrowDropup />
              )}
            </button>

            <AnimatePresence>
              {activeQuestion === q.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-2 text-gray-900 ml-4 overflow-hidden"
                >
                  <p>{q.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
