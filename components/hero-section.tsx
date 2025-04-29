import { Star } from "lucide-react";
import { CurrentClock } from "./current-clock";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function HeroSection() {
  return (
    <div className="relative bg-gradient-to-r from-pink-200 via-purple-200 to-pink-200 pt-8 pb-16 md:py-20 px-4 text-center overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        {Array.from({ length: 20 }).map((_, i) => (
          <Star
            key={i}
            className="absolute text-white animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.7 + 0.3,
              width: `${Math.random() * 20 + 10}px`,
              height: `${Math.random() * 20 + 10}px`,
            }}
          />
        ))}
      </div>
      <div className="relative z-10">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-pink-800 mb-4">
          Mirror Clock
        </h1>
        {/* <p className="text-xl md:text-2xl text-purple-800 max-w-2xl mx-auto">
          Discover the mystical meanings behind mirror hours and their spiritual
          significance
        </p> */}
        <div className="mt-8">
          <CurrentClock />
        </div>
      </div>
    </div>
  );
}
