import type TODOItem from "../../../interfces/TodoItem";
import styles from "./TodoList.module.scss";
import TodoItem from "./todo-item/TodoItem";
type Props = {
  todos: Array<TODOItem>;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};
const TodoList = ({ todos, onToggle, onDelete }: Props) => {
  if (todos.length === 0) {
    return (
      <div className={styles.todoList__empty}>
        <p className={styles.todoList__emptyTitle}>No tasks found</p>
        <p className={styles.todoList__emptySubtitle}>
          Add a new task to get started!
        </p>
      </div>
    );
  }

  return (
    <div className={styles.todoList}>
      {todos.map((todo: TODOItem) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};
export default TodoList;
