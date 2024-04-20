import React from "react";

export const ListElement = ({ className, children, count }) => {
  return (
    <li className={className} data-count={count}>
      {children}
    </li>
  );
};
