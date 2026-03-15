import Link from "next/link";
import Image from "next/image";
import styles from "./CTAFinal.module.css";

export default function CTAFinal() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <div className={styles.ctaContent}>
          <div className={styles.ctaHeader}>
            <span className={styles.ctaBadge}>🚀 Comece hoje mesmo</span>
            <h2 className={styles.ctaTitle}>
              Pronto para <span className={styles.highlight}>revolucionar</span> sua gestão?
            </h2>
            <p className={styles.ctaSubtitle}>
              Junte-se a milhares de profissionais que já transformaram seus negócios com o OrganizaDaí. 
              Teste grátis por 14 dias, não precisa de cartão de crédito.
            </p>
          </div>

          <div className={styles.ctaFeatures}>
            <div className={styles.feature}>
              <span className={styles.featureIcon}>✓</span>
              <span>Cadastro em menos de 2 minutos</span>
            </div>
            <div className={styles.feature}>
              <span className={styles.featureIcon}>✓</span>
              <span>Acesso imediato a todas as funcionalidades</span>
            </div>
            <div className={styles.feature}>
              <span className={styles.featureIcon}>✓</span>
              <span>Suporte dedicado durante o período de teste</span>
            </div>
            <div className={styles.feature}>
              <span className={styles.featureIcon}>✓</span>
              <span>Cancelamento a qualquer momento</span>
            </div>
          </div>

          <div className={styles.ctaButtons}>
            <Link href="/cadastro" className={styles.ctaButtonPrimary}>
              <span>🎯</span>
              Começar Teste Grátis
            </Link>
            <Link href="/precos" className={styles.ctaButtonSecondary}>
              <span>💰</span>
              Ver Planos e Preços
            </Link>
          </div>

          <div className={styles.trustIndicators}>
            <p className={styles.trustText}>
              <span className={styles.trustHighlight}>10.000+</span> profissionais confiam no OrganizaDaí
            </p>
            <div className={styles.paymentMethods}>
              <span className={styles.paymentText}>Pagamento 100% seguro:</span>
              <div className={styles.paymentIcons}>
                <span>💳</span>
                <span>🔒</span>
                <span>🛡️</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.ctaVisual}>
          <div className={styles.visualCard}>
            <div className={styles.mockupHeader}>
              <div className={styles.mockupDots}>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className={styles.mockupTitle}>OrganizaDaí</div>
            </div>
            <div className={styles.mockupContent}>
              <div className={styles.mockupRow}>
                <div className={styles.mockupIcon}>📅</div>
                <div className={styles.mockupText}>Agenda de hoje: 5 clientes</div>
              </div>
              <div className={styles.mockupRow}>
                <div className={styles.mockupIcon}>💰</div>
                <div className={styles.mockupText}>Faturamento: R$ 1.250,00</div>
              </div>
              <div className={styles.mockupRow}>
                <div className={styles.mockupIcon}>👥</div>
                <div className={styles.mockupText}>Novos clientes: +3 esta semana</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
