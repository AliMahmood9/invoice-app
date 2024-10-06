import React from "react";
import styles from "./Input.module.scss";

type InputProps = {
  name: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, id, type = "text", ...rest }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        placeholder={placeholder}
        id={id}
        className={styles.input}
        {...rest}
      />
    );
  }
);
