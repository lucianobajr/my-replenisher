import axios from "axios";

//import { setupInterceptors } from "./interceptors";

/*
const api = setupInterceptors(
  axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  })
);
*/

const api  = axios.create({
  baseURL:"https://http-nodejs-production-ab71.up.railway.app"
})



export { api };