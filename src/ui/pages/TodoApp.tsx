import styles from "./TodoApp.module.scss";
import Header from "../components/header/Header.tsx";

function TodoApp() {
  return (
    <div className={styles.todo_app}>
      <div className={styles.todo_app__container}>
        <Header />
        <div className={styles.todo_app__content}></div>
      </div>
    </div>
  );
}

export default TodoApp;
