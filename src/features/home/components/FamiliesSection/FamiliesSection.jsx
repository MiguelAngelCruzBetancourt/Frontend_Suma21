import { Section } from "@/components/layout/Section";

import { ContentCard } from "../ContentCard";

import styles from "./FamiliesSection.module.css";

export function FamiliesSection() {
  return (
    <Section
      eyebrow="Familias"
      title="Espacio para familias"
      description="[Descripción breve del espacio para familias]"
      tone="muted"
    >
      <div className={styles.card}>
        <ContentCard
          title="Contacto y registro"
          description="[Descripción de cómo las familias pueden ponerse en contacto o registrarse]"
        />
      </div>
    </Section>
  );
}
