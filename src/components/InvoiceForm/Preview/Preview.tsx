import React from "react";
import styles from "./Preview.module.scss";
import { defaultValues, InvoiceFormData } from "../formUtils";
import { InvoiceHeader } from "./InvoiceHeader";
import { InvoiceItems } from "./InvoiceItems";
import { InvoiceTotals } from "./InvoiceTotals";

type PreviewProps = {
  formData?: InvoiceFormData;
};

export const Preview: React.FC<PreviewProps> = ({
  formData = defaultValues,
}) => {
  const subtotal = formData.items.reduce((acc, item) => acc + item.total, 0);
  const tax = subtotal * 0.1;
  const total = subtotal - tax;

  return (
    <section className={styles.preview}>
      <h2>Preview</h2>
      <div className={styles.invoice}>
        <h3>New Invoice</h3>
        <InvoiceHeader formData={formData} />
        <InvoiceItems items={formData.items} />
        <InvoiceTotals subtotal={subtotal} tax={tax} total={total} />
      </div>
    </section>
  );
};
