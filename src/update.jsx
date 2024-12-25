import { Component } from "react";
import { axios } from "react";

export class Update extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "" };
  }
  async fetchdata() {
    const response = await fetch(
      `https://reqres.in/api/users/${this.props.userid}`
    );
    const datas = await response.json();
    console.log(datas);
    this.setState({ email: datas.data.email });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.userid !== this.props.userid) {
      this.fetchdata();
    }
  }

  componentDidMount() {
    this.fetchdata();
  }
  //above fetchdata called again because on update from input of the value, state shall cahnge and on didmount, it rerenders.so;

  render() {
    return (
      <div>
        <p>Mount data</p>
        <p>Email:{this.state.email ? this.state.email : "Lodaing..."}</p>
      </div>
    );
  }
}
