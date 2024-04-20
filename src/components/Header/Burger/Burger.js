import React from "react";
import "./burger.scss";

export const Burger = ({
  burgerActive,
  setBurgerActive,
  isOpen,
  setIsOpen,
}) => {
  const toggleBurger = () => {
    setBurgerActive((prev) => !prev);
    setIsOpen(!isOpen);
  };
  return (
    <div
      className={burgerActive ? "burger active" : "burger"}
      onClick={() => toggleBurger()}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};
