import React from "react";
type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
};
declare const Input: React.FC<InputProps>;
export default Input;
