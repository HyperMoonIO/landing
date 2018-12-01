import React from "react";

import logoArtisan from "src/assets/icons/artisan.svg";
import logoStartup from "src/assets/icons/startup.svg";
import logoPME from "src/assets/icons/pme.svg";

import styles from "./style.scss";

const Customers = () => (
  <div id="clients" className={styles.container}>
    <h3>Nos clients</h3>
    <ul>
      <li>
        <img src={logoArtisan} alt="suivi" />
        <p>
          De <b>l'artisan </b>..
        </p>
        <ul className={styles.bullet}>
          <li>
            <a
              href="https://ateliermayacouture.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Atelier Maya Couture
            </a>
          </li>
        </ul>
      </li>
      <li>
        <img src={logoStartup} alt="suivi" />
        <p>
          .. à la <b>startup</b> ..
        </p>
        <ul className={styles.bullet}>
          <li>
            <a
              href="https://fizix.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fizix
            </a>
          </li>
          <li>
            <a
              href="https://app.mudita-music.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mudita
            </a>
          </li>
        </ul>
      </li>
      <li>
        <img src={logoPME} alt="suivi" />
        <p>
          .. jusqu'a la <b>PME</b>
        </p>
        <ul className={styles.bullet}>
          <li>
            <a
              href="https://redstun.fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Redstun
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
);

export default Customers;
