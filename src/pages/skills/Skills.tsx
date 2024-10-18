import styles from "./Skills.module.css";
import mail from "../../assets/mail.svg";

function Skills() {
    return (
        <div id='skills' className={styles.skillsContain}>
            <h2 className={styles.titleH2}>Compétences</h2>
            <div className={styles.skills}>
                <div className={styles.container}>
                    <div className={styles.rowContainer}>
                        <h3 className={styles.label}>Using NOW:</h3>
                        <div className={styles.row}>
                            <div className={styles.col}>
                                <img src={mail} alt='mail' />
                                <h3>REACT</h3>
                            </div>

                            <div className={styles.col}>
                                <img src={mail} alt='mail' />
                                <h4>JAVASCRIPT</h4>
                            </div>
                            <div className={styles.col}>
                                <img src={mail} alt='mail' />
                                <h4>HTML</h4>
                            </div>
                            <div className={styles.col}>
                                <img src={mail} alt='mail' />
                                <h3>CSS3</h3>
                            </div>
                        </div>

                        <div className={styles.row}>
                            <div className={styles.col}>
                                <img src={mail} alt='mail' />
                                <h3>SASS</h3>
                            </div>
                            <div className={styles.col}>
                                <img src={mail} alt='mail' />
                                <h3>BOOTSTRAP</h3>
                            </div>
                            <div className={styles.col}>
                                <img src={mail} alt='mail' />
                                <h3>FIGMA</h3>
                            </div>
                            <div className={styles.col}>
                                <img src={mail} alt='mail' />
                                <h3>GIT</h3>
                            </div>
                        </div>

                        <div className={styles.row}>
                            <div className={styles.col}>
                                <img src={mail} alt='mail' />
                                <h3>NODEJS</h3>
                            </div>
                            <div className={styles.col}>
                                <img src={mail} alt='mail' />
                                <h3>BOOTSTRAP</h3>
                            </div>
                            <div className={styles.col}>
                                <img src={mail} alt='mail' />
                                <h3>FIGMA</h3>
                            </div>
                            <div className={styles.col}>
                                <img src={mail} alt='mail' />
                                <h3>GIT</h3>
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
