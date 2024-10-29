import "./NavItem.module.css";

interface NavItemProps {
    href: string;
    label: string;
}

function NavItem({ href, label }: NavItemProps) {
    return (
        <li>
            <a href={href}>{label}</a>
        </li>
    );
}

export default NavItem;
