import Image from 'next/image'
import styles from './Header.module.css'
import Link from 'next/link'

export default function Header() {
  return (
    <header className={styles.header}>
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
      <div className={styles.loginContainer}>
        <Link href="/entrar" className={styles.login}>
          <Image
              className={styles.loginImage}
              src="/pessoa.png"
              alt="Logo da Empresa"
              width="310"
              height="292"
          />
          <span>Login</span>
        </Link>
        <Link href="cadastro" className={styles.cadastro}>
          <span>Criar conta grátis</span>
        </Link> 
      </div>
    </header>
  )
}