import styles from "./Footer.module.scss";
type Props = { activeCount: number };

function Footer({ activeCount }: Props) {
  return (
    <div className={styles.footer}>
      {activeCount} {activeCount === 1 ? "task" : "tasks"} remaining
    </div>
  );
}

export default Footer;
