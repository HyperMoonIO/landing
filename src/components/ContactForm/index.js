import React, { Component } from "react";

import s from "./style.scss";

const initialState = {
  name: "",
  email: "",
  phone: "",
  message: ""
};

class ContactForm extends Component {
  state = { ...initialState };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  send = async () => {
    // TODO actually send the message
    this.setState({ ...initialState });
  };

  render() {
    const { name, email, phone, message } = this.state;

    return (
      <div className={s.container}>
        <input
          onChange={this.handleChange}
          name="name"
          placeholder="Votre nom"
          value={name}
        />
        <input
          onChange={this.handleChange}
          name="email"
          placeholder="Email"
          value={email}
          type="email"
        />
        <input
          onChange={this.handleChange}
          name="phone"
          placeholder="Téléphone"
          value={phone}
          type="phone"
        />
        <textarea
          onChange={this.handleChange}
          name="message"
          placeholder="Parlez-nous de votre projet en 2 ou 3 lignes.."
          rows="4"
          value={message}
        />
        <button onClick={this.send}>Envoyer</button>
      </div>
    );
  }
}

export default ContactForm;
