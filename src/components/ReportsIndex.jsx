import { Link } from 'react-router-dom';
import ReportIndexItem from './ReportIndexItem';
import { resetDatabase } from '../mocks/storage';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReports } from '../store/reports';

const ReportsIndex = () => {
  let reports = useSelector(state => state.reports); // populate from Redux store
  const dispatch = useDispatch();

 
  reports = Object.values(reports);

  useEffect(()=>{
    dispatch(fetchReports());
  },[dispatch])

  
  // console.log('\nreports:', reports)
  /* **DO NOT CHANGE THE RETURN VALUE** */
  return (
    <section>
      <ul>
        {reports.map((report) => (
          <ReportIndexItem
            report={report}
            key={report.id}
          />
        ))}
      </ul>
      <Link
        className="back-button new"
        to="/reports/new"
      >
        New Report
      </Link>
      <button onClick={resetDatabase}>Reset the Database</button>
    </section>
  );
};

export default ReportsIndex;
