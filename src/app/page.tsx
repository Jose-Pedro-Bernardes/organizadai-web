import styles from "./page.module.css";
import Header from "../components/Header"

export default function Home() {
  return (
    <div className={styles.page}>
      <Header></Header>
      <main className={styles.main}>
        <h1 className={styles.title}>Pronto para começar</h1>
      </main>
    </div>
  );
}
