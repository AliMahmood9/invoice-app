import React from "react";
import styles from "./Preview.module.scss";
import { InvoiceFormData } from "../formUtils";

type InvoiceItemsProps = {
  items: InvoiceFormData["items"];
};

export const InvoiceItems: React.FC<InvoiceItemsProps> = ({ items }) => (
  <>
    <div className={styles.itemsHeader}>
      <span>Item</span>
      <span>Qty.</span>
      <span>Price</span>
      <span>Total Amount</span>
    </div>
    {items.map((item, i) => (
      <div key={`item-${i}`} className={styles.itemRow}>
        <span>{item.name}</span>
        <span>{item.qty}</span>
        <span>${Number(item.price).toFixed(2)}</span>
        <span>${Number(item.total).toFixed(2)}</span>
      </div>
    ))}
  </>
);
