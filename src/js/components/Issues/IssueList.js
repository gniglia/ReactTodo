import React from "react";
import { connect } from "react-redux";
import Button from "../Button/Button";
import { getIssue, removeIssue } from "../../actions/issueActions";

const IssueList = (props) => {
  let getIssues = () => {
    return props.issues.map((issue) => {
      return (
        <li key={issue.id}>
          <h3>{issue.title}</h3>

          <Button
            text="details"
            onClickHandler={() => props.onSelect(issue)}
            className="btn btn-default btn-xs" />

          <Button
            text="remove"
            onClickHandler={() => props.onRemove(issue.id)}
            className="btn btn-default btn-xs" />
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
