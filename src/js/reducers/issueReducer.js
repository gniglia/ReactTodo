const issues = (state=[], action) => {
  switch (action.type) {
    case 'ADD_ISSUE':
      return [...state, {
        id: action.id,
        title: action.title,
        state: action.state,
      }];
    case 'REMOVE_ISSUE':
      return state.filter(issue => issue.id !== action.id);
    default:
      return state;
  }
};

export default issues;
