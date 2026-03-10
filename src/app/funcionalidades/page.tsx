"use client";

import { useState } from "react";
import styles from "./funcionalidades.module.css";

export default function Funcionalidades() {
  const [activeTab, setActiveTab] = useState("todas");

  const funcionalidades = [
    {
      icon: "📅",
      title: "Agendamento Inteligente",
      badge: "Mais usado",
      category: ["todas", "gestao"],
      description: "Gerencie sua agenda de forma visual e eficiente, com sincronização automática e lembretes inteligentes.",
      features: [
        "Visualização semanal, mensal e diária",
        "Sincronização com Google Calendar",
        "Lembretes automáticos por SMS/Email",
        "Bloqueio de horários indisponíveis",
        "Agendamento recorrente para clientes fiéis"
      ]
    },
    {
      icon: "👥",
      title: "CRM Completo",
      badge: "Essencial",
      category: ["todas", "gestao"],
      description: "Tenha o histórico completo de cada cliente, com preferências, atendimentos e informações importantes.",
      features: [
        "Ficha cadastral completa",
        "Histórico de atendimentos",
        "Anotações e preferências",
        "Etiquetas e segmentação",
        "Controle de follow-up"
      ]
    },
    {
      icon: "💳",
      title: "Gestão Financeira",
      badge: "Popular",
      category: ["todas", "financeiro"],
      description: "Controle recebimentos, gere relatórios e tenha visão clara do seu fluxo de caixa.",
      features: [
        "Emissão de recibos digitais",
        "Controle de pagamentos pendentes",
        "Relatórios de faturamento",
        "Previsão de receitas",
        "Integração com gateways de pagamento"
      ]
    },
    {
      icon: "📊",
      title: "Relatórios e Analytics",
      badge: "Estratégico",
      category: ["todas", "analytics"],
      description: "Acompanhe o crescimento do seu negócio com relatórios detalhados e insights valiosos.",
      features: [
        "Dashboard em tempo real",
        "Relatórios personalizáveis",
        "Métricas de desempenho",
        "Comparação de períodos",
        "Exportação de dados"
      ]
    },
    {
      icon: "🔔",
      title: "Comunicação Automatizada",
      badge: "Novidade",
      category: ["todas", "comunicacao"],
      description: "Mantenha seus clientes informados com comunicações automáticas e personalizadas.",
      features: [
        "Confirmação de agendamentos",
        "Lembretes de vencimento",
        "Mensagens de aniversário",
        "Campanhas por WhatsApp",
        "Email marketing integrado"
      ]
    },
    {
      icon: "📱",
      title: "App Mobile Completo",
      badge: "Essencial",
      category: ["todas", "mobile"],
      description: "Gerencie seu negócio de qualquer lugar com nosso aplicativo para iOS e Android.",
      features: [
        "Agendamento offline",
        "Notificações push",
        "Geolocalização de clientes",
        "Câmera para documentos",
        "Sincronização automática"
      ]
    }
  ];

  const detalhes = [
    {
      icon: "⚡",
      title: "Performance Otimizada",
      description: "Sistema rápido e responsivo que funciona perfeitamente em qualquer dispositivo."
    },
    {
      icon: "🔒",
      title: "Segurança de Dados",
      description: "Criptografia de ponta a ponta e backup automático para proteger suas informações."
    },
    {
      icon: "🌐",
      title: "Acesso 100% Online",
      description: "Sem necessidade de instalação. Acesse de qualquer navegador com internet."
    },
    {
      icon: "🎯",
      title: "Foco no Usuário",
      description: "Interface intuitiva desenvolvida pensando na experiência do profissional autônomo."
    }
  ];

  const integracoes = [
    { name: "Google Calendar", icon: "📅" },
    { name: "WhatsApp", icon: "💬" },
    { name: "Mercado Pago", icon: "💳" },
    { name: "PicPay", icon: "💰" },
    { name: "Email", icon: "📧" },
    { name: "Zoom", icon: "📹" }
  ];

  const tabs = [
    { id: "todas", label: "Todas" },
    { id: "gestao", label: "Gestão" },
    { id: "financeiro", label: "Financeiro" },
    { id: "analytics", label: "Analytics" },
    { id: "comunicacao", label: "Comunicação" },
    { id: "mobile", label: "Mobile" }
  ];

  const filteredFuncionalidades = activeTab === "todas" 
    ? funcionalidades 
    : funcionalidades.filter(f => f.category.includes(activeTab));

  return (
    <div className={styles.funcionalidadesContainer}>
      <header className={styles.heroSection}>
        <h1 className={styles.heroTitle}>
          Funcionalidades que <span className={styles.highlight}>transformam</span> sua gestão
        </h1>
        <p className={styles.heroSubtitle}>
          Descubra todas as ferramentas que o OrganizaDaí oferece para simplificar seu dia a dia e impulsionar seu crescimento
        </p>
      </header>

      <div className={styles.categoriasTabs}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`${styles.tabButton} ${activeTab === tab.id ? styles.active : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <section className={styles.funcionalidadesGrid}>
        {filteredFuncionalidades.map((funcionalidade, index) => (
          <div key={index} className={styles.funcionalidadeCard}>
            <div className={styles.funcionalidadeHeader}>
              <div className={styles.funcionalidadeIcon}>
                {funcionalidade.icon}
              </div>
              <div className={styles.funcionalidadeContent}>
                <span className={styles.funcionalidadeBadge}>
                  {funcionalidade.badge}
                </span>
                <h3 className={styles.funcionalidadeTitle}>
                  {funcionalidade.title}
                </h3>
              </div>
            </div>
            
            <p className={styles.funcionalidadeDescription}>
              {funcionalidade.description}
            </p>
            
            <ul className={styles.funcionalidadeFeatures}>
              {funcionalidade.features.map((feature, featureIndex) => (
                <li key={featureIndex} className={styles.funcionalidadeFeature}>
                  <span className={styles.funcionalidadeFeatureIcon}>✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className={styles.detalhesSection}>
        <h2 className={styles.integracoesTitle}>Diferenciais Estratégicos</h2>
        <p className={styles.integracoesSubtitle}>
          Mais do que um simples CRM, uma solução completa pensada para o sucesso do seu negócio
        </p>
        
        <div className={styles.detalhesGrid}>
          {detalhes.map((detalhe, index) => (
            <div key={index} className={styles.detalheCard}>
              <div className={styles.detalheIcon}>
                {detalhe.icon}
              </div>
              <h3 className={styles.detalheTitle}>{detalhe.title}</h3>
              <p className={styles.detalheDescription}>{detalhe.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.integracoesSection}>
        <h2 className={styles.integracoesTitle}>Integrações Poderosas</h2>
        <p className={styles.integracoesSubtitle}>
          Conecte suas ferramentas favoritas e tenha tudo em um único lugar
        </p>
        
        <div className={styles.integracoesGrid}>
          {integracoes.map((integracao, index) => (
            <div key={index} className={styles.integracaoCard}>
              <div className={styles.integracaoIcon}>
                {integracao.icon}
              </div>
              <div className={styles.integracaoName}>{integracao.name}</div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>
            Pronto para revolucionar sua gestão?
          </h2>
          <p className={styles.ctaSubtitle}>
            Comece hoje mesmo e descubra como milhares de profissionais já transformaram seus negócios
          </p>
          
          <div className={styles.ctaButtons}>
            <a href="/cadastro" className={`${styles.ctaButton} ${styles.ctaButtonPrimary}`}>
              <span>🚀</span>
              Testar Gratuitamente
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