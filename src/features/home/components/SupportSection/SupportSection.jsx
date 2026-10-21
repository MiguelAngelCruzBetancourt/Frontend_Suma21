import { Grid } from "@/components/layout/Grid";
import { Section } from "@/components/layout/Section";
import { ButtonLink } from "@/components/ui/ButtonLink";

import { ContentCard } from "../ContentCard";

const SUPPORT_HREF = "/apoyanos-tienda";

export function SupportSection() {
  return (
    <Section
      eyebrow="Apóyanos"
      title="Apóyanos y Tienda"
      description="[Descripción breve de las formas de apoyar a la asociación]"
    >
      <Grid columns={2}>
        <ContentCard
          title="Apoyo"
          description="[Descripción de las formas de apoyo]"
          action={<ButtonLink href={SUPPORT_HREF}>Donar / Apoyar</ButtonLink>}
        />
        <ContentCard
          title="Tienda"
          description="[Descripción de la tienda]"
          action={
            <ButtonLink href={SUPPORT_HREF} variant="secondary">
              Ver tienda
            </ButtonLink>
          }
        />
      </Grid>
    </Section>
  );
}
