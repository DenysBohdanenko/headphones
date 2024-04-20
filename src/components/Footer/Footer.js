import React from "react";
import mainLogo from "../../assets/img/desktop/icons/logo.svg";
import "./footer.scss";
import { Link, ListElement, Typography, typographyTags } from "../common";
import footerLinksData from "./data/footerLinksData";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__body">
          <Link href="#hero">
            <img src={mainLogo} alt="logo" />
          </Link>
          <ul className="footer__icons">
            {footerLinksData.map((item) => {
              const Icon = item.img;
              return (
                <ListElement key={item.platform}>
                  <Link href={item.url} target="_blank" rel="noreferrer">
                    <Icon className={`footer__icon footer__${item.platform}`} />
                  </Link>
                </ListElement>
              );
            })}
          </ul>
        </div>
      </div>
      <Typography tag={typographyTags.text}>©headphones 2020</Typography>
    </footer>
  );
};
