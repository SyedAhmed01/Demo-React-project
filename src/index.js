import ReactDOM from "react-dom";
import React, { Component } from "react";
import Child from "./child";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ""
    };
    this.handlechange = this.handlechange.bind(this);
  }
  handlechange(datafromchild) {
    this.setState({
      data: datafromchild
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.data}</h1>
        <Child action={this.handlechange} />
      </div>
    );
  }
}

ReactDOM.render(<Todo />, document.getElementById("root"));
