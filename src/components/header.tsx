import Link from "next/link";
import { LanguageSwitcher } from "./language-switcher";

export function Header({ locale }: { locale: string }) {
  return (
    <header className="w-full py-6 px-4 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex items-center justify-between">
        <Link
          href={`/${locale}`}
          className="text-2xl font-bold font-serif tracking-tight hover:opacity-80 transition-opacity"
        >
          sacredmirrortime
        </Link>
        <LanguageSwitcher />
      </div>
    </header>
  );
}
