import { Container } from "@/components/layout/Container";
import { cx } from "@/core/utils/cx";

import styles from "./TopBar.module.css";

/**
 * Franja de utilidades sobre la cabecera. El contenido lo define quien la usa.
 * @param {import("react").ComponentPropsWithRef<"div">} props
 */
export function TopBar({ className, children, ...rest }) {
  return (
    <div className={cx(styles.topBar, className)} {...rest}>
      <Container className={styles.inner}>{children}</Container>
    </div>
  );
}
