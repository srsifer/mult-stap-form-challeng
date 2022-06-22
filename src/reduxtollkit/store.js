import { configureStore } from '@reduxjs/toolkit';
import UserStore from './slice/createUser'



export default configureStore({
  reducer: { UserStore }
});
