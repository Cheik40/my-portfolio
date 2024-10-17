// import React from "react";
import "./Home.css";
import emailIcon from "../../assets/mail.svg";
import githubIcon from "../../assets/github.svg";
import linkedinIcon from "../../assets/linkedin.svg";
import profilePhoto from "../../assets/image.png";
import "./Home.css";
function Home() {
    return (
        <section className='intro'>
            <div className='intro-text'>
                <p>Hi, I am</p>
                <h1>Tomasz Gajda</h1>
                <p className='job-title'>Front-end Developer / UI Designer</p>
                <div className='social-icons'>
                    <a href='#'>
                        <img src={emailIcon} alt='Email' />
                    </a>
                    <a href='#'>
                        <img src={githubIcon} alt='GitHub' />
                    </a>
                    <a href='#'>
                        <img src={linkedinIcon} alt='LinkedIn' />
                    </a>
                </div>
            </div>
            <div className='profile-image'>
                <img src={profilePhoto} alt='Tomasz Gajda' />
            </div>
        </section>
    );
}

export default Home;
