import React from "react";

import logoSuivi from "src/assets/icons/suivi.svg";
import logoPerf from "src/assets/icons/perf.svg";
import logoSeo from "src/assets/icons/seo.svg";
import logoWand from "src/assets/icons/wand.svg";

import styles from "./style.scss";

const Features = () => (
  <div className={styles.container}>
    <h3>..qu'avez vous avec HyperMoon ?</h3>
    <ul>
      <li>
        <img src={logoSuivi} alt="suivi" />
        <p>
          <b>Un suivi</b> tout au long de votre projet
        </p>
      </li>
      <li>
        <img src={logoPerf} alt="suivi" />
        <p>
          Un projet <b>performant</b>
        </p>
      </li>
      <li>
        <img src={logoSeo} alt="suivi" />
        <p>
          Une meilleure <b>visibilité</b> pour dépasser votre concurrence
        </p>
      </li>
      <li>
        <img src={logoWand} alt="suivi" />
        <p>
          Quelque chose <b>à votre image</b>, dans votre <b>budget</b>
        </p>
      </li>
    </ul>
  </div>
);

export default Features;
