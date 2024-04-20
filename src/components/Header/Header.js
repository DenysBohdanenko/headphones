import React, { useEffect } from "react";
import mainLogo from "../../assets/img/desktop/icons/logo.svg";
import { Link, ListElement } from "../common";
import { headerLinksData, Burger, headerAnimation } from "./";
import "./header.scss";
import gsap from "gsap";

export const Header = () => {
  const [burgerActive, setBurgerActive] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(true);
  const closeBurger = () => {
    setIsOpen(false);
    setBurgerActive(false);
  };

  useEffect(() => {
    let ctx = gsap.context(() => {
      headerAnimation();
    });
    return () => ctx.revert();
  }, []);
  return (
    <header className="header">
      <div className="container">
        <nav className="header__navbar">
          <Link href="#hero" className="header__logo">
            <img src={mainLogo} alt="logo" />
          </Link>
          <Burger
            burgerActive={burgerActive}
            setBurgerActive={setBurgerActive}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
          <ul
            className={
              burgerActive ? "header__nav-list active" : "header__nav-list"
            }
          >
            {headerLinksData.map((item) => (
              <ListElement key={item.href}>
                <Link
                  href={item.href}
                  className="header__nav-link"
                  onClick={closeBurger}
                >
                  {item.children}
                </Link>
              </ListElement>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
