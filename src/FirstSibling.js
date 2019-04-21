import React, { Component } from "react";

class FirstSibling extends Component {
  constructor(props) {
    super(props);
    this.state = {
      localData: ""
    };
    this.handlechange = this.handlechange.bind(this);
  }
  handlechange(event) {
    this.setState({
      localData: event.target.value
    });
    this.props.action(event.target.value);
  }

    render() {
      var divStyle = {
        fontSize: "26px",
    };
    return (
      <span style={divStyle}>
        {this.state.localData}
        <input
          type="text"
          onChange={this.handlechange}
          value={this.state.localData}
        />
      </span>
    );
  }
}

export default FirstSibling;