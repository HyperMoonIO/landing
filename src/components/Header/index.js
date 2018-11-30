import React from "react";

import logo from "src/assets/logo.svg";
import styles from "./style.scss";

const Header = () => (
  <header className={styles.header}>
    <div className={styles.logo}>
      <img src={logo} alt="hypermoon" />
      HyperMoon
    </div>
    <nav className={styles.main_nav}>
      <ul>
        <li>
          <a href="/#services">Services</a>
        </li>
        <li>
          <a href="/projets">Projets</a>
        </li>
        <li>
          <a href="/#clients">Clients</a>
        </li>
        <li>
          <a href="/#tarifs">Tarifs</a>
        </li>
      </ul>
      <div className={styles.contact}>
        <a href="/#contact">Contact</a>
      </div>
    </nav>
  </header>
);

export default Header;
