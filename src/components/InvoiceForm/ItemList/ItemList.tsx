import { useFieldArray, useFormContext } from "react-hook-form";

import styles from "./ItemList.module.scss";
import { Button } from "../../UI/Button";
import ItemRow from "./ItemRow";

export const ItemList = () => {
  const { control, watch } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    name: "items",
    control,
  });

  const addItems = () => {
    append({
      name: "",
      qty: 0,
      price: 0,
      total: 0,
    });
  };

  const removeItem = (index: number) => {
    remove(index);
  };

  return (
    <section className={styles.itemsList}>
      <h2>Items List</h2>
      <div className={styles.itemsHeader}>
        <span>Item Name</span>
        <span>Qty.</span>
        <span>Price</span>
        <span>Total</span>
        <span>Action</span>
      </div>
      {fields.map((field, index) => {
        const qty = watch(`items.${index}.qty`);
        const price = watch(`items.${index}.price`);
        return (
          <ItemRow
            key={field.id}
            removeItem={removeItem}
            index={index}
            qty={qty}
            price={price}
          />
        );
      })}
      <Button type="button" variant="tertiary" size="large" onClick={addItems}>
        + Add New Item
      </Button>
    </section>
  );
};
