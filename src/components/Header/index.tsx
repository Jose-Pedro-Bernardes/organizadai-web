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
    </header>
  )
}