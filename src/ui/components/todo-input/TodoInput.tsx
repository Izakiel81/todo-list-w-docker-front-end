import styles from "./TodoInput.module.scss";
import { useState } from "react";
import { Plus } from "lucide-react";

type Props = {
  onAdd: (text: string) => void;
};

function TodoInput({ onAdd }: Props) {
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    if (value.trim()) {
      onAdd(value);
      setValue("");
    }
  };

  return (
    <div className={styles.todo_input}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyUP={(e) => e.key === "Enter" && handleSubmit()}
        placeholder="Add a new task..."
        className={styles.todo_input__field}
      />
      <button onClick={handleSubmit} className={styles.todo_input__button}>
        <Plus size={20} />
        Add
      </button>
    </div>
  );
}

export default TodoInput;
