import React from "react";

type CardProps = {
  children?: React.ReactNode;
  style?: React.CSSProperties;
};

const Card: React.FC<CardProps> = ({ children, style }) => {
  const s: React.CSSProperties = {
    border: "1px solid #e5e7eb",
    borderRadius: 8,
    padding: 12,
    background: "#fff",
    boxShadow: "0 1px 2px rgba(0,0,0,0.03)",
  };

  return <div style={{ ...s, ...style }}>{children}</div>;
};

export default Card;
