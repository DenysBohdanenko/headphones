import React, { useEffect } from "react";
import "./hero.scss";
import { Typography, typographyTags, Section, Link } from "../common";
import heroInfo from "./data/heroInfo";
import { gsap } from "gsap";
import heroAnimation from "./heroAnimation";

export const Hero = () => {
  useEffect(() => {
    let ctx = gsap.context(() => {
      heroAnimation();
    });
    return () => ctx.revert();
  }, []);
  return (
    <Section id="hero" className="hero">
      <div className="hero__body">
        <Typography className="hero__title title" tag={typographyTags.title}>
          {heroInfo.title}
        </Typography>
        <Typography className="hero__subtitle" tag={typographyTags.subtitle}>
          {heroInfo.subtitle}
        </Typography>
        <Link href="#contact" className="hero__button button">
          {heroInfo.button}
        </Link>
      </div>
    </Section>
  );
};
