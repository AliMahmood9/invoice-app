import React from "react";
import styles from "./BillFrom.module.scss";
import { InputField, SelectField } from "../../Form";
import { CountryOptions } from "../../../utils/constants";

export const BillFrom: React.FC = () => (
  <div className={styles.billFrom}>
    <h2>Bill From</h2>
    <div className={styles.flexContainer}>
      <InputField
        name="companyName"
        className={styles.formGroup}
        placeholder="Company Name"
        showLabel
        label="Company Name"
      />
      <InputField
        className={styles.formGroup}
        name="companyEmail"
        placeholder="Company Email"
        showLabel
        label="Company Email"
      />
    </div>

    <div className={styles.flexContainer}>
      <SelectField
        showLabel
        className={styles.formGroup}
        label="company Country"
        name="companyCountry"
        options={CountryOptions}
      />

      <InputField
        className={styles.formGroup}
        name="companyCity"
        placeholder="Company City"
        showLabel
        label="Company City"
      />
      <InputField
        className={styles.formGroup}
        name="companyPostalCode"
        placeholder="Postal Code"
        showLabel
        label="Postal Code"
      />
    </div>

    <InputField
      className={styles.formGroup}
      name="companyStreetAddress"
      placeholder="Company Street Address"
      showLabel
      label="Company Street Address"
    />
  </div>
);
