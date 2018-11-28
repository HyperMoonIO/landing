import React, { Component } from "react";

import Header from "src/components/Header";

import Home from "src/pages/Home";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
      </div>
    );
  }
}

export default App;
