"use client";

import { useState } from "react";
import styles from "./suporte.module.css";
import Header from "@/components/Header";

export default function Suporte() {
  const [searchTerm, setSearchTerm] = useState("");

  const categorias = [
    {
      icon: "🚀",
      title: "Primeiros Passos",
      description: "Guia rápido para começar a usar o OrganizaDaí",
      link: "#primeiros-passos"
    },
    {
      icon: "📅",
      title: "Agendamento",
      description: "Como gerenciar sua agenda e compromissos",
      link: "#agendamento"
    },
    {
      icon: "👥",
      title: "Clientes",
      description: "Cadastro e gestão de informações dos clientes",
      link: "#clientes"
    },
    {
      icon: "💰",
      title: "Pagamentos",
      description: "Recebimentos e controle financeiro",
      link: "#pagamentos"
    },
    {
      icon: "📊",
      title: "Relatórios",
      description: "Análise de dados e métricas do negócio",
      link: "#relatorios"
    },
    {
      icon: "⚙️",
      title: "Configurações",
      description: "Personalização e ajustes da conta",
      link: "#configuracoes"
    }
  ];

  const atendimentoTipos = [
    {
      nome: "Plano Gratuito",
      descricao: "Suporte básico para usuários iniciantes",
      featured: false,
      features: [
        "Base de conhecimento completa",
        "Tutoriais em vídeo",
        "FAQ interativo",
        "Comunidade de usuários"
      ],
      buttonText: "Acessar ajuda gratuita",
      buttonType: "outline"
    },
    {
      nome: "Plano Profissional",
      descricao: "Suporte prioritário para negócios em crescimento",
      featured: true,
      features: [
        "Tudo do plano gratuito",
        "Chat em tempo real",
        "Email prioritário (resposta em 24h)",
        "Acesso a webinars exclusivos"
      ],
      buttonText: "Iniciar chat agora",
      buttonType: "primary"
    },
    {
      nome: "Plano Enterprise",
      descricao: "Suporte dedicado para grandes operações",
      featured: false,
      features: [
        "Tudo do plano profissional",
        "Gerente de conta dedicado",
        "Suporte por telefone",
        "Treinamento personalizado",
        "SLA garantido"
      ],
      buttonText: "Falar com especialista",
      buttonType: "outline"
    }
  ];

  const faqs = [
    {
      question: "Como faço para cadastrar meu primeiro cliente?",
      answer: "Acesse o menu Clientes > Novo Cliente e preencha as informações básicas como nome, contato e serviços contratados."
    },
    {
      question: "Posso exportar meus dados?",
      answer: "Sim! Você pode exportar seus dados a qualquer momento em Configurações > Exportar Dados nos formatos CSV ou Excel."
    },
    {
      question: "Como funciona o backup dos meus dados?",
      answer: "Fazemos backup automático diário de todos os seus dados. Em planos pagos, você também pode configurar backups personalizados."
    },
    {
      question: "O OrganizaDaí tem aplicativo mobile?",
      answer: "Sim! Temos aplicativos para iOS e Android com todas as funcionalidades principais para gerenciar seu negócio."
    },
    {
      question: "Como cancelar minha assinatura?",
      answer: "Você pode cancelar a qualquer momento em Configurações > Assinatura > Cancelar. Seu acesso continua até o final do período pago."
    },
    {
      question: "Posso integrar com outras ferramentas?",
      answer: "Planos Profissional e Enterprise permitem integrações com Google Calendar, WhatsApp, e sistemas de pagamento populares."
    }
  ];

  const handleCategoriaClick = (link: string) => {
    console.log(`Navegando para: ${link}`);
  };

  const handleAtendimentoClick = (tipo: string) => {
    console.log(`Iniciando atendimento: ${tipo}`);
  };

  return (
    <main className={styles.main}>
      <Header></Header>
      <div className={styles.suporteContainer}>
        <header className={styles.headerSection}>
          <h1 className={styles.title}>Central de Ajuda</h1>
          <p className={styles.subtitle}>
            Encontre respostas rápidas, tutoriais e suporte especializado para usar o OrganizaDaí ao máximo
          </p>
        </header>

        <section className={styles.categoriasGrid}>
          {categorias.map((categoria, index) => (
            <div 
              key={index}
              className={styles.categoriaCard}
              onClick={() => handleCategoriaClick(categoria.link)}
            >
              <div className={styles.categoriaIcon}>{categoria.icon}</div>
              <h3 className={styles.categoriaTitle}>{categoria.title}</h3>
              <p className={styles.categoriaDescription}>{categoria.description}</p>
            </div>
          ))}
        </section>

        <section className={styles.atendimentoSection}>
          <h2 className={styles.atendimentoTitle}>Tipos de Atendimento</h2>
          
          <div className={styles.atendimentoGrid}>
            {atendimentoTipos.map((atendimento, index) => (
              <div 
                key={index}
                className={`${styles.atendimentoCard} ${
                  atendimento.featured ? styles.featured : ""
                }`}
              >
                {atendimento.featured && (
                  <div className={styles.atendimentoBadge}>Mais Popular</div>
                )}
                
                <h3 className={styles.atendimentoNome}>{atendimento.nome}</h3>
                <p className={styles.atendimentoDescricao}>{atendimento.descricao}</p>
                
                <ul className={styles.atendimentoFeatures}>
                  {atendimento.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className={styles.atendimentoFeature}>
                      <span className={styles.atendimentoFeatureIcon}>✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  className={`${styles.atendimentoButton} ${
                    atendimento.buttonType === 'primary' ? styles.buttonPrimary : styles.buttonOutline
                  }`}
                  onClick={() => handleAtendimentoClick(atendimento.nome)}
                >
                  {atendimento.buttonText}
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.faqsSection}>
          <h2 className={styles.faqsTitle}>Perguntas Frequentes</h2>
          
          <div className={styles.faqsGrid}>
            {faqs.map((faq, index) => (
              <div key={index} className={styles.faqCard}>
                <h3 className={styles.faqQuestion}>{faq.question}</h3>
                <p className={styles.faqAnswer}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.contatoSection}>
          <h2 className={styles.contatoTitle}>Ainda precisa de ajuda?</h2>
          <p className={styles.contatoSubtitle}>
            Nossa equipe está pronta para ajudar você a resolver qualquer dúvida
          </p>
          
          <div className={styles.contatoButtons}>
            <a href="mailto:suporte@organizadai.com" className={`${styles.contatoButton} ${styles.buttonWhite}`}>
              <span>📧</span>
              Enviar Email
            </a>
            <a href="tel:+5511999999999" className={`${styles.contatoButton} ${styles.buttonTransparent}`}>
              <span>📞</span>
              Ligar Agora
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}