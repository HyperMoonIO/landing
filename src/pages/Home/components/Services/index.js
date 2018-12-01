import React from "react";

import logoWebsite from "src/assets/icons/website.svg";
import logoHosting from "src/assets/icons/hosting.svg";
import logoWise from "src/assets/icons/wise.svg";
import logoMobile from "src/assets/icons/mobile.svg";
import logoSeo from "src/assets/icons/seo.svg";
import logoLearning from "src/assets/icons/learning.svg";

import styles from "./style.scss";

const Services = () => (
  <div id="services" className={styles.container}>
    <h3>Nos services</h3>
    <ul>
      <li>
        <img src={logoWebsite} alt="suivi" />
        <p>
          <b>Développement WEB</b>
          <br />
          Site vitrine, ecommerce, projet innovant
        </p>
      </li>
      <li>
        <img src={logoHosting} alt="suivi" />
        <p>
          <b>Hébergement &amp; Nom de domaine</b>
          <br />
          Gestion et/ou mise en place
        </p>
      </li>
      <li>
        <img src={logoWise} alt="suivi" />
        <p>
          <b>Audit / Conseils</b>
          <br />
          Profitez de notre expérience
        </p>
      </li>
      <li>
        <img src={logoMobile} alt="suivi" />
        <p>
          <b>Application Mobile</b>
          <br />
          Hybride : Android / iOS
        </p>
      </li>
      <li>
        <img src={logoSeo} alt="suivi" />
        <p>
          <b>SEO &amp; Référencement</b>
          <br />
          Pour améliorer votre visibilité
        </p>
      </li>
      <li>
        <img src={logoLearning} alt="suivi" />
        <p>
          <b>Formation</b>
          <br />
          Ne soyez plus dans le flou !
        </p>
      </li>
    </ul>
  </div>
);

export default Services;
