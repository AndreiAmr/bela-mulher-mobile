import axios from 'axios';

export const http = axios.create({
  baseURL: 'http://192.168.134.234:3000/api',
});
