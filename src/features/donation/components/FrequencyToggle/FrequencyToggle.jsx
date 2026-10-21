import { useId } from "react";

import { cx } from "@/core/utils/cx";

import styles from "./FrequencyToggle.module.css";

const OPTIONS = [
  { value: "monthly", label: "Mensual" },
  { value: "once", label: "Una sola vez" },
];

/**
 * Elige la frecuencia de la donación. La píldora central es decorativa: los
 * radios nativos son el control accesible.
 * @param {{
 *   value: "monthly" | "once",
 *   onChange: (value: "monthly" | "once") => void,
 * }} props
 */
export function FrequencyToggle({ value, onChange }) {
  const name = useId();
  const [monthly, once] = OPTIONS;

  function toggle() {
    onChange(value === monthly.value ? once.value : monthly.value);
  }

  function renderOption({ value: optionValue, label }) {
    return (
      <label className={cx(styles.option, value === optionValue && styles.selected)}>
        <input
          type="radio"
          name={name}
          className="sr-only"
          value={optionValue}
          checked={value === optionValue}
          onChange={() => onChange(optionValue)}
        />
        {label}
      </label>
    );
  }

  return (
    <div role="radiogroup" aria-label="Frecuencia de la donación" className={styles.group}>
      {renderOption(monthly)}
      <span
        className={cx(styles.track, value === once.value && styles.trackOnce)}
        aria-hidden="true"
        onClick={toggle}
      >
        <span className={styles.knob}>
          <svg viewBox="0 0 24 24" width="14" height="14" focusable="false">
            <path
              d={value === once.value ? "M9 6l6 6-6 6" : "M15 6l-6 6 6 6"}
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </span>
      {renderOption(once)}
    </div>
  );
}
