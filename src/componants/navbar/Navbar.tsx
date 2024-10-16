import Button from "../ui/Button";
// import NavItem from "./navitem/NavItem";
// import NavList from "./navlist/NavList";
import "./Navbar.module.css";

function Navbar() {
    return (
        // <NavList>
        //     <NavItem href={`#Abou`} label='A-propos' />
        //     <NavItem href='#skills' label='Compétences' />
        //     <NavItem href='#experiences' label='Expériences' />
        // </NavList>

        <nav>
            <ul>
                <li>
                    <a href='#about'>A-propos</a>
                </li>
                <li>
                    <a href='#skills'>Compétences</a>
                </li>
                <li>
                    <a href='#experiences'>Expériences</a>
                </li>
            </ul>
            <Button onClick={() => true} label='Contactez moi' />
        </nav>
    );
}

export default Navbar;
