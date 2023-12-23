import axios from "axios";

// const baseURL = "http://localhost:3177/";
const baseURL ="https://blood-donation-3tl1.onrender.com";
export default axios.create({ baseURL: baseURL });
