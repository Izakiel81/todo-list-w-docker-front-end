const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <div className="todo-item">
      <button
        onClick={() => onToggle(todo.id)}
        className={`todo-item__checkbox ${
          todo.completed ? "todo-item__checkbox--checked" : ""
        }`}
      >
        {todo.completed && (
          <Check size={16} className="todo-item__check-icon" />
        )}
      </button>
      <span
        className={`todo-item__text ${todo.completed ? "todo-item__text--completed" : ""}`}
      >
        {todo.text}
      </span>
      <button onClick={() => onDelete(todo.id)} className="todo-item__delete">
        <Trash2 size={18} />
      </button>
    </div>
  );
};

export default TodoItem;
