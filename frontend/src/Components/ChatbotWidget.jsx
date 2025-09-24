// src/components/ChatbotWidget.jsx
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const GEMINI_API_KEY = "AIzaSyCTIcW_htPS3aOJO7nkYxUnn3I9Dm6DHgk";
const GEMINI_ENDPOINT = (key) =>
  `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${key}`;

function RotatingCube() {
  const meshRef = useRef();
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });
  return (
    <mesh ref={meshRef} rotation={[0.4, 0.4, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="cyan" />
    </mesh>
  );
}

function BotModel({ size = 60 }) {
  return (
    <Canvas style={{ width: size, height: size }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 2, 2]} intensity={1} />
      <RotatingCube />
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
}

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [speakerOn, setSpeakerOn] = useState(true);
  const [messages, setMessages] = useState([
    {
      text: "👋 Hi! I’m your AI Assistant. Ask me about time, weather, news, crypto or predictions.",
      sender: "bot",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [listening, setListening] = useState(false);

  const containerRef = useRef(null);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, loading]);

  const speak = (text) => {
    if (!speakerOn) return;
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "en-IN";
      utterance.rate = 1;
      utterance.pitch = 1;
      window.speechSynthesis.speak(utterance);
    }
  };

  const getCurrentTimeString = () =>
    new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

  async function getWeather(city = "Delhi") {
    try {
      const res = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`
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
      const res = await fetch("https://www.reddit.com/r/worldnews/top.json?limit=3&t=day");
      const json = await res.json();
      return "📰 Top headlines:\n" + json.data.children.map(c => `• ${c.data.title}`).join("\n");
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

  const handleSend = async (msg = null) => {
    const text = (msg ?? input).trim();
    if (!text) return;
    setMessages(p => [...p, { text, sender: "user" }]);
    setInput("");
    setLoading(true);

    let reply = "⚠️ Couldn't get an answer.";
    const lower = text.toLowerCase();

    if (lower.includes("time")) reply = `🕒 ${getCurrentTimeString()}`;
    else if (lower.includes("weather")) reply = await getWeather(text.split("in ")[1]);
    else if (lower.includes("news")) reply = await getNews();
    else if (lower.includes("crypto") || lower.includes("bitcoin")) reply = await getCrypto();
    else if (lower.includes("future") || lower.includes("predict")) {
      const summary = `Now: ${getCurrentTimeString()}\n${await getWeather()}\n${await getNews()}\n${await getCrypto()}`;
      const gReply = await callGemini(
        `Based on this data: ${summary}, give me present scenario + 3 predictions.`
      );
      reply = gReply || summary + "\n🔮 Future uncertain, stay tuned.";
    } else {
      reply =
        (await callGemini(text)) || "🤖 I can tell you time, weather, news, crypto or predictions.";
    }

    setMessages(p => [...p, { text: reply, sender: "bot" }]);
    setLoading(false);
    speak(reply);
  };

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
          className="w-[90vw] sm:w-80 md:w-96 lg:w-[28rem] h-[75vh] sm:h-96 bg-black text-white rounded-2xl shadow-lg flex flex-col"
        >
          {/* Header */}
          <div className="bg-gray-900 px-4 py-2 flex justify-between items-center">
            <span className="font-semibold">AI Chatbot</span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSpeakerOn(!speakerOn)}
                className={`px-2 py-1 rounded text-sm ${speakerOn ? "bg-green-500" : "bg-red-500"}`}
                title={speakerOn ? "Speaker ON" : "Speaker OFF"}
              >
                🔊
              </button>
              <button onClick={() => setOpen(false)}>✖</button>
            </div>
          </div>

          {/* Messages */}
          <div
            ref={containerRef}
            className="flex-1 p-3 space-y-2 overflow-y-auto text-sm break-words"
          >
            {messages.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: m.sender === "user" ? 40 : -40 }}
                animate={{ opacity: 1, x: 0 }}
                className={`px-3 py-2 rounded-lg max-w-[80%] break-words ${
                  m.sender === "user"
                    ? "ml-auto bg-gray-700 text-white"
                    : "mr-auto bg-gray-300 text-black"
                }`}
              >
                {m.text}
              </motion.div>
            ))}
            {loading && (
              <div className="mr-auto bg-gray-300 text-black px-3 py-2 rounded-lg">Typing...</div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="flex flex-col sm:flex-row items-center p-2 bg-white gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              placeholder="Ask me anything..."
              className="flex-1 px-3 py-1 rounded-lg border-black text-black w-full sm:w-auto"
            />
            <div className="flex gap-2 mt-2 sm:mt-0">
              <button
                onClick={() => handleSend()}
                className="bg-blue-500 px-3 py-1 rounded text-white"
              >
                ➤
              </button>
              <button
                onClick={toggleVoice}
                className={`px-3 py-1 rounded ${listening ? "bg-red-500" : "bg-green-600"}`}
              >
                🎤
              </button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Floating button with 3D bot */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
        >
          <BotModel size={140} />
        </button>
      )}
    </div>
  );
}
