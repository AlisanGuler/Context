import axios from "axios";

const api = axios.create({
  baseURL: "https://fakestoreapi.com/",
  timeoutErrorMessage: "istek zaman aşımına uğradı",
});
export default api;
