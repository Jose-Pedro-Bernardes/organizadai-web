import Image from "next/image";
import Link from "next/link";
import styles from './Hero.module.css'

export default function HeroSection() {
    return (
        <section className={styles.heroSection}>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <div className={styles.heroText}>
                <span className={styles.heroBadge}>🚀 Teste 14 dias grátis</span>
                <h1 className={styles.title}>
                  Organize <span className={styles.titleItalian}> clientes, agenda e pagamentos </span> 
                  em um só lugar com o <span className={styles.blue}>Organiza</span>
                  <span className={styles.green}>Daí</span>
                </h1>
                
                <p className={styles.heroDescription}>
                  Você centraliza tudo o que precisa para gerenciar seus atendimentos:
                  clientes, agenda, serviços e pagamentos — sem planilhas e sem bagunça.
                </p>

                <div className={styles.heroStats}>
                  <div className={styles.stat}>
                    <span className={styles.statNumber}>10.000+</span>
                    <span className={styles.statLabel}>Profissionais</span>
                  </div>
                  <div className={styles.stat}>
                    <span className={styles.statNumber}>98%</span>
                    <span className={styles.statLabel}>Satisfação</span>
                  </div>
                  <div className={styles.stat}>
                    <span className={styles.statNumber}>4.9★</span>
                    <span className={styles.statLabel}>Avaliação</span>
                  </div>
                </div>

                <div className={styles.heroButtons}>
                  <Link href="cadastro" className={styles.CTAcadastro} aria-label="Criar conta gratuita no OrganizaDaí">
                    <span>Criar conta grátis</span>
                    <Image
                      className={styles.setaCadastro}
                      src="/setaDireitaHero.png"
                      alt="seta"
                      width="100"
                      height="100"
                    />
                  </Link>
                  <Link href="/demonstracao" className={styles.CTAdemo}>
                    <span>📹</span>
                    <span>Ver demonstração</span>
                  </Link>
                </div>

                <div className={styles.trustIndicators}>
                  <p className={styles.trustText}>
                    <span className={styles.trustHighlight}>Sem cartão de crédito</span> • 
                    <span className={styles.trustHighlight}> Cancelamento a qualquer momento</span> • 
                    <span className={styles.trustHighlight}> Suporte 24/7</span>
                  </p>
                </div>
              </div>

              <div className={styles.heroVisual}>
                <div className={styles.dashboardPreview}>
                  <div className={styles.dashboardHeader}>
                    <div className={styles.dashboardDots}>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <div className={styles.dashboardTitle}>OrganizaDaí</div>
                  </div>
                  <div className={styles.dashboardContent}>
                    <div className={styles.dashboardRow}>
                      <div className={styles.dashboardIcon}>📅</div>
                      <div className={styles.dashboardText}>5 clientes hoje</div>
                      <div className={styles.dashboardBadge}>+2</div>
                    </div>
                    <div className={styles.dashboardRow}>
                      <div className={styles.dashboardIcon}>💰</div>
                      <div className={styles.dashboardText}>Faturamento</div>
                      <div className={styles.dashboardAmount}>R$ 1.250</div>
                    </div>
                    <div className={styles.dashboardRow}>
                      <div className={styles.dashboardIcon}>📈</div>
                      <div className={styles.dashboardText}>Crescimento</div>
                      <div className={styles.dashboardGrowth}>+35%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    )
};