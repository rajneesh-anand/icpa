import NextLink, { LinkProps as NextLinkProps } from "next/link";
import React from "react";
NextLinkProps;

const Link = ({ href, children, ...props }) => {
  return (
    <NextLink href={href}>
      <a {...props}>{children}</a>
    </NextLink>
  );
};

export default Link;
