import styles from './Center.module.css';

export function Center({ children }) {
  return <div className={styles.center}>{children}</div>;
}
