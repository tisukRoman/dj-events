import styles from './Button.module.css';

export default function Button(props) {
  const { onClick, children, disabled } = props;

  return (
    <button className={styles.button} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
