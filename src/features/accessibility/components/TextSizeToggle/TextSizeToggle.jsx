import { useEffect, useState } from "react";

import { Button } from "@/components/ui/Button";

import styles from "./TextSizeToggle.module.css";

const OPTIONS = [
  { value: "base", label: "A", name: "A, texto normal" },
  { value: "large", label: "A+", name: "A+, texto grande" },
];

/** Alterna el tamaño base del texto de toda la página. */
export function TextSizeToggle() {
  const [size, setSize] = useState("base");

  useEffect(() => {
    document.documentElement.dataset.textSize = size;
    return () => {
      delete document.documentElement.dataset.textSize;
    };
  }, [size]);

  return (
    <div role="group" aria-label="Tamaño del texto" className={styles.group}>
      {OPTIONS.map(({ value, label, name }) => (
        <Button
          key={value}
          variant="ghost"
          size="sm"
          className={styles.option}
          aria-label={name}
          aria-pressed={size === value}
          onClick={() => setSize(value)}
        >
          {label}
        </Button>
      ))}
    </div>
  );
}
