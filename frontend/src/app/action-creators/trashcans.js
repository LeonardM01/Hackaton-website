import * as api from '../api/index';

export const getTrashcan = (id) => async (dispatch) => {
  try {
    const { data } = await api.getTrashcan(id);
    dispatch({ type: 'trashcans/getTrashcan', payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getTrashcans = () => async (dispatch) => {
  try {
    const { data } = await api.getTrashcans();
    dispatch({ type: 'trashcans/getTrashcans', payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createTrashcan = (trashcanData) => async (dispatch) => {
  try {
    const { data } = await api.createTrashcan(trashcanData);
    dispatch({ type: 'trashcans/createTrashcan', payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteTrashcan = (id) => async (dispatch) => {
  try {
    const { data } = await api.deleteTrashcan(id);
    dispatch({ type: 'trashcans/deleteTrashcan', payload: data });
  } catch (error) {
    console.log(error);
  }
};
