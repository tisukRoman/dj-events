import { forwardRef } from 'react';
import styles from './Input.module.css';

const Input = forwardRef(function Inp(props, ref) {
  const { name, title, type = 'text' } = props;

  return (
    <div className={styles.input_wrapper}>
      <label htmlFor={name}>{title}</label>
      <input
        className={styles.input}
        type={type}
        name={name}
        id={name}
        {...props}
        {...ref}
      />
    </div>
  );
});

export { Input };
