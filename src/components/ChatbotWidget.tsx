import React, { useState, useEffect, useRef } from "react";
import Chatbot from "./Chatbot";
import { CSSTransition } from "react-transition-group";

const ChatbotWidget: React.FC = () => {
  const [open, setOpen] = useState(false);
  const widgetRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Handle click outside to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        widgetRef.current &&
        !widgetRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // FIX: Always clean up, but only remove if open
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  // Handle escape key to close
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  // Prevent body scroll when open (optional)
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  // Add this style for CSSTransition if not present in your global CSS
  // You can move this <style> to your global CSS file if you prefer
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <style>{`
        .chatbot-transition-enter {
          opacity: 0;
          transform: translateY(30px) scale(0.95);
        }
        .chatbot-transition-enter-active {
          opacity: 1;
          transform: translateY(0) scale(1);
          transition: opacity 300ms, transform 300ms;
        }
        .chatbot-transition-exit {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        .chatbot-transition-exit-active {
          opacity: 0;
          transform: translateY(30px) scale(0.95);
          transition: opacity 300ms, transform 300ms;
        }
      `}</style>
      {/* Floating Chatbot Icon Button */}
      <button
        ref={buttonRef}
        className={`flex items-center justify-center w-14 h-14 rounded-full shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary ${
          open ? "bg-destructive text-destructive-foreground transform rotate-90" : "bg-primary text-primary-foreground hover:scale-110"
        }`}
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close chatbot" : "Open chatbot"}
        aria-expanded={open}
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-7 h-7 transition-transform duration-300"
        >
          {open ? (
            <>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </>
          ) : (
            <>
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              <circle cx="9" cy="10" r="1" />
              <circle cx="15" cy="10" r="1" />
            </>
          )}
        </svg>
      </button>

      {/* Chatbot Modal/Popover with animation */}
      <CSSTransition
        in={open}
        timeout={300}
        classNames="chatbot-transition"
        unmountOnExit
      >
        <div
          ref={widgetRef}
          className="fixed bottom-24 right-6 w-[350px] max-w-[90vw] bg-background rounded-lg shadow-xl border border-border overflow-hidden"
          role="dialog"
          aria-modal="true"
          aria-labelledby="chatbot-heading"
        >
          <div className="relative h-full flex flex-col">
            <div className="p-4 border-b border-border bg-muted/50 flex justify-between items-center">
              <h2 id="chatbot-heading" className="font-semibold text-lg">
                Chat Assistant
              </h2>
              <button
                className="text-muted-foreground hover:text-foreground p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                onClick={() => setOpen(false)}
                aria-label="Close chatbot"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="4" y1="4" x2="16" y2="16" />
                  <line x1="16" y1="4" x2="4" y2="16" />
                </svg>
              </button>
            </div>
            <div className="flex-1 overflow-hidden">
              <Chatbot />
            </div>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
};

// This error is unrelated to your ChatbotWidget code.
// To fix the 404 favicon error, add a favicon.ico file to your project's public directory (usually `public/` or `static/` at the root).
// No code changes are needed in this file.

export default ChatbotWidget;