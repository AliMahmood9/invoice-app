import { useForm, FormProvider } from "react-hook-form";
import { InputField, SelectField, DateTimeField } from "../Form";
import { Button } from "../UI/Button";

type FormValues = {
  billFrom: string;
  billTo: string;
  date: string;
};

const MyForm = () => {
  const methods = useForm<FormValues>({
    defaultValues: {
      billFrom: "",
      billTo: "",
      date: "",
    },
  });

  const { handleSubmit } = methods;

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      {/* TODO : to be remove after testing */}
      <h1>Invoive form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField name="billFrom" placeholder="Bill From" />
        <InputField name="billTo" placeholder="Bill To" />

        <SelectField
          name="billTo"
          options={[
            { label: "Option 1", value: "1" },
            { label: "Option 2", value: "2" },
          ]}
        />

        <DateTimeField name="date" />

        <div style={{ marginTop: "20px" }}>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};

export default MyForm;
