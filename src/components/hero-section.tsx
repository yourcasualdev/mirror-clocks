import { Star } from "lucide-react";
import { CurrentClock } from "./current-clock";
import { useTranslations } from "next-intl";

export function HeroSection() {
  const t = useTranslations("HomePage.hero");

  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
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
