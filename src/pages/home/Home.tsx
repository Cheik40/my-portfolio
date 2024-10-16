// import React from "react";
// import './Intro.css';
// import emailIcon from "./images/email-icon.png";
// import githubIcon from "./images/github-icon.png";
// import linkedinIcon from "./images/linkedin-icon.png";
// import profilePhoto from "./images/profile-photo.png";

function Home() {
    return (
        <section className='intro'>
            <div className='intro-text'>
                <p>Hi, I am</p>
                <h1>Tomasz Gajda</h1>
                <p className='job-title'>Front-end Developer / UI Designer</p>
                <div className='social-icons'>
                    <a href='#'>
                        <img src='' alt='Email' />
                    </a>
                    <a href='#'>
                        <img src='' alt='GitHub' />
                    </a>
                    <a href='#'>
                        <img src='' alt='LinkedIn' />
                    </a>
                </div>
            </div>
            <div className='profile-image'>
                <img src='' alt='Tomasz Gajda' />
            </div>
        </section>
    );
}

export default Home;
