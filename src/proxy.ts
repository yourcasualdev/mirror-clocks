import { NextRequest, NextResponse } from "next/server";
import createNextIntlMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

const nextIntlMiddleware = createNextIntlMiddleware(routing);

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the pathname contains encoded colons for mirror hours
  // Example: /en/mirror-hour/03%3A03 -> /en/mirror-hour/03:03
  if (pathname.includes("%3A")) {
    const newPathname = pathname.replace(/%3A/g, ":");
    const newUrl = new URL(newPathname, request.url);
    return NextResponse.redirect(newUrl, 301); // Permanent redirect
  }

  // If no redirection is needed, proceed with next-intl middleware
  return nextIntlMiddleware(request);
}

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: "/((?!api|trpc|_next|_vercel|.*..*).*)",
};
