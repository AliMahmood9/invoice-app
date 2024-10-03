import { Controller, useFormContext } from "react-hook-form";
import { Input } from ".././../UI/Input";

type InputFieldProps = {
  name: string;
  placeholder: string;
};

export const InputField: React.FC<InputFieldProps> = ({
  name,
  placeholder,
}) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => <Input placeholder={placeholder} {...field} />}
    />
  );
};
