import React from "react";
import { connect } from "react-redux";
import { removeIssue } from "../../actions/issueActions";

const IssueList = (props) => {
  let getIssues = () => {
    return props.issues.map((issue, i) => {
      return (
        <li key={issue.id}>
          <h3>{issue.title}</h3>
          <h5>{issue.state}</h5>
          <button onClick={() => props.onRemove(i)}>remove</button>
        </li>
      );
    })
  }

  return (
    <ul>
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
    onRemove: (index) => {
      dispatch(removeIssue(index));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(IssueList);
