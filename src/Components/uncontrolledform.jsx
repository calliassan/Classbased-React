import { Component } from "react";

export class Uncontrolledform extends Component {
  handlesubmit = (e) => {
    e.preventDefault();
    console.log(e.target.elements.fullname.value);
    //here we dont have state so extracting value like this
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handlesubmit}>
          <label>
            Name:
            <input type="text" name="fullname" />
          </label>

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
