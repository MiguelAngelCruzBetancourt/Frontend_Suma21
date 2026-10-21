import { Grid } from "@/components/layout/Grid";
import { Section } from "@/components/layout/Section";

import { ContentCard } from "../ContentCard";

export function ParticipateSection() {
  return (
    <Section
      eyebrow="Participa"
      title="Participa con nosotros"
      description="[Descripción breve de las formas de participar]"
    >
      <Grid columns={2}>
        <ContentCard title="Asistir" description="[Descripción de cómo asistir a las actividades]" />
        <ContentCard
          title="Colaborar"
          description="[Descripción de cómo colaborar como voluntario o ponente]"
        />
      </Grid>
    </Section>
  );
}
