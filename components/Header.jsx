import Link from 'next/link';
import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div>
        <Link href='/'>
          <a className={styles.logo}>DJ EVENTS</a>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href='/events'>Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
