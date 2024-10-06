import { Controller, useFormContext } from "react-hook-form";
import { Input } from ".././../UI/Input";
import React from "react";

type InputFieldProps = {
  name: string;
  type?: string;
  placeholder: string;
};

export const InputField: React.FC<InputFieldProps> = React.forwardRef(
  ({ name, placeholder, type }) => {
    const { control } = useFormContext();
    return (
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Input type={type} placeholder={placeholder} {...field} />
        )}
      />
    );
  }
);
