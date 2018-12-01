import React, { Component } from "react";

import logo from "src/assets/logo.svg";
import iconMenu from "src/assets/icons/menu.svg";

import styles from "./style.scss";

class Header extends Component {
  state = {
    menuIsOpen: false
  };

  toggleMenu = () => this.setState({ menuIsOpen: !this.state.menuIsOpen });

  render() {
    const { menuIsOpen } = this.state;

    const menuContent = (
      <React.Fragment>
        <ul>
          <li>
            <a href="/#clients">Clients</a>
          </li>
          <li>
            <a href="/#services">Services</a>
          </li>
          <li>
            <a href="/#tarifs">Tarifs</a>
          </li>
          <li>
            <a href="/#nos-valeurs">Valeurs</a>
          </li>
          {/*<li>
      <a href="/projets">Projets</a>
    </li>*/}
        </ul>
        <div className={styles.contact}>
          <a href="/#contact">Contact</a>
        </div>
      </React.Fragment>
    );
    return (
      <header className={styles.header}>
        <div className={styles.menu} onClick={this.toggleMenu}>
          <img src={iconMenu} alt="menu-icon" />
        </div>
        <a href="/#">
          <div className={styles.logo}>
            <img src={logo} alt="hypermoon" />
            HyperMoon
          </div>
        </a>
        <nav className={styles.main_nav}>{menuContent}</nav>
        <nav
          className={styles.mobile_nav}
          style={{ display: menuIsOpen ? "block" : "none" }}
        >
          {menuContent}
        </nav>
      </header>
    );
  }
}

export default Header;
