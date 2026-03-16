import styles from "./page.module.css";
import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import Beneficios from "@/components/Beneficios"
import Metricas from "@/components/Metricas"
import Depoimentos from "@/components/Depoimentos"
import Integracoes from "@/components/Integracoes"
import CTAFinal from "@/components/CTAFinal"


export default function Home() {
  return (
    <div className={styles.page}>
      <Header></Header>
      <main className={styles.main}>
        <HeroSection></HeroSection>
        <Beneficios></Beneficios>
        <Metricas></Metricas>
        <Depoimentos></Depoimentos>
        <Integracoes></Integracoes>
        <CTAFinal></CTAFinal>
      </main>
      <footer></footer>
    </div>
  );
}
