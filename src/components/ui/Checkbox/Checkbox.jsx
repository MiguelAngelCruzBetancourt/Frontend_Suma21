import { cx } from "@/core/utils/cx";

import styles from "./Checkbox.module.css";

/**
 * Casilla nativa con su etiqueta.
 * @param {Omit<import("react").ComponentPropsWithRef<"input">, "type"> & {
 *   label: import("react").ReactNode,
 * }} props
 */
export function Checkbox({ label, className, ...rest }) {
  return (
    <label className={cx(styles.checkbox, className)}>
      <input type="checkbox" className={styles.input} {...rest} />
      <span className={styles.box} aria-hidden="true" />
      <span>{label}</span>
    </label>
  );
}
