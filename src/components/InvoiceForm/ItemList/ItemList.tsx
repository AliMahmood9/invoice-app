import { useFieldArray, useFormContext } from "react-hook-form";
import { MdDelete } from "react-icons/md";

import styles from "./ItemList.module.scss";
import { InputField } from "../../Form";
import { Button } from "../../UI/Button";

export const ItemList = () => {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    name: "items",
    control,
  });

  return (
    <div className={styles.itemsList}>
      <h2>Items List</h2>
      <div className={styles.itemsHeader}>
        <span>Item Name</span>
        <span>Qty.</span>
        <span>Price</span>
        <span>Total</span>
        <span>Action</span>
      </div>
      {fields.map((field, index) => {
        return (
          <div key={field.id} className={styles.itemRow}>
            <InputField name={`items.${index}.name`} placeholder="Item Name" />
            <InputField
              type="number"
              name={`items.${index}.qty`}
              placeholder="Qty"
            />
            <InputField
              type="number"
              name={`items.${index}.price`}
              placeholder="Price"
            />
            <InputField
              type="number"
              name={`items.${index}.total`}
              placeholder="Total"
            />
            <button
              type="button"
              className={styles.deleteButton}
              onClick={() => remove(index)}
            >
              <MdDelete color="black" />
            </button>
          </div>
        );
      })}
      <Button
        type="button"
        variant="tertiary"
        size="large"
        onClick={() =>
          append({
            name: "",
            qty: 0,
            price: 0,
            total: 0,
          })
        }
      >
        + Add New Item
      </Button>
    </div>
  );
};
