import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { InputField } from "../../Form";
import { MdDelete } from "react-icons/md";
import styles from "./ItemList.module.scss";

type ItemRowProps = {
  index: number;
  name?: string;
  qty: number;
  price: number;
  removeItem: (index: number) => void;
};

const ItemRow: React.FC<ItemRowProps> = ({ index, qty, price, removeItem }) => {
  const { setValue } = useFormContext();

  const total = (Number(qty) * Number(price)).toFixed(2);

  useEffect(() => {
    setValue(`items.${index}.total`, total);
  }, [qty, price, total, setValue, index]);

  return (
    <fieldset className={styles.itemRow}>
      <InputField name={`items.${index}.name`} placeholder="Item Name" />
      <InputField type="number" name={`items.${index}.qty`} placeholder="Qty" />
      <InputField
        type="number"
        name={`items.${index}.price`}
        placeholder="Price"
      />
      <InputField
        type="number"
        name={`items.${index}.total`}
        placeholder="Total"
        disabled
      />
      <button
        type="button"
        className={styles.deleteButton}
        onClick={() => removeItem(index)}
      >
        <MdDelete color="black" />
      </button>
    </fieldset>
  );
};

export default ItemRow;
