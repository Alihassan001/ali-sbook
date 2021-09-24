import {combineReducers} from 'redux';

//Reducers
import loginReducer from './LoginReducer';
import postReducer from './PostReducer';

export default combineReducers({
  loginReducer,
  postReducer,
});
