import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "tr", "zh", "de", "nl", "es", "fr", "it"],

  // Used when no locale matches
  defaultLocale: "en",
});
