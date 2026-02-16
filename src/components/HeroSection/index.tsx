import Image from "next/image";
import Link from "next/link";
import styles from './Hero.module.css'





export default function HeroSection() {

    return (
        
        <section>
          <h1 className={styles.title}>Organize clientes, agenda e pagamentos em um só lugar</h1>
          <p>Com o OrganizaDaí, você centraliza tudo o que precisa para gerenciar seus atendimentos: clientes, agenda, serviços e pagamentos — sem planilhas e sem bagunça.</p>
          <Link href="cadastro" className={styles.cadastro}>
            <span>Criar conta grátis</span>
            <Image
              className={styles.setaCadastro}
              src="/setadireita.png"
              alt="seta"
              width="14"
              height="14"
            />
          </Link>
        </section>

    )
};