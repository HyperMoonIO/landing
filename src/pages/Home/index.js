import React, { Fragment } from "react";

import styles from "./style.scss";

import TextLine from "./components/TextLine";
import Features from "./components/Features";
import TypeOfProjects from "./components/TypeOfProjects";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Customers from "./components/Customers";
import Pricing from "./components/Pricing";
import GuideLines from "./components/GuideLines";

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
    <Features />
    <TextLine>Et c'est pour qui ?</TextLine>
    <Customers />
    <TypeOfProjects />
    <TextLine>Concrètement vous faites quoi ?</TextLine>
    <Services />
    <TextLine>Et à quel prix ?</TextLine>
    <Pricing />
    <TextLine>Pourquoi vous ?</TextLine>
    <GuideLines />
    <TextLine>No bullshit</TextLine>
    <Contact />
  </Fragment>
);

export default Home;
