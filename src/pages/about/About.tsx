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
                    Développeur Front-End expérimenté, je crée des interfaces
                    web réactives et intuitives en utilisant des technologies
                    modernes telles que React.js, Redux, et TypeScript. Mon
                    travail se concentre sur la performance, la maintenabilité,
                    et l'expérience utilisateur, en respectant les méthodologies
                    agiles.
                </div>
                <div className={styles.dev}>
                    <h2>dev</h2>
                    Passionné par le développement de solutions dynamiques, j'ai
                    une solide expertise dans la conception d'applications
                    évolutives avec une attention particulière à la précision et
                    à la rigueur. Je collabore étroitement avec les équipes
                    techniques pour livrer des applications stables, en assurant
                    la documentation et la correction des bugs grâce à une
                    veille technologique constante.
                </div>
                <div className={styles.maintenance}>
                    <h2>maintenance</h2>
                    Je prends en charge la maintenance et l'évolution des
                    applications, garantissant des migrations fluides vers les
                    nouvelles versions. Je m'assure de la fiabilité du code en
                    développant des fonctionnalités robustes, tout en restant
                    attentif aux besoins des utilisateurs et aux innovations du
                    secteur.
                </div>
            </div>
        </div>
    );
}

export default About;
