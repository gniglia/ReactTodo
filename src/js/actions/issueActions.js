let nextId = 0;

export const addIssue = (title) => {
  return {
    type: 'ADD_ISSUE',
    id: nextId++,
    title: title,
    state: 'open'
  }
};

export const removeIssue = (index) => {
  return {
    type: 'REMOVE_ISSUE',
    index
  }
};
