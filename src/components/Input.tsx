import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

const Input: React.FC<InputProps> = ({ label, style, ...rest }) => {
  const container: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: 6,
  };
  const inputStyle: React.CSSProperties = {
    padding: "8px 10px",
    borderRadius: 6,
    border: "1px solid #d1d5db",
    fontSize: 14,
  };

  return (
    <label style={container}>
      {label && <span style={{ fontSize: 13 }}>{label}</span>}
      <input style={{ ...inputStyle, ...style }} {...rest} />
    </label>
  );
};

export default Input;
