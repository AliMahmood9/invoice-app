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

// utils/invoiceUtils.ts
export const getInvoiceObject = (
  data: InvoiceFormData,
  subtotal: number,
  tax: number,
  total: number
) => {
  return {
    createInvoiceAttributes: {
      billingFrom: {
        billingFromAddress: {
          streetAddress: data.companyStreetAddress,
          city: data.companyCity,
          country: data.companyCountry,
          postalCode: data.companyPostalCode,
        },
        companyEmail: data.companyEmail,
        companyName: data.companyName,
        id: "1234", // example ID for testing
      },
      billingTo: {
        billingToAddress: {
          streetAddress: data.clientStreetAddress,
          city: data.clientCity,
          country: data.clientCountry,
          postalCode: data.clientPostalCode,
        },
        clientEmail: data.clientEmail,
        clientName: data.clientName,
        id: "3214", // example ID for testing
      },
      invoiceDate: data.invoiceDate,
      items: data.items.map((item, index) => ({
        id: index.toString(), // Use appropriate ID generation logic
        name: item.name,
        price: Number(item.price),
        quantity: Number(item.qty),
        totalPrice: Number(item.price) * Number(item.qty),
      })),
      paymentTerms: data.paymentTerms,
      subTotal: subtotal, // Calculated subTotal
      tax: tax, // Calculated tax
      totalAmount: total, // Calculated totalAmount
    },
  };
};
