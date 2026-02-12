import Image from 'next/image'
import styles from './Header.module.css'
import Link from 'next/link'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.firstSectionHeader}>
        <Link href="/">
          <figure className={styles.logoContainer}>
              <Image
                  className={styles.logo}
                  src="/logotipo.png"
                  alt="Logo da Empresa"
                  width="400"
                  height="110"
              />
          </figure>
        </Link>
        <ul className={styles.menuNav}>
          <li><Link href="/sobre" className={styles.linkNav}>Sobre nós</Link></li>
          <li><Link href="/solucoes" className={styles.linkNav}>Soluções</Link></li>
          <li><Link href="/precos" className={styles.linkNav}>Preços</Link></li>
          <li><Link href="/suporte" className={styles.linkNav}>Suporte</Link></li>
        </ul>
      </div>
      <div className={styles.loginContainer}>
        <Link href="/entrar" className={styles.login}>
          <Image
              className={styles.loginImage}
              src="/loginImage.png"
              alt="login"
              width="341"
              height="339"
          />
          <span className={styles.loginText}>Fazer Login</span>
        </Link>
        <Link href="cadastro" className={styles.cadastro}>
          <span>Criar conta grátis</span>
          <Image
              className={styles.setaCadastro}
              src="/setadireita.png"
              alt="seta"
              width="14"
              height="14"
          />
        </Link> 
      </div>
    </header>
  )
}