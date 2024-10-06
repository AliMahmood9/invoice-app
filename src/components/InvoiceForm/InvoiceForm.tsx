import { useForm, FormProvider } from "react-hook-form";
import { Button } from "../UI/Button";
import { BillFrom } from "./BillFrom/BillFrom";

import Logo from "../../assets/logo.svg";

import styles from "./InvoiceForm.module.scss";
import { BillTo } from "./BillTo";
import { ItemList } from "./ItemList/ItemList";
import { Preview } from "./Preview/Preview";

type FormValues = {
  billFrom: string;
  billTo: string;
  date: string;
};

const InvoiceForm = () => {
  const methods = useForm<FormValues>({
    defaultValues: {
      billFrom: "",
      billTo: "",
      date: "",
    },
  });

  const { handleSubmit } = methods;
  // console.log("methods", methods);

  const onSubmit = (data: FormValues) => {
    console.log(data);
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
                <Button variant="secondary" onClick={() => {}}>
                  Reset
                </Button>
                <Button type="submit" onClick={() => {}}>
                  Save
                </Button>
              </div>
            </div>
            <div className={styles.mainForm}>
              <div className={styles.billingInfo}>
                <BillFrom />
                <BillTo />
                <ItemList />
              </div>
              <div className={styles.totalInfo}>
                {/* TODO to be removed in next Pr */}
                <Preview
                  formData={{
                    invoiceDate: "2024-10-06",
                    paymentTerms: "Net 30",
                    companyName: "Custom Company",
                    companyEmail: "custom@company.com",
                    companyStreetAddress: "789 Custom St.",
                    companyCity: "Custom City",
                    companyPostalCode: "67890",
                    companyCountry: "Canada",
                    clientName: "Jane Smith",
                    clientEmail: "jane.smith@example.com",
                    clientStreetAddress: "321 Client Blvd.",
                    clientCity: "Client Town",
                    clientPostalCode: "09876",
                    clientCountry: "Canada",
                    projectDescription: "Custom Project Services",
                    items: [
                      {
                        id: 1,
                        name: "Custom Service 1",
                        qty: 2,
                        price: 150,
                        total: 300,
                      },
                      {
                        id: 2,
                        name: "Custom Service 2",
                        qty: 1,
                        price: 200,
                        total: 200,
                      },
                    ],
                  }}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </FormProvider>
  );
};

export default InvoiceForm;
