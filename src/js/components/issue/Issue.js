import React from "react";
import axios from "axios";
import IssueHeader from "./IssueHeader";

export default class Issue extends React.Component {
  constructor() {
    super()
    this.state = { issues: [] }
  }

  render() {
    axios.get("https://api.github.com/repos/gniglia/reacttodo/issues").then((data) => {
      let issues = data.data.map((issue, i) => <IssueHeader key={i} avatar={issue.user.avatar_url}
                                                                    title={issue.title}
                                                                    user={issue.user.login}/>);

      this.setState({ issues });
    });

    return (
      <div>{this.state.issues}</div>
    );
  }
}
