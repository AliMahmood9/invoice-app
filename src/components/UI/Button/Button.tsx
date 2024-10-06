import React from "react";
import styles from "./Button.module.scss";

type ButtonProps = {
  variant?: "primary" | "secondary" | "tertiary";
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  size?: "small" | "medium" | "large";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
};

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  type = "button",
  onClick,
  size = "medium",
  children,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.button} ${styles[variant]} ${styles[size]}`}
    >
      {children}
    </button>
  );
};
