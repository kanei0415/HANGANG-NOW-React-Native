import { combineReducers } from 'redux';
import loginReducer from '@store/login/reducer';
import authReducer from './auth/reducer';

const rootReducer = combineReducers({
  loginReducer,
  authReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
