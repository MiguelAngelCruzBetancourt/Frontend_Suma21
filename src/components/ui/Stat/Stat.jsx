import { cx } from "@/core/utils/cx";

import styles from "./Stat.module.css";

/**
 * Cifra destacada con su descripción.
 * @param {import("react").ComponentPropsWithRef<"div"> & {
 *   value: string,
 *   label: string,
 * }} props
 */
export function Stat({ value, label, className, ...rest }) {
  return (
    <div className={cx(styles.stat, className)} {...rest}>
      <p className={styles.value}>{value}</p>
      <p className={styles.label}>{label}</p>
    </div>
  );
}
