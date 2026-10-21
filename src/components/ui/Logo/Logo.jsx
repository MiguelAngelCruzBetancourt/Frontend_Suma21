import logoSrc from "@/assets/images/logo-suma21.png";
import { cx } from "@/core/utils/cx";

import styles from "./Logo.module.css";

/**
 * Logotipo de SUMA21 by ASISCO.
 * @param {Omit<import("react").ComponentPropsWithRef<"img">, "src"> & {
 *   size?: "sm" | "md" | "lg",
 * }} props
 */
export function Logo({
  size = "md",
  alt = "SUMA21 by ASISCO",
  className,
  ...rest
}) {
  return (
    <img
      src={logoSrc}
      alt={alt}
      width={1024}
      height={378}
      className={cx(styles.logo, styles[size], className)}
      {...rest}
    />
  );
}
