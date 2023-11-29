import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  priority: "primary" | "secondary" | "tertiary";
  name?: string;
}

function Button(props: ButtonProps) {
  const { children, className, priority = "primary", onClick, name } = props;
  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${
        styles[`button-${priority}`]
      } ${className}`}
      name={name}
    >
      {children}
    </button>
  );
}

export default Button;
