import Navbar from "../navbar/Navbar";
import "./Header.module.css";
import styles from "./Header.module.css";

function Headers() {
    return (
        <header>
            <div className={styles.logo}>Cheikh NDIAYE</div>
            <Navbar />
        </header>
    );
}

export default Headers;
