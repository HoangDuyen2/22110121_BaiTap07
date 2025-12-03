import React from "react";
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary";
};
declare const Button: React.FC<ButtonProps>;
export default Button;
