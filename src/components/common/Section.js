import React from "react";

export const Section = ({ children, id, className }) => {
  return (
    <section id={id} className={className}>
      <div className="container">{children}</div>
    </section>
  );
};
