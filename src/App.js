import './App.css';
import { useState, useEffect } from 'react';
import useRequest from './hooks/useRequest';
import Issue from './components/Issue';
import Pagination from './components/Pagination';

function App() {
  const [pageNo, setPageNo] = useState(1);
  const [issues, setIssues] = useState();
  const [issuesLength, setIssuesLength] = useState(0);
  useEffect(() => {
    async function sendReq() {
      const r = await doRequest();
      // console.log(r);
      setIssuesLength(r.total_count);
      setIssues(r.items);
    }
    sendReq();
  }, [pageNo]);

  const onC = async () => {
    console.log('inon');
    setPageNo(pageNo + 1);
    const r = await doRequest();
    setIssues(r.items);
  };
  const { doRequest } = useRequest({
    url: 'https://api.github.com/search/issues?q=repo:facebook/react+type:issue+state:open&per_page=30',
    pageNo: pageNo,
  });

  return (
    <div className="issues">
      <div className="issues_table">
        <div className="issue_table_title">
          <h4>open issues: {issuesLength}</h4>
        </div>
        <div className="issues_list">
          {issues &&
            issues.map((issue) => (
              <div>
                <hr />
                <Issue key={issue.number} issue={issue} />
              </div>
            ))}
        </div>
      </div>
      <div className="">
        <Pagination
          className="pagination-bar"
          currentPage={pageNo}
          totalCount={issuesLength}
          pageSize={30}
          onPageChange={(pageNo) => setPageNo(pageNo)}
        />
      </div>
    </div>
  );
}

export default App;
