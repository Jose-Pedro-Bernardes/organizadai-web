import Image from "next/image";
import styles from "./sobrenos.module.css";


export default function SobreNos() {
  return (
    <section className={styles.aboutPage}>
        <Image
            className={styles.logo}
            src="/bannerAboutPage.jpg"
            alt="Banner Reunião de Negócios"
            width="400"
            height="110"
        />
        <div>
            <p></p>
            <h3></h3>
            <p></p>
            <p></p>
            <p></p>
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <p></p>
        </div>
    </section>
  );
}
