"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/src/components/ui/card";
import {
  isMirrorHour,
  getMirrorHourMeaning,
  getMirrorHourTitle,
  getCategoryTranslationKey,
} from "@/src/lib/mirror-hours";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/src/components/ui/popover";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Helper function to get category definition
function getCategoryDefinition(category: string, t: any): string {
  const translationKey = getCategoryTranslationKey(category);

  switch (translationKey) {
    case "fullMirror":
      return t("Clock.categories.fullMirror");
    case "reverseMirror":
      return t("Clock.categories.reverseMirror");
    case "tripleMirror":
      return t("Clock.categories.tripleMirror");
    default:
      return t("Clock.categories.default");
  }
}

export function CurrentClock() {
  const t = useTranslations();
  const locale = useLocale();
  const [currentTime, setCurrentTime] = useState("");
  const [isMirror, setIsMirror] = useState(false);
  const [meaning, setMeaning] = useState("");
  const [mirrorType, setMirrorType] = useState("");
  const [mirrorTitle, setMirrorTitle] = useState("");
  const [categoryDescription, setCategoryDescription] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const timeString = `${hours}:${minutes}`;

      setCurrentTime(timeString);

      const mirrorHourData = isMirrorHour(timeString);

      if (mirrorHourData) {
        setIsMirror(true);
        setMirrorTitle(getMirrorHourTitle(timeString, locale));
        setMeaning(getMirrorHourMeaning(timeString, locale));
        setMirrorType(mirrorHourData.category);
        setCategoryDescription(
          getCategoryDefinition(mirrorHourData.category, t)
        );
      } else {
        setIsMirror(false);
        setMirrorTitle("");
        setMeaning("");
        setMirrorType("");
        setCategoryDescription("");
      }
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, [t, locale]);

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-2xl font-serif text-center mb-6 text-pink-800">
        {t("Clock.currentTime")}
      </h2>
      <Card
        className={`w-full max-w-md border-2 ${
          isMirror
            ? "border-pink-400 shadow-lg shadow-pink-200"
            : "border-gray-200"
        } transition-all duration-500 relative`}
      >
        <CardContent className="p-6">
          <div className="text-6xl md:text-7xl font-mono text-center py-8 tracking-widest">
            {currentTime}
          </div>
          {isMirror && (
            <div className="mt-6 text-center animate-fade-in space-y-3">
              <div className="inline-block bg-pink-100 text-pink-800 px-4 py-2 rounded-full text-sm font-semibold shadow-sm">
                {t("Clock.mirrorHourCaught")}
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
                      {t("Clock.categoryTypes.type")}:{" "}
                      {t(
                        `Clock.categoryTypes.${getCategoryTranslationKey(
                          mirrorType
                        )
                          .split(".")
                          .pop()}`
                      )}
                    </span>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto bg-pink-50 text-purple-800 border border-pink-200 rounded-md shadow-lg p-3">
                    <p className="max-w-xs text-center text-sm">
                      {categoryDescription}
                    </p>
                  </PopoverContent>
                </Popover>
              </div>
              <div className="flex justify-end mt-4">
                <Link
                  href={`/${locale}/mirror-hour/${currentTime}`}
                  className="inline-flex items-center gap-2 text-pink-600 hover:text-pink-800 transition-colors font-medium"
                >
                  {t("Clock.readMore")} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          )}
        </CardContent>
        {!isMirror && (
          <div className="absolute mt-4 text-gray-400 text-sm italic text-right  w-full">
            {t("Clock.notMirrorTime")}
          </div>
        )}
      </Card>
    </div>
  );
}
