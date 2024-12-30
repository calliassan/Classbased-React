import { Component } from "react";

export class Controlledform extends Component {
  constructor(props) {
    console.log("constructor"); //this is done to show lifecycle methods and on mounting, first constructor is mounted
    super(props);
    this.state = { fullname: "" };
  }
  handlesubmit = (e) => {
    e.preventDefault();
    console.log(this.state.fullname);
  };
  handlenamechange = (e) => {
    this.setState({ fullname: e.target.value });
  };

  componentDidMount() {
    console.log("componentdidmount");
  }
  //componentdidmount is method given by reactitself ans is mounted after constructor and render in mounting phase

  componentDidUpdate() {
    console.log("component did update");
  }
  componentWillUnmount() {
    console.log("component will unmount");
  }
  render() {
    console.log("render"); //same like above as it is done to show that render is mounted after constructor
    return (
      <div>
        <form onSubmit={this.handlesubmit}>
          <label>
            Name:
            <input
              type="text"
              name="fullname"
              onChange={this.handlenamechange}
              value={this.state.fullname}
            />
          </label>

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

//to check lifecycle, first comment the componentdidupdate and componentwillunmount
//after that, clear console in inspect browser and uncomment didupdate
//3rd, clear console and uncomment didunmount and then press toggle.
