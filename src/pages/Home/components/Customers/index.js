import React from "react";

import logoSuivi from "src/assets/icons/suivi.svg";
import logoWand from "src/assets/icons/wand.svg";

import styles from "./style.scss";

const Customers = () => (
  <div id="clients" className={styles.container}>
    <h3>Nos clients</h3>
    <ul>
      <li>
        <img src={logoSuivi} alt="suivi" />
        <p>
          De <b>l'artisan </b>..
        </p>
        <ul className={styles.bullet}>
          <li>Atelier Maya Couture</li>
        </ul>
      </li>
      <li>
        <img src={logoWand} alt="suivi" />
        <p>
          .. à la <b>startup</b> ..
        </p>
        <ul className={styles.bullet}>
          <li>Mudita</li>
        </ul>
      </li>
      <li>
        <img src={logoSuivi} alt="suivi" />
        <p>
          .. jusqu'a la <b>PME</b>
        </p>
        <ul className={styles.bullet}>
          <li>Redstun</li>
        </ul>
      </li>
    </ul>
  </div>
);

export default Customers;
