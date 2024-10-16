import React from "react";

interface NavListProps {
    children: React.ReactNode;
}

function NavList({ children }: NavListProps) {
    return <ul>{children}</ul>;
}

export default NavList;
