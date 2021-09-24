import {LOGIN} from '../types/LoginTypes';

export const setLogin = payload => {
  return {
    type: LOGIN,
    payload,
  };
};
