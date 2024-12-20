import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import { Counter } from "./counter";

export class App extends Component {
  render() {
    return (
      <div>
        <Counter value={5} />
        <Counter value={1} />
      </div>
    );
  }
}
