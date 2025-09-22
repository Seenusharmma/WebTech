// src/components/ChatbotWidget.jsx
import { useState } from "react";
import { motion } from "framer-motion";

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! I’m your AI Assistant. How can I help you today?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  // ⚡ Direct Gemini API Call
  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyCTIcW_htPS3aOJO7nkYxUnn3I9Dm6DHgk",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ parts: [{ text: input }] }],
          }),
        }
      );

      const data = await res.json();

      let botReply =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "⚠️ Sorry, I couldn’t generate a reply.";

      const botMessage = { text: botReply, sender: "bot" };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Chatbot error:", error);
      setMessages((prev) => [
        ...prev,
        { text: "⚠️ Sorry, something went wrong.", sender: "bot" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
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
            <button
              onClick={() => setOpen(false)}
              className="text-gray-400 hover:text-white"
            >
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

            {loading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mr-auto bg-gray-300 text-black px-3 py-2 rounded-lg max-w-[75%]"
              >
                Typing...
              </motion.div>
            )}
          </div>

          {/* Input */}
          <div className="flex items-center p-2 bg-gray-900">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 px-2 py-1 rounded-lg bg-white text-black outline-none"
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={handleSend}
              disabled={loading}
              className="ml-2 bg-black text-white px-3 py-1.5 rounded-lg hover:bg-gray-800 disabled:opacity-50"
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
          className="w-14 h-14 flex items-center justify-center rounded-full hover:scale-110 transition-transform"
        >
          <img
            src="https://png.pngtree.com/png-clipart/20230401/original/pngtree-smart-chatbot-cartoon-clipart-png-image_9015126.png"
            alt="Ai bot"
            className="w-10 h-10"
          />
        </button>
      )}
    </div>
  );
}
