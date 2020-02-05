import React from "react";
import "./Link.css";

export const Link = ({ href, title, subtitle, caption }) => {
  return (
    <div className="mdx_link_wrapper">
      <a href={href} className="mdx_link">
        <span className="mdx_link_title">{title}</span>
        {subtitle ? (
          <span className="mdx_link_subtitle">{subtitle}</span>
        ) : null}
      </a>
      <span className="mdx_link_cation">{caption}</span>
    </div>
  );
};

export default Link;
