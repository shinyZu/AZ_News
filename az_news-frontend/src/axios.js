import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:4000/az_news/api/v1/",
  //header
  //timeout
});

export default instance;
