import React from "react";

import s from "./style.scss";

const Pricing = () => (
  <div id="contact" className={s.container}>
    <h3>Tarifs</h3>
    <div className={s.products}>
      {/* websites */}
      <div className={s.product}>
        <h3>Web</h3>
        <div className={s.pricing}>
          <div className={s.pfrom}>à partir de</div>
          <div className={s.pnumber}>749</div>
          <div className={s.peuro}>€</div>
        </div>
        <div className={s.pricing_desc}>Site vitrine, site e-commerce</div>
        <ul>
          <li>Responsive</li>
          <li>Mise en place de votre compte Google Business</li>
          <li>SEO : Optimisation pour le référencement</li>
          <li>OpenGraph : Optimisation pour les réseaux sociaux</li>
          <li>Respect de la RGPD</li>
        </ul>
      </div>
      {/* audit */}
      <div className={s.product}>
        <h3>Consulting</h3>
        <div className={s.pricing}>
          <div className={s.pnumber}>49</div>
          <div className={s.peuro}>€/h</div>
        </div>
        <div className={s.pricing_desc}>Besoin d'un coup de main?</div>
        <ul>
          <li>React.JS</li>
          <li>Node</li>
          <li>Go</li>
          <li>JavaScript</li>
        </ul>
      </div>
    </div>
    <div className={s.tva}>
      Tous les prix sont TTC, TVA non applicable, art.293-B du CGI
    </div>
  </div>
);

export default Pricing;
