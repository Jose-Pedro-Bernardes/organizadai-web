import styles from "./page.module.css";
import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import SobreNos from "@/components/SobreNos"


export default function Home() {
  return (
    <div className={styles.page}>
      <Header></Header>
      <main className={styles.main}>
        <HeroSection></HeroSection>
        <SobreNos></SobreNos>
      </main>
      <footer></footer>
    </div>
  );
}
