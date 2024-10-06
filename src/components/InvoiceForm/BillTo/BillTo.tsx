import React from "react";
import styles from "./BillTo.module.scss";
import { InputField, SelectField } from "../../Form";
import { CountryOptions, InvoiceTermsOptions } from "../../../utils/constants";
import { DateTimeField } from "../../Form/DateTimeField/DateTimeField";

export const BillTo: React.FC = () => (
  <div className={styles.billFrom}>
    <h2>Bill To</h2>
    <div className={styles.flexContainer}>
      <InputField
        name="clientName"
        placeholder="Client Name"
        showLabel
        label="Client Name"
        className={styles.formGroup}
      />
      <InputField
        name="clientEmail"
        placeholder="Client Email"
        showLabel
        label="Client Email"
        className={styles.formGroup}
      />
    </div>

    <div className={styles.flexContainer}>
      <SelectField
        showLabel
        label="Client Country"
        name="clientCountry"
        options={CountryOptions}
        className={styles.formGroup}
      />
      <InputField
        showLabel
        label="Client City"
        name="clientCity"
        placeholder="Client City"
        className={styles.formGroup}
      />
      <InputField
        showLabel
        label="Postal Code"
        name="clientPostalCode"
        placeholder="Postal Code"
        className={styles.formGroup}
      />
    </div>

    <InputField
      showLabel
      label="Street Address"
      className={styles.formGroup}
      name="clientStreetAddress"
      placeholder="Street Address"
    />

    <div className={styles.flexContainer}>
      <DateTimeField
        showLabel
        label="Invoice Date"
        className={styles.formGroup}
        name="invoiceDate"
      />

      <SelectField
        showLabel
        label="Payment Terms"
        name="paymentTerms"
        options={InvoiceTermsOptions}
      />
    </div>
    <InputField
      name="projectDescription"
      placeholder="Project Description"
      showLabel
      label="Project Description"
    />
  </div>
);
