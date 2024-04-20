import React from "react";

export const Button = ({ type, className, children }) => {
  return (
    <button type={type} className={className}>
      {children}
    </button>
  );
};
