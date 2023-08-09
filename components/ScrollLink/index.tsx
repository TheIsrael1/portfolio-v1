import React from "react";

interface IScrollLink {
  link: string;
  className: string;
  label: string;
}

const ScrollLink = ({ className, link, label }: IScrollLink) => {
  // TODO: FOR NOW I NAVIGATE TO PAGE END, BUT SHOULD BE TO PARTICULAR SECTION
  const scrollToElement = (i: string) => {
    scrollTo({
      behavior: "smooth",
      top: !!document ? document?.body?.scrollHeight : 0,
    });
  };

  return (
    <span onClick={() => scrollToElement(link)} className={className}>
      {label}
    </span>
  );
};

export default ScrollLink;
