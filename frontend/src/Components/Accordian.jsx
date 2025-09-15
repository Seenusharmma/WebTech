import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const Accordian = ({ data }) => {
  const [activeItems, setActiveItems] = useState([]);
  const [allowMultiple, setAllowMultiple] = useState(false);

  const toogleItem = (id) => {
    setActiveItems((prev) => {
      if (prev.includes(id)) {
        return prev.filter((itemId) => itemId !== id);
      } else {
        if (allowMultiple) {
          return [...prev, id];
        } else {
          return [id];
        }
      }
    });
  };

  return (
    <div className="bg-gray-200 rounded-xl p-6 shadow-xl">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="multiple-expand"
            checked={allowMultiple}
            onChange={() => setAllowMultiple(!allowMultiple)}
            className="w-5 h-5 bg-red-800"
          />
          <label
            htmlFor="multiple-expand"
            className="ml-2 text-xl font-bold text-gray-800"
          >
            Allow Multiple Open
          </label>
        </div>
        <button
          onClick={() => setActiveItems([])}
          disabled={activeItems.length === 0}
          className="bg-red-600 text-white px-4 py-2 hover:bg-red-700 rounded-md text-sm disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Close All
        </button>
      </div>

      <div className="space-y-3">
        {data.map((item) => (
          <div
            key={item.id}
            className="border border-gray-400 rounded-lg overflow-hidden shadow-sm"
          >
            <button
              onClick={() => toogleItem(item.id)}
              className={`w-full flex justify-between items-center p-4 transition-colors duration-300 
                ${
                  activeItems.includes(item.id)
                    ? "bg-gray-400 text-gray-900 text-xl"
                    : "bg-gray-300 hover:bg-gray-400 text-gray-800 text-xl"
                }`}
            >
              <span className="font-medium">{item.question}</span>
              <span
                className={`transform transition-transform duration-300 ${
                  activeItems.includes(item.id) ? "rotate-180" : ""
                }`}
              >
                <IoMdArrowDropdown />
              </span>
            </button>

            <div
              className={`grid transition-all duration-300 ease-in-out ${
                activeItems.includes(item.id)
                  ? "grid-rows-[1fr]"
                  : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div className="p-4 bg-gray-100 text-gray-800 text-xl">
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
