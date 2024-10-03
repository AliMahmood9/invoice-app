// components/form/DatePickerField.tsx
import { Controller, useFormContext } from "react-hook-form";
import { DateTime } from "../../UI/DateTime";

type DatePickerFieldProps = {
  name: string;
};

export const DateTimeField: React.FC<DatePickerFieldProps> = ({ name }) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => <DateTime type="date" {...field} />}
    />
  );
};
