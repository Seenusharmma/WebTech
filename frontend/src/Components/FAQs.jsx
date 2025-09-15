import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";

const questions = [
    {
        id: 1,
        question: "",
        answer: "",
    },
    {
        id: 2,
        question: "",
        answer: "",
    },
    {
        id: 3,
        question: "",
        answer: "",
    },
    {
        id: 4,
        question: "",
        answer: "",
    },
    {
        id: 5,
        question: "",
        answer: "",
    }
]

const FAQs = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);
  return (
    <div className="w-screen h-screen bg-[linear-gradient(to_top,_#d5d4d0_0%,_#d5d4d0_1%,_#eeeeec_31%,_#efeeec_75%,_#e9e9e7_100%)] flex justify-center items-center">
        <div className="w-[89%] m-auto max-w-[800px] bg-gray-300 p-8 rounded-lg shadow-md">
            <h2 className="text-4xl mb-6 font-semibold">Frequently asked Questions!</h2>
            {questions.map((q) => (
                <div key={q.id} className="mb-4 last:mb-0">
                    <button className="w-full text-left text-2xl focus:outline-none p-4 bg-gray-400 rounded-lg shadow-md flex justify-between items-center"></button>
                </div>
            ))}
            </div> 
    </div>
  )
};

export default FAQs;