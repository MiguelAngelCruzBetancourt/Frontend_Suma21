import { Grid } from "@/components/layout/Grid";
import { Section } from "@/components/layout/Section";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";

import { ContentCard } from "../ContentCard";

const INITIATIVES = [
  { title: "Semana Down", href: "/semana-down" },
  { title: "Iniciativa Café", href: "/iniciativa-cafe" },
];

export function InitiativesSection() {
  return (
    <Section
      id="iniciativas"
      eyebrow="Iniciativas"
      title="Nuestras iniciativas"
      description="[Descripción breve de las iniciativas de la asociación]"
    >
      <Grid columns={2}>
        {INITIATIVES.map(({ title, href }) => (
          <ContentCard
            key={href}
            title={title}
            description="[Descripción de la iniciativa]"
            media={<MediaPlaceholder ratio="wide" label="[Imagen de la iniciativa]" />}
            action={
              <ButtonLink href={href} variant="secondary">
                Ver {title}
              </ButtonLink>
            }
          />
        ))}
      </Grid>
    </Section>
  );
}
