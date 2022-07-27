import styles from './Button.module.css';

const styleMap = {
  'filled-red': styles.red,
  'filled-blue': styles.blue,
  'outlined-red': styles.outlined_red,
  'outlined-blue': styles.outlined_blue,
};

export function Button(props) {
  const {
    children = 'default button',
    variant = 'filled',
    color = 'red',
    type = 'button',
    disabled = false,
  } = props;

  const styleKey = `${variant}-${color}`;

  return (
    <button
      className={`${styles.button} ${styleMap[styleKey]}`}
      type={type}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
