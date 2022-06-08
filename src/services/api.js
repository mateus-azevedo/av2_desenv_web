import axios from "axios";
import md5 from "md5";
import { BASE_URL, PRIVATE_KEY_MARVEL, PUBLIC_KEY_MARVEL } from "./env";

// console.log(process.env.BASE_URL);
// const baseUrl = process.env.BASE_URL;
// const publicKey = process.env.PUBLIC_KEY_MARVEL;
// const privateKey = process.env.PRIVATE_KEY_MARVEL;
// const timestamp = Number(new Date());
// const hash = md5(timestamp + privateKey + publicKey);

const timestamp = Number(new Date());
const hash = md5(timestamp + PRIVATE_KEY_MARVEL + PUBLIC_KEY_MARVEL);

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    apikey: PUBLIC_KEY_MARVEL,
    hash,
    ts: timestamp,
  },
});

export default api;
