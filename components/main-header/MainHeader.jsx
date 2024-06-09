import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/assets/logo.png";
import styles from "./main-header.module.css";
import MainHeaderBackground from "./MainHeaderBackground";
import NavLink from "./NavLink";

const MainHeader = () => {
  return (
    <>
      <MainHeaderBackground />
      <header className={styles.header}>
        <Link className={styles.logo} href="/">
          <Image src={logo} alt="Logo" priority />
          Next Foodies
        </Link>
        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
