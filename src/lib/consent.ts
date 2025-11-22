/**
 * Cookie consent management utilities
 * Handles user consent preferences for GDPR compliance
 */

export type ConsentState = "granted" | "denied";

export interface ConsentPreferences {
  analytics_storage: ConsentState;
  ad_storage: ConsentState;
  ad_user_data: ConsentState;
  ad_personalization: ConsentState;
}

const CONSENT_COOKIE_NAME = "cookie-consent";

/**
 * Default consent values (all denied for GDPR compliance)
 */
export const DEFAULT_CONSENT: ConsentPreferences = {
  analytics_storage: "denied",
  ad_storage: "denied",
  ad_user_data: "denied",
  ad_personalization: "denied",
};

/**
 * Get current consent preferences from localStorage
 */
export function getConsent(): ConsentPreferences | null {
  if (typeof window === "undefined") return null;

  try {
    const stored = localStorage.getItem(CONSENT_COOKIE_NAME);
    if (!stored) return null;

    return JSON.parse(stored) as ConsentPreferences;
  } catch {
    return null;
  }
}

/**
 * Save consent preferences to localStorage
 */
export function setConsent(preferences: ConsentPreferences): void {
  if (typeof window === "undefined") return;

  try {
    localStorage.setItem(CONSENT_COOKIE_NAME, JSON.stringify(preferences));
  } catch (error) {
    console.error("Failed to save consent preferences:", error);
  }
}

/**
 * Check if user has made a consent choice
 */
export function hasConsent(): boolean {
  return getConsent() !== null;
}

/**
 * Accept all cookies
 */
export function acceptAllCookies(): ConsentPreferences {
  const preferences: ConsentPreferences = {
    analytics_storage: "granted",
    ad_storage: "granted",
    ad_user_data: "granted",
    ad_personalization: "granted",
  };

  setConsent(preferences);
  return preferences;
}

/**
 * Reject all cookies
 */
export function rejectAllCookies(): ConsentPreferences {
  const preferences: ConsentPreferences = {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  };

  setConsent(preferences);
  return preferences;
}

/**
 * Update Google Analytics consent mode
 */
export function updateGoogleConsent(preferences: ConsentPreferences): void {
  if (typeof window === "undefined") return;

  if (typeof (window as any).gtag !== "undefined") {
    (window as any).gtag("consent", "update", preferences);
  }
}
