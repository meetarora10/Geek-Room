// Navbar.jsx
"use client";

import React, { useState } from "react";
import styles from "../../styles/navbar.module.scss";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import GeekRoomLogo from "../../../public/Images/GeekRoomLogo.svg";
import Geek2 from "../../../public/Images/Transparent logo.png";
// import ThemeToggle from "../ThemeToggle/ThemeToggle";
// import DarkMode from "../DarkMode/DarkMode";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "#about-us", label: "About" },
    { href: "/events", label: "Events" },
    { href: "#contact-us", label: "Contact" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = (e: any, href: any) => {
    e.preventDefault();

    if (href.startsWith("#")) {
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = href;
    }
  };

  return (
    <div className={styles.Navbar}>
      <div className={styles.GeekRoomLogo}>
        <Image src={Geek2} alt="GeekRoomLogo" height={100} width={100} />
      </div>
      <div className={styles.Hamburger} onClick={toggleMenu}>
        <div className={styles.Line}></div>
        <div className={styles.Line}></div>
        <div className={styles.Line}></div>
      </div>
      <div className={`${styles.Navbar_Links} ${isOpen ? styles.show : ""}`}>
        <ul>
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a href={href} onClick={(e) => handleScroll(e, href)}>
                <span className={pathname === href ? styles.active : ""}>
                  {label}
                </span>
              </a>
            </li>
          ))}
          {/* <div className="flex flex-1 justify-end">
            <ThemeSwitch />
          </div> */}
          {/* <DarkMode /> */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
