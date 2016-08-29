import React from "react";
import axios from "axios";
import IssueHeader from "./IssueHeader";

export default class Issue extends React.Component {
  render() {
    return (
      <div>{this.props.issues}</div>
    );
  }
}
