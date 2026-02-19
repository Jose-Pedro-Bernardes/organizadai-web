"use client";

import Image from 'next/image'
import styles from './Header.module.css'
import Link from 'next/link'
import { useState } from "react";



export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen((prev) => !prev);
  }

  return (

    <header className={styles.header}>
      <div className={styles.firstSectionHeader}>
        <Link href="/">
          <figure className={styles.logoContainer}>
              <Image
                  className={styles.logo}
                  src="/logotipo.png"
                  alt="Logo OrganizaDaí"
                  width="400"
                  height="110"
              />
          </figure>
        </Link>
        <ul className={styles.menuNav}>
          <li><Link href="/sobre" className={styles.linkNav} aria-label="Saiba mais sobre o OrganizaDaí">Sobre nós</Link></li>
          <li><Link href="/solucoes" className={styles.linkNav} aria-label="Conheça nossas soluções">Soluções</Link></li>
          <li><Link href="/precos" className={styles.linkNav} aria-label="Veja nossos planos e preços">Preços</Link></li>
          <li><Link href="/suporte" className={styles.linkNav} aria-label="Acesse nosso suporte">Suporte</Link></li>
        </ul>
        
      </div>
      <button className={styles.menuButton} type="button" onClick={toggleMenu} aria-label="Abrir menu de navegação" aria-expanded={menuOpen}>
        <Image
          className={styles.menuIcon}
          src="/menuImage.png"
          alt="Abrir menu"
          width={28}
          height={28}
        />
      </button>
      <div className={styles.loginContainer}>
        <Link href="/entrar" className={styles.login} aria-label="Acessar área de login">
          <Image
              className={styles.loginImage}
              src="/loginImage.png"
              alt="login"
              width="341"
              height="339"
          />
          <span className={styles.loginText}>Fazer Login</span>
        </Link>
        <Link href="cadastro" className={styles.cadastro} aria-label="Criar conta gratuita no OrganizaDaí">
          <span>Criar conta grátis</span>
          <Image
              className={styles.setaCadastro}
              src="/setaDireitaHeader.png"
              alt="seta"
              width="14"
              height="14"
          />
        </Link> 
      </div>
      {menuOpen && (
        <nav className={styles.MenuNavMobile}>
          <Link href="/sobre" className={styles.linkNav} aria-label="Saiba mais sobre o OrganizaDaí">Sobre nós</Link>
          <Link href="/solucoes" className={styles.linkNav} aria-label="Conheça nossas soluções">Soluções</Link>
          <Link href="/precos" className={styles.linkNav} aria-label="Veja nossos planos e preços">Preços</Link>
          <Link href="/suporte" className={`${styles.linkNav} ${styles.linkNavLast}`} aria-label="Acesse nosso suporte">Suporte</Link>

          <Link href="/entrar" className={styles.login} aria-label="Acessar área de login">
            <Image
                  className={styles.loginImage}
                  src="/loginImage.png"
                  alt="login"
                  width="341"
                  height="339"
            />
            <span className={styles.loginText}>Fazer Login</span>
          </Link>
          <Link href="cadastro" className={styles.cadastro} aria-label="Criar conta gratuita no OrganizaDaí">
              <span>Criar conta grátis</span>
              <Image
                className={styles.setaCadastro}
                src="/setaDireitaHeader.png"
                alt="seta"
                width="14"
                height="14"
              />
          </Link> 
        </nav>
      )}
    </header>
    
  )
}