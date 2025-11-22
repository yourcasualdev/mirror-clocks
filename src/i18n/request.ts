import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  // Typically corresponds to the `[locale]` segment
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  const messages = {
    en: () => import("../messages/en.json"),
    tr: () => import("../messages/tr.json"),
    zh: () => import("../messages/zh.json"),
    de: () => import("../messages/de.json"),
    nl: () => import("../messages/nl.json"),
    es: () => import("../messages/es.json"),
    fr: () => import("../messages/fr.json"),
    it: () => import("../messages/it.json"),
  };

  return {
    locale,
    messages: (await messages[locale as keyof typeof messages]()).default,
  };
});
