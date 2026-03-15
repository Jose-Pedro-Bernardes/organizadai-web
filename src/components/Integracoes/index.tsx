import styles from "./Integracoes.module.css";

export default function Integracoes() {
  const integracoes = [
    { name: "Google Calendar", icon: "📅", description: "Sincronize sua agenda automaticamente" },
    { name: "WhatsApp", icon: "💬", description: "Envie lembretes e confirmações" },
    { name: "Mercado Pago", icon: "💳", description: "Receba pagamentos online" },
    { name: "PicPay", icon: "💰", description: "Mais uma opção de pagamento" },
    { name: "Email Marketing", icon: "📧", description: "Comunique-se com clientes" },
    { name: "Zoom", icon: "📹", description: "Reuniões online integradas" },
    { name: "Google Meet", icon: "🎥", description: "Vídeo chamadas fáceis" },
    { name: "Stripe", icon: "💵", description: "Pagamentos internacionais" }
  ];

  return (
    <section className={styles.integracoesSection}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.title}>
            Conecte suas <span className={styles.highlight}>ferramentas</span> favoritas
          </h2>
          <p className={styles.subtitle}>
            Integre o OrganizaDaí com as plataformas que você já usa e centralize tudo
          </p>
        </header>

        <div className={styles.integracoesGrid}>
          {integracoes.map((integracao, index) => (
            <div key={index} className={styles.integracaoCard}>
              <div className={styles.integracaoIcon}>{integracao.icon}</div>
              <h3 className={styles.integracaoName}>{integracao.name}</h3>
              <p className={styles.integracaoDescription}>{integracao.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.ctaContainer}>
          <p className={styles.ctaText}>
            E muitas outras integrações chegando em breve!
          </p>
          <button className={styles.ctaButton}>
            Ver todas as integrações
          </button>
        </div>
      </div>
    </section>
  );
}
