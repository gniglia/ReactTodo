import React from "react";
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import Button from "../Button/Button";
import * as issueActions from "../../actions/issueActions";

const IssueList = (props) => {
  let getIssues = () => {
    return props.issues.map((issue) => {
      return (
        <li key={issue.id}>
          <h3>{issue.title}</h3>

          <Button
            text="details"
            onClickHandler={() => props.actions.getIssue(issue)}
            className="btn btn-default btn-xs" />

          <Button
            text="remove"
            onClickHandler={() => props.actions.removeIssue(issue.id)}
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
    actions: bindActionCreators(issueActions, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(IssueList);
