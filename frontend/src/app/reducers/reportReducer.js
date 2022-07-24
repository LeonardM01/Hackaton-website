import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const reportSlice = createSlice({
  name: 'reports',
  initialState,
  reducers: {
    getReports(posts, action) {
      return action.payload;
    },
    loadMoreReports(posts, action) {
      return [...posts, ...action.payload];
    },
    createReport(state, action) {
      return [...state, action.payload];
    },
    resolveReport(state, action) {
      return state.map((report) => (report._id === action.payload ? { ...report, isResolved: true } : { ...report }));
    },
  },
});

export const { getReports, createReport, resolveReport } = reportSlice.actions;

export default reportSlice.reducer;
