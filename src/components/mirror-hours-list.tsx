import { Card, CardContent } from "@/src/components/ui/card";
import {
  getAllMirrorHours,
  getCategoryTranslationKey,
  type LocalizedText,
} from "@/src/lib/mirror-hours";
import { useTranslations, useLocale } from "next-intl";

export function MirrorHoursList() {
  const mirrorHours = getAllMirrorHours();
  const t = useTranslations();
  const locale = useLocale();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {mirrorHours.map((hour) => (
        <Card
          key={hour.time}
          className="border-pink-200 hover:border-pink-400 transition-all duration-300"
        >
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-mono text-pink-800">{hour.time}</h3>
              <div className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">
                {t(
                  `Clock.categoryTypes.${getCategoryTranslationKey(
                    hour.category
                  )}`
                )}
              </div>
            </div>
            <h4 className="text-lg font-semibold text-purple-800 mb-2">
              {hour.title[locale as keyof LocalizedText]}
            </h4>
            <p className="text-gray-700">
              {hour.meaning[locale as keyof LocalizedText]}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
