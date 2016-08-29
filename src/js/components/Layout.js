import React from "react";
import Title from "./Title"
import Issue from "./issue/Issue"
import IssueHeader from "./issue/IssueHeader"

import { connect } from "react-redux"

import { fetchIssues, addIssue } from "../actions/issueActions"

@connect((store) => {
  return {
    issues: store.issues.issues,
  };
})
export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = { title: "this is a test..." };
  }

  fetchIssues() {
    this.props.dispatch(fetchIssues())
  }

  addIssue() {
    this.props.dispatch(addIssue("This is the issue #5..."))
  }
  render() {
    const { issues } = this.props;

    if (!issues.length) {
      return <button onClick={this.fetchIssues.bind(this)}>load issues</button>
    }

    const mappedIssues = issues.map((issue, i) => <IssueHeader key={i} avatar={issue.user.avatar_url}
                                                               title={issue.title}
                                                               user={issue.user.login}/>);

    return (
      <div>
        <Title title={this.state.title}/>
        <Issue issues={mappedIssues}/>

        Title: <input/> <button onClick={this.addIssue.bind(this)}>add</button>
      </div>
    )
  }
}
