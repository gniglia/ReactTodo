import React from "react";
import Title from "./Title"
import Issue from "./issue/Issue"

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = { title: "this is a test..." };
  }

  render() {
    return (
      <div>
        <Title title={this.state.title}/>

        <Issue/>
      </div>
    )
  }
}
