import Link from 'next/link';
import styles from './styles/Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Copyright &copy; DJ Events 2022</p>
      <div className={styles.link}>
        <Link href='/about'>
          <a>About the project</a>
        </Link>
      </div>
    </footer>
  );
}
