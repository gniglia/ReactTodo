import React from "react";

export default class IssueHeader extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.avatar} width="40" height="40" />
        <h1>{this.props.title}</h1>
        <h2>{this.props.user}</h2>
      </div>
    );
  }
}
