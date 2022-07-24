import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const trashcanSlice = createSlice({
  name: 'trashcans',
  initialState,
  reducers: {
    getTrashcans(state, action) {
      return [...action.payload];
    },
    getTrashcan(state, action) {
      return [...state, action.payload];
    },
    createTrashcan(state, action) {
      return [...state, action.payload];
    },
    deleteTrashcan(state, action) {
      return state.filter((trashcan) => trashcan._id !== action.payload);
    },
  },
});

export const { getTrashcans, getTrashcan, deleteTrashcan, createTrashcan } = trashcanSlice.actions;

export default trashcanSlice.reducer;
