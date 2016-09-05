import React from "react";
import IssueList from './Issues/IssueList';
import AddIssue from './Issues/AddIssue';
import IssueDetails from './Issues/IssueDetails';

const Layout = () => {
  return (
    <div>
      <AddIssue />
      <IssueList />
      <hr />
      <IssueDetails />
    </div>
  )
}

export default Layout;
