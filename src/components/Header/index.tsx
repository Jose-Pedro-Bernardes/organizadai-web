import Image from 'next/image'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
        <figure className={styles.logoContainer}>
            <Image
                className={styles.logo}
                src="/logo.png"
                alt="Logo da Empresa"
                width="200"
                height="200"
            />
        </figure>
    </header>
  )
}