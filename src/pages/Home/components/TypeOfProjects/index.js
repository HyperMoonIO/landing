import React, { Fragment } from "react";

import logo1 from "src/assets/icons/jupiter-white.svg";
import logo2 from "src/assets/icons/mars-white.svg";
import logo3 from "src/assets/icons/moon-white.svg";

import styles from "./style.scss";

const TypeOfProjects = () => (
  <Fragment>
    <div className={styles.skew} />
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h3>Aux petits oignons</h3>
          <p>
            Nous vous fournirons un produit à la pointe de la technologie et
            adapté à vos besoins. Dynamisez votre activité et
            <br />
            réalisez <b>vos rêves</b>!
          </p>
        </div>
        <ul className={styles.tech}>
          <li>
            <img src={logo1} alt="suivi" />
            <p>Consulting</p>
          </li>
          <li>
            <img src={logo2} alt="suivi" />
            <p>Site Internet</p>
          </li>
          <li>
            <img src={logo3} alt="suivi" />
            <p>Application Mobile</p>
          </li>
        </ul>
        <div className="clr" />
      </div>
    </div>
    <div className={styles.skew2} />
  </Fragment>
);

export default TypeOfProjects;
