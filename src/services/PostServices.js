import axios from 'axios';
import {BASE_URL} from '../constants/Api';

export const getPost = async () => {
  return axios.get(`${BASE_URL}/posts`);
};

export const uploadPost = async body => {
  return axios.post(`${BASE_URL}/posts`, body);
};
