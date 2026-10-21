import styles from "./AppShell.module.css";

const MAIN_CONTENT_ID = "main-content";

/**
 * Estructura de página por slots.
 * @param {{
 *   header?: import("react").ReactNode,
 *   sidebar?: import("react").ReactNode,
 *   footer?: import("react").ReactNode,
 *   children: import("react").ReactNode,
 * }} props
 */
export function AppShell({ header, sidebar, footer, children }) {
  return (
    <div className={styles.shell}>
      <a className={styles.skipLink} href={`#${MAIN_CONTENT_ID}`}>
        Saltar al contenido
      </a>
      {header}
      <div className={styles.body}>
        {sidebar}
        <main id={MAIN_CONTENT_ID} className={styles.main}>
          {children}
        </main>
      </div>
      {footer}
    </div>
  );
}
