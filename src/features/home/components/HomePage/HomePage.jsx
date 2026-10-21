import { ActivitiesSection } from "../ActivitiesSection";
import { FamiliesSection } from "../FamiliesSection";
import { Hero } from "../Hero";
import { InitiativesSection } from "../InitiativesSection";
import { ParticipateSection } from "../ParticipateSection";
import { SupportSection } from "../SupportSection";

export function HomePage() {
  return (
    <>
      <Hero />
      <InitiativesSection />
      <ActivitiesSection />
      <ParticipateSection />
      <FamiliesSection />
      <SupportSection />
    </>
  );
}
