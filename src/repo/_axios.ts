import axios from 'axios';

export const defaultHeaders = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
};

function init() {
  axios.defaults.baseURL = 'http://3.36.65.27:8080';
  axios.defaults.headers = defaultHeaders;
}

export default init;
