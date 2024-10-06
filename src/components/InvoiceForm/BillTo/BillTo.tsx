import React from "react";
import styles from "./BillTo.module.scss";
import { InputField, SelectField } from "../../Form";
import { CountryOptions } from "../../../utils/constants";

export const BillTo: React.FC = () => (
  <div className={styles.billFrom}>
    <h2>Bill To</h2>
    <div className={styles.flexContainer}>
      <div className={styles.formGroup}>
        <label htmlFor="companyName">Company Name</label>
        <InputField name="companyName" placeholder="Company Name" />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="companyEmail">Company Email</label>
        <InputField name="companyEmail" placeholder="Company Email" />
      </div>
    </div>

    <div className={styles.flexContainer}>
      <div className={styles.formGroup}>
        <label htmlFor="companyCountry">Country</label>
        <SelectField name="companyCountry" options={CountryOptions} />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="city">City</label>
        <InputField name="companyCity" placeholder="Company City" />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="postalCode">Postal Code</label>
        <InputField name="companyPostalCode" placeholder="Postal Code" />
      </div>
    </div>

    <div className={styles.formGroup}>
      <label htmlFor="streetAddress">Street Address</label>
      <InputField name="companyStreetAddress" placeholder="Street Address" />
    </div>
  </div>
);
