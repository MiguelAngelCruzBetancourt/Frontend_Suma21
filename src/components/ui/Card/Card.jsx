import { cx } from "@/core/utils/cx";

import styles from "./Card.module.css";

/** @param {import("react").ComponentPropsWithRef<"section">} props */
export function Card({ className, ...rest }) {
  return <section className={cx(styles.card, className)} {...rest} />;
}

/** @param {import("react").ComponentPropsWithRef<"header">} props */
export function CardHeader({ className, ...rest }) {
  return <header className={cx(styles.header, className)} {...rest} />;
}

/** @param {import("react").ComponentPropsWithRef<"div">} props */
export function CardBody({ className, ...rest }) {
  return <div className={cx(styles.body, className)} {...rest} />;
}
