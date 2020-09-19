// jshint esversion:6

const BASE_URL = '127.0.0.1:8000';
class Http {
  constructor(){
    this.http = axios.create({
      baseURL: BASE_URL,
      timeout: 1000,
    });

    this.http.interceptors.request.use(config => {

    });
  }
}