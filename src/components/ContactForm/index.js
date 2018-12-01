import React, { Component } from "react";
import axios from "axios";

import s from "./style.scss";

const initialState = {
  name: "",
  email: "",
  phone: "",
  message: "",

  error: null,
  disabled: false,
  success: null
};

class ContactForm extends Component {
  state = { ...initialState };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  send = async () => {
    if (this.state.disabled) return;
    this.setState({ error: null, disabled: true });
    // TODO actually send the message
    // this.setState({ ...initialState });
    const GENERIC_E =
      "Une erreur est survenue : contactez-nous directement sur aksels.ledins@gmail.com";
    await axios
      .post("/contact", this.state)
      .then(() => {
        this.setState({ ...initialState, success: "Message envoyé!" });
      })
      .catch(error => {
        if (error.response) {
          if (error.response.status !== 422) {
            this.setState({ error: GENERIC_E, disabled: false });
            return;
          }
          this.setState({
            error: `Formulaire invalide : ${error.response.data.errors
              .map(i => i.msg)
              .join(", ")}`,
            disabled: false
          });
        } else {
          this.setState({ error: GENERIC_E, disabled: false });
        }
      });
  };

  render() {
    const {
      name,
      email,
      phone,
      message,
      error,
      disabled,
      success
    } = this.state;

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
        <button onClick={this.send} disabled={disabled}>
          Envoyer
        </button>
        {error && <p>Erreur : {error}</p>}
        {success && <p>{success}</p>}
      </div>
    );
  }
}

export default ContactForm;
