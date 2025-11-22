import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import "../globals.css";
import { Heart } from "lucide-react";
import { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { ThemeProvider } from "@/src/components/theme-provider";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
import { getTranslations } from "next-intl/server";
import { LanguageSwitcher } from "@/src/components/language-switcher";
import { Header } from "@/src/components/header";

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
});

export function generateStaticParams() {
  return [
    { locale: "en" },
    { locale: "tr" },
    { locale: "zh" },
    { locale: "de" },
    { locale: "nl" },
    { locale: "es" },
    { locale: "fr" },
    { locale: "it" },
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://www.sacredmirrortime.com";

  return {
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        en: `${baseUrl}/en`,
        tr: `${baseUrl}/tr`,
        zh: `${baseUrl}/zh`,
        de: `${baseUrl}/de`,
        nl: `${baseUrl}/nl`,
        es: `${baseUrl}/es`,
        fr: `${baseUrl}/fr`,
        it: `${baseUrl}/it`,
        "x-default": `${baseUrl}/en`,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  const t = await getTranslations({ locale, namespace: "Footer" });

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${inter.className} ${playfair.variable} flex flex-col min-h-screen`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Header />

            <main className="flex-1">{children}</main>
            <footer className="py-8 px-4 text-sm text-gray-500">
              <div className="container mx-auto flex justify-end">
                <div className="flex items-center gap-2">
                  {t.rich("madeWithBy", {
                    heart: () => (
                      <Heart className="w-4 h-4 text-pink-500 fill-pink-500 inline-block" />
                    ),
                    author: (children) => (
                      <a
                        href="https://yourcasual.dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 transition-colors font-medium"
                      >
                        {children}
                      </a>
                    ),
                  })}
                </div>
              </div>
            </footer>
          </NextIntlClientProvider>
        </ThemeProvider>
        <GoogleAnalytics gaId="G-8RJYXTJ5N7" />
        <Analytics />
      </body>
    </html>
  );
}
