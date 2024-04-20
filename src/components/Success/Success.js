import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import "./success.scss";
import { Section, Typography, typographyTags } from "../common";

export const Success = () => {
  return (
    <Section className="success">
      <div className="success__body">
        <Typography
          className="success__title"
          tag={typographyTags.sectionTitle}
        >
          Success!
        </Typography>
        <div className="success__container">
          <AiOutlineCheck className="success__icon" />
        </div>
        <Typography className="success__text" tag={typographyTags.text}>
          Thank you for your message!
        </Typography>
      </div>
    </Section>
  );
};
