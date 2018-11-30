import React from "react";

import logoSuivi from "src/assets/icons/suivi.svg";
import logoPerf from "src/assets/icons/perf.svg";
import logoSeo from "src/assets/icons/seo.svg";
import logoWand from "src/assets/icons/wand.svg";

import styles from "./style.scss";

const GuideLines = () => (
  <div className={styles.background}>
    <div className={styles.container}>
      <h3>Nos valeurs</h3>
      <ul>
        <li className={styles.value}>
          <h4>Confiance</h4>
          <div className={styles.flex}>
            <img src={logoSuivi} alt="suivi" />
            <p>
              On est <b>honnête</b> à propos de ce que l'on fait et on ira droit
              au but avec vous. On n'acceptera pas un projet qu'on ne pourra pas{" "}
              <b>réaliser avec brio</b>.
            </p>
          </div>
        </li>
        <li className={styles.value}>
          <h4>À votre écoute</h4>
          <div className={styles.flex}>
            <p>
              On sera ravi d'entendre vos idées mais nous serons toujours
              honnête dans nos réponses,{" "}
              <b>même si cela vient à vous déplaire</b>.
            </p>
            <img src={logoSuivi} alt="suivi" />
          </div>
        </li>
        <li className={styles.value}>
          <h4>Transparent</h4>
          <div className={styles.flex}>
            <img src={logoSuivi} alt="suivi" />
            <p>
              On sait que l'informatique peut paraitre compliqué vu de
              l'extérieur, mais nous nous efforcerons toujours à garder{" "}
              <b>un discours compréhensible pour vous</b>.<br />
              Exit les : <br />
              <i>
                - "Non mais vous comprenez à cause du protocol TLS et de la
                contenairisation des images Docker cela justifie 200e de plus."
              </i>
              <br />
              <i>- "euh pardon?"</i>
            </p>
          </div>
        </li>
        <li className={styles.value}>
          <h4>Une vraie relation</h4>
          <div className={styles.flex}>
            <p>
              Nous esperons surtout que vous ferez de même avec nous et que nous
              puissions vous suivre tout au long de la vie de votre projet ou
              entreprise.
            </p>
            <img src={logoSuivi} alt="suivi" />
          </div>
        </li>
      </ul>
    </div>
  </div>
);

export default GuideLines;
