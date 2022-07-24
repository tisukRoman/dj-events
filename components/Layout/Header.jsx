import Link from 'next/link';
import { SearchBar } from '../SearchBar';
import styles from './styles/Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href='/'>DJ EVENTS</Link>
      </div>
      <SearchBar />
      <nav>
        <ul className={styles.ul}>
          <li>
            <Link href='/events'>Events</Link>
          </li>
          <li>
            <Link href='/events/add'>Add Event</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
