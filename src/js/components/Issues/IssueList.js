import React from "react";
import { connect } from "react-redux";
import { getIssue, removeIssue } from "../../actions/issueActions";

const IssueList = (props) => {
  let getIssues = () => {
    return props.issues.map((issue) => {
      return (
        <li key={issue.id}>
          <h3>{issue.title}</h3>
          <button class="btn btn-default btn-xs" onClick={() => props.onSelect(issue)}>details</button>
          <button class="btn btn-default btn-xs" onClick={() => props.onRemove(issue.id)}>remove</button>
        </li>
      );
    })
  }

  return (
    <ul class="list-unstyled">
      {getIssues()}
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    issues: state.issues
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onRemove: (id) => {
      dispatch(removeIssue(id));
    },
    onSelect: (issue) => {
      dispatch(getIssue(issue));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(IssueList);
