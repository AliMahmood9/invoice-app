import { useForm, FormProvider } from "react-hook-form";
import { Button } from "../UI/Button";
import { BillFrom } from "./BillFrom/BillFrom";
import { yupResolver } from "@hookform/resolvers/yup";

import styles from "./InvoiceForm.module.scss";
import { BillTo } from "./BillTo";
import { ItemList } from "./ItemList/ItemList";
import { Preview } from "./Preview/Preview";
import {
  formSchema,
  defaultValues,
  InvoiceFormData,
  getInvoiceObject,
} from "./formUtils";
import { CREATE_INVOICE_MUTATION } from "../../graphql/mutation/submitInvoice";
import { useMutation } from "@apollo/client";
import { toast } from "react-toastify";

const InvoiceForm = () => {
  const methods = useForm<InvoiceFormData>({
    defaultValues,
    resolver: yupResolver(formSchema),
  });

  const { handleSubmit, reset, watch } = methods;
  const [createInvoice] = useMutation(CREATE_INVOICE_MUTATION);

  const formData = watch();

  const onSubmit = async (data: InvoiceFormData) => {
    const subtotal = data.items.reduce(
      (acc, item) => acc + item.price * item.qty,
      0
    );
    const tax = subtotal * 0.1;
    const total = subtotal + tax;
    const invoiceObject = getInvoiceObject(data, subtotal, tax, total);
    try {
      const response = await createInvoice({
        variables: {
          input: invoiceObject,
        },
      });
      console.log("response", response);
      toast("Your invoice has been created");
    } catch (err) {
      console.log("err", err);
    }
  };

  const handleReset = () => {
    reset();
  };

  return (
    <FormProvider {...methods}>
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
    </FormProvider>
  );
};

export default InvoiceForm;
