import React from "react";
import styles from "./Button.module.scss";

type ButtonProps = {
  variant?: "primary" | "secondary" | "tertiary";
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  size?: "small" | "medium" | "large";
  children: React.ReactNode;
};

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  type = "button",
  size = "medium",
  children,
}) => {
  return (
    <button
      type={type}
      className={`${styles.button} ${styles[variant]} ${styles[size]}`}
    >
      {children}
    </button>
  );
};
