import styles from "./paraqueme.module.css";

export default function Paraqueme() {
  const perfis = [
    {
      icon: "💇‍♀️",
      title: "Profissionais Autônomos",
      description: "Cabeleireiros, manicures, esteticistas e outros profissionais que atendem clientes individualmente.",
      features: [
        "Agendamento simplificado",
        "Cadastro de clientes completo",
        "Controle de pagamentos",
        "Histórico de atendimentos"
      ]
    },
    {
      icon: "🏥",
      title: "Clínicas e Consultórios",
      description: "Médicos, psicólogos, fisioterapeutas que precisam organizar consultas e prontuários.",
      features: [
        "Gestão de múltiplos profissionais",
        "Agenda compartilhada",
        "Prontuários digitais",
        "Lembretes automáticos"
      ]
    },
    {
      icon: "🏋️‍♂️",
      title: "Academias e Personal Trainers",
      description: "Professores de educação física e academias que gerenciam alunos e treinos.",
      features: [
        "Controle de matrículas",
        "Planejamento de treinos",
        "Acompanhamento de progresso",
        "Pagamento de mensalidades"
      ]
    },
    {
      icon: "🎨",
      title: "Artistas e Criativos",
      description: "Fotógrafos, designers, artistas que gerenciam projetos e entregas para clientes.",
      features: [
        "Gestão de projetos",
        "Linha do tempo de entregas",
        "Galeria de portfólio",
        "Controle de revisões"
      ]
    },
    {
      icon: "🏠",
      title: "Serviços Domésticos",
      description: "Diaristas, faxineiras, jardineiros que organizam visitas e serviços em residências.",
      features: [
        "Roteirização de visitas",
        "Controle de frequência",
        "Gestão de materiais",
        "Histórico de serviços"
      ]
    },
    {
      icon: "👨‍🔧",
      title: "Prestadores de Serviço",
      description: "Eletricistas, encanadores, técnicos que atendem chamados em diferentes locais.",
      features: [
        "Ordens de serviço",
        "Controle de materiais",
        "Agendamento de visitas",
        "Faturamento simplificado"
      ]
    }
  ];

  const casosUso = [
    {
      icon: "📅",
      title: "Agendamento Inteligente",
      description: "Organize sua agenda de forma visual, evite conflitos e envie lembretes automáticos para seus clientes."
    },
    {
      icon: "👥",
      title: "Gestão de Clientes",
      description: "Mantenha um cadastro completo com histórico, preferências e informações importantes de cada cliente."
    },
    {
      icon: "💳",
      title: "Controle Financeiro",
      description: "Gerencie pagamentos, gere relatórios de receita e mantenha seu fluxo de caixa organizado."
    },
    {
      icon: "📊",
      title: "Relatórios e Análises",
      description: "Acompanhe o crescimento do seu negócio com relatórios detalhados e insights valiosos."
    },
    {
      icon: "🔔",
      title: "Lembretes Automáticos",
      description: "Envie notificações para clientes sobre próximos compromissos, reduzindo ausências e atrasos."
    },
    {
      icon: "📱",
      title: "Acesso em Qualquer Lugar",
      description: "Gerencie seu negócio do computador, tablet ou celular, onde quer que você esteja."
    }
  ];

  const beneficios = [
    {
      number: "1",
      title: "Centralização Total",
      description: "Tenha clientes, agenda e pagamentos em um único lugar, sem precisar de múltiplas planilhas."
    },
    {
      number: "2",
      title: "Economia de Tempo",
      description: "Automatize tarefas repetitivas e foque no que realmente importa: atender seus clientes."
    },
    {
      number: "3",
      title: "Profissionalismo",
      description: "Impressione seus clientes com uma organização profissional e atendimento moderno."
    },
    {
      number: "4",
      title: "Crescimento Sustentável",
      description: "Tenha as ferramentas certas para escalar seu negócio sem perder o controle."
    }
  ];

  return (
    <div className={styles.paraquemeContainer}>
      <header className={styles.heroSection}>
        <h1 className={styles.heroTitle}>
          OrganizaDaí é para <span className={styles.highlight}>quem transforma</span> trabalho em paixão
        </h1>
        <p className={styles.heroSubtitle}>
          Seja você um profissional autônomo, clínica ou prestador de serviços, 
          nossa plataforma foi desenhada para simplificar sua gestão e impulsionar seu crescimento.
        </p>
        
        <div className={styles.heroStats}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>10.000+</span>
            <span className={styles.statLabel}>Profissionais Ativos</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>50.000+</span>
            <span className={styles.statLabel}>Clientes Atendidos</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>98%</span>
            <span className={styles.statLabel}>Satisfação</span>
          </div>
        </div>
      </header>

      <section className={styles.perfisSection}>
        <h2 className={styles.sectionTitle}>Para Qual Perfil?</h2>
        <p className={styles.sectionSubtitle}>
          Conheça os perfis de profissionais que já transformaram seus negócios com o OrganizaDaí
        </p>
        
        <div className={styles.perfisGrid}>
          {perfis.map((perfil, index) => (
            <div key={index} className={styles.perfilCard}>
              <div className={styles.perfilIcon}>{perfil.icon}</div>
              <h3 className={styles.perfilTitle}>{perfil.title}</h3>
              <p className={styles.perfilDescription}>{perfil.description}</p>
              
              <ul className={styles.perfilFeatures}>
                {perfil.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className={styles.perfilFeature}>
                    <span className={styles.perfilFeatureIcon}>✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.casosUsoSection}>
        <h2 className={styles.sectionTitle}>Como Pode Ser Usado</h2>
        <p className={styles.sectionSubtitle}>
          Descubra as principais funcionalidades que vão revolucionar sua gestão diária
        </p>
        
        <div className={styles.casosGrid}>
          {casosUso.map((caso, index) => (
            <div key={index} className={styles.casoCard}>
              <div className={styles.casoIcon}>{caso.icon}</div>
              <h3 className={styles.casoTitle}>{caso.title}</h3>
              <p className={styles.casoDescription}>{caso.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.beneficiosSection}>
        <h2 className={styles.sectionTitle}>Benefícios Transformadores</h2>
        <p className={styles.sectionSubtitle}>
          Mais do que um software, uma solução completa para seu negócio prosperar
        </p>
        
        <div className={styles.beneficiosGrid}>
          {beneficios.map((beneficio, index) => (
            <div key={index} className={styles.beneficioCard}>
              <div className={styles.beneficioNumber}>{beneficio.number}</div>
              <h3 className={styles.beneficioTitle}>{beneficio.title}</h3>
              <p className={styles.beneficioDescription}>{beneficio.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>
            Pronto para transformar sua gestão?
          </h2>
          <p className={styles.ctaSubtitle}>
            Junte-se a milhares de profissionais que já escolheram o OrganizaDaí 
            para organizar e crescer seus negócios
          </p>
          
          <div className={styles.ctaButtons}>
            <a href="/cadastro" className={`${styles.ctaButton} ${styles.ctaButtonPrimary}`}>
              <span>🚀</span>
              Começar Gratuitamente
            </a>
            <a href="/precos" className={`${styles.ctaButton} ${styles.ctaButtonSecondary}`}>
              <span>💰</span>
              Ver Planos
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}