import axios from 'axios';

export const defaultHeaders = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
};

export const makeAccessToken = (token: string) => {
  console.log(token);
  return `Bearer ${token}`;
};

function init() {
  axios.defaults.baseURL = 'http://3.36.65.27:8080';
  axios.defaults.headers = defaultHeaders;
}

export default init;
