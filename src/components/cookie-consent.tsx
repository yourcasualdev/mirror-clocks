"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Cookie, X } from "lucide-react";
import {
  hasConsent,
  acceptAllCookies,
  rejectAllCookies,
  updateGoogleConsent,
} from "@/src/lib/consent";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const t = useTranslations("CookieConsent");

  useEffect(() => {
    // Show banner only if user hasn't made a choice yet
    if (!hasConsent()) {
      // Small delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    const preferences = acceptAllCookies();
    updateGoogleConsent(preferences);
    setIsVisible(false);
  };

  const handleReject = () => {
    const preferences = rejectAllCookies();
    updateGoogleConsent(preferences);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-in slide-in-from-bottom duration-500"
      role="dialog"
      aria-live="polite"
      aria-label={t("title")}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-2xl border border-purple-200/50 bg-white/95 backdrop-blur-lg shadow-2xl dark:border-purple-800/50 dark:bg-gray-900/95">
          {/* Gradient accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500" />

          <div className="p-6 sm:p-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              {/* Content */}
              <div className="flex-1 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-purple-600 shadow-lg">
                    <Cookie className="h-5 w-5 text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                    {t("title")}
                  </h2>
                </div>

                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {t("description")}
                </p>
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <button
                  onClick={handleReject}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-700 transition-all hover:bg-gray-50 hover:border-gray-400 active:scale-95 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                  aria-label={t("rejectAll")}
                >
                  <X className="h-4 w-4" />
                  {t("rejectAll")}
                </button>

                <button
                  onClick={handleAccept}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 px-6 py-3 text-sm font-bold text-white shadow-lg transition-all hover:from-pink-700 hover:to-purple-700 hover:shadow-xl active:scale-95"
                  aria-label={t("acceptAll")}
                >
                  <Cookie className="h-4 w-4" />
                  {t("acceptAll")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
