import React, { Component } from "react";

import Calculator from "./components/Calculator";

import GlobalStyle from "./styles/global";

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Calculator />
      </>
    );
  }
}

export default App;
