import axios from "axios";
const headers = {
  "Content-Type": "application/json",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
};

export default axios.create({
  baseURL: "https://damp-springs-44361.herokuapp.com",
  headers,
});