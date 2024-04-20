import React from "react";

const typographyTags = {
  title: "h1",
  subtitle: "h3",
  sectionTitle: "h2",
  itemTitle: "h4",
  text: "p",
};

const Typography = ({ tag, children, className }) => {
  const HTMLTag = tag;

  return <HTMLTag className={className}>{children}</HTMLTag>;
};

export { typographyTags, Typography };
