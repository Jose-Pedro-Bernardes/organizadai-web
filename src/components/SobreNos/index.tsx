import Image from "next/image";
import styles from "./sobrenos.module.css";


export default function SobreNos() {

  return (

    <section className={styles.aboutPage}>
    <Image
      className={styles.logo}
      src="/bannerAboutPage.jpg"
      alt="Profissional organizando atendimentos no sistema"
      width={620}
      height={550}
    />

    <div className={styles.aboutSection}>
      <p className={styles.subtitle}>Sobre o OrganizaDaí</p>

      <h3 className={styles.title}>
        Uma solução criada para simplificar a rotina
      </h3>

      <p className={styles.aboutText}>
        O OrganizaDaí nasceu com o objetivo de ajudar profissionais autônomos e
        prestadores de serviço a organizarem seus clientes, agendamentos e
        pagamentos em um único sistema simples e eficiente.
      </p>

      <p className={styles.aboutText}>
        Sabemos que muitos profissionais ainda utilizam planilhas, anotações
        manuais ou aplicativos desconectados entre si. Isso gera retrabalho,
        perda de informações e falta de controle financeiro.
      </p>

      <p className={styles.aboutText}>
        Pensando nisso, desenvolvemos uma plataforma moderna que centraliza tudo
        o que você precisa para administrar seu negócio com mais organização e
        profissionalismo.
      </p>

      <ul className={styles.aboutList}>
        <li className={styles.aboutLine}><span className={styles.point}>•</span> Controle de agenda e atendimentos</li>
        <li className={styles.aboutLine}><span className={styles.point}>•</span> Cadastro e gestão de clientes</li>
        <li className={styles.aboutLine}><span className={styles.point}>•</span> Registro de serviços prestados</li>
        <li className={styles.aboutLine}><span className={styles.point}>•</span> Acompanhamento de pagamentos e finanças</li>
      </ul>

      <p className={styles.aboutText}>
        Nosso propósito é oferecer uma ferramenta prática, intuitiva e acessível
        para que você foque no que realmente importa: atender bem seus clientes
        e crescer seu negócio.
      </p>
    </div>
  </section>

  )
};
