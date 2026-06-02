import React from "react";

export default function PrimaryButton({ href, children, className = "", ...props }) {
  return (
    <a
      href={href}
      className={`btn btn-primary-cta ${className}`.trim()}
      style={{ textDecoration: "none" }}
      {...props}
    >
      {children}
    </a>
  );
}
