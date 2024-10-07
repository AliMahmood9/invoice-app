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
import { messages } from "../../utils/constants";

const InvoiceForm = () => {
  const methods = useForm<InvoiceFormData>({
    defaultValues,
    resolver: yupResolver(formSchema), // it is known issue exist on yup with ts https://github.com/orgs/react-hook-form/discussions/11472
  });

  const { handleSubmit, reset, watch } = methods;
  const [createInvoice] = useMutation(CREATE_INVOICE_MUTATION);

  const formData = watch();

  const onSubmit = async (data: InvoiceFormData) => {
    const invoiceObject = getInvoiceObject(data);
    try {
      await createInvoice({
        variables: {
          input: invoiceObject,
        },
      });
      toast(messages.success);
    } catch (err) {
      console.error("err", err);
      toast.error(messages.error);
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
