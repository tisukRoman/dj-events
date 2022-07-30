import Link from 'next/link';
import { useAuth } from 'hooks/useAuth';
import { SearchBar } from '../SearchBar';
import styles from './styles/Header.module.css';

export function Header() {
  const { user, logout } = useAuth();

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href='/'>DJ EVENTS</Link>
      </div>
      <SearchBar />
      <nav>
        <ul className={styles.ul}>
          <li>
            <Link href='/events/?page=1'>Events</Link>
          </li>
          {user ? (
            <>
              <li>
                <Link href='/events/add'>Add Event</Link>
              </li>
              <li onClick={logout}>
                <Link href='/'>Logout</Link>
              </li>
            </>
          ) : (
            <li>
              <Link href='/auth/login'>Login</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
