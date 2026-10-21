import { useId } from "react";

import styles from "./AmountSelector.module.css";

/**
 * Fichas de monto sugerido (radios nativos).
 * @param {{
 *   amounts: { value: number, label: string }[],
 *   value: number,
 *   onChange: (value: number) => void,
 * }} props
 */
export function AmountSelector({ amounts, value, onChange }) {
  const name = useId();

  return (
    <fieldset className={styles.fieldset}>
      <legend className="sr-only">Monto de la donación</legend>
      {amounts.map(({ value: amount, label }) => (
        <label key={amount} className={styles.tile}>
          <input
            type="radio"
            name={name}
            className={styles.input}
            value={amount}
            checked={value === amount}
            onChange={() => onChange(amount)}
          />
          <span className={styles.text}>{label}</span>
        </label>
      ))}
    </fieldset>
  );
}
