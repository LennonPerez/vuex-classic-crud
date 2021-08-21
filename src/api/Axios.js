import axios from "axios";

const AxiosClient = axios.create({
  // baseURL: "http://localhost:4000/",
  baseURL: "https://vue-crud-cf3e5-default-rtdb.firebaseio.com",
});

export default AxiosClient;
