import { cx } from "@/core/utils/cx";

import styles from "./Grid.module.css";

/**
 * Cuadrícula responsive: una columna en móvil, `columns` en escritorio.
 * @param {import("react").ComponentPropsWithRef<"div"> & {
 *   columns?: 1 | 2 | 3,
 * }} props
 */
export function Grid({ columns = 2, className, ...rest }) {
  return <div className={cx(styles.grid, styles[`cols${columns}`], className)} {...rest} />;
}
