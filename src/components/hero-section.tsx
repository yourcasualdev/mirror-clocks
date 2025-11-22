import { CurrentClock } from "./current-clock";
import { getTranslations, getLocale } from "next-intl/server";
import React from "react";

export async function HeroSection({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "HomePage.hero" });
  return (
    <div className="relative isolate px-6 pt-8 lg:px-8">
      <div className="mx-auto max-w-2xl py-16 sm:py-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            {t("title")}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {t("description")}
          </p>
          <CurrentClock />
        </div>
      </div>
    </div>
  );
}
