import axios from "axios"

const instance = axios.create({
  baseURL : "http://localhost:8000/api",
  headers: {
    "content-type": "application,json"
  }
});
// instance.defaults.headers.common[""]

export default instance;