import { Controller, useFormContext } from "react-hook-form";
import { Input } from ".././../UI/Input";
import React from "react";
import { ErrorMessage } from "../../ErrorMessage";

type InputFieldProps = {
  name: string;
  type?: string;
  label?: string;
  showLabel?: boolean;
  placeholder: string;
  className?: string;
};

export const InputField: React.FC<InputFieldProps> = ({
  name,
  placeholder,
  className,
  showLabel,
  label,
  type,
}) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div className={className}>
          {showLabel && <label htmlFor={name}>{label}</label>}
          <Input type={type} {...field} placeholder={placeholder} />
          {error && <ErrorMessage errorMessage={error.message} />}
        </div>
      )}
    />
  );
};
