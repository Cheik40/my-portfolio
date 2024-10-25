import Button from "../ui/Button";
import "./Navbar.module.css";
import styles from "./Navbar.module.css";
import NavItem from "./navitem/NavItem";
import NavList from "./navlist/NavList";

type NavigationItemTypes = {
    id: number;
    href: string;
    label: string;
};

const navigations: NavigationItemTypes[] = [
    {
        id: 1,
        href: "#about",
        label: "A-propos",
    },
    {
        id: 2,
        href: "#skills",
        label: "Compétences",
    },
    {
        id: 3,
        href: "#experiences",
        label: "Expériences",
    },
];

function Navbar() {
    return (
        <nav className={`${styles.nav} `}>
            <NavList>
                {navigations.map((navigation) => {
                    return (
                        <NavItem
                            href={navigation.href}
                            label={navigation.label}
                        />
                    );
                })}
                <Button onClick={() => true} label='Contactez moi' />
            </NavList>
        </nav>
    );
}

export default Navbar;
