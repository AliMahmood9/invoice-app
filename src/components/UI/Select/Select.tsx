import React from "react";
import styles from "./Select.module.scss";
import { FaChevronDown } from "react-icons/fa";

type SelectProps = {
  name?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { label: string; value: string }[];
};

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ name, options, ...rest }, ref) => {
    return (
      <div className={styles.selectWrapper}>
        <select ref={ref} className={styles.select} name={name} {...rest}>
          {options.map(({ label, value }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
        <FaChevronDown className={styles.dropdownIcon} />
      </div>
    );
  }
);
