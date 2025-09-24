// src/components/ChatbotWidget.jsx
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

/**
 * ChatbotWidget.jsx
 *
 * Features:
 * - Text chat with Gemini fallback
 * - Voice input (Web Speech API)
 * - Auto-scroll to newest message
 * - Real-time data: time (Asia/Kolkata), weather (Open-Meteo), news (Reddit fallback), crypto price (CoinGecko)
 * - Present scenario + future prediction (uses Gemini if key is present)
 *
 * IMPORTANT:
 * - Replace GEMINI_API_KEY below with your key if you want predictions from Gemini.
 * - Some APIs may be blocked by CORS in browsers; use a server proxy if you get CORS errors.
 */

const GEMINI_API_KEY = "AIzaSyCTIcW_htPS3aOJO7nkYxUnn3I9Dm6DHgk"; // <-- Replace or remove if you don't want client-side Gemini calls
const GEMINI_ENDPOINT = (key) =>
  `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${key}`;

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "Hi! I’m your AI Assistant. Ask me about time, weather, news, crypto or ask for predictions.",
      sender: "bot",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [listening, setListening] = useState(false);

  const recognitionRef = useRef(null);
  const containerRef = useRef(null);
  const messagesEndRef = useRef(null);

  // --- Auto-scroll to bottom whenever messages change ---
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
    } else if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages, loading]);

  // --- Utility: formatted current time (Asia/Kolkata) ---
  function getCurrentTimeString() {
    try {
      const now = new Date();
      return now.toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
    } catch {
      return new Date().toLocaleString();
    }
  }

  // --- Utility: geocode city via Open-Meteo geocoding (no API key) ---
  async function geocodeCity(city) {
    try {
      const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
        city
      )}&count=1`;
      const res = await fetch(url);
      if (!res.ok) throw new Error("Geocoding failed");
      const json = await res.json();
      const r = json?.results?.[0];
      if (!r) return null;
      return { lat: r.latitude, lon: r.longitude, name: `${r.name}, ${r.country}` };
    } catch (err) {
      console.warn("geocodeCity error:", err);
      return null;
    }
  }

  // --- Utility: get current location coords (if user allows) ---
  function getCurrentCoords() {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) return reject(new Error("Geolocation not supported"));
      navigator.geolocation.getCurrentPosition(
        (pos) => resolve({ lat: pos.coords.latitude, lon: pos.coords.longitude }),
        (err) => reject(err),
        { timeout: 8000 }
      );
    });
  }

  // --- Map Open-Meteo weather codes to human text (basic) ---
  function interpretWeatherCode(code) {
    const mapping = {
      0: "Clear sky",
      1: "Mainly clear",
      2: "Partly cloudy",
      3: "Overcast",
      45: "Fog",
      48: "Depositing rime fog",
      51: "Drizzle: Light",
      53: "Drizzle: Moderate",
      55: "Drizzle: Dense",
      61: "Rain: Slight",
      63: "Rain: Moderate",
      65: "Rain: Heavy",
      71: "Snow fall: Slight",
      73: "Snow fall: Moderate",
      75: "Snow fall: Heavy",
      80: "Rain showers: Slight",
      81: "Rain showers: Moderate",
      82: "Rain showers: Violent",
      95: "Thunderstorm",
      96: "Thunderstorm with slight hail",
      99: "Thunderstorm with heavy hail",
    };
    return mapping[code] || "Unknown conditions";
  }

  // --- Get weather. If city is provided, geocode it; otherwise try geolocation; fallback to Delhi coords. ---
  async function getWeather(city) {
    try {
      let lat, lon, placeName;
      if (city) {
        const geo = await geocodeCity(city);
        if (geo) {
          lat = geo.lat;
          lon = geo.lon;
          placeName = geo.name;
        } else {
          // if geocoding fails, fallback to city literal
          placeName = city;
        }
      }

      if (!lat || !lon) {
        // try geolocation
        try {
          const coords = await getCurrentCoords();
          lat = coords.lat;
          lon = coords.lon;
          placeName = "your area";
        } catch {
          // fallback: Delhi
          lat = 28.6139;
          lon = 77.209;
          placeName = "Delhi (fallback)";
        }
      }

      const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&timezone=Asia%2FKolkata`;
      const res = await fetch(url);
      if (!res.ok) throw new Error("Weather API failed");
      const data = await res.json();
      const cw = data?.current_weather;
      if (!cw) return "⚠️ Could not get current weather.";
      const desc = interpretWeatherCode(cw.weathercode);
      const temp = cw.temperature;
      const wind = cw.windspeed;
      return `🌤️ Weather in ${placeName}: ${desc}, ${temp}°C, wind ${wind} m/s.`;
    } catch (err) {
      console.warn("getWeather error:", err);
      return "⚠️ Sorry, I couldn't fetch live weather right now.";
    }
  }

  // --- Fetch top headlines (simple public fallback via Reddit) ---
  async function getNews() {
    try {
      // Public fallback that often works without API keys
      const res = await fetch("https://www.reddit.com/r/worldnews/top.json?limit=3&t=day");
      if (!res.ok) throw new Error("News fetch failed");
      const json = await res.json();
      const items = json?.data?.children || [];
      if (!items.length) return "📰 No headlines found.";
      const titles = items.map((it) => `• ${it.data.title}`).join("\n");
      return `📰 Top headlines (r/worldnews):\n${titles}`;
    } catch (err) {
      console.warn("getNews error:", err);
      return "⚠️ Sorry, I couldn't fetch news right now.";
    }
  }

  // --- Fetch crypto price (CoinGecko public API) ---
  async function getCryptoPrice(coin = "bitcoin") {
    try {
      const res = await fetch(
        `https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=usd`
      );
      if (!res.ok) throw new Error("CoinGecko failed");
      const json = await res.json();
      const price = json?.[coin]?.usd;
      if (!price) return "⚠️ Price not available.";
      return `$${price.toLocaleString(undefined, { maximumFractionDigits: 2 })}`;
    } catch (err) {
      console.warn("getCryptoPrice error:", err);
      return "⚠️ Couldn't fetch crypto price.";
    }
  }

  // --- Call Gemini (if key provided) ---
  async function callGemini(promptText) {
    if (!GEMINI_API_KEY) return null;
    try {
      const body = {
        // Gemini V1-like request shape used earlier in your code
        contents: [{ parts: [{ text: promptText }] }],
      };
      const res = await fetch(GEMINI_ENDPOINT(GEMINI_API_KEY), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!res.ok) {
        console.warn("Gemini API returned non-OK:", res.status);
        return null;
      }
      const data = await res.json();
      const candidate = data?.candidates?.[0]?.content?.parts?.[0]?.text;
      return candidate ?? null;
    } catch (err) {
      console.warn("callGemini error:", err);
      return null;
    }
  }

  // --- Voice recognition initialization ---
  const initSpeechRecognition = () => {
    if (!(window.SpeechRecognition || window.webkitSpeechRecognition)) {
      alert("Speech Recognition is not supported in this browser.");
      return null;
    }
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SR();
    recognition.lang = "en-IN";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognition.continuous = false;

    recognition.onstart = () => setListening(true);
    recognition.onend = () => setListening(false);
    recognition.onerror = (e) => {
      console.warn("Speech recognition error:", e.error);
      setListening(false);
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setInput(transcript);
      // auto-send recognized speech
      handleSend(transcript);
    };

    recognitionRef.current = recognition;
    return recognition;
  };

  const toggleVoice = () => {
    let recognition = recognitionRef.current || initSpeechRecognition();
    if (!recognition) return;

    if (listening) {
      recognition.stop();
      setListening(false);
    } else {
      try {
        recognition.start();
      } catch (e) {
        console.warn("recognition.start error:", e);
      }
    }
  };

  // --- Main handler: analyze input, call appropriate real-data functions or Gemini ---
  const handleSend = async (messageTextParam = null) => {
    const messageText = (messageTextParam ?? input ?? "").trim();
    if (!messageText) return;

    // Append user message immediately
    const userMessage = { text: messageText, sender: "user", ts: Date.now() };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    // Prepare to produce a single botReply (string)
    let botReply = "⚠️ Sorry, I couldn't produce a reply right now.";
    try {
      const textLower = messageText.toLowerCase();

      // 1) Time / Date
      if (textLower.includes("/time") || /\bwhat(?:'s| is)? the time|current time|date\b/i.test(textLower)) {
        botReply = `🕒 Current time (Asia/Kolkata): ${getCurrentTimeString()}`;
      }
      // 2) Weather (supports "weather in <city>" or fallback to geolocation)
      else if (textLower.includes("weather")) {
        // try extract city after "in"
        let city = null;
        const m = messageText.match(/weather\s+(?:in|at)\s+([a-z\s,]+)/i);
        if (m && m[1]) city = m[1].trim();
        botReply = await getWeather(city);
      }
      // 3) News
      else if (textLower.includes("news")) {
        botReply = await getNews();
      }
      // 4) Crypto / Bitcoin
      else if (textLower.includes("bitcoin") || textLower.includes("btc") || textLower.includes("crypto")) {
        const price = await getCryptoPrice("bitcoin");
        botReply = `💰 Bitcoin price (USD): ${price}`;
      }
      // 5) Present & Future predictions / scenario
      else if (
        textLower.includes("predict") ||
        textLower.includes("prediction") ||
        textLower.includes("future") ||
        textLower.includes("scenario") ||
        textLower.includes("present")
      ) {
        // gather key real-time pieces
        const now = getCurrentTimeString();
        const weather = await getWeather(); // tries geolocation if no city
        const news = await getNews();
        const btc = await getCryptoPrice("bitcoin");

        const summary = `Time: ${now}\nWeather: ${weather}\nNews: ${news}\nBitcoin: ${btc}\nUser query: ${messageText}`;

        // If Gemini is available, ask it to produce present scenario + 3 predictions
        const prompt = `You are a concise assistant. Based on the following real-time data, produce:
1) A brief present scenario (2-3 sentences)
2) Three clear future predictions (each 1 sentence) for the next 7 days.

Data:
${summary}

Output: First the present scenario, then numbered predictions.`;
        const gReply = await callGemini(prompt);
        if (gReply) {
          botReply = gReply;
        } else {
          // fallback simple heuristic prediction
          botReply =
            `${summary}\n\n🔮 Quick prediction (fallback):\n` +
            "• Present: The world shows mixed signals—markets fluctuate and weather patterns remain variable.\n" +
            "1. Short-term: Expect small continued volatility in crypto and markets.\n" +
            "2. Weather: Localized variations possible; monitor regional forecasts.\n" +
            "3. News: Headlines may continue driven by ongoing major stories.";
        }
      }
      // 6) Default: pass to Gemini for conversational reply (if available)
      else {
        const gReply = await callGemini(messageText);
        if (gReply) botReply = gReply;
        else
          botReply =
            "🤖 (No Gemini key or response) I can fetch time, weather, news, crypto, or give predictions if you ask.";
      }
    } catch (err) {
      console.error("handleSend error:", err);
      botReply = "⚠️ Sorry — something went wrong while fetching data.";
    } finally {
      // Append bot reply and finish
      setMessages((prev) => [...prev, { text: botReply, sender: "bot", ts: Date.now() }]);
      setLoading(false);
    }
  };

  // convenience: Enter key
  const onKeyDownInput = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (!loading) handleSend();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat window */}
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
            <div className="flex items-center gap-2">
              <button
                title="Close"
                onClick={() => setOpen(false)}
                className="text-gray-400 hover:text-white"
              >
                ✖
              </button>
            </div>
          </div>

          {/* Messages */}
          <div
            ref={containerRef}
            className="flex-1 p-3 space-y-2 overflow-y-auto text-sm"
            aria-live="polite"
          >
            {messages.map((msg, i) => (
              <motion.div
                key={i + (msg.ts || 0)}
                initial={{ opacity: 0, x: msg.sender === "user" ? 50 : -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.18 }}
                className={`px-3 py-2 rounded-lg max-w-[80%] whitespace-pre-line break-words ${
                  msg.sender === "user"
                    ? "ml-auto bg-gray-700 text-white"
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

            {/* scroll anchor */}
            <div ref={messagesEndRef} />
          </div>

          {/* Input + controls */}
          <div className="flex items-center p-2 bg-gray-900 gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder='Type a message. Try "weather in Mumbai", "/time", "news", "predict future"'
              onKeyDown={onKeyDownInput}
              className="flex-1 px-3 py-1 rounded-lg bg-white text-black outline-none text-sm"
              aria-label="Chat input"
            />

            <button
              onClick={() => handleSend()}
              disabled={loading}
              className="ml-1 bg-black text-white px-3 py-1.5 rounded-lg hover:bg-gray-800 disabled:opacity-50 text-sm"
            >
              Send
            </button>

            <button
              onClick={toggleVoice}
              title="Voice input"
              className={`ml-1 px-3 py-1.5 rounded-full text-white text-sm ${
                listening ? "bg-red-500" : "bg-blue-500"
              }`}
            >
              🎤
            </button>
          </div>
        </motion.div>
      )}

      {/* Floating open button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="w-14 h-14 flex items-center justify-center rounded-full hover:scale-110 transition-transform bg-white"
          aria-label="Open chat"
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
