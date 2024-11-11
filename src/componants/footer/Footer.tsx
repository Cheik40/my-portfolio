import backToUp from "../../assets/backToUp.svg";
import styles from "./Footer.module.css";
import { LiaGithubSquare, LiaLinkedin } from "react-icons/lia";

function Footer() {
    return (
        <footer className={styles.container}>
            <div className={styles.home}>
                <a href='#home' className={styles.backToUpA}>
                    <img
                        className={styles.backToUp}
                        src={backToUp}
                        alt='image back to up'
                    />
                </a>
                Revenir en haut
            </div>
            <div className={styles.socialLink}>
                <a
                    className={styles.Link}
                    href='https://github.com/Cheik40'
                    target='_blank'
                >
                    <LiaGithubSquare size='100%' />
                </a>

                <a
                    className={styles.Link}
                    href='https://fr.linkedin.com/in/cheikh-ndiaye-870513196?trk=public_profile_browsemap_profile-result-card_result-card_full-click'
                    target='_blank'
                >
                    <LiaLinkedin size='100%' />
                </a>
            </div>
            <div className={styles.email}>djilyhoo@gmail.com</div>
            <div className={styles.tel}>+33 7 52 55 82 97</div>
        </footer>
    );
}

export default Footer;
