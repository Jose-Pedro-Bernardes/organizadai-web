import styles from "./Metricas.module.css";

export default function Metricas() {
  const metricas = [
    {
      number: "10.000+",
      label: "Profissionais ativos",
      description: "Crescendo seus negócios conosco"
    },
    {
      number: "50.000+",
      label: "Clientes atendidos",
      description: "Gestão simplificada e eficiente"
    },
    {
      number: "98%",
      label: "Satisfação",
      description: "Clientes que recomendam"
    },
    {
      number: "4.9★",
      label: "Avaliação média",
      description: "Nas lojas de aplicativos"
    }
  ];

  return (
    <section className={styles.metricasSection}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.title}>
            Números que <span className={styles.highlight}>inspiram</span> confiança
          </h2>
          <p className={styles.subtitle}>
            Junte-se a milhares de profissionais que já transformaram seus negócios
          </p>
        </header>

        <div className={styles.metricasGrid}>
          {metricas.map((metrica, index) => (
            <div key={index} className={styles.metricaCard}>
              <div className={styles.metricaNumber}>{metrica.number}</div>
              <div className={styles.metricaLabel}>{metrica.label}</div>
              <div className={styles.metricaDescription}>{metrica.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
