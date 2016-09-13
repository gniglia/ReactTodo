import React from "react";
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import Button from "../Button/Button";
import * as issueActions from "../../actions/issueActions";

const AddIssue = (props) => {
  let input;
  return (
    <div class="form-group">
      <input ref={node => {input = node;}} class="form-control" placeholder="Issue name" />

      <Button
        text="Add issue"
        onClickHandler={() => {
          props.actions.addIssue(input.value);
          input.value = '';
        }}
        className="btn btn-primary btn-sm" />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(issueActions, dispatch)
  }
};
export default connect(null, mapDispatchToProps)(AddIssue);
