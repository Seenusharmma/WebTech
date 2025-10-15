import React, { useState, useEffect } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { HiVolumeUp, HiVolumeOff } from "react-icons/hi";

const Accordian = ({ data, activeId }) => {
  const [activeItems, setActiveItems] = useState([]);
  const [allowMultiple, setAllowMultiple] = useState(false);
  const [speakingId, setSpeakingId] = useState(null); // Track which question is being read

  // 🎧 Read answer aloud using SpeechSynthesis
  const readAnswer = (id, text) => {
    // If already speaking this one, stop it
    if (speakingId === id) {
      window.speechSynthesis.cancel();
      setSpeakingId(null);
      return;
    }

    // Stop any current speech before starting a new one
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = 1;
    utterance.pitch = 1;

    // When speaking ends, reset icon
    utterance.onend = () => setSpeakingId(null);

    window.speechSynthesis.speak(utterance);
    setSpeakingId(id);
  };

  // Auto-open from outside if needed
  useEffect(() => {
    if (activeId) {
      setActiveItems((prev) =>
        allowMultiple
          ? prev.includes(activeId)
            ? prev
            : [...prev, activeId]
          : [activeId]
      );
    }
  }, [activeId, allowMultiple]);

  // Toggle question open/close
  const toggleItem = (id) => {
    setActiveItems((prev) => {
      if (prev.includes(id)) {
        return prev.filter((itemId) => itemId !== id);
      } else {
        return allowMultiple ? [...prev, id] : [id];
      }
    });
  };

  const closeAll = () => {
    window.speechSynthesis.cancel();
    setSpeakingId(null);
    setActiveItems([]);
  };

  return (
    <div className="bg-gray-200 rounded-xl p-4 sm:p-6 md:p-8 shadow-xl max-w-5xl mx-auto">
      {/* Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="multiple-expand"
            checked={allowMultiple}
            onChange={() => setAllowMultiple(!allowMultiple)}
            className="w-4 h-4 sm:w-5 sm:h-5"
          />
          <label
            htmlFor="multiple-expand"
            className="ml-2 text-base sm:text-lg md:text-xl font-bold text-gray-800"
          >
            Allow Multiple Open
          </label>
        </div>

        <button
          onClick={closeAll}
          disabled={activeItems.length === 0}
          className="bg-red-600 text-white px-3 py-2 sm:px-4 sm:py-2 hover:bg-red-700 rounded-md text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Close All
        </button>
      </div>

      {/* Accordion Items */}
      <div className="space-y-3">
        {data.map((item) => (
          <div
            key={item.id}
            className="border border-gray-400 rounded-lg overflow-hidden shadow-sm"
          >
            <div
              className={`w-full flex justify-between items-center p-3 sm:p-4 transition-colors duration-300 ${
                activeItems.includes(item.id)
                  ? "bg-gray-400 text-gray-900"
                  : "bg-gray-300 hover:bg-gray-400 text-gray-800"
              }`}
            >
              {/* Question text (click to toggle) */}
              <button
                onClick={() => toggleItem(item.id)}
                className="flex-1 text-left font-medium text-sm sm:text-base md:text-lg"
              >
                {item.question}
              </button>

              {/* 🔊 Speaker button */}
              <button
                onClick={() => readAnswer(item.id, item.answer)}
                className="ml-3 text-xl sm:text-2xl text-gray-700 hover:text-gray-900 transition"
              >
                {speakingId === item.id ? <HiVolumeOff /> : <HiVolumeUp />}
              </button>

              {/* Dropdown arrow */}
              <span
                className={`transform transition-transform duration-300 text-lg sm:text-xl ${
                  activeItems.includes(item.id) ? "rotate-180" : ""
                }`}
              >
                <IoMdArrowDropdown />
              </span>
            </div>

            {/* Answer section */}
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                activeItems.includes(item.id)
                  ? "grid-rows-[1fr]"
                  : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div className="p-3 sm:p-4 bg-gray-100 text-gray-800 text-sm sm:text-base md:text-lg">
                  {item.answer}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordian;
