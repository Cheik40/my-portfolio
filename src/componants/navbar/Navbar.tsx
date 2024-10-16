import NavItem from "./navitem/NavItem";
import NavList from "./navlist/NavList";

function Navbar() {
    return (
        <NavList>
            <NavItem href='#About' label='A-propos' />
            <NavItem href='#skills' label='Compétences' />
            <NavItem href='#experiences' label='Expériences' />
        </NavList>
    );
}

export default Navbar;
