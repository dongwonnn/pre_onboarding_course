import axios from "axios";

const client = axios.create();

// client.defaults.baseURL = process.env.BASE_URL;
client.defaults.baseURL = "http://localhost:3001/";

export default client;
