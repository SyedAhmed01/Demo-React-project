import React, { Component } from 'react';

class SecondSibling extends Component {
  render() {
    var divStyle = {
      fontSize: "16px",
  };
    return (
      <span style={divStyle}>
      {this.props.siblingData}
      </span>
    );
  }
}

export default SecondSibling;
