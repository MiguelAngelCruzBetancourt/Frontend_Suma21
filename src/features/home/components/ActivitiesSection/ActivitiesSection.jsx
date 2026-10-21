import { Section } from "@/components/layout/Section";
import { Badge } from "@/components/ui/Badge";
import { Card, CardBody } from "@/components/ui/Card";

import styles from "./ActivitiesSection.module.css";

const ACTIVITIES = [1, 2, 3];

export function ActivitiesSection() {
  return (
    <Section
      eyebrow="Agenda"
      title="Próximas actividades"
      description="[Descripción breve de la agenda]"
      tone="muted"
    >
      <ul className={styles.list}>
        {ACTIVITIES.map((n) => (
          <li key={n}>
            <Card>
              <CardBody className={styles.item}>
                <p className={styles.date}>[Fecha]</p>
                <div className={styles.details}>
                  <Badge tone="orange">[Categoría]</Badge>
                  <h3 className={styles.title}>[Título de la actividad {n}]</h3>
                  <p className={styles.place}>[Lugar y horario]</p>
                </div>
              </CardBody>
            </Card>
          </li>
        ))}
      </ul>
    </Section>
  );
}
