import styles from "./Contact.module.css";
import separate from "../../assets/separate.svg";
import "./Contact.module.css";
import Button from "../../componants/ui/Button";

function Contact() {
    return (
        <div id='contact' className={styles.container}>
            <div>
                <h2 className={styles.title}>Contactez moi</h2>
            </div>

            <div className={styles.containerExperience}>
                <div className={styles.titleH2}></div>

                <div className={styles.description}>
                    Je suis disponible du lundi au vendredi, de 9h à 18h, et je
                    serais ravi d'échanger avec vous ! <br />
                    Vous pouvez me laisser un message directement via le
                    formulaire ci-dessous, ou me joindre par mail ou par
                    téléphone. <br />
                    Je vous répondrai dans les plus brefs délais !
                </div>

                <div className={styles.reparate}>
                    <img src={separate} alt='' />{" "}
                </div>

                <form action='' className={styles.message}>
                    <div className={styles.input}>
                        <input
                            className='inp'
                            type='text'
                            placeholder='Enterz votre nom*'
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

                    <div className={`${styles.input} ${styles.btn}`}>
                        <Button
                            className='button'
                            onClick={() => true}
                            label='Envoyer'
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;
