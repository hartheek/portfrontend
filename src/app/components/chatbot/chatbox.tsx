"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageSquare } from "lucide-react";
import { ChatCompletionMessage } from "./chatInterface";
import createChatCompletion from "./createChatcompletion";

export default function ChatPopup() {
  const [isMounted, setIsMounted] = useState(false); // hook
  const [isOpen, setIsOpen] = useState(true);
  const [messages, setMessages] = useState<ChatCompletionMessage[]>([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  if (!isMounted) {
    return null;
  }

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleMessage = async () => {
    if (!message.trim()) return;
  
    const userMessage: ChatCompletionMessage = {
      role: "user",
      content: message,
    };
  
    setMessages((prev) => [...prev, userMessage]);
    setMessage("");
    setLoading(true);
  
    try {
      const response = await createChatCompletion([...messages, userMessage]);
      const botReply = response.choices[0]?.message;
  
      if (botReply) {
         // Ensure the bot reply is cast to ChatCompletionMessage
         const typedBotReply: ChatCompletionMessage = {
          role: "assistant",  // or dynamically assign if necessary
          content: botReply.content,
        };
        setMessages((prev) => [...prev, typedBotReply]);
      }
    } catch (error) {
      console.error("Error fetching response:", error);
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div>
      {/* Floating Button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 p-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 focus:outline-none"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>

      {/* Chatbox Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-20 right-6 w-80 h-[500px] bg-white rounded-lg shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-blue-600 text-white px-4 py-2 font-semibold">
              Talk To Me 💬
            </div>

            {/* Chat Messages */}
            <div className="flex-1 p-4 overflow-y-auto text-sm space-y-4">
              {/* Welcome Messages */}
              <div className="bg-gray-100 p-3 rounded-md max-w-[75%] self-start">
                <p className="font-semibold text-gray-700 mb-1">Bot:</p>
                <p>Hi there! How can we help you?</p>
              </div>
              <div className="bg-gray-100 p-3 rounded-md max-w-[75%] self-start">
                <p className="font-semibold text-gray-700 mb-1">Bot:</p>
                <p>You can ask anything about Hartheek!</p>
              </div>

              {/* Dynamic Messages */}
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex flex-col ${message.role === "user" ? "items-end" : "items-start"}`}
                >
                  <div
                    className={`${
                      message.role === "user" ? "bg-blue-100" : "bg-gray-100"
                    } p-3 rounded-lg max-w-[75%]`}
                  >
                    <p className="font-semibold text-gray-700 mb-1">
                      {message.role === "user" ? "You:" : "Bot:"}
                    </p>
                    <p>{message.content}</p>
                  </div>
                </div>
              ))}

              {/* Loading Spinner */}
              {loading && (
                <div className="flex justify-center">
                  <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-blue-600"></div>
                </div>
              )}

              {/* Scroll Target */}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="border-t p-2">
              <input
                type="text"
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={async (e) => {
                  if (e.key === 'Enter' && !loading) {
                    await handleMessage();
                  }
                }}
                className="w-full border rounded-full px-4 py-2 text-sm focus:outline-none"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
