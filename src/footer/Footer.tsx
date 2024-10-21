import githubIcon from "../assets/github.svg";
import linkedinIcon from "../assets/linkedin.svg";

function Footer() {
    return (
        <footer>
            <div className='home'>Revenir en haut</div>
            <div className='socialLink'>
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
        </footer>
    );
}

export default Footer;
