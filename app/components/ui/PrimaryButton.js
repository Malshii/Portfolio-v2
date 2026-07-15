import React from "react";
import Link from "next/link";

export default function PrimaryButton({
  href,
  children,
  className = "",
  ...props
}) {
  const classes = `btn btn-primary-cta ${className}`.trim();

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        style={{ textDecoration: "none" }}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}