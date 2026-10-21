import { Badge } from "@/components/ui/Badge";
import { Card, CardBody } from "@/components/ui/Card";

import styles from "./ContentCard.module.css";

/**
 * Tarjeta de contenido de la portada: medio opcional, etiqueta, título,
 * descripción y acción opcional.
 * @param {{
 *   title: string,
 *   description: string,
 *   media?: import("react").ReactNode,
 *   badge?: string,
 *   action?: import("react").ReactNode,
 * }} props
 */
export function ContentCard({ title, description, media, badge, action }) {
  return (
    <Card className={styles.card}>
      {media}
      <CardBody className={styles.body}>
        {badge ? <Badge tone="orange">{badge}</Badge> : null}
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        {action ? <div className={styles.action}>{action}</div> : null}
      </CardBody>
    </Card>
  );
}
