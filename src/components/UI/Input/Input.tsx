import React from "react";
import styles from "./Input.module.scss";

type InputProps = {
  name: string;
  type?: string;
  disabled?: boolean;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, id, disabled, type = "text", ...rest }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        id={id}
        className={styles.input}
        {...rest}
      />
    );
  }
);
