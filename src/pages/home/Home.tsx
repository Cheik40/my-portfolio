// import React from "react";
import emailIcon from "../../assets/mail.svg";
import githubIcon from "../../assets/github.svg";
import linkedinIcon from "../../assets/linkedin.svg";
import profilePhoto from "../../assets/djily.png";
import email from "../../assets/VectorAt.svg";
import github from "../../assets/VectorGithub.svg";
import linkedin from "../../assets/Vector.png";
import styles from "./Home.module.css";
import "./Home.module.css";

function Home() {
    return (
        <section className={styles.intro}>
            <div className={styles.introText}>
                <h1 className={styles.titleH1}>Cheikh NDIAYE</h1>
                <p className={styles.jobTitle}>Dévelopeur Front-end</p>
                <div className={`${styles.desktop} ${styles.socialIcons}`}>
                    <a
                        className={styles.socialLink}
                        href='mailto:djilyhoo@gmail.com'
                    >
                        <img src={emailIcon} alt='Email' />
                    </a>
                    <a
                        className={styles.socialLink}
                        href='https://github.com/Cheik40'
                    >
                        <img src={githubIcon} alt='GitHub' />
                    </a>
                    <a
                        className={styles.socialLink}
                        href='https://fr.linkedin.com/in/cheikh-ndiaye-870513196?trk=public_profile_browsemap_profile-result-card_result-card_full-click'
                    >
                        <img src={linkedinIcon} alt='LinkedIn' />
                    </a>
                </div>
                <div className={`${styles.socialIcons} ${styles.smallScreen}`}>
                    <a
                        className={styles.socialLink}
                        href='mailto:djilyhoo@gmail.com'
                    >
                        <img src={email} alt='Email' />
                    </a>
                    <a
                        className={styles.socialLink}
                        href='https://github.com/Cheik40'
                    >
                        <img src={github} alt='GitHub' />
                    </a>
                    <a
                        className={styles.socialLink}
                        href='https://fr.linkedin.com/in/cheikh-ndiaye-870513196?trk=public_profile_browsemap_profile-result-card_result-card_full-click'
                    >
                        <img src={linkedin} alt='LinkedIn' />
                    </a>
                </div>
            </div>
            <div className={styles.profileImage}>
                <img src={profilePhoto} alt='Cheikh Ndiaye' />
            </div>
        </section>
    );
}

export default Home;
