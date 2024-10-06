import React from "react";
import styles from "./Preview.module.scss";

interface PreviewProps {
  formData: {
    invoiceDate?: string;
    paymentTerms?: string;
    companyName?: string;
    companyEmail?: string;
    companyStreetAddress?: string;
    clientName?: string;
    clientCity?: string;
    clientStreetAddress?: string;
    projectDescription?: string;
    companyCity?: string;
    companyPostalCode?: string;
    companyCountry?: string;
    clientCountry?: string;
    clientEmail?: string;
    clientPostalCode?: string;
    items: {
      id: number;
      name: string;
      qty: number;
      price: number;
      total: number;
    }[];
  };
}

const dummyData = {
  invoiceDate: "2024-10-06",
  paymentTerms: "Net 30",
  companyName: "Awesome Co.",
  companyEmail: "contact@awesomeco.com",
  companyStreetAddress: "123 Awesome St.",
  companyCity: "Awesome City",
  companyPostalCode: "12345",
  companyCountry: "USA",
  clientName: "John Doe",
  clientEmail: "john.doe@example.com",
  clientStreetAddress: "456 Client Ave.",
  clientCity: "Client City",
  clientPostalCode: "54321",
  clientCountry: "USA",
  projectDescription: "Web Development Services",
  items: [
    { id: 1, name: "Web Design", qty: 1, price: 500, total: 500 },
    { id: 2, name: "Hosting Service", qty: 12, price: 20, total: 240 },
    { id: 3, name: "SEO Optimization", qty: 1, price: 300, total: 300 },
  ],
};

export const Preview: React.FC<PreviewProps> = ({
  formData = dummyData, // Use dummy data if no formData is provided
}) => {
  const subtotal = formData.items.reduce((acc, item) => acc + item.total, 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax; // Updated to add tax to subtotal

  return (
    <div className={styles.preview}>
      <h2>Preview</h2>
      <div className={styles.invoice}>
        <h3>New Invoice</h3>
        <div className={styles.row}>
          <div className={styles.invoiceDetailInfo}>
            <span className={styles.title}>Invoice Date</span>
            <span>
              {new Date(formData.invoiceDate || "").toLocaleDateString()}
            </span>
          </div>
          <div className={styles.invoiceDetailInfo}>
            <span className={styles.title}>Payment Terms</span>
            <span>{formData.paymentTerms}</span>
          </div>
          <div className={styles.invoiceDetailInfo}>
            <span className={styles.title}>Billed From</span>
            <span>{formData.companyName}</span>
            <span>{formData.companyEmail}</span>
            <span>{formData.companyStreetAddress}</span>
            <span>
              {formData.companyCity} {formData.companyCity ? "," : ""}
              {formData.companyPostalCode}
            </span>
            <span>{formData.companyCountry}</span>
          </div>
          <div className={styles.invoiceDetailInfo}>
            <span className={styles.title}>Billed To</span>
            <span>{formData.clientName}</span>
            <span>{formData.clientEmail}</span>
            <span>{formData.clientStreetAddress}</span>
            <span>
              {formData.clientCity} {formData.clientCity ? "," : ""}{" "}
              {formData.clientPostalCode}
            </span>
            <span>{formData.clientCountry}</span>
          </div>
          <div className={styles.invoiceDetailInfo}>
            <span className={styles.title}>Project Description</span>
            <span>{formData.projectDescription}</span>
          </div>
        </div>
        <div className={styles.itemsHeader}>
          <span>Item</span>
          <span>Qty.</span>
          <span>Price</span>
          <span>Total Amount</span>
        </div>
        {formData.items.map((item) => (
          <div key={item.id} className={styles.itemRow}>
            <span>{item.name}</span>
            <span>{item.qty}</span>
            <span>${item.price.toFixed(2)}</span>
            <span>${item.total.toFixed(2)}</span>
          </div>
        ))}
        <div className={styles.totals}>
          <div className={styles.totalsHolder}>
            <div className={styles.subtotal}>
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className={styles.tax}>
              <span>Tax</span>
              <span>10%</span>
            </div>
            <div className={styles.total}>
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
