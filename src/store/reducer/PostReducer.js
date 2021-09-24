import {GET_POST} from '../types/PostTypes';

const initialState = {
  posts: [],
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POST:
      return {...state, posts: action.payload};
    default:
      return state;
  }
};

export default postReducer;
