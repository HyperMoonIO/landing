import React from "react";

import logo from "./logo.jpg";
import styles from "./style.scss";

console.log("stylre", styles);

const Header = () => (
  <header className={styles.header}>
    <div className={styles.logo}>
      <img src={logo} alt="hypermoon" />
      HyperMoon
    </div>
    <nav className={styles.main_nav}>
      <ul>
        <li>Services</li>
        <li>Projets</li>
        <li>Clients</li>
        <li>Tarifs</li>
      </ul>
      <div className={styles.contact}>Contact</div>
    </nav>
  </header>
);

export default Header;
