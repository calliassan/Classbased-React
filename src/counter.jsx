import { Component } from "react";

export class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, name: "basic name" };
  }
  handleincrement = (e) => {
    this.setState({
      count: this.state.count + this.props.value,
    });
  };
  handledecrement = (e) => {
    this.setState({
      count: this.state.count - this.props.value,
    });
  };
  render() {
    console.log(this.state.count);
    return (
      <div>
        <h1>Counter</h1>
        <h3>{this.state.count}</h3>
        <h3
          onClick={() => {
            this.setState({ name: "Ashish" });
          }}
        >
          {this.state.name}
        </h3>
        <button onClick={this.handleincrement}>Increment</button>
        <button onClick={this.handledecrement}>Decrement</button>
      </div>
    );
  }
}
