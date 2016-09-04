const issues = (state=[], action) => {
  switch (action.type) {
    case 'ADD_ISSUE':
      return [...state, {
        id: action.id,
        title: action.title,
        state: action.state,
      }];
    case 'REMOVE_ISSUE':
    return [
      ...state.slice(0, action.index),
      ...state.slice(action.index, 1)
    ];
    default:
      return state;
  }
};

export default issues;
