import styles from '@/styles/PageTitle.module.css';

export default function PageTitle({children}) {
  return <h1 className={styles.title}>{children}</h1>;
}
