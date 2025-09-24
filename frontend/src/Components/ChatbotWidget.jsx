// src/components/ChatbotWidget.jsx
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const GEMINI_API_KEY = "AIzaSyCTIcW_htPS3aOJO7nkYxUnn3I9Dm6DHgk";
const GEMINI_ENDPOINT = (key) =>
  `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${key}`;

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "👋 Hi! I’m your AI Assistant. Ask me about time, weather, news, crypto or predictions.",
      sender: "bot",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [listening, setListening] = useState(false);

  const recognitionRef = useRef(null);
  const containerRef = useRef(null);
  const messagesEndRef = useRef(null);

  // --- Auto-scroll ---
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, loading]);

  // --- Speaker (Text-to-Speech) ---
  const speak = (text) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "en-IN";
      utterance.rate = 1;
      utterance.pitch = 1;
      window.speechSynthesis.speak(utterance);
    }
  };

  // --- Current time ---
  function getCurrentTimeString() {
    return new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  }

  // --- APIs ---
  async function getWeather(city = "Delhi") {
    try {
      const res = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
          city
        )}&count=1`
      );
      const geo = await res.json();
      const loc = geo?.results?.[0];
      const lat = loc?.latitude || 28.61;
      const lon = loc?.longitude || 77.20;
      const place = loc ? `${loc.name}, ${loc.country}` : city;

      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&timezone=Asia%2FKolkata`
      );
      const data = await weatherRes.json();
      const cw = data.current_weather;
      return `🌤️ Weather in ${place}: ${cw.temperature}°C, wind ${cw.windspeed} m/s`;
    } catch {
      return "⚠️ Weather unavailable.";
    }
  }

  async function getNews() {
    try {
      const res = await fetch(
        "https://www.reddit.com/r/worldnews/top.json?limit=3&t=day"
      );
      const json = await res.json();
      return (
        "📰 Top headlines:\n" +
        json.data.children.map((c) => `• ${c.data.title}`).join("\n")
      );
    } catch {
      return "⚠️ News unavailable.";
    }
  }

  async function getCrypto() {
    try {
      const res = await fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
      );
      const json = await res.json();
      return `💰 Bitcoin: $${json.bitcoin.usd}`;
    } catch {
      return "⚠️ Crypto price unavailable.";
    }
  }

  async function callGemini(prompt) {
    if (!GEMINI_API_KEY) return null;
    try {
      const res = await fetch(GEMINI_ENDPOINT(GEMINI_API_KEY), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
      });
      const data = await res.json();
      return data?.candidates?.[0]?.content?.parts?.[0]?.text || null;
    } catch {
      return null;
    }
  }

  // --- Handle user input ---
  const handleSend = async (msg = null) => {
    const text = (msg ?? input).trim();
    if (!text) return;
    setMessages((p) => [...p, { text, sender: "user" }]);
    setInput("");
    setLoading(true);

    let reply = "⚠️ Couldn't get an answer.";
    const lower = text.toLowerCase();

    if (lower.includes("time")) reply = `🕒 ${getCurrentTimeString()}`;
    else if (lower.includes("weather"))
      reply = await getWeather(text.split("in ")[1]);
    else if (lower.includes("news")) reply = await getNews();
    else if (lower.includes("crypto") || lower.includes("bitcoin"))
      reply = await getCrypto();
    else if (lower.includes("future") || lower.includes("predict")) {
      const summary = `Now: ${getCurrentTimeString()}\n${await getWeather()}\n${await getNews()}\n${await getCrypto()}`;
      const gReply = await callGemini(
        `Based on this data: ${summary}, give me present scenario + 3 predictions.`
      );
      reply = gReply || summary + "\n🔮 Future uncertain, stay tuned.";
    } else {
      reply =
        (await callGemini(text)) ||
        "🤖 I can tell you time, weather, news, crypto or predictions.";
    }

    setMessages((p) => [...p, { text: reply, sender: "bot" }]);
    setLoading(false);
    speak(reply); // 🔊 Read bot reply
  };

  // --- Voice input ---
  const toggleVoice = () => {
    if (!(window.SpeechRecognition || window.webkitSpeechRecognition)) {
      alert("Voice not supported.");
      return;
    }
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recog = new SR();
    recog.lang = "en-IN";
    recog.onresult = (e) => handleSend(e.results[0][0].transcript);
    recog.start();
    setListening(true);
    recog.onend = () => setListening(false);
  };

  const onKeyDown = (e) => e.key === "Enter" && handleSend();

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-[90vw] sm:w-80 h-[70vh] sm:h-96 bg-black text-white rounded-2xl shadow-lg flex flex-col"
        >
          {/* Header */}
          <div className="bg-gray-900 px-4 py-2 flex justify-between items-center">
            <span className="font-semibold">AI Chatbot</span>
            <button onClick={() => setOpen(false)}>✖</button>
          </div>

          {/* Messages */}
          <div
            ref={containerRef}
            className="flex-1 p-3 space-y-2 overflow-y-auto text-sm"
          >
            {messages.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: m.sender === "user" ? 40 : -40 }}
                animate={{ opacity: 1, x: 0 }}
                className={`px-3 py-2 rounded-lg max-w-[80%] ${
                  m.sender === "user"
                    ? "ml-auto bg-gray-700 text-white"
                    : "mr-auto bg-gray-300 text-black"
                }`}
              >
                {m.text}
              </motion.div>
            ))}
            {loading && (
              <div className="mr-auto bg-gray-300 text-black px-3 py-2 rounded-lg">
                Typing...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="flex items-center p-2 bg-gray-900 gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              placeholder="Ask me anything..."
              className="flex-1 px-3 py-1 rounded-lg text-black"
            />
            <button
              onClick={() => handleSend()}
              className="bg-blue-500 px-3 py-1 rounded text-white"
            >
              ➤
            </button>
            <button
              onClick={toggleVoice}
              className={`px-3 py-1 rounded ${
                listening ? "bg-red-500" : "bg-green-600"
              }`}
            >
              🎤
            </button>
          </div>
        </motion.div>
      )}

      {/* Floating button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg"
        >
          <img
            src="https://png.pngtree.com/png-clipart/20230401/original/pngtree-smart-chatbot-cartoon-clipart-png-image_9015126.png"
            className="w-10 h-10"
            alt="Bot"
          />
        </button>
      )}
    </div>
  );
}
