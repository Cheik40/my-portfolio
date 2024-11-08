import "./Navbar.module.css";
import styles from "./Navbar.module.css";
import NavItem from "./navitem/NavItem";
import NavList from "./navlist/NavList";

type NavigationItemTypes = {
    id: number;
    href: string;
    label: string;
};

type NavType = {
    setIsOpen: (isOpen: boolean) => void;
    isOpen: boolean;
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
    {
        id: 4,
        href: "#contact",
        label: "Contactez moi",
    },
];

function Navbar({ isOpen, setIsOpen }: NavType) {
    const handleNavClick = () => {
        setIsOpen(false);
    };
    return (
        <nav className={`${styles.nav} ${isOpen ? styles.isOpen : ""}`}>
            <NavList>
                {navigations.map((navigation) => {
                    return (
                        <NavItem
                            key={navigation.id}
                            href={navigation.href}
                            label={navigation.label}
                            onClick={handleNavClick}
                        />
                    );
                })}
            </NavList>
        </nav>
    );
}

export default Navbar;
