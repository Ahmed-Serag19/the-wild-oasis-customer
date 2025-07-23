"use client";

import Navigation from "@/app/_components/Navigation";
import Logo from "@/app/_components/Logo";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

function Header() {
  // const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsScrolled(window.scrollY > 10);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <header
      className={` ${
        pathname !== "/"
          ? "border-primary-900 "
          : "bg-transparent border-transparent"
      } text-primary-100 border-b  px-8 py-5 sticky z-20 top-0 left-0 right-0 transition-colors duration-300`}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
