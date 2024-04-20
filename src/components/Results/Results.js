import React, { useEffect } from "react";
import "./results.scss";
import { Typography, typographyTags, Section, ListElement } from "../common";
import resultsInfo from "./data/resultsInfo";
import gsap from "gsap";
import resultsAnimation from "./resultsAnimation";

export const Results = () => {
  useEffect(() => {
    let ctx = gsap.context(() => {
      resultsAnimation();
    });
    return () => ctx.revert();
  }, []);
  return (
    <Section className="results" id="results">
      <div className="results__body">
        <Typography
          tag={typographyTags.sectionTitle}
          className="results__title title"
        >
          {resultsInfo.title}
        </Typography>
        <Typography tag={typographyTags.text} className="results__text text">
          {resultsInfo.text}
        </Typography>
      </div>
      <ul className="results__list">
        {resultsInfo.items.map((item) => (
          <ListElement
            key={item.id}
            className="results__item"
            count={item.title}
          >
            <Typography
              tag={typographyTags.itemTitle}
              className="results__item-title"
            >
              0
            </Typography>
            <Typography
              tag={typographyTags.text}
              className="results__item-text"
            >
              {item.text}
            </Typography>
          </ListElement>
        ))}
      </ul>
    </Section>
  );
};
