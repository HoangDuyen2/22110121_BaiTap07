import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  style,
  children,
  ...rest
}) => {
  const base: React.CSSProperties = {
    padding: "8px 12px",
    borderRadius: 6,
    border: "none",
    cursor: "pointer",
    fontSize: 14,
  };

  const variantStyles: Record<string, React.CSSProperties> = {
    primary: { background: "#2563eb", color: "#fff" },
    secondary: { background: "#e5e7eb", color: "#111" },
  };

  return (
    <button style={{ ...base, ...variantStyles[variant], ...style }} {...rest}>
      {children}
    </button>
  );
};

export default Button;
