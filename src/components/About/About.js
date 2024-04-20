import React, { useEffect } from "react";
import "./about.scss";
import { Section, Typography, typographyTags, ListElement } from "../common";
import aboutData from "./data/aboutData";
import aboutAnimation from "./aboutAnimation";
import gsap from "gsap";

export const About = () => {
  useEffect(() => {
    let ctx = gsap.context(() => {
      aboutAnimation();
    });
    return () => ctx.revert();
  }, []);
  return (
    <Section className="about" id="about">
      <div className="about__body">
        <Typography
          className="about__title title"
          tag={typographyTags.sectionTitle}
        >
          {aboutData.title}
        </Typography>
        <Typography className="about__text text" tag={typographyTags.text}>
          {aboutData.text}
        </Typography>
      </div>
      <ul className="about__items">
        {aboutData.items.map((item) => (
          <ListElement key={item.id} className="about__item">
            <div className="about__item-img">
              <img src={item.src} alt="about-image" />
            </div>
            <Typography
              className="about__item-title"
              tag={typographyTags.itemTitle}
            >
              {item.title}
            </Typography>
            <Typography className="about__item-text" tag={typographyTags.text}>
              {item.description}
            </Typography>
          </ListElement>
        ))}
      </ul>
    </Section>
  );
};
