import { createSlice } from '@reduxjs/toolkit';

export const newUser = createSlice({
  name: 'newUser',
  initialState: {
    user: [{
      name: '',
      lastName: '',
      email: '',
      cell: '',
      cep: '',
      adressOne: '',
      adressTwo: '',
      date: 'dd/mm/aaaa',
      cpf: '000.000.000.00',
      salary: 0.000
    }]
  },

  reducers: {
    stepOneReducer: (state, action) => {
      state.user = action.payload;
    },
  },

});

export const {
  stepOneReducer,
} = newUser.actions;

export default newUser.reducer;