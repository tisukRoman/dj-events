import { useState } from 'react';
import { useRouter } from 'next/router';
import { FiSearch } from 'react-icons/fi';
import styles from './SearchBar.module.css';

export function SearchBar() {
  const router = useRouter();
  const [term, setTerm] = useState(''); // search words

  function onChange(e) {
    setTerm(e.target.value);
  }

  function onSearch() {
    if (term) {
      router.push(`/events/search/?term=${term}`);
    }else{
      router.push(`/events`);
    }
  }

  return (
    <div className={styles.search_bar}>
      <input
        onChange={onChange}
        className={styles.search_input}
        type='text'
        placeholder='Search event...'
      />
      <button className={styles.search_button} onClick={onSearch}>
        <FiSearch />
      </button>
    </div>
  );
}
