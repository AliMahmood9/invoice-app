import React from "react";
import styles from "./Preview.module.scss";

type InvoiceTotalsProps = {
  subtotal: number;
  tax?: number;
  total: number;
};

export const InvoiceTotals: React.FC<InvoiceTotalsProps> = ({
  subtotal,
  total,
}) => (
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
);
