"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  isMirrorHour,
  getMirrorHourMeaning,
  getMirrorHourCategory,
} from "@/lib/mirror-hours";

export function CurrentClock() {
  const [currentTime, setCurrentTime] = useState("");
  const [isMirror, setIsMirror] = useState(false);
  const [meaning, setMeaning] = useState("");
  const [mirrorType, setMirrorType] = useState("");
  const [mirrorTitle, setMirrorTitle] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const timeString = `00:00`;

      setCurrentTime(timeString);

      const mirrorHourData = isMirrorHour(timeString);

      if (mirrorHourData) {
        setIsMirror(true);
        setMirrorTitle(mirrorHourData.title);
        setMeaning(mirrorHourData.meaning);
        setMirrorType(mirrorHourData.category);
      } else {
        setIsMirror(false);
        setMirrorTitle("");
        setMeaning("");
        setMirrorType("");
      }
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-2xl font-serif text-center mb-6 text-pink-800">
        Current Time
      </h2>
      <Card
        className={`w-full max-w-md border-2 ${
          isMirror
            ? "border-pink-400 shadow-lg shadow-pink-200"
            : "border-gray-200"
        } transition-all duration-500`}
      >
        <CardContent className="p-6">
          <div className="text-6xl md:text-7xl font-mono text-center py-8 tracking-widest">
            {currentTime}
          </div>
          {isMirror && (
            <div className="mt-6 text-center animate-fade-in space-y-3">
              <div className="inline-block bg-pink-100 text-pink-800 px-4 py-2 rounded-full text-sm font-semibold shadow-sm">
                ✨ Ayna Saat Yakalandı! ✨
              </div>
              <h3 className="text-xl font-semibold text-purple-800 pt-2">
                {mirrorTitle}
              </h3>
              <p className="text-purple-700 font-medium text-lg px-4">
                {meaning}
              </p>
              <div className="pt-2">
                <span className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-medium">
                  Türü: {mirrorType}
                </span>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
