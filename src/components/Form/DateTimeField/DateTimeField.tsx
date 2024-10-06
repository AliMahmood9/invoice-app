// components/form/DatePickerField.tsx
import { Controller, useFormContext } from "react-hook-form";
import { DateTime } from "../../UI/DateTime";
import React from "react";

type DatePickerFieldProps = {
  name: string;
};

export const DateTimeField: React.FC<DatePickerFieldProps> = React.forwardRef(
  ({ name }) => {
    const { control } = useFormContext();
    return (
      <Controller
        name={name}
        control={control}
        render={({ field }) => <DateTime type="date" {...field} />}
      />
    );
  }
);
