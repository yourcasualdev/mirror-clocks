import { CurrentClock } from "@/src/components/current-clock";
import { MirrorHoursList } from "@/src/components/mirror-hours-list";
import { HeroSection } from "@/src/components/hero-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50">
      <HeroSection />
      <div className="container mx-auto px-4 py-12">
        <div className="mt-16">
          <h2 className="text-3xl font-serif text-center mb-8 text-pink-800">
            All Mirror Hours & Their Meanings
          </h2>
          <MirrorHoursList />
        </div>
      </div>
    </main>
  );
}
