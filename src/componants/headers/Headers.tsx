import { useState } from "react";
import Navbar from "../navbar/Navbar";
import "./Header.module.css";
import styles from "./Header.module.css";
import { ImMenu } from "react-icons/im";
import { MdClose } from "react-icons/md";

function Headers() {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => {
        // setIsOpen(isOpen);
        setIsOpen((prevIsOpen) => !prevIsOpen);
    };

    return (
        <header id='home' className={styles.header}>
            <div className={styles.logo}>Cheikh NDIAYE</div>
            <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
            {isOpen ? (
                <MdClose
                    onClick={handleOpen}
                    className={styles.isOpen}
                    style={{ color: "gray", cursor: "pointer" }}
                    size={40}
                />
            ) : (
                <ImMenu
                    onClick={handleOpen}
                    style={{ color: "gray", cursor: "pointer" }}
                    size={40}
                    className={styles.isOpen}
                />
            )}
        </header>
    );
}

export default Headers;
