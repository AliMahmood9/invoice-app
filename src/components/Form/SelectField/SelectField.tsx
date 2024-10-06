import { Controller, useFormContext } from "react-hook-form";
import { Select } from "../../UI/Select";
import { ErrorMessage } from "../../ErrorMessage";
import React from "react";

type SelectFieldProps = {
  name: string;
  className?: string;
  options: { label: string; value: string }[];
  label?: string;
  showLabel?: boolean;
};

export const SelectField: React.FC<SelectFieldProps> = ({
  name,
  options,
  className,
  label,
  showLabel,
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div className={className}>
          {showLabel && <label htmlFor={name}>{label}</label>}
          <Select options={options} {...field} />
          {error && <ErrorMessage errorMessage={error.message} />}
        </div>
      )}
    />
  );
};
