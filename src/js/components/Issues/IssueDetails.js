import React from "react";
import { connect } from "react-redux";

const IssueDetails = (props) => {
  if (props.issue === null) {
    return (<div>Select an issue...</div>);
  }

  return (
    <div class="form-group">
      <h4>Details for issue:</h4>
      <h3>{props.issue.title} <small>{props.issue.state}</small></h3>
      <h4>{props.issue.id}</h4>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    issue: state.activeIssue
  };
};

export default connect(mapStateToProps)(IssueDetails);
