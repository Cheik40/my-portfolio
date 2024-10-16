import React from "react";
import "./NavList.module.css";

interface NavListProps {
    children: React.ReactNode;
}

function NavList({ children }: NavListProps) {
    return <ul>{children}</ul>;
}

export default NavList;
