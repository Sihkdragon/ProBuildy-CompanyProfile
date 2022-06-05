import React from "react";

const BaseCard = ({ children, BorderColor, className }) => {
  return (
    <div
      className={`border rounded-lg bg-white border-${BorderColor} shadow-md ${className}`}
    >
      {children}
    </div>
  );
};

export default BaseCard;
