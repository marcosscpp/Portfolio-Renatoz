import { useMediaQuery } from "react-responsive";
import styles from "./HeroSection.module.css";

import ContactButton from "@components/ContactButton";
import RotativeWords from "@/components/RotativeWords";

import logo from "@images/erre-clicks-photography.png";
import mosaic from "@images/mosaic.png";
import ArrowIcon from "@icons/ArrowIcon";

const HeroSection = () => {
  const isMobile = useMediaQuery({ maxWidth: 900 });

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <img src={logo} alt="Érre Clicks Photography" className={styles.logo} />
        <div className={styles.textContent}>
          <h1 className={styles.mainTitle}>
            Registrando
            <strong>
              <RotativeWords
                speed={1000}
                changeDelay={3000}
                wordsList={[
                  "Momentos",
                  "Memórias",
                  "Emoções",
                  "Histórias",
                  "Sentimentos",
                ]}
              />
            </strong>
          </h1>
          <h2 className={styles.subTitle}>Paulo Renato - Fotógrafo</h2>
          <ContactButton />
        </div>
        <ArrowIcon className={styles.arrowIcon} />
      </div>
      {!isMobile && (
        <div className={styles.mosaic}>
          <img src={mosaic} alt="" />
        </div>
      )}
    </section>
  );
};

export default HeroSection;
