import { combineReducers } from "redux";

import issues from "./issueReducer";
import activeIssue from "./activeIssueReducer";

export default combineReducers({
  issues,
  activeIssue
});
