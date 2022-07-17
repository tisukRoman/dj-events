import styles from './styles/Main.module.css';

export function Main(props) {
  return <main className={styles.main}>{props.children}</main>;
}
