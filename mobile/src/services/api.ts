import axios from "axios";

import { setupInterceptors } from "./interceptors";

const api = setupInterceptors(
  axios.create({
    baseURL: "https://my-replenisher-server-auth.up.railway.app",
  })
);


export { api };