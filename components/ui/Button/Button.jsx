import styles from './Button.module.css';

const styleMap = {
  'filled-red': styles.red,
  'filled-blue': styles.blue,
  'outlined-red': styles.outlined_red,
  'outlined-blue': styles.outlined_blue,
};

export function Button(props) {
  const {
    onClick = () => alert('Button cliked'),
    children = 'default button',
    disabled = false,
    variant = 'filled',
    color = 'red',
  } = props;

  const styleKey = `${variant}-${color}`;

  return (
    <button
      className={`${styles.button} ${styleMap[styleKey]}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
