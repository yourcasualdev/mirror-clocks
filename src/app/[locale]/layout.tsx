import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import "../globals.css";
import { Heart } from "lucide-react";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "tr" }];
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: any) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className="min-h-screen flex flex-col">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <main className="flex-1">{children}</main>
          <footer className="py-8 px-4 text-sm text-gray-500">
            <div className="container mx-auto flex justify-end">
              <div className="flex items-center gap-2">
                Made with{" "}
                <Heart className="w-4 h-4 text-pink-500 fill-pink-500" /> by{" "}
                <a
                  href="https://yourcasual.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:text-purple-800 transition-colors font-medium"
                >
                  yourcasualdev
                </a>
              </div>
            </div>
          </footer>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
