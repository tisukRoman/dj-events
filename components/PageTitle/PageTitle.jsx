import styles from './PageTitle.module.css';

export function PageTitle({children}) {
  return <h1 className={styles.title}>{children}</h1>;
}
