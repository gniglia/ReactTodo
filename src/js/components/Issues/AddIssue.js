import React from "react";
import { connect } from "react-redux";
import { addIssue } from "../../actions/issueActions";

const AddIssue = (props) => {
  let input;
  return (
    <div>
      <input ref={node => {input = node;}} />
      <button onClick={() => {
        props.onAddIssue(input.value);
        input.value = '';
      }}>Add Issue</button>
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
