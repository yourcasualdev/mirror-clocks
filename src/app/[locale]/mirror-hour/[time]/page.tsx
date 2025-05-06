import { Metadata } from "next";
import { isMirrorHour } from "@/src/lib/mirror-hours";
import { Card, CardContent } from "@/src/components/ui/card";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

type Props = {
  params: {
    time: string;
    locale: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, time } = params;
  const decodedTime = decodeURIComponent(time);

  const t = await getTranslations("MirrorHour");
  const mirrorHour = isMirrorHour(decodedTime);

  if (!mirrorHour) {
    return {
      title: t("notFound.title"),
      description: t("notFound.description"),
    };
  }

  const titleText = mirrorHour.title[locale as "en" | "tr"];
  const meaningText = mirrorHour.meaning[locale as "en" | "tr"];

  return {
    title: `${decodedTime} - ${titleText} | ${t("metadata.titleSuffix")}`,
    description: meaningText,
    openGraph: {
      title: `${decodedTime} - ${titleText}`,
      description: meaningText,
      type: "article",
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/mirror-hour/${decodedTime}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${decodedTime} - ${titleText}`,
      description: meaningText,
    },
  };
}

export async function generateStaticParams() {
  const hours = Array.from({ length: 24 }, (_, i) =>
    i.toString().padStart(2, "0")
  );
  const minutes = Array.from({ length: 60 }, (_, i) =>
    i.toString().padStart(2, "0")
  );
  const times = [];

  for (const hour of hours) {
    for (const minute of minutes) {
      const time = `${hour}:${minute}`;
      if (isMirrorHour(time)) {
        times.push({ time: time });
      }
    }
  }

  return times;
}

export default async function MirrorHourPage({ params }: any) {
  const t = await getTranslations("MirrorHour");
  const decodedTime = decodeURIComponent(params.time);
  const mirrorHour = isMirrorHour(decodedTime);

  if (!mirrorHour) {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-serif text-center mb-8 text-pink-800">
          {t("notFound.title")}
        </h1>
        <p className="text-center text-gray-600">{t("notFound.description")}</p>
        <div className="text-center mt-8">
          <Link
            href="/"
            className="text-pink-600 hover:text-pink-800 underline transition-colors"
          >
            {t("notFound.backHome")}
          </Link>
        </div>
      </div>
    );
  }

  const title = mirrorHour.title[params.locale as "en" | "tr"];
  const meaning = mirrorHour.meaning[params.locale as "en" | "tr"];

  // Add structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${decodedTime} - ${title}`,
    description: meaning,
    datePublished: new Date().toISOString(),
    author: {
      "@type": "Organization",
      name: "Mirror Hours",
    },
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-serif text-center mb-8 text-pink-800">
          {decodedTime}
        </h1>
        <Card className="border-pink-200 shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-2xl font-semibold text-purple-800 mb-4">
              {title}
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">{meaning}</p>
            <div className="mt-6 pt-6 border-t border-pink-100">
              <h3 className="text-lg font-medium text-purple-800 mb-2">
                {t("category")}
              </h3>
              <div className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                {mirrorHour.category}
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="mt-8 text-center">
          <Link
            href="/"
            className="text-pink-600 hover:text-pink-800 underline transition-colors"
          >
            {t("backToList")}
          </Link>
        </div>
      </div>
    </div>
  );
}
