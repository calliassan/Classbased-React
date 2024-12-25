import { Component } from "react";
import { axios } from "react";

export class Mount extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "" };
  }
  async fetchdata() {
    const response = await fetch("https://reqres.in/api/users/1");
    const datas = await response.json();
    console.log(datas);
    this.setState({ email: datas.data.email });
  }

  componentDidMount() {
    this.fetchdata();
  }
  componentDidUpdate(prevprops, prevstate) {
    console.log(prevprops);
    console.log(prevstate);
  }
  render() {
    return (
      <div>
        <p>Mount data</p>
        <p>Email:{this.state.email ? this.state.email : "Lodaing..."}</p>
      </div>
    );
  }
}
