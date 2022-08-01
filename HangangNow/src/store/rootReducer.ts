import { combineReducers } from 'redux';
import loginReducer from '@store/login/reducer';
import authReducer from './auth/reducer';
import signupReducer from './signup/reducer';
import profileReducer from './profile/reducer';

const rootReducer = combineReducers({
  loginReducer,
  authReducer,
  signupReducer,
  profileReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
