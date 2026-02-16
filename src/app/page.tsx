import styles from "./page.module.css";
import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"


export default function Home() {
  return (
    <div className={styles.page}>
      <Header></Header>
      <main className={styles.main}>
        <HeroSection></HeroSection>
      </main>
      <footer></footer>
    </div>
  );
}
