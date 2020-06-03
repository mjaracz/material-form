import {combineReducers} from 'redux';
import {signUpReducer} from '../form/wrapper/redux/reducers/fetchReducer'

export const rootReducer = combineReducers({
  signUp: signUpReducer,
});