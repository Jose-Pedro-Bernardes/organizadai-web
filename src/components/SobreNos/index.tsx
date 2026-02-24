import Image from "next/image";
import styles from "./sobrenos.module.css";


export default function SobreNos() {

  return (

    <section className={styles.aboutPage}>
    <Image
      className={styles.logo}
      src="/bannerAboutPage.jpg"
      alt="Profissional organizando atendimentos no sistema"
      width={600}
      height={400}
    />

    <div>
      <p>Sobre o OrganizaDaí</p>

      <h3>
        Uma solução criada para simplificar a rotina de prestadores de serviço
      </h3>

      <p>
        O OrganizaDaí nasceu com o objetivo de ajudar profissionais autônomos e
        prestadores de serviço a organizarem seus clientes, agendamentos e
        pagamentos em um único sistema simples e eficiente.
      </p>

      <p>
        Sabemos que muitos profissionais ainda utilizam planilhas, anotações
        manuais ou aplicativos desconectados entre si. Isso gera retrabalho,
        perda de informações e falta de controle financeiro.
      </p>

      <p>
        Pensando nisso, desenvolvemos uma plataforma moderna que centraliza tudo
        o que você precisa para administrar seu negócio com mais organização e
        profissionalismo.
      </p>

      <ul>
        <li>✔ Cadastro e gestão de clientes</li>
        <li>✔ Controle de agenda e atendimentos</li>
        <li>✔ Registro de serviços prestados</li>
        <li>✔ Acompanhamento de pagamentos e finanças</li>
      </ul>

      <p>
        Nosso propósito é oferecer uma ferramenta prática, intuitiva e acessível
        para que você foque no que realmente importa: atender bem seus clientes
        e crescer seu negócio.
      </p>
    </div>
  </section>

  )
};
