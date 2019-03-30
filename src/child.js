import React, { Component } from "react";

class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      childData: ""
    };
    this.handlechange = this.handlechange.bind(this);
  }
  handlechange(event) {
    this.setState({
      childData: event.target.value
    });
    this.props.action(this.state.childData);
  }

  render() {
    return (
      <div>
        <p>{this.state.childData}</p>
        <input
          type="text"
          onChange={this.handlechange}
          value={this.state.childData}
        />
      </div>
    );
  }
}
export default Child;
