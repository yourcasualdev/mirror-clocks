"use client";

import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/src/lib/utils";

export function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={cn(
        "fixed bottom-8 left-1/2 -translate-x-1/2 transition-opacity duration-300 z-50",
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
      onClick={scrollToContent}
      aria-label="Scroll down"
      type="button"
    >
      <div className="animate-bounce bg-white/80 dark:bg-black/80 p-2 rounded-full shadow-lg backdrop-blur-sm border border-pink-100 dark:border-pink-900">
        <ChevronDown className="w-6 h-6 text-pink-600 dark:text-pink-400" />
      </div>
    </button>
  );
}
