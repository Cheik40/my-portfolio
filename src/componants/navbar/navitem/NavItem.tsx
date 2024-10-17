import "./NavItem.module.css";

interface NavItemProps {
    url: HTMLAnchorElement;
    label: string;
}

function NavItem({ url, label }: NavItemProps) {
    return (
        <li>
            <a href={url}>{label}</a>
        </li>
    );
}

export default NavItem;
