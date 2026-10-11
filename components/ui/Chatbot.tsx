"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  Bot,
  User,
  Trash2,
  Minimize2,
  Maximize2,
  ChevronDown
} from "lucide-react";
import Link from "next/link";
import { ChatMessage } from "@/lib/chatbot-engine";

const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: "init-1",
    sender: "bot",
    text: "Hello! 👋 I'm **Wahaj's AI Assistant**.\n\nHow can I help you explore Wahaj's experience, technical skills, or enterprise projects today?",
    timestamp: "Just now",
    suggestions: [
      "💼 Tell me about Wahaj's experience",
      "🛠️ What technologies does he use?",
      "🚀 Show me his top projects",
      "📩 How can I contact him?"
    ]
  }
];

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Load from localStorage on mount (and purge legacy cache)
  useEffect(() => {
    try {
      localStorage.removeItem("portfolio_chat_history"); // Purge legacy cache with old name
      const saved = localStorage.getItem("wahaj_portfolio_chat_history_v2");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          const cleaned = parsed.map((m: ChatMessage) => ({
            ...m,
            text: m.text.replace(/asghar\s*(ali)?/gi, "Wahaj Ismail")
          }));
          setMessages(cleaned);
        }
      }
    } catch (e) {
      console.error("Failed to load chat history", e);
    }
  }, []);

  // Save to localStorage when messages change
  useEffect(() => {
    try {
      if (messages.length > 0) {
        localStorage.setItem("wahaj_portfolio_chat_history_v2", JSON.stringify(messages));
      }
    } catch (e) {
      console.error("Failed to save chat history", e);
    }
  }, [messages]);

  // Auto scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen && !isMinimized) {
      scrollToBottom();
    }
  }, [messages, isOpen, isMinimized, isTyping]);

  const handleSendMessage = async (textToSend?: string) => {
    const queryText = (textToSend || inputValue).trim();
    if (!queryText) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: "user",
      text: queryText,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputValue("");
    setIsTyping(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: queryText })
      });

      const data = await res.json();

      setTimeout(() => {
        const botMsg: ChatMessage = {
          id: (Date.now() + 1).toString(),
          sender: "bot",
          text: data.reply || "Sorry, I couldn't process that request right now.",
          timestamp: data.timestamp || new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          suggestions: data.suggestions
        };

        setMessages((prev) => [...prev, botMsg]);
        setIsTyping(false);
      }, 500);
    } catch (error) {
      console.error("Chat error:", error);
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            sender: "bot",
            text: "I experienced a brief connection glitch. Feel free to re-submit your query or visit the [Contact page](/contact)!",
            timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
            suggestions: ["📩 Contact Wahaj", "💼 Experience", "🛠️ Skills"]
          }
        ]);
        setIsTyping(false);
      }, 500);
    }
  };

  const handleClearHistory = () => {
    setMessages(INITIAL_MESSAGES);
    try {
      localStorage.removeItem("wahaj_portfolio_chat_history_v2");
      localStorage.removeItem("portfolio_chat_history");
    } catch (e) {
      console.error(e);
    }
  };

  // Helper to render markdown-like formatted text with links and bold text
  const renderFormattedText = (text: string) => {
    // Replace markdown links [label](url) with React components
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = linkRegex.exec(text)) !== null) {
      const [fullMatch, label, url] = match;
      const matchIndex = match.index;

      if (matchIndex > lastIndex) {
        parts.push(renderBoldText(text.substring(lastIndex, matchIndex), `text-${lastIndex}`));
      }

      if (url.startsWith("/")) {
        parts.push(
          <Link
            key={`link-${matchIndex}`}
            href={url}
            onClick={() => {
              if (window.innerWidth < 640) setIsOpen(false);
            }}
            className="text-indigo-600 dark:text-indigo-400 font-semibold underline underline-offset-2 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
          >
            {label}
          </Link>
        );
      } else {
        parts.push(
          <a
            key={`link-${matchIndex}`}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 dark:text-indigo-400 font-semibold underline underline-offset-2 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
          >
            {label}
          </a>
        );
      }

      lastIndex = matchIndex + fullMatch.length;
    }

    if (lastIndex < text.length) {
      parts.push(renderBoldText(text.substring(lastIndex), `text-${lastIndex}`));
    }

    return parts;
  };

  const renderBoldText = (text: string, keyPrefix: string) => {
    const boldRegex = /\*\*([^*]+)\*\*/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = boldRegex.exec(text)) !== null) {
      const [fullMatch, boldContent] = match;
      const matchIndex = match.index;

      if (matchIndex > lastIndex) {
        parts.push(text.substring(lastIndex, matchIndex));
      }

      parts.push(
        <strong key={`${keyPrefix}-bold-${matchIndex}`} className="font-semibold text-slate-900 dark:text-slate-100">
          {boldContent}
        </strong>
      );

      lastIndex = matchIndex + fullMatch.length;
    }

    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    return parts;
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Floating Toggle Button */}
      {!isOpen && (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            setIsOpen(true);
            setIsMinimized(false);
            setHasUnread(false);
          }}
          className="relative group flex items-center gap-3 bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 text-white p-4 rounded-full shadow-xl hover:shadow-indigo-500/25 transition-all duration-300 border border-white/20"
          aria-label="Open AI Chatbot"
        >
          <div className="relative">
            <Bot className="w-7 h-7 text-white" />
            <Sparkles className="w-3.5 h-3.5 text-amber-300 absolute -top-1 -right-1 animate-pulse" />
          </div>

          <span className="hidden sm:inline font-medium text-sm pr-1">
            Chat with AI
          </span>

          {hasUnread && (
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white dark:border-slate-900"></span>
            </span>
          )}
        </motion.button>
      )}

      {/* Main Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              height: isMinimized ? "64px" : "540px"
            }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className={`w-[92vw] sm:w-[400px] bg-white/95 dark:bg-[#0d0f22]/95 backdrop-blur-xl border border-slate-200 dark:border-indigo-500/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300 ${
              isMinimized ? "h-16" : "h-[540px]"
            }`}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-700 text-white p-3.5 px-4 flex items-center justify-between shadow-md select-none shrink-0">
              <div className="flex items-center gap-3">
                <div className="relative p-2 bg-white/10 rounded-xl backdrop-blur-md border border-white/15">
                  <Bot className="w-5 h-5 text-indigo-100" />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 border-2 border-indigo-700 rounded-full"></span>
                </div>
                <div>
                  <h3 className="font-semibold text-sm leading-tight flex items-center gap-1.5">
                    Wahaj&apos;s AI Assistant
                    <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  </h3>
                  <p className="text-[11px] text-indigo-200 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block"></span>
                    Online • Trained on Portfolio
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                {!isMinimized && (
                  <button
                    onClick={handleClearHistory}
                    title="Clear Chat History"
                    className="p-1.5 text-indigo-200 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  title={isMinimized ? "Expand Chat" : "Minimize Chat"}
                  className="p-1.5 text-indigo-200 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                >
                  {isMinimized ? (
                    <ChevronDown className="w-4 h-4 rotate-180" />
                  ) : (
                    <Minimize2 className="w-4 h-4" />
                  )}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  title="Close Chat"
                  className="p-1.5 text-indigo-200 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Chat Content Body (Visible when not minimized) */}
            {!isMinimized && (
              <>
                {/* Messages List */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 text-sm scrollbar-thin scrollbar-thumb-indigo-500/20">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex flex-col ${
                        msg.sender === "user" ? "items-end" : "items-start"
                      }`}
                    >
                      <div
                        className={`flex items-start gap-2.5 max-w-[88%] ${
                          msg.sender === "user" ? "flex-row-reverse" : "flex-row"
                        }`}
                      >
                        <div
                          className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-xs font-semibold mt-0.5 ${
                            msg.sender === "user"
                              ? "bg-indigo-600 text-white"
                              : "bg-gradient-to-tr from-purple-600 to-indigo-600 text-white shadow-sm"
                          }`}
                        >
                          {msg.sender === "user" ? (
                            <User className="w-4 h-4" />
                          ) : (
                            <Bot className="w-4 h-4" />
                          )}
                        </div>

                        <div
                          className={`p-3 rounded-2xl whitespace-pre-wrap leading-relaxed ${
                            msg.sender === "user"
                              ? "bg-indigo-600 text-white rounded-tr-none shadow-sm"
                              : "bg-slate-100 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700/50 rounded-tl-none"
                          }`}
                        >
                          {renderFormattedText(msg.text)}
                        </div>
                      </div>

                      {/* Timestamp */}
                      <span className="text-[10px] text-slate-400 dark:text-slate-500 mt-1 px-9">
                        {msg.timestamp}
                      </span>

                      {/* Interactive Suggestions Chips */}
                      {msg.sender === "bot" && msg.suggestions && msg.suggestions.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mt-2.5 pl-9 max-w-[95%]">
                          {msg.suggestions.map((sug, idx) => (
                            <button
                              key={idx}
                              onClick={() => handleSendMessage(sug)}
                              className="text-xs px-2.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/40 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 transition-all duration-200 text-left cursor-pointer"
                            >
                              {sug}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}

                  {/* Typing Indicator */}
                  {isTyping && (
                    <div className="flex items-center gap-2 text-slate-400 pl-2">
                      <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-600 text-white flex items-center justify-center">
                        <Bot className="w-4 h-4" />
                      </div>
                      <div className="bg-slate-100 dark:bg-slate-800/80 p-3 rounded-2xl rounded-tl-none border border-slate-200/80 dark:border-slate-700/50 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-indigo-500 animate-bounce"></span>
                        <span className="w-2 h-2 rounded-full bg-indigo-500 animate-bounce delay-150"></span>
                        <span className="w-2 h-2 rounded-full bg-indigo-500 animate-bounce delay-300"></span>
                      </div>
                    </div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="p-3 bg-slate-50 dark:bg-slate-900/80 border-t border-slate-200 dark:border-slate-800 flex items-center gap-2">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        handleSendMessage();
                      }
                    }}
                    placeholder="Ask about Wahaj's skills, projects..."
                    className="flex-1 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 placeholder-slate-400 text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
                  />
                  <button
                    onClick={() => handleSendMessage()}
                    disabled={!inputValue.trim() || isTyping}
                    className="p-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md shrink-0"
                    aria-label="Send message"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
