import React from "react";

import styles from "./style.scss";

const links = [
  "short.gg",
  "nantes.cool",
  "aksels.io",
  "aksels.me",
  "lowside.io"
];

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      <ul className={styles.nav}>
        <h4>HyperMoon</h4>
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
      <ul className={styles.nav}>
        <h4>Liens externes / Projets</h4>
        {links.map(l => (
          <li key={l}>
            <a href={`http://${l}`} target="_blank" rel="noopener noreferrer">
              {l}
            </a>
          </li>
        ))}
      </ul>
      <ul className={styles.nav}>
        <h4>Contact</h4>
        <li>
          <a href="mailto:aksels.ledins@gmail.com">aksels.ledins@gmail.com</a>
        </li>
        <li>
          <a href="tel:+33785281484">(+33) 7 85 28 14 84</a>
        </li>
        <li>Siret 82909448100019</li>
        <li>Siren 829 094 481</li>
      </ul>
      <ul className={styles.nav}>
        <h4>Réseaux sociaux</h4>
        <li>LinkedIn</li>
        <li>
          <a
            href="https://www.instagram.com/hypermoon_io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </li>
      </ul>
    </div>
    <div className={styles.copyright}>
      Copyright {new Date().getFullYear()} HyperMoon. All Rights Reserved.
    </div>
  </footer>
);

export default Footer;
