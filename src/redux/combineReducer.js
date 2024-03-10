import { combineReducers } from '@reduxjs/toolkit';
import authSlice from '../features/user/authSlice';


const rootReducer = combineReducers({
//   folders: folderSlice,
  auth: authSlice,
//   folderDropdown: dropdownSlice,
//   file: fileSlice,
  // Add more reducers as needed
});

export default rootReducer;