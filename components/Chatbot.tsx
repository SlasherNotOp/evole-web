"use client";
import { useState } from "react";
import Image from "next/image";

export default function Chatbot() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setOpen(!open)}
          className="w-16 h-16 rounded-full shadow-lg bg-white dark:bg-gray-100 flex items-center justify-center hover:scale-110 transition"
        >
          <Image
            src="/3.svg"
            alt="Chatbot"
            width={90}
            height={40}
            className="rounded-full"
          />
        </button>
      </div>

      {/* Chat Window */}
      {open && (
        <div
          className="fixed bottom-24 right-6 w-80 h-96 
     bg-[rgba(4,7,29,0.6)] backdrop-blur-lg 
     border border-white/10 shadow-2xl 
     rounded-2xl flex flex-col overflow-hidden z-50"
        >
          {/* Header */}
          <div
            className="bg-[rgba(12,14,35,0.7)] backdrop-blur-lg border-b border-white/10 
       text-white px-4 py-2 flex justify-between items-center"
          >
            <h2 className="text-lg font-semibold">Chat with us</h2>
            <button
              onClick={() => setOpen(false)}
              className="text-gray-400 hover:text-white transition"
            >
              ✕
            </button>
          </div>

          {/* Chat Body */}
          <div className="flex-1 p-3 overflow-y-auto space-y-2 text-sm">
            <div className="bg-white/10 text-white p-2 rounded-md w-fit max-w-[75%] shadow-sm">
              👋 Hello! How can we help you?
            </div>
          </div>

          {/* Input */}
          <div className="p-2 border-t border-white/10 flex bg-[rgba(12,14,35,0.6)] backdrop-blur-md">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 bg-transparent border border-white/20 text-white 
                 rounded-lg px-3 py-2 text-sm placeholder-gray-400 
                 focus:outline-none focus:border-purple-400"
            />
            <button
              className="ml-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 
                       text-white rounded-lg text-sm transition"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
