import styles from "./Header.module.scss";
export const Header = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.header__title}>My Tasks</h1>
      <p className={styles.header__subtitle}>Stay organized and productive</p>
    </div>
  );
};
export default Header;
