import styles from "./TodoList.module.scss";
type Props = {
  todos: Array<>;
  onToggle: () => void;
  onDelete: () => void;
};
const TodoList = ({ todos, onToggle, onDelete }: Props) => {
  if (todos.length === 0) {
    return (
      <div style={styles.todoList__empty}>
        <p style={styles.todoList__emptyTitle}>No tasks found</p>
        <p style={styles.todoList__emptySubtitle}>
          Add a new task to get started!
        </p>
      </div>
    );
  }

  return (
    <div style={styles.todoList}>
      {todos.map((todo) => (
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
