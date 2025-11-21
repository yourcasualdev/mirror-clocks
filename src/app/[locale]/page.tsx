import { MirrorHoursList } from "@/src/components/mirror-hours-list";
import { HeroSection } from "@/src/components/hero-section";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://www.sacredmirrortime.com";
  const t = await getTranslations({ locale, namespace: "HomePage" });

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        en: `${baseUrl}/en`,
        tr: `${baseUrl}/tr`,
        "x-default": `${baseUrl}/en`,
      },
    },
  };
}

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "tr" }];
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "HomePage" });

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50">
      <HeroSection />
      <div className="container mx-auto px-4 py-12">
        <div className="">
          <h2 className="text-3xl font-serif text-center mb-8 text-pink-800">
            {t("subtitle")}
          </h2>
          <MirrorHoursList />
        </div>
      </div>
    </main>
  );
}
