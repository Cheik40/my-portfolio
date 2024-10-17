import styles from "./About.module.css";
import separate from "../../assets/separate.svg";
import "./About.module.css";

function About() {
    return (
        <div id='about' className={styles.about}>
            <span className={styles.about1}>A-propos de moi</span>
            <div className={styles.description}>
                Développeur Front End passionné avec 2 ans d'expérience dans la
                création d'applications avec l'ERP shuttle. Je souhaite
                rejoindre une équipe dynamique afin de contribuer à des projets
                innovants et stimulants. Je souhaite apporter des solutions
                créatives aux défis complexes.
            </div>

            <div className={styles.reparate}>
                <img src={separate} alt='' />{" "}
            </div>

            <div className={styles.details}>
                <div className={styles.spec}>
                    <h2>web</h2>
                    Onsite training is delivered to an organisation's employees
                    at{" "}
                </div>
                <div className={styles.dev}>
                    <h2>dev</h2>
                    Onsite training is delivered to an organisation's employees
                    at{" "}
                </div>
                <div className={styles.maintenance}>
                    <h2>maintenance</h2>
                    Onsite training is delivered to an organisation's employees
                    at{" "}
                </div>
            </div>
        </div>
    );
}

export default About;
