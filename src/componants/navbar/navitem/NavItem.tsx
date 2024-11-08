import "./NavItem.module.css";
import styles from "./NavItem.module.css";

interface NavItemProps {
    href: string;
    label: string;
    onClick: () => void;
}

function NavItem({ href, label, onClick }: NavItemProps) {
    return (
        <li className={`${styles.navItem} `} onClick={onClick}>
            <a href={href}>{label}</a>
        </li>
    );
}

export default NavItem;
