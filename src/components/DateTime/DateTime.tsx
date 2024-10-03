// src/components/DateTime.tsx

import React from "react";
import styles from "./DateTime.module.scss";

type DateTimeProps = {
  type: "date" | "datetime-local" | "time";
  id?: string;
  name: string;
  value: string;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const DateTime: React.FC<DateTimeProps> = ({
  type,
  id,
  name,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={styles.dateTimeInput}
    />
  );
};
