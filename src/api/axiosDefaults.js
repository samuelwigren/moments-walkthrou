import axios from 'axios';

axios.defaults.baseURL = "https://flax-57c52c223cc2.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;