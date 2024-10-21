import githubIcon from "../assets/github.svg";
import linkedinIcon from "../assets/linkedin.svg";
import backToUp from "../assets/backToUp.svg";
import styles from "./Footer.module.css";

function Footer() {
    return (
        <footer className={styles.container}>
            <div className={styles.home}>
                <a href='#home'>
                    <img src={backToUp} alt='image back to up' />
                </a>
                Revenir en haut
            </div>
            <div className={styles.socialLink}>
                <div className='git'>
                    <a href='https://github.com/Cheik40'>
                        <img src={githubIcon} alt='GitHub' />
                    </a>
                </div>
                <div className='linkedin'>
                    <a href='https://fr.linkedin.com/in/cheikh-ndiaye-870513196?trk=public_profile_browsemap_profile-result-card_result-card_full-click'>
                        <img src={linkedinIcon} alt='LinkedIn' />
                    </a>
                </div>
            </div>
            <div className={styles.email}>djilyhoo@gmail.com</div>
            <div className={styles.tel}>+33 7 52 55 82 97</div>
        </footer>
    );
}

export default Footer;
