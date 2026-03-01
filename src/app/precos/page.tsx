"use client";

import { useState } from "react";
import styles from "./precos.module.css";

export default function Precos() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const planos = [
    {
      nome: "Iniciante",
      descricao: "Perfeito para quem está começando",
      preco: "0",
      periodo: "/mês",
      popular: false,
      features: [
        "Até 10 clientes",
        "Agendamento básico",
        "Relatórios simples",
        "Suporte por email",
        "Aplicativo mobile"
      ],
      buttonText: "Começar grátis",
      buttonType: "outline"
    },
    {
      nome: "Profissional",
      descricao: "Ideal para negócios em crescimento",
      preco: "49",
      periodo: "/mês",
      popular: true,
      features: [
        "Clientes ilimitados",
        "Agendamento avançado",
        "Relatórios completos",
        "Suporte prioritário",
        "Integrações",
        "Backup automático"
      ],
      buttonText: "Testar 14 dias",
      buttonType: "primary"
    },
    {
      nome: "Enterprise",
      descricao: "Para grandes operações",
      preco: "149",
      periodo: "/mês",
      popular: false,
      features: [
        "Tudo do Profissional",
        "API personalizada",
        "Treinamento da equipe",
        "Gerente de conta",
        "SLA garantido",
        "Customização completa"
      ],
      buttonText: "Falar com vendas",
      buttonType: "outline"
    }
  ];

  const faqs = [
    {
      question: "Posso cancelar a qualquer momento?",
      answer: "Sim! Você pode cancelar sua assinatura a qualquer momento sem taxas adicionais. Seu acesso continua até o final do período pago."
    },
    {
      question: "O plano gratuito tem limitações?",
      answer: "O plano gratuito é limitado a 10 clientes e recursos básicos. É perfeito para testar a plataforma ou para uso muito leve."
    },
    {
      question: "Como funciona o período de teste?",
      answer: "O teste de 14 dias é totalmente gratuito e sem compromisso. Você terá acesso a todos os recursos do plano Profissional."
    },
    {
      question: "Aceitamos cartão de crédito?",
      answer: "Sim! Aceitamos cartão de crédito, débito, boleto e PIX. Todas as transações são seguras e criptografadas."
    }
  ];

  return (
    <div className={styles.precosContainer}>
      <header className={styles.headerSection}>
        <h1 className={styles.title}>Planos que crescem com seu negócio</h1>
        <p className={styles.subtitle}>
          Escolha o plano perfeito para gerenciar seus clientes, agenda e pagamentos de forma simples e eficiente
        </p>
      </header>

      <section className={styles.planosGrid}>
        {planos.map((plano, index) => (
          <div 
            key={index} 
            className={`${styles.planoCard} ${plano.popular ? styles.planoPopular : ""}`}
          >
            {plano.popular && (
              <div className={styles.popularBadge}>Mais Popular</div>
            )}
            
            <h3 className={styles.planoNome}>{plano.nome}</h3>
            <p className={styles.planoDescricao}>{plano.descricao}</p>
            
            <div className={styles.planoPreco}>
              <span className={styles.precoMoeda}>R$</span>
              <span className={styles.precoValor}>{plano.preco}</span>
              <span className={styles.precoPeriodo}>{plano.periodo}</span>
            </div>
            
            <ul className={styles.planoFeatures}>
              {plano.features.map((feature, featureIndex) => (
                <li key={featureIndex} className={styles.featureItem}>
                  <span className={styles.featureIcon}>✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <button className={`${styles.planoButton} ${
              plano.buttonType === 'primary' ? styles.buttonPrimary : styles.buttonOutline
            }`}>
              {plano.buttonText}
            </button>
          </div>
        ))}
      </section>

      <section className={styles.faqSection}>
        <h2 className={styles.faqTitle}>Perguntas Frequentes</h2>
        
        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <div key={index} className={styles.faqItem}>
              <button 
                className={styles.faqQuestion}
                onClick={() => toggleFaq(index)}
              >
                <span>{faq.question}</span>
                <span className={`${styles.faqToggle} ${
                  activeFaq === index ? styles.active : ""
                }`}>
                  {activeFaq === index ? '−' : '+'}
                </span>
              </button>
              
              <div className={`${styles.faqAnswer} ${
                activeFaq === index ? styles.active : ""
              }`}>
                <p className={styles.faqText}>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>Pronto para organizar seu negócio?</h2>
        <p className={styles.ctaSubtitle}>
          Junte-se a milhares de profissionais que já transformaram sua gestão com o OrganizaDaí
        </p>
        <button className={styles.ctaButton}>
          Começar agora gratuitamente
        </button>
      </section>
    </div>
  );
}