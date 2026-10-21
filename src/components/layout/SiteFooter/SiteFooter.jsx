import { Container } from "@/components/layout/Container";

import styles from "./SiteFooter.module.css";

/**
 * Pie de página por slots: marca, columnas de contenido y línea final.
 * @param {{
 *   brand: import("react").ReactNode,
 *   columns: { title: string, content: import("react").ReactNode }[],
 *   bottom?: import("react").ReactNode,
 * }} props
 */
export function SiteFooter({ brand, columns, bottom }) {
  return (
    <footer className={styles.footer}>
      <Container className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.brand}>{brand}</div>
          {columns.map(({ title, content }) => (
            <section key={title} className={styles.column}>
              <h2 className={styles.columnTitle}>{title}</h2>
              {content}
            </section>
          ))}
        </div>
        {bottom ? <div className={styles.bottom}>{bottom}</div> : null}
      </Container>
    </footer>
  );
}
