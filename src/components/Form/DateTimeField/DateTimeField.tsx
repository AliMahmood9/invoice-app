import { Controller, useFormContext } from "react-hook-form";
import { DateTime } from "../../UI/DateTime";
import { ErrorMessage } from "../../ErrorMessage";
import React from "react";

type DatePickerFieldProps = {
  name: string;
  label?: string;
  showLabel?: boolean;
  className?: string;
};

export const DateTimeField: React.FC<DatePickerFieldProps> = ({
  name,
  label,
  showLabel,
  className,
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div className={className}>
          {showLabel && <label htmlFor={name}>{label}</label>}
          <DateTime type="date" {...field} />
          {error && <ErrorMessage errorMessage={error.message} />}
        </div>
      )}
    />
  );
};
