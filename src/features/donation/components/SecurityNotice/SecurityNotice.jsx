import styles from "./SecurityNotice.module.css";

export function SecurityNotice() {
  return (
    <aside className={styles.notice}>
      <svg viewBox="0 0 24 24" width="40" height="40" aria-hidden="true" focusable="false">
        <path
          d="M12 2.5l8 3v6c0 5-3.4 8.7-8 10-4.6-1.3-8-5-8-10v-6l8-3z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path d="M12 2.5v19c4.6-1.3 8-5 8-10v-6l-8-3z" fill="currentColor" />
      </svg>
      <div>
        <p className={styles.title}>Donación 100% segura</p>
        <p className={styles.text}>
          Utilizamos tecnología SSL estándar de la industria y pasarelas certificadas para proteger
          tu información.
        </p>
      </div>
    </aside>
  );
}
