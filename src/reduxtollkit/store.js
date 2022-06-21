import { configureStore } from '@reduxjs/toolkit';
import stapOneReducer from './slice/createUser'



export default configureStore({
  reducer: { stapOneReducer }
});
