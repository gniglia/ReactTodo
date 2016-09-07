import React from "react";
import { connect } from "react-redux";
import Button from "../Button/Button";
import { addIssue } from "../../actions/issueActions";

const AddIssue = (props) => {
  let input;
  return (
    <div class="form-group">
      <input ref={node => {input = node;}} class="form-control" placeholder="Issue name" />

      <Button
        text="Add issue"
        onClickHandler={() => {
          props.onAddIssue(input.value);
          input.value = '';
        }}
        className="btn btn-primary btn-sm" />
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
