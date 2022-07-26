import { forwardRef } from 'react';
import styles from './Input.module.css';

/* eslint-disable */
export const Input = forwardRef((props, ref) => {
  const { name, title, type = 'text' } = props;

  return (
    <div className={styles.input_wrapper}>
      <label htmlFor={name}>{title}</label>
      <input
        className={styles.input}
        type={type}
        id={name}
        {...props}
        ref={ref}
      />
    </div>
  );
});
