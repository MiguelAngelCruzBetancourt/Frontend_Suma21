import { cx } from "@/core/utils/cx";

import styles from "./MediaPlaceholder.module.css";

/**
 * Reserva el espacio de una imagen pendiente de definir.
 * @param {import("react").ComponentPropsWithRef<"div"> & {
 *   ratio?: "wide" | "standard" | "square",
 *   label: string,
 * }} props
 */
export function MediaPlaceholder({ ratio = "wide", label, className, ...rest }) {
  return (
    <div className={cx(styles.placeholder, styles[ratio], className)} {...rest}>
      <span>{label}</span>
    </div>
  );
}
