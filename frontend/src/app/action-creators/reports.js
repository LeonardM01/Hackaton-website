import * as api from '../api/index';

export const getReports = (numSkip) => async (dispatch) => {
  try {
    const { data } = await api.getReports(numSkip);
    dispatch({ type: 'reports/getReports', payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createReport = (formData) => async (dispatch) => {
  try {
    const { data } = await api.createReport(formData);
    dispatch({ type: 'reports/createReport', payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const resolveReport = (postData) => async (dispatch) => {
  try {
    const { data } = await api.resolveReport(postData);
    dispatch({ type: 'reports/resovleReport', payload: data });
  } catch (error) {
    console.log(error);
  }
};
