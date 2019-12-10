import Axios from "axios-observable";

const Api = Axios.create({
  // baseURL: process.env.REACT_APP_API_HOST
  baseURL: "https://jsonplaceholder.typicode.com/"
});

export default Api;
