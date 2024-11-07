import styles from "./Experiences.module.css";
import ExperienceCard from "../../componants/ExperienceCard/ExperienceCard";

function Experiances() {
    return (
        <div id='experiences' className={styles.experiences}>
            <div>
                <h2 className={styles.title}> Expériences </h2>
            </div>

            <div className={styles.container}>
                <div className={styles.card}>
                    <ExperienceCard
                        title='Développeur Frontend'
                        company='Entreprise Photographe Antonia Le Paih'
                        date='avril 2024 - Présent'
                        description="Conception et développement d'une application de photographie sur mesure pour une photographe indépendante, visant à mettre en scène ses projets et à renforcer sa visibilité en ligne. Responsabilités incluant la création d'une interface utilisateur intuitive et l'intégration de fonctionnalités de visualisation optimisées. Le site est développé en react js"
                    />
                </div>
                <div className={styles.card}>
                    {" "}
                    <ExperienceCard
                        title='Développeur Frontend / EPM'
                        company='Entreprise Kshuttle'
                        date='Février 2022 - Décembre 2023'
                        description="Au sein de Kshuttle, j'ai collaboré sur divers projets avec des clients de renom tels que Total, Schneider ou RATP, pour la création d'applications de reporting et de consolidation. Mon rôle impliquait la conception et le développement d'interfaces utilisateurs intuitives pour ces applications, ainsi que la gestion de la migration vers de nouvelles versions ou l'évolution des fonctionnalités existantes.

De plus, j'ai assumé la responsabilité de la gestion des tickets pour corriger d'éventuels bugs, assurant ainsi le bon fonctionnement continu des applications et la satisfaction des clients."
                    />{" "}
                </div>
                <div className={styles.card}>
                    {" "}
                    <ExperienceCard
                        title="Détection de forme de vie avec les algorithmes d'intelligence artificiel"
                        company='Entreprise MAD-Environnement'
                        date='Mars 2021 – Séptembre 2021'
                        description="Au cours de mon stage chez MAD-Environnement, j'ai eu l'occasion de travailler sur plusieurs aspects essentiels du traitement des données, y compris le prétraitement des données et la classification. J'ai notamment acquis de l'expérience dans l'implémentation des algorithmes de classification KNN (K-Nearest Neighbors) et de classification par Convolutional Neural Network (CNN), en utilisant le langage de programmation Python.

Ces compétences m'ont permis d'explorer des domaines variés de l'apprentissage automatique et de contribuer efficacement à des projets de recherche visant à analyser et à interpréter des données complexes."
                    />{" "}
                </div>
            </div>
        </div>
    );
}

export default Experiances;
