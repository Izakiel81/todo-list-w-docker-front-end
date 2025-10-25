import type TODOItem from "../../../../interfces/TodoItem";
import styles from "./TodoItem.module.scss";
import { Trash2, Check } from "lucide-react";
type Props = {
  todo: TODOItem;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};
const TodoItem = ({ todo, onToggle, onDelete }: Props) => {
  return (
    <div className={styles.todo_item}>
      <button
        onClick={() => onToggle(todo.id)}
        className={`${styles.todo_item__checkbox} ${
          todo.completed ? styles.todo_item__checkbox__checked : ""
        }}`}
      >
        {todo.completed && (
          <Check size={16} className={styles.todo_item__check_icon} />
        )}
      </button>
      <span
        className={`${styles.todo_item__text} ${todo.completed ? styles.todo_item__text__completed : ""}`}
      >
        {todo.text}
      </span>
      <button
        onClick={() => onDelete(todo.id)}
        className={styles.todo_item__delete}
      >
        <Trash2 size={18} />
      </button>
    </div>
  );
};

export default TodoItem;
