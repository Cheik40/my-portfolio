import styles from "./Contact.module.css";
import separate from "../../assets/separate.svg";
import "./Contact.module.css";
import Button from "../../componants/ui/Button";

function Contact() {
    return (
        <div id='experiences' className={styles.container}>
            <div>
                <h2 className={styles.title}>Contactez moi</h2>
            </div>

            <div className={styles.containerExperience}>
                <div className={styles.titleH2}></div>

                <div className={styles.description}>
                    necessitatibus incidunt inventore iste? Neque pariatur
                    distinctio, dolorem tenetur in saepe non harum similiqu
                </div>

                <div className={styles.reparate}>
                    <img src={separate} alt='' />{" "}
                </div>

                <form action='' className={styles.message}>
                    <div className={styles.input}>
                        <input
                            className='inp'
                            type='text'
                            placeholder='Enterz votre adresse nom*'
                            required
                        />
                    </div>
                    <div className={styles.input}>
                        <input
                            type='email'
                            id='email'
                            pattern='[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$'
                            required
                            className='inp'
                            placeholder='Enterz votre adresse mail*'
                        />
                    </div>

                    <div className={styles.input}>
                        <textarea
                            className='inp'
                            name='text'
                            id=''
                            placeholder='Votre méssage*'
                            required
                        ></textarea>
                    </div>

                    <div className={styles.input}>
                        {/* <input type='button' value='Envoyer' /> */}
                        <Button onClick={() => true} label='Envoyer' />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;
