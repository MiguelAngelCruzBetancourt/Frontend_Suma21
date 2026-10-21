import { cx } from "@/core/utils/cx";

import styles from "./Button.module.css";

/**
 * Clases de un botón. Permite que otros elementos (p. ej. un enlace)
 * adopten el mismo aspecto sin duplicar estilos.
 * @param {{
 *   variant?: "primary" | "secondary" | "ghost",
 *   size?: "sm" | "md" | "lg",
 *   className?: string,
 * }} [options]
 */
export function buttonClassName({ variant = "primary", size = "md", className } = {}) {
  return cx(styles.button, styles[variant], styles[size], className);
}

/**
 * Sustituible por un <button> nativo: acepta sus atributos y `ref`.
 * @param {import("react").ComponentPropsWithRef<"button"> & {
 *   variant?: "primary" | "secondary" | "ghost",
 *   size?: "sm" | "md" | "lg",
 * }} props
 */
export function Button({ variant, size, type = "button", className, ...rest }) {
  return (
    <button
      type={type}
      className={buttonClassName({ variant, size, className })}
      {...rest}
    />
  );
}
