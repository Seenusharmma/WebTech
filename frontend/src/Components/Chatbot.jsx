// src/pages/Chatbot.jsx
import { useState } from "react";
import { motion } from "framer-motion";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { text: "Hi! I’m your AI Assistant. How can I help you today?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages([...messages, userMessage]);

    // Fake bot response (replace with API call later)
    setTimeout(() => {
      const botMessage = {
        text: "I got your message: " + input,
        sender: "bot",
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);

    setInput("");
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-black text-white rounded-2xl shadow-lg flex flex-col overflow-hidden"
      >
        {/* Header */}
        <div className="bg-gray-900 px-4 py-3 text-center font-semibold">
          AI Chatbot
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 space-y-3 overflow-y-auto">
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: msg.sender === "user" ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className={`px-4 py-2 rounded-lg max-w-[80%] ${
                msg.sender === "user"
                  ? "ml-auto bg-gray-700"
                  : "mr-auto bg-gray-300 text-black"
              }`}
            >
              {msg.text}
            </motion.div>
          ))}
        </div>

        {/* Input box */}
        <div className="flex items-center p-3 bg-gray-900">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 px-3 py-2 rounded-lg bg-white text-black outline-none"
          />
          <button
            onClick={handleSend}
            className="ml-3 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800"
          >
            Send
          </button>
        </div>
      </motion.div>
    </div>
  );
}
