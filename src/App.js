import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import { Counter } from "./counter";
import { Uncontrolledform } from "./Components/uncontrolledform";
import { Controlledform } from "./Components/controlledform";
import { Mount } from "./mount";
import { Update } from "./update";
import { Stock } from "./stock";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      flag: true,
      userid: 2,
    };
  }
  render() {
    return (
      <div>
        <h1>Hello React!</h1>
        {/* *****Counter**** */}
        {/* <Counter value={5} />
        <Counter value={1} /> */}
        {/* *******Counter ends******** */}
        {/* ********Form********** */}
        {/* <button onClick={() => this.setState({ flag: !this.state.flag })}>
          Toggle Flag
        </button>
        {this.state.flag && <Controlledform />} */}
        {/* <Controlledform /> */}

        {/* ************Mounting*********** */}
        {/* <Mount /> */}
        {/* mount is used to show that we can call api on componentdidmount */}

        {/* **************Previousprops in componentDidUpdate******************** */}
        <input
          type="number"
          onChange={(e) => {
            this.setState({ userid: e.target.value });
          }}
          value={this.state.userid}
        />
        <Update userid={this.state.userid} />

        {/* **************************Stock*************** */}
        {/* <button onClick={() => this.setState({ flag: !this.state.flag })}>
          Toggle Flag
        </button>
        {this.state.flag && <Stock />} */}
      </div>
    );
  }
}
