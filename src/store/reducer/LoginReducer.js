import {LOGIN} from '../types/LoginTypes';

const initialState = {
  isLogin: false,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {...state, isLogin: action.payload};
    default:
      return state;
  }
};

export default loginReducer;
