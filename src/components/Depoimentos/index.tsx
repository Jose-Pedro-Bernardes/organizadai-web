import styles from "./depoimentos.module.css";

export default function Depoimentos() {
  const depoimentos = [
    {
      name: "Ana Silva",
      role: "Psicóloga Clínica",
      avatar: "👩‍⚕️",
      content: "O OrganizaDaí transformou completamente minha gestão. Antes usava 3 planilhas diferentes, hoje tenho tudo centralizado e economizo cerca de 12 horas por semana.",
      rating: 5
    },
    {
      name: "Carlos Mendes",
      role: "Personal Trainer",
      avatar: "💪",
      content: "A melhor decisão que tomei para meu negócio. O sistema de agendamento é incrível e meus clientes amam a facilidade de marcar horários. Faturamento aumentou 35%.",
      rating: 5
    },
    {
      name: "Mariana Costa",
      role: "Designer Gráfica",
      avatar: "🎨",
      content: "Simplesmente perfeito! O controle financeiro me deu clareza total sobre meu fluxo de caixa. Recomendo para todo profissional autônomo.",
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? styles.starFilled : styles.starEmpty}>
        ★
      </span>
    ));
  };

  return (
    <section className={styles.depoimentosSection}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.title}>
            O que nossos <span className={styles.highlight}>clientes</span> dizem
          </h2>
          <p className={styles.subtitle}>
            Histórias reais de profissionais que transformaram seus negócios
          </p>
        </header>

        <div className={styles.depoimentosGrid}>
          {depoimentos.map((depoimento, index) => (
            <div key={index} className={styles.depoimentoCard}>
              <div className={styles.depoimentoHeader}>
                <div className={styles.avatar}>{depoimento.avatar}</div>
                <div className={styles.depoimentoInfo}>
                  <h3 className={styles.depoimentoName}>{depoimento.name}</h3>
                  <p className={styles.depoimentoRole}>{depoimento.role}</p>
                </div>
              </div>
              
              <div className={styles.depoimentoRating}>
                {renderStars(depoimento.rating)}
              </div>
              
              <p className={styles.depoimentoContent}>
                "{depoimento.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
