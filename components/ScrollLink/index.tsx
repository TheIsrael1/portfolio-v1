import React from "react";

interface IScrollLink {
  link: string;
  className: string;
  label: string;
  onClick?: () => void;
}

const ScrollLink = ({ className, link, label, onClick }: IScrollLink) => {
  // TODO: FOR NOW I NAVIGATE TO PAGE END, BUT SHOULD BE TO PARTICULAR SECTION
  const scrollToElement = (i: string) => {
    scrollTo({
      behavior: "smooth",
      top: !!document ? document?.body?.scrollHeight : 0,
    });
  };

  return (
    <span
      onClick={() => {
        onClick?.();
        scrollToElement(link);
      }}
      className={className}
    >
      {label}
    </span>
  );
};

export default ScrollLink;
