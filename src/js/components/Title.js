import React from "react";

export default class Title extends React.Component {
  getTitle() {
    return this.props.title;
  }
  
  render() {
    return (
      <div>
        <h1>Hello world!</h1>
        <h2>{this.getTitle()}</h2>
      </div>
    );
  }
}
