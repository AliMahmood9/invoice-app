// components/form/SelectField.tsx
import { Controller, useFormContext } from "react-hook-form";
import { Select } from "../../UI/Select";

type SelectFieldProps = {
  name: string;
  options: { label: string; value: string }[];
};

export const SelectField: React.FC<SelectFieldProps> = ({ name, options }) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => <Select options={options} {...field}></Select>}
    />
  );
};
