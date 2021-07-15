import axios from "axios";

const client = axios.create();

client.defaults.baseURL = process.env.BASE_URL;
client.defaults.withCredentials = true;

export default client;
