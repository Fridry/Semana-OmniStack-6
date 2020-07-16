import axios from "axios";

const api = axios.create({
  baseURL: "https://omnistack-seis-backend.herokuapp.com",
});

export default api;
