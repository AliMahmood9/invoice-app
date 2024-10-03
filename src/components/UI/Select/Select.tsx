import { FaChevronDown } from "react-icons/fa";
import styles from "./Select.module.scss";

type SelectProps = {
  name: string;
  options: { label: string; value: string }[];
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  value?: string;
};

export const Select: React.FC<SelectProps> = ({
  name,
  options,
  onChange,
  value,
}) => {
  return (
    <div className={styles.selectWrapper}>
      <select
        className={styles.select}
        name={name}
        onChange={onChange}
        value={value}
      >
        {options.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
      <FaChevronDown className={styles.dropdownIcon} />
    </div>
  );
};
