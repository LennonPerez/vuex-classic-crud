import axios from "axios";

const AxiosClient = axios.create({
  baseURL: "https://vue-crud-cf3e5-default-rtdb.firebaseio.com",
});

export default AxiosClient;
