import { useState } from "react";
import Navbar from "../navbar/Navbar";
// import Button from "../ui/Button";
import "./Header.module.css";
import styles from "./Header.module.css";
import { ImMenu } from "react-icons/im";
import { MdClose } from "react-icons/md";

function Headers() {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <header id='home' className={styles.header}>
            <div className={styles.logo}>Cheikh NDIAYE</div>
            <Navbar isOpen={isOpen} />
            {isOpen ? (
                <MdClose
                    onClick={() => setIsOpen(!isOpen)}
                    className={styles.isOpen}
                    style={{ color: "gray" }}
                    size={40}
                />
            ) : (
                <ImMenu
                    onClick={() => setIsOpen(!isOpen)}
                    style={{ color: "gray" }}
                    size={40}
                    className={styles.isOpen}
                />
            )}
        </header>
    );
}

export default Headers;
