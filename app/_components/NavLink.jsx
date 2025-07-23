"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({
  href,
  children,
  className = "",
  activeClassName = "text-blue-600",
  exact = false,
}) => {
  const pathname = usePathname();

  const isActive = exact ? pathname === href : pathname.startsWith(href);

  const combinedClassName = `${className} transition-colors duration-300 ${
    isActive ? activeClassName : ""
  }`;

  return (
    <Link href={href} className={combinedClassName.trim()}>
      {children}
    </Link>
  );
};

export default NavLink;
