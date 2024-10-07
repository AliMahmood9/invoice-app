import * as yup from "yup";

export type InvoiceFormData = {
  companyName: string;
  companyEmail: string;
  companyCountry: string;
  companyCity: string;
  companyPostalCode: string;
  companyStreetAddress: string;
  clientName: string;
  clientEmail: string;
  clientCountry: string;
  clientCity: string;
  clientPostalCode: string;
  clientStreetAddress: string;
  invoiceDate: Date;
  paymentTerms: string;
  projectDescription: string;
  items: {
    name: string;
    qty: number;
    price: number;
    total: number;
  }[];
};

export const defaultValues: InvoiceFormData = {
  companyName: "",
  companyEmail: "",
  companyCountry: "",
  companyCity: "",
  companyPostalCode: "",
  companyStreetAddress: "",
  clientName: "",
  clientEmail: "",
  clientCountry: "",
  clientCity: "",
  clientPostalCode: "",
  clientStreetAddress: "",
  invoiceDate: new Date(),
  paymentTerms: "",
  projectDescription: "",
  items: [],
};

export const formSchema = yup.object().shape({
  companyName: yup.string().required("Company Name is required"),
  companyEmail: yup
    .string()
    .email("Must be a valid email")
    .required("Company Email is required"),
  companyCountry: yup.string().required("Country is required"),
  companyCity: yup.string().required("City is required"),
  companyPostalCode: yup.string().required("Postal Code is required"),
  companyStreetAddress: yup.string().required("Street Address is required"),
  clientName: yup.string().required("Client's Name is required"),
  clientEmail: yup
    .string()
    .email("Must be a valid email")
    .required("Client's Email is required"),
  clientCountry: yup.string().required("Country is required"),
  clientCity: yup.string().required("City is required"),
  clientPostalCode: yup.string().required("Postal Code is required"),
  clientStreetAddress: yup.string().required("Street Address is required"),
  invoiceDate: yup.date().required("Invoice Date is required"),
  paymentTerms: yup.string().required("Payment Terms is required"),
  projectDescription: yup.string().required("Project Description is required"),
  items: yup.array().of(
    yup.object().shape({
      name: yup.string().required("Item name is required"),
      qty: yup.number().required("Quantity is required").positive().integer(),
      price: yup.number().required("Price is required").positive(),
    })
  ),
});

export const getInvoiceObject = (data: InvoiceFormData) => {
  return {
    createInvoiceAttributes: {
      invoiceDate: data.invoiceDate,
      paymentTerms: data.paymentTerms,
      projectDescription: data.projectDescription,
      billingFromAttributes: {
        billingFromAddressAttributes: {
          streetAddress: data.companyStreetAddress,
          city: data.companyCity,
          country: data.companyCountry,
          postalCode: data.companyPostalCode,
        },
        companyEmail: data.companyEmail,
        companyName: data.companyName,
      },
      billingToAttributes: {
        billingToAddressAttributes: {
          streetAddress: data.clientStreetAddress,
          city: data.clientCity,
          country: data.clientCountry,
          postalCode: data.clientPostalCode,
        },
        clientEmail: data.clientEmail,
        clientName: data.clientName,
      },
      itemAttributes: data.items.map((item) => ({
        name: item.name,
        price: Number(item.price),
        quantity: Number(item.qty),
      })),
    },
  };
};
