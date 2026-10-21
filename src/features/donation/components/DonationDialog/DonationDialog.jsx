import { useId, useState } from "react";

import { Button } from "@/components/ui/Button";
import { Checkbox } from "@/components/ui/Checkbox";
import { Dialog } from "@/components/ui/Dialog";

import { AmountSelector } from "../AmountSelector";
import { FrequencyToggle } from "../FrequencyToggle";
import { SecurityNotice } from "../SecurityNotice";

import styles from "./DonationDialog.module.css";

const AMOUNTS = [
  { value: 50000, label: "$50.000" },
  { value: 70000, label: "$70.000" },
  { value: 90000, label: "$90.000" },
];

const DEFAULT_AMOUNT = 70000;

/**
 * Interfaz de donación. Por ahora es solo presentación: los controles
 * guardan su estado localmente y no se envía ni procesa nada.
 * @param {{ open: boolean, onClose: () => void }} props
 */
export function DonationDialog({ open, onClose }) {
  const titleId = useId();
  const [frequency, setFrequency] = useState("monthly");
  const [amount, setAmount] = useState(DEFAULT_AMOUNT);
  const [otherAmount, setOtherAmount] = useState(false);
  const [isGift, setIsGift] = useState(false);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      labelledBy={titleId}
      variant="fullscreen"
      closeLabel="Cerrar donación"
      className={styles.dialog}
    >
      <div className={styles.content}>
        <p className={styles.eyebrow}>Campaña oficial Semana del Síndrome de Down</p>
        <h2 id={titleId} className={styles.title}>
          Cada aporte transforma vidas: construyamos inclusión hoy
        </h2>
        <p className={styles.lead}>
          Con tu donación te sumas a los programas de formación laboral, arte, barismo inclusivo y
          autonomía integral de <strong>Asisco</strong> en Colombia. Tu generosidad garantiza que
          más jóvenes con síndrome de Down conquisten sus sueños.
        </p>

        <div className={styles.form}>
          <FrequencyToggle value={frequency} onChange={setFrequency} />
          <AmountSelector amounts={AMOUNTS} value={amount} onChange={setAmount} />
          <div className={styles.options}>
            <Checkbox
              label="Quiero ingresar otro monto"
              checked={otherAmount}
              onChange={(event) => setOtherAmount(event.target.checked)}
            />
            <Checkbox
              label={
                <span className={styles.gift}>
                  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">
                    <path
                      d="M3 8h18v4H3zM5 12h14v8H5zM12 8v12M12 8c-1.5-3.5-5-3.5-5-1.5S10 8 12 8zm0 0c1.5-3.5 5-3.5 5-1.5S14 8 12 8z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Donar como regalo o en homenaje
                </span>
              }
              checked={isGift}
              onChange={(event) => setIsGift(event.target.checked)}
            />
          </div>
          <Button size="lg" className={styles.submit}>
            Donar ahora
            <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false">
              <path
                d="M5 12h14M13 6l6 6-6 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
        </div>

        <SecurityNotice />
      </div>
    </Dialog>
  );
}
