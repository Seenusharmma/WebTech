// src/components/ChatbotWidget.jsx
import { useState } from "react";
import { motion } from "framer-motion";

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! I’m your AI Assistant. How can I help you today?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages([...messages, userMessage]);

    // Fake bot response
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
    <div className="fixed bottom-5 right-5 z-50">
      {/* Chatbot Window */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="w-80 h-96 bg-black text-white rounded-2xl shadow-lg flex flex-col overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gray-900 px-4 py-3 flex justify-between items-center">
            <span className="font-semibold">AI Chatbot</span>
            <button onClick={() => setOpen(false)} className="text-gray-400 hover:text-white">
              ✖
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 space-y-2 overflow-y-auto">
            {messages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: msg.sender === "user" ? 50 : -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className={`px-3 py-2 rounded-lg max-w-[75%] ${
                  msg.sender === "user"
                    ? "ml-auto bg-gray-700"
                    : "mr-auto bg-gray-300 text-black"
                }`}
              >
                {msg.text}
              </motion.div>
            ))}
          </div>

          {/* Input */}
          <div className="flex items-center p-2 bg-gray-900">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 px-2 py-1 rounded-lg bg-white text-black outline-none"
            />
            <button
              onClick={handleSend}
              className="ml-2 bg-black text-white px-3 py-1.5 rounded-lg hover:bg-gray-800"
            >
              Send
            </button>
          </div>
        </motion.div>
      )}

      {/* Floating Button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className=" text-white px-4 py-3 rounded-full"
        >
          <img src="https://png.pngtree.com/png-clipart/20230401/original/pngtree-smart-chatbot-cartoon-clipart-png-image_9015126.png" alt="Ai bot" width={50} />
        </button>
      )}
    </div>
  );
}
