import { combineReducers } from 'redux';
import loginReducer from '@store/login/reducer';
import authReducer from './auth/reducer';
import signupReducer from './signup/reducer';
import profileReducer from './profile/reducer';
import memoReducer from './memo/reducer';

const rootReducer = combineReducers({
  loginReducer,
  authReducer,
  signupReducer,
  profileReducer,
  memoReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
