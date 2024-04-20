import React, { useEffect } from "react";
import "./contact.scss";
import { Typography, typographyTags, Section } from "../common";
import { Form, contactInfo, contactAnimation } from "./";
import gsap from "gsap";

export const Contact = () => {
  useEffect(() => {
    let ctx = gsap.context(() => {
      contactAnimation();
    });
    return () => ctx.revert();
  }, []);
  return (
    <Section className="contact" id="contact">
      <Typography
        className="contact__title title"
        tag={typographyTags.sectionTitle}
      >
        {contactInfo.title}
      </Typography>
      <Form />
    </Section>
  );
};
