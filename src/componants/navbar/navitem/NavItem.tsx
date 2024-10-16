interface NavItemProps {
    url: string;
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
