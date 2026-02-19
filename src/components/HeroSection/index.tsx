import Image from "next/image";
import Link from "next/link";
import styles from './Hero.module.css'





export default function HeroSection() {

    return (
        
        <section className={styles.heroSection}>
          <h1 className={styles.title}>
          Organize <span className={styles.titleItalian}> clientes, agenda e pagamentos </span> 
          em um só lugar com o <span className={styles.blue}>Organiza</span>
          <span className={styles.green}>Daí</span>
          </h1>
          
          <p className={styles.heroDescription}>
            Você centraliza tudo o que precisa para gerenciar seus atendimentos:
            clientes, agenda, serviços e pagamentos — sem planilhas e sem bagunça.
          </p>

          <Link href="cadastro" className={styles.cadastro} aria-label="Criar conta gratuita no OrganizaDaí">
            <span>Criar conta grátis</span>
            <Image
              className={styles.setaCadastro}
              src="/setaDireitaHero.png"
              alt="seta"
              width="100"
              height="100"
            />
          </Link>
        </section>

    )
};