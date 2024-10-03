import styles from "./Input.module.scss";

type InputProps = {
  name: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
};

export const Input: React.FC<InputProps> = ({
  name,
  placeholder,
  value,
  id,
  onChange,
}) => {
  return (
    <input
      name={name}
      placeholder={placeholder}
      id={id}
      value={value}
      className={styles.input}
      onChange={onChange}
    />
  );
};
