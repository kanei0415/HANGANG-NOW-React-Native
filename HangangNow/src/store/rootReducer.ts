import { combineReducers } from 'redux';
import loginReducer from '@store/login/reducer';

const rootReducer = combineReducers({
  loginReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
