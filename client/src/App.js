import React, { Component } from "react";
import Alert from "./components/Alert";
import Jumbotron from "./components/Jumbotron";
import DeleteBtn from "./components/DeleteBtn";
import SaveBtn from "./components/SaveBtn";
import ViewBtn from "./components/ViewBtn";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Google Books</h2>
        </div>
      </div>
    );
  }
}

export default App;

