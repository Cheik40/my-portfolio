import styles from "./Skills.module.css";
import mail from "../../assets/mail.svg";
import react from "../../assets/react.svg";
import html from "../../assets/htlm.svg";
import javascript from "../../assets/javascript.svg";
import sass from "../../assets/sass.svg";
import bootstrap from "../../assets/bootstrap.svg";
import figma from "../../assets/figma.svg";
import git from "../../assets/git.svg";
import nodejs from "../../assets/nodejs.svg";
import css from "../../assets/css.svg";
import mongo from "../../assets/mongo.svg";
import typescript from "../../assets/typescript.svg";
import mysql from "../../assets/mysql.svg";
// import css from "../../assets/css.svg";

function Skills() {
    return (
        <div
            id='skills'
            className={`${styles.skillsContain} ${styles.skillsMain}`}
        >
            <h2 className={styles.titleH2}>Compétences</h2>
            <div className={styles.skills}>
                <div className={styles.container}>
                    <div className={styles.rowContainer}>
                        <h3 className={styles.label}>Using NOW:</h3>
                        <div className={styles.row}>
                            <div className={styles.col}>
                                <img
                                    className={styles.html}
                                    src={html}
                                    alt='logo HTML'
                                />
                                <h4>HTML</h4>
                            </div>
                            <div className={styles.col}>
                                <img
                                    className={styles.css}
                                    src={css}
                                    alt='logo css'
                                />
                                <h3>CSS3</h3>
                            </div>
                            <div className={styles.col}>
                                <img
                                    className={styles.react}
                                    src={react}
                                    alt='logo react'
                                />
                                <h3>REACT</h3>
                            </div>
                            <div className={styles.col}>
                                <img
                                    className={styles.javascript}
                                    src={javascript}
                                    alt='logo javascript'
                                />
                                <h4>JAVASCRIPT</h4>
                            </div>
                            {/* </div> */}

                            {/* <div className={styles.row}> */}
                            <div className={styles.col}>
                                <img
                                    className={styles.sass}
                                    src={sass}
                                    alt='logo sass'
                                />
                                <h3>SASS</h3>
                            </div>
                            <div className={styles.col}>
                                <img
                                    className={styles.bootstrap}
                                    src={bootstrap}
                                    alt='logo bootstrap'
                                />
                                <h3>BOOTSTRAP</h3>
                            </div>
                            <div className={styles.col}>
                                <img
                                    className={styles.figma}
                                    src={figma}
                                    alt='logo figma'
                                />
                                <h3>FIGMA</h3>
                            </div>
                            <div className={styles.col}>
                                <img
                                    className={styles.git}
                                    src={git}
                                    alt='logo git'
                                />
                                <h3>GIT</h3>
                            </div>
                            {/* </div> */}

                            {/* <div className={styles.row}> */}
                            <div className={styles.col}>
                                <img
                                    className={styles.nodejs}
                                    src={nodejs}
                                    alt='logo nodejs'
                                />
                                <h3>NODEJS</h3>
                            </div>
                            <div className={styles.col}>
                                <img
                                    className={styles.mongo}
                                    src={mongo}
                                    alt='logo mongobd'
                                />
                                <h3>MONGOBD</h3>
                            </div>
                            <div className={styles.col}>
                                <img
                                    className={styles.typescript}
                                    src={typescript}
                                    alt='Logo typesvript'
                                />
                                <h3>TYPESCRIPT</h3>
                            </div>
                            <div className={styles.col}>
                                <img
                                    className={styles.mysql}
                                    src={mysql}
                                    alt='logo mysql'
                                />
                                <h3>MYSQL</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.container}>
                    <div className={styles.rowContainer}>
                        <h3 className={styles.label}>Learning :</h3>
                        <div className={styles.row}>
                            <div className={styles.col}>
                                <img src={mail} alt='mail' />
                                <h3>HTML</h3>
                            </div>
                            <div className={styles.col}>
                                <img src={mail} alt='mail' />
                                <h3>HTML</h3>
                            </div>
                            <div className={styles.col}>
                                <img src={mail} alt='mail' />
                                <h3>HTML</h3>
                            </div>
                            <div className={styles.col}>
                                <img src={mail} alt='mail' />
                                <h3>HTML</h3>
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.col}>
                                <img src={mail} alt='mail' />
                                <h3>HTML</h3>
                            </div>
                            <div className={styles.col}>
                                <img src={mail} alt='mail' />
                                <h3>HTML</h3>
                            </div>
                            <div className={styles.col}>
                                <img src={mail} alt='mail' />
                                <h3>HTML</h3>
                            </div>
                            <div className={styles.col}>
                                <img src={mail} alt='mail' />
                                <h3>HTML</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.container}>
                    <div className={styles.rowContainer}>
                        <h3 className={styles.label}>Other skills:</h3>
                        <div className={styles.row}>
                            <div className={styles.col}>
                                <img src={mail} alt='mail' />
                                <h3>HTML</h3>
                            </div>
                            <div className={styles.col}>
                                <img src={mail} alt='mail' />
                                <h3>HTML</h3>
                            </div>
                            <div className={styles.col}>
                                <img src={mail} alt='mail' />
                                <h3>HTML</h3>
                            </div>
                            <div className={styles.col}>
                                <img src={mail} alt='mail' />
                                <h3>HTML</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
