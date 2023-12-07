import React, { FormEvent, FormEventHandler, MouseEventHandler } from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: (e?: FormEvent<HTMLInputElement>) => void;
  priority: 'primary' | 'secondary' | 'tertiary';
  name?: string;
  type?: 'button' | 'submit';
}

function Button(props: ButtonProps) {
  const {
    children,
    className,
    priority = 'primary',
    onClick,
    name,
    type = 'button',
  } = props;
  return (
    <button
      onClick={onClick} // error here
      className={`${styles.button} ${
        styles[`button-${priority}`]
      } ${className}`}
      name={name}
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;
