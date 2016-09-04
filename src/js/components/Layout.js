import React from "react";
import IssueList from './Issues/IssueList';
import AddIssue from './Issues/AddIssue';

const Layout = () => {
  return (
    <div>
      <IssueList />
      <AddIssue />
    </div>
  )
}

export default Layout;
