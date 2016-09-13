import * as types from './actionTypes';

let nextId = 0;

export const addIssue = (title) => {
  return {
    type: types.ADD_ISSUE,
    id: nextId++,
    title: title,
    state: 'open'
  }
};

export const removeIssue = (id) => {
  return {
    type: types.REMOVE_ISSUE,
    id
  }
};

export const getIssue = (issue) => {
  return {
    type: types.GET_ISSUE,
    issue: issue
  }
};
