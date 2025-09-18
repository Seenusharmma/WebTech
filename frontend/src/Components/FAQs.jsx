import React from "react";
import Accordian from "./Accordian";

const FAQs = () => {
  const questions = [
    {
      id: 1,
      question: "What services do you provide?",
      answer:
        "We specialize in:Custom Website, Development, Responsive Design for Mobile and Desktop, E-commerce Solutions, Business Websites UI/UX design",
    },
    {
      id: 2,
      question: "Who are our services for?",
      answer:
        "We work with startups, small to medium businesses, entrepreneurs, and professionals who want to showcase their services or grow their online presence.",
    },
    {
      id: 3,
      question:
        "Do we design and develop websites that work on Android and iOS devices?",
      answer:
        "Yes, all of our websites are fully responsive, which means they automatically adapt to Android and iOS smartphones and tablets. Your site will look and function perfectly across all devices.",
    },
    {
      id: 4,
      question: "How much does a Website/App/Design cost?",
      answer:
        "Costs depend on your requirements—simple sites start lower, while e-commerce or custom projects are higher. We’ll give you a clear quote after understanding your needs.",
    },
    {
      id: 5,
      question: "Can we integrate e-commerce or booking features?",
      answer:
        "Definitely—we can add payment gateways, shopping carts, or booking systems.",
    },
    {
      id: 6,
      question: "Do we only build websites, or do we also handle re-designs?",
      answer:
        "Both. We can either create a website from scratch or redesign your existing website with a modern and responsive look.",
    },
  ];
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8 flex justify-center items-center ">
      <div className="max-w-2xl w-full">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Frequently Asked Questions!
        </h1>
        <Accordian data={questions} />
      </div>
    </div>
  );
};

export default FAQs;
