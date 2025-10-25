import styles from "./TodoApp.module.scss";
import Header from "../components/header/Header.tsx";
import type TODOItem from "../../interfces/TodoItem.ts";
import { useState } from "react";
import TodoInput from "../components/todo-input/TodoInput.tsx";
import FilterTabs from "../components/filter-tabs/FilterTabs.tsx";
import TodoList from "../components/todo-list/TodoList.tsx";
import Footer from "../components/footer/Footer.tsx";

function TodoApp() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Sample task 1", completed: false },
    { id: 2, text: "Sample task 2", completed: true },
  ]);
  const [filter, setFilter] = useState("all");

  const addTodo = (text: string) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };
  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo: TODOItem) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const filteredTodos = todos.filter((todo: TODOItem) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  const activeCount = todos.filter((t) => !t.completed).length;
  const completedCount = todos.length - activeCount;
  return (
    <div className={styles.todo_app}>
      <div className={styles.todo_app__container}>
        <Header />
        <div className={styles.todo_app__content}>
          <TodoInput onAdd={addTodo} />
          <FilterTabs
            activeFilter={filter}
            onFilterChange={setFilter}
            counts={{
              all: todos.length,
              active: activeCount,
              completed: completedCount,
            }}
          />
          <TodoList
            todos={filteredTodos}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
          {todos.length > 0 && <Footer activeCount={activeCount} />}
        </div>
      </div>
    </div>
  );
}

export default TodoApp;
