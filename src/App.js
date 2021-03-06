import React, { Component } from "react";

import Header from "src/components/Header";
import Footer from "src/components/Footer";

import Home from "src/pages/Home";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
