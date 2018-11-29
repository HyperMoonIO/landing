import React, { Fragment } from "react";

import styles from "./style.scss";

import TextLine from "./components/TextLine";
import Features from "./components/Features";
import TypeOfProjects from "./components/TypeOfProjects";
import Services from "./components/Services";
import Contact from "./components/Contact";

const Home = () => (
  <Fragment>
    <div className={styles.hero}>
      <div className={styles.intro}>
        <h1>
          Vous pouvez demander
          <br />
          la lune !
        </h1>
        <h2>
          HyperMoon est la meilleure façon d'être accompagné dans son projet
          informatique.
        </h2>
      </div>
      <div className={styles.intro_image}>
        <div className={styles.image} />
      </div>
      <div className="clr" />
    </div>
    <TextLine>Performance</TextLine>
    <Features />
    <TypeOfProjects />
    <Services />
    <Contact />
  </Fragment>
);

export default Home;
