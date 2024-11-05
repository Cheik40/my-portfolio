// import React from "react";
import emailIcon from "../../assets/mail.svg";
import githubIcon from "../../assets/github.svg";
import linkedinIcon from "../../assets/linkedin.svg";
import profilePhoto from "../../assets/djily.png";
import styles from "./Home.module.css";
import "./Home.module.css";

function Home() {
    return (
        <section className={styles.intro}>
            <div className={styles.introText}>
                <h1 className={styles.titleH1}>Cheikh NDIAYE</h1>
                <p className={styles.jobTitle}>Developer Front-end</p>
                <div className={styles.socialIcons}>
                    <a href='mailto:djilyhoo@gmail.com'>
                        <img src={emailIcon} alt='Email' />
                    </a>
                    <a href='https://github.com/Cheik40'>
                        <img src={githubIcon} alt='GitHub' />
                    </a>
                    <a href='https://fr.linkedin.com/in/cheikh-ndiaye-870513196?trk=public_profile_browsemap_profile-result-card_result-card_full-click'>
                        <img src={linkedinIcon} alt='LinkedIn' />
                    </a>
                </div>
            </div>
            <div className={styles.profileImage}>
                <img src={profilePhoto} alt='Tomasz Gajda' />
            </div>
        </section>
    );
}

export default Home;
