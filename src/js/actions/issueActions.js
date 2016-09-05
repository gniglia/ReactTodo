let nextId = 0;

export const addIssue = (title) => {
  return {
    type: 'ADD_ISSUE',
    id: nextId++,
    title: title,
    state: 'open'
  }
};

export const removeIssue = (id) => {
  return {
    type: 'REMOVE_ISSUE',
    id
  }
};

export const getIssue = (issue) => {
  return {
    type: 'GET_ISSUE',
    issue: issue
  }
};
