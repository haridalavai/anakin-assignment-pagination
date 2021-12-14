import React from 'react';
import './issue.css';

const Issue = ({ issue }) => {
  console.log(issue);
  return (
    <div className="issue">
      <a className="issue__link" href={issue.url}>
        {issue.title}
      </a>
      <span className="issue_desc">
        #{`${issue.number} opened ${issue.created_at} by ${issue.user.login}`}
      </span>
      {/* <hr /> */}
    </div>
  );
};

export default Issue;
