import React from "react";

import ContactForm from "src/components/ContactForm";

import s from "./style.scss";

const Contact = ({ children }) => (
  <div className={s.container}>
    <h3>Contact</h3>
    <p>
      Soumettez-nous ce que vous souhaitez faire en trois lignes. Nous
      reviendrons vers vous au plus vite.
    </p>
    <div className={s.contact_form}>
      <ContactForm />
    </div>
  </div>
);

export default Contact;
