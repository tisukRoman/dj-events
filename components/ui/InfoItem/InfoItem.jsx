import styles from './InfoItem.module.css';

export function InfoItem({ title, children }) {
  return (
    <div className={styles.info_item}> 
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
}