import ReactDOM from "react-dom";
import React, { Component } from "react";
import FirstSibling from "./FirstSibling";
import SecondSibling from "./SecondSibling";
import Test from "./test"

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ""
    };
    this.handlechange = this.handlechange.bind(this);
  }
  handlechange(data_from_firstSibling) {
    this.setState({
      data: data_from_firstSibling
    });
  }

  render() {
    var divStyle = {
      fontSize: "36px",
  };
    return (
      <div style={divStyle}>
        <div>Parent:{this.state.data}</div>
        <div>First Sibling:<FirstSibling action={this.handlechange} /></div>
        <div>Second Sibling:<SecondSibling siblingData={this.state.data}/></div>
        <br />
        <Test />
      </div>
    );
  }
}

ReactDOM.render(<Parent />, document.getElementById("root"));