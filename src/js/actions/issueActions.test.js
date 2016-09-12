import { expect } from 'chai';
import * as issueActions from './issueActions';

describe('Issue Actions...', () => {
  it('Should GET an Issue', () => {
    const issue = {
      id: 2,
      title: 'new title',
      state: 'opennn'
    };
    const expectedAction = {
      type: 'GET_ISSUE',
      issue: issue
    };

    const action = issueActions.getIssue(issue);

    expect(action).to.eql(expectedAction);
  });

  it('Should ADD an Issue', () => {
    const action = issueActions.addIssue('new title');

    expect(action.type).to.equal('ADD_ISSUE');
    expect(action.title).to.equal('new title');
    expect(action.state).to.equal('open');
  });
});
