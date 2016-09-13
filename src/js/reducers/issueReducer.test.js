import { expect } from 'chai';
import issueReducer from './issueReducer';
import * as issueActions from '../actions/issueActions';

describe('Issue Reducer...', () => {
  it ('Should ADD an Issue', () => {
    const stateBefore = [];
    const stateAfter = [
      {
        id: 1,
        title: 'issue 1',
        state: 'open'
      }
    ];

    const action = issueActions.addIssue('issue 1');

    expect(issueReducer(stateBefore, action)).to.eql(stateAfter);
  });
});
