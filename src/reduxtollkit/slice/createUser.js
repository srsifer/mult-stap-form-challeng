import { createSlice } from '@reduxjs/toolkit';

export const newUser = createSlice({
  name: 'newUser',
  initialState: {
    users: [],
  },

  reducers: {
    createNewUser: (state, action) => {
      state.users = [...state.users, action.payload];
    },


  },

});

export const {
  createNewUser,

} = newUser.actions;

export default newUser.reducer;