import React from "react";
import { connect } from "react-redux";
import { addIssue } from "../../actions/issueActions";

const AddIssue = (props) => {
  let input;
  return (
    <div class="form-group">
      <input ref={node => {input = node;}} class="form-control" placeholder="Issue name" />
      <button onClick={() => {
        props.onAddIssue(input.value);
        input.value = '';
      }} class="btn btn-primary btn-sm">Add Issue</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddIssue: (title) => {
      dispatch(addIssue(title));
    }
  }
};
export default connect(null, mapDispatchToProps)(AddIssue);
