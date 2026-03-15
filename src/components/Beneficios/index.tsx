import styles from "./beneficios.module.css";

export default function Beneficios() {
const beneficios = [
  {
    icon: "⚡",
    title: "Economize 10+ horas por semana",
    description: "Automatize tarefas repetitivas e foque no que realmente importa: seus clientes"
  },
  {
    icon: "💰", 
    title: "Aumente 30% seu faturamento",
    description: "Com melhor gestão e follow-up, nunca mais perca uma oportunidade de negócio"
  },
  {
    icon: "📱",
    title: "Gestão 100% mobile",
    description: "Controle tudo pelo celular, onde quer que você esteja, a qualquer hora"
  },
  {
    icon: "🔒",
    title: "Dados sempre seguros",
    description: "Backup automático e criptografia de ponta para proteger suas informações"
  },
  {
    icon: "📊",
    title: "Visão clara do seu negócio",
    description: "Acompanhe clientes, atendimentos e resultados em um único painel organizado"
  },
  {
    icon: "🤝",
    title: "Melhor relacionamento com clientes",
    description: "Tenha histórico completo de atendimentos e mantenha um acompanhamento mais profissional"
  }
];

  return (
    <section className={styles.beneficiosSection}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.title}>
            Por que <span className={styles.highlight}>profissionais</span> escolhem o OrganizaDaí
          </h2>
          <p className={styles.subtitle}>
            Resultados reais que transformam a gestão de pequenos e médios negócios
          </p>
        </header>

        <div className={styles.beneficiosGrid}>
          {beneficios.map((beneficio, index) => (
            <div key={index} className={styles.beneficioCard}>
              <div className={styles.beneficioIcon}>{beneficio.icon}</div>
              <h3 className={styles.beneficioTitle}>{beneficio.title}</h3>
              <p className={styles.beneficioDescription}>{beneficio.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
