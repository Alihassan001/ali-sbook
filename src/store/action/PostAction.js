import {GET_POST} from '../types/PostTypes';

export const setPost = payload => {
  return {
    type: GET_POST,
    payload,
  };
};
