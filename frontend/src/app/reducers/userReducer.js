import { createSlice } from '@reduxjs/toolkit';

const initialState = [];
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUsers(state, action) {
      return action.payload;
    },
  },
});

export const { getUsers } = userSlice.actions;

export default userSlice.reducer;
