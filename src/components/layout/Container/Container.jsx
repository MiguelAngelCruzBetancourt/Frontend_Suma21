import { cx } from "@/core/utils/cx";

import styles from "./Container.module.css";

/** @param {import("react").ComponentPropsWithRef<"div">} props */
export function Container({ className, ...rest }) {
  return <div className={cx(styles.container, className)} {...rest} />;
}
