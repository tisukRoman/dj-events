import classNames from 'classnames/bind';
import Link from 'next/link';
import styles from './Link.module.css';

let cx = classNames.bind(styles);

export function NavLink(props) {
  const { href, color = 'blue', disabled, children, onClick } = props;

  const className = cx({
    link: true,
    red: color === 'red',
    blue: color === 'blue',
    disabled: disabled === true,
  });

  return (
    <Link onClick={onClick} href={href}>
      <div className={className}>{children}</div>
    </Link>
  );
}
