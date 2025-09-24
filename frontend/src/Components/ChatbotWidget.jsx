// src/components/ChatbotWidget.jsx
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const GEMINI_API_KEY = "YOUR_API_KEY";
const GEMINI_ENDPOINT = (key) =>
  `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${key}`;

// --- Rotating Cube ---
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

// --- BotModel ---
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

// --- Chatbot Widget ---
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

  const messagesEndRef = useRef(null);

  // --- Auto scroll ---
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, loading]);

  // --- Lock / unlock scroll when chat is open ---
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  // --- Text-to-Speech ---
  const speak = (text) => {
    if (!speakerOn) return;
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "en-IN";
      window.speechSynthesis.speak(utterance);
    }
  };

  // --- Helpers ---
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

  // --- Handle Send ---
  const handleSend = async (msg = null) => {
    const text = (msg ?? input).trim();
    if (!text) return;
    setMessages((p) => [...p, { text, sender: "user" }]);
    setInput("");
    setLoading(true);

    let reply = (await callGemini(text)) || "⚠️ Couldn't fetch an answer.";
    setMessages((p) => [...p, { text: reply, sender: "bot" }]);
    setLoading(false);
    speak(reply);
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
          className="w-[95vw] max-w-[420px] h-[85vh] sm:h-[600px] bg-black text-white rounded-2xl shadow-lg flex flex-col"
        >
          {/* Header */}
          <div className="bg-gray-900 px-4 py-2 flex justify-between items-center">
            <span className="font-semibold text-sm sm:text-base">AI Chatbot</span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSpeakerOn(!speakerOn)}
                className={`px-2 py-1 rounded text-xs sm:text-sm ${
                  speakerOn ? "bg-green-500" : "bg-red-500"
                }`}
                title={speakerOn ? "Speaker ON" : "Speaker OFF"}
              >
                🔊
              </button>
              <button onClick={() => setOpen(false)} className="text-lg">✖</button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 space-y-2 overflow-y-auto text-sm sm:text-base">
            {messages.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: m.sender === "user" ? 40 : -40 }}
                animate={{ opacity: 1, x: 0 }}
                className={`px-3 py-2 rounded-lg max-w-[85%] break-words ${
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
          <div className="flex items-center p-2 sm:p-3 bg-gray-900 gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              placeholder="Type your message..."
              className="flex-1 px-3 sm:px-4 py-2 rounded-lg text-white text-sm sm:text-base focus:outline-none"
            />
            <button
              onClick={() => handleSend()}
              className="bg-blue-500 px-3 sm:px-4 py-2 rounded text-white text-sm sm:text-base"
            >
              ➤
            </button>
            <button
              onClick={toggleVoice}
              className={`px-3 sm:px-4 py-2 rounded text-sm sm:text-base ${
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
          className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center"
        >
          <BotModel size={100} />
        </button>
      )}
    </div>
  );
}
