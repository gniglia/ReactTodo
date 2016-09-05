const activeIssue = (state=null, action) => {
  switch (action.type) {
    case 'GET_ISSUE':
      return action.issue;
    default:
      return state;
  }
};

export default activeIssue;
