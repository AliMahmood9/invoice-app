import { useForm, FormProvider } from "react-hook-form";
import { Button } from "../UI/Button";
import { BillFrom } from "./BillFrom/BillFrom";
import { yupResolver } from "@hookform/resolvers/yup";

import Logo from "../../assets/logo.svg";

import styles from "./InvoiceForm.module.scss";
import { BillTo } from "./BillTo";
import { ItemList } from "./ItemList/ItemList";
import { Preview } from "./Preview/Preview";
import { formSchema, defaultValues, InvoiceFormData } from "./formUtils";

const InvoiceForm = () => {
  const methods = useForm<InvoiceFormData>({
    defaultValues,
    resolver: yupResolver(formSchema),
  });

  const { handleSubmit, reset, watch } = methods;

  const formData = watch();
  console.log("formData", formData);

  const onSubmit = (data: InvoiceFormData) => {
    console.log(data);
  };

  const handleReset = () => {
    reset();
  };

  return (
    <FormProvider {...methods}>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <img src={Logo} alt="logo" />
        </header>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.invoiceForm}>
          <div className={styles.container}>
            <div className={styles.formHeader}>
              <div className={styles.titleBlock}>
                <h1>New Invoice</h1>
                <p>Create new invoice for your customers</p>
              </div>
              <div className={styles.btnsBlock}>
                <Button variant="secondary" onClick={handleReset}>
                  Reset
                </Button>
                <Button type="submit">Save</Button>
              </div>
            </div>
            <div className={styles.mainForm}>
              <div className={styles.billingInfo}>
                <BillFrom />
                <BillTo />
                <ItemList />
              </div>
              <div className={styles.totalInfo}>
                <Preview formData={formData} />
              </div>
            </div>
          </div>
        </form>
      </div>
    </FormProvider>
  );
};

export default InvoiceForm;
