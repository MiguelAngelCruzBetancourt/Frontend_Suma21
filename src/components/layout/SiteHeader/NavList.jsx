import styles from "./SiteHeader.module.css";

/**
 * @param {{
 *   items: { label: string, href: string, current?: boolean }[],
 *   onNavigate?: () => void,
 * }} props
 */
export function NavList({ items, onNavigate }) {
  return (
    <ul className={styles.list}>
      {items.map(({ label, href, current }) => (
        <li key={href}>
          <a
            className={styles.link}
            href={href}
            aria-current={current ? "page" : undefined}
            onClick={onNavigate}
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
}
