"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  isMirrorHour,
  getMirrorHourMeaning,
  getMirrorHourCategory,
} from "@/lib/mirror-hours";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

// Helper function to get category definition
function getCategoryDefinition(category: string): string {
  switch (category) {
    case "Tam Ayna":
      return "Tam Ayna saatleri, saat ve dakika rakamlarının aynı olduğu (örneğin, 11:11, 22:22) zamanlardır. Genellikle olumlu mesajlar ve eşzamanlılıklarla ilişkilendirilir.";
    case "Ters Ayna":
      return "Ters Ayna saatleri, saat ve dakika rakamlarının birbirinin tersi olduğu (örneğin, 12:21, 05:50) zamanlardır. Genellikle uyarılar, farkındalık veya içsel mesajlarla ilişkilendirilir.";
    case "Üçlü Ayna":
      return "Üçlü Ayna saatleri, bir rakamın üç kez tekrar ettiği (örneğin, 01:11, 03:33) zamanlardır. Genellikle güçlü enerjiler, manevi rehberlik ve dikkat çekici mesajlarla ilişkilendirilir.";
    default:
      return "Bu saatin özel bir anlamı olabilir.";
  }
}

export function CurrentClock() {
  const [currentTime, setCurrentTime] = useState("");
  const [isMirror, setIsMirror] = useState(false);
  const [meaning, setMeaning] = useState("");
  const [mirrorType, setMirrorType] = useState("");
  const [mirrorTitle, setMirrorTitle] = useState("");
  const [categoryDescription, setCategoryDescription] = useState(""); // State for tooltip content

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const timeString = `02:20`; // User set this for testing
      // const timeString = `${hours}:${minutes}`;

      setCurrentTime(timeString);

      const mirrorHourData = isMirrorHour(timeString);

      if (mirrorHourData) {
        setIsMirror(true);
        setMirrorTitle(mirrorHourData.title);
        setMeaning(mirrorHourData.meaning);
        setMirrorType(mirrorHourData.category);
        setCategoryDescription(getCategoryDefinition(mirrorHourData.category)); // Set dynamic description
      } else {
        setIsMirror(false);
        setMirrorTitle("");
        setMeaning("");
        setMirrorType("");
        setCategoryDescription(""); // Clear description
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
                <Popover>
                  <PopoverTrigger asChild>
                    <span className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-medium cursor-pointer">
                      Türü: {mirrorType}
                    </span>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto bg-pink-50 text-purple-800 border border-pink-200 rounded-md shadow-lg p-3">
                    <p className="max-w-xs text-center text-sm">
                      {categoryDescription}
                    </p>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
