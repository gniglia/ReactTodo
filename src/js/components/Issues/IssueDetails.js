import React from "react";
import { connect } from "react-redux";

const IssueDetails = (props) => {
  if (props.issue === null) {
    return (<div>Select an issue...</div>);
  }

  return (
    <div>
      "Details for issue:"
      <div>{props.issue.id}</div>
      <div>{props.issue.title}</div>
      <div>{props.issue.state}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    issue: state.activeIssue
  };
};

export default connect(mapStateToProps)(IssueDetails);
