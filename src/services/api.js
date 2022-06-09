import axios from "axios";
import md5 from "md5";

const baseUrl = process.env.REACT_APP_BASE_URL;
const publicKey = process.env.REACT_APP_PUBLIC_KEY_MARVEL;
const privateKey = process.env.REACT_APP_PRIVATE_KEY_MARVEL;
const timestamp = Number(new Date());
const hash = md5(timestamp + privateKey + publicKey);

const api = axios.create({
  baseURL: baseUrl,
  params: {
    apikey: publicKey,
    hash,
    ts: timestamp,
  },
});

export default api;
