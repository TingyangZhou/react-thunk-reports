/** Action Type Constants: */
export const LOAD_REPORTS = 'reports/LOAD_REPORTS';
export const RECEIVE_REPORT = 'reports/RECEIVE_REPORT';
export const UPDATE_REPORT = 'reports/UPDATE_REPORT';
export const REMOVE_REPORT = 'reports/REMOVE_REPORT';

/**  Action Creators: */
export const loadReports = (reports) => ({
  type: LOAD_REPORTS,
  reports
});

export const receiveReport = (report) => ({
  type: RECEIVE_REPORT,
  report
});

export const editReport = (report) => ({
  type: UPDATE_REPORT,
  report
});

export const removeReport = (reportId) => ({
  type: REMOVE_REPORT,
  reportId
});

/** Thunk Action Creators: */

// Your code here 
export const fetchReports = () => async (dispatch) =>{
  const res = await fetch('http://localhost:5173/api/reports');
  const reports = await res.json();
  console.log('\nFetched reports:', reports);
  dispatch(loadReports(reports));
}

export const deleteReport = (reportId) => async (dispatch) => {
  const res = await fetch(`http://localhost:5173/api/reports/${reportId}`, {
    method: 'DELETE'
  });
  
  if(res.ok){
    dispatch(removeReport(reportId));
  } else {
    const error = await res.json();
    return error;
  }
}

export const fetchSingleReport = (reportId) => async (dispatch) => {
  const res = await fetch(`http://localhost:5173/api/reports/${reportId}`);
  const report = await res.json();
    
  if(res.ok){
    dispatch(receiveReport(report));
  } else {
    const error = await res.json();
    return error;
  }
}



/** Selectors: */

/** Reducer: */

/** The reports reducer is complete and does not need to be modified */
const reportsReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD_REPORTS: {
      const reportsState = {};
      action.reports.forEach((report) => {
        reportsState[report.id] = report;
      });
      return reportsState;
    }
    case RECEIVE_REPORT:
      return { ...state, [action.report.id]: action.report };
    case UPDATE_REPORT:
      return { ...state, [action.report.id]: action.report };
    case REMOVE_REPORT: {
      const newState = { ...state };
      delete newState[action.reportId];
      return newState;
    }
    default:
      return state;
  }
};

export default reportsReducer;
