import { Component } from "react";

export class Stock extends Component {
  componentDidMount() {
    console.log("component mounted");
    this.timer = setInterval(() => {
      console.log("fetched");
    }, 2000);
  }
  componentWillUnmount() {
    console.log("component unmounted");
    clearInterval(this.timer);
  }
  render() {
    return (
      <div>
        <h1>Stock details</h1>
      </div>
    );
  }
}
