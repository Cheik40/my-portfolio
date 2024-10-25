import Button from "../ui/Button";
// import NavItem from "./navitem/NavItem";
// import NavList from "./navlist/NavList";
import "./Navbar.module.css";
import NavItem from "./navitem/NavItem";
import NavList from "./navlist/NavList";

function Navbar() {
    return (
        <nav>
            <NavList>
                <NavItem href='#about' label='A-propos' />
                <NavItem href='#skills' label='Compétences' />
                <NavItem href='#experiences' label='Expériences' />
                <Button onClick={() => true} label='Contactez moi' />
            </NavList>
        </nav>
    );
}

export default Navbar;
