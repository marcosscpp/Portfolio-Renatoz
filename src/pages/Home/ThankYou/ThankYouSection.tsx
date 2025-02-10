import styles from "./ThankYouSection.module.css";
import ContactButton from "@/components/ContactButton";

import thankYouImage from "@images/thank-you-image.png";
import { WhatsApp, Instagram, Email } from "@mui/icons-material";

const ThankYouSection = () => {
  return (
    <section className={styles.thankYouSection}>
      <ul className={styles.contactList}>
        <li className={styles.contactItem}>
          <div className={styles.icon}>
            <Instagram />
          </div>
          <span className={styles.contactText}>@erreclicks</span>
        </li>
        <li className={styles.contactItem}>
          <div className={styles.icon}>
            <Email />
          </div>
          <span className={styles.contactText}>contato@renatozz.com</span>
        </li>
        <li className={styles.contactItem}>
          <div className={styles.icon}>
            <WhatsApp />
          </div>
          <span className={styles.contactText}>+55 (11) 97665-4616</span>
        </li>
      </ul>
      <h1 className={styles.thankYouTitle}>
        ob
        <span className={styles.imageContainer}>
          r
          <img
            loading="lazy"
            src={thankYouImage}
            alt="Imagem de Paulo Renato sentado, apontando para cima, em um ambiente iluminado"
            className={styles.thankYouImage}
          />
        </span>
        i<span>gado</span>
      </h1>
      <p className={styles.thankYouMessage}>
        Se você se interessou pelo meu trabalho, entre em contato :)
      </p>
      <ContactButton />
    </section>
  );
};

export default ThankYouSection;
