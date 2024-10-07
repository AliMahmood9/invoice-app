import React from "react";
import styles from "./Preview.module.scss";
import { InvoiceFormData } from "../formUtils";

type InvoiceHeaderProps = {
  formData: InvoiceFormData;
};

export const InvoiceHeader: React.FC<InvoiceHeaderProps> = ({ formData }) => (
  <div className={styles.row}>
    <div className={styles.invoiceDetailInfo}>
      <span className={styles.title}>Invoice Date</span>
      <span>{new Date(formData.invoiceDate || "").toLocaleDateString()}</span>
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
);
