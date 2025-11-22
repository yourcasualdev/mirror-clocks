"use client";

import Script from "next/script";
import { DEFAULT_CONSENT } from "@/src/lib/consent";

/**
 * Google Consent Mode v2 initialization script
 * Must load before Google Analytics to set default consent state
 */
export function ConsentModeScript() {
  return (
    <Script
      id="gtag-consent-init"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('consent', 'default', ${JSON.stringify(DEFAULT_CONSENT)});
        `,
      }}
    />
  );
}
