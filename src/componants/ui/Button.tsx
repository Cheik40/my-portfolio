// Button.tsx
import React from "react";

type ButtonProps = {
    label: string;
    onClick: () => void;
    variant?: "primary" | "secondary" | "danger";
    size?: "small" | "medium" | "large";
    disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
    label,
    onClick,
    variant = "primary",
    size = "medium",
    disabled = false,
}) => {
    return (
        <button
            className={`button ${variant} ${size}`}
            onClick={onClick}
            disabled={disabled}
        >
            {label}
        </button>
    );
};

export default Button;
