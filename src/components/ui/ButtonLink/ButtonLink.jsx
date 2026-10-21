import { buttonClassName } from "@/components/ui/Button";
import { cx } from "@/core/utils/cx";

import styles from "./ButtonLink.module.css";

/**
 * Enlace con el aspecto de `Button`.
 * @param {import("react").ComponentPropsWithRef<"a"> & {
 *   variant?: "primary" | "secondary" | "ghost",
 *   size?: "sm" | "md" | "lg",
 * }} props
 */
export function ButtonLink({ variant, size, className, children, ...rest }) {
  return (
    <a
      className={buttonClassName({ variant, size, className: cx(styles.link, className) })}
      {...rest}
    >
      {children}
    </a>
  );
}
