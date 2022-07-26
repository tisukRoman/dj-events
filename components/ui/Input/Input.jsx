import { forwardRef } from 'react';
import styles from './Input.module.css';

/* eslint-disable */
export const Input = forwardRef((props, ref) => {
  const { name, title, type = 'text', error = false, helpertext } = props;

  return (
    <div className={styles.input_wrapper}>
      <label htmlFor={name} className={`${error && styles.error_message}`}>
        {title}
      </label>
      <input
        className={`${styles.input} ${error && styles.error_input}`}
        type={type}
        id={name}
        {...props}
        ref={ref}
      />
      {error && <p className={styles.error_message}>{helpertext}</p>}
    </div>
  );
});
