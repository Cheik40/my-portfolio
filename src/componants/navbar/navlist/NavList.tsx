import React from "react";
import styles from "./NavList.module.css";

interface NavListProps {
    children: React.ReactNode;
}

function NavList({ children }: NavListProps) {
    return <ul className={styles.ul}>{children}</ul>;
}

export default NavList;
