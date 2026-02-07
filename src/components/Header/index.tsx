import Image from 'next/image'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
        <figure className={styles.logoContainer}>
            <Image
                className={styles.logo}
                src="/logotipo.png"
                alt="Logo da Empresa"
                width="480"
                height="143"
            />
        </figure>
    </header>
  )
}