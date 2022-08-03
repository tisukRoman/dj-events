import classNames from 'classnames/bind';
import styles from './Button.module.css';

let cx = classNames.bind(styles);

export function Button(props) {
  const {
    children = 'default button',
    color = 'red',
    disabled = false,
  } = props;

  const className = cx({
    'button': true,
    'red': color === 'red',
    'blue': color === 'blue',
    'disabled': disabled === true,
  });

  return (
    <button className={className} disabled={disabled} {...props}>
      {children}
    </button>
  );
}
