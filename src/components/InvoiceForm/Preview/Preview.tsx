import React from "react";
import styles from "./Preview.module.scss";
import { defaultValues, InvoiceFormData } from "../formUtils";

type PreviewProps = {
  formData?: InvoiceFormData;
};

export const Preview: React.FC<PreviewProps> = ({
  formData = defaultValues,
}) => {
  const subtotal = formData.items.reduce((acc, item) => acc + item.total, 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

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
              {formData.companyCity} {formData.companyCity ? "," : ""}{" "}
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
        {formData.items.map((item, i) => (
          <div key={`item-${i}`} className={styles.itemRow}>
            <span>{item.name}</span>
            <span>{item.qty}</span>
            <span>${Number(item.price).toFixed(2)}</span>
            <span>${Number(item.total).toFixed(2)}</span>
          </div>
        ))}
        <div className={styles.totals}>
          <div className={styles.totalsHolder}>
            <div className={styles.subtotal}>
              <span>Subtotal</span>
              <span>${Number(subtotal).toFixed(2)}</span>
            </div>
            <div className={styles.tax}>
              <span>Tax</span>
              <span>10%</span>
            </div>
            <div className={styles.total}>
              <span>Total</span>
              <span>${Number(total).toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
