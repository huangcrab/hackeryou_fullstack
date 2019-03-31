import React, { Component } from "react";
import logo from "./logo.svg";
import { Day, Calendar } from "./Day";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Day />
        <Calendar />
      </div>
    );
  }
}

export default App;
