import React, { useEffect } from "react";
import md5 from "md5";
import { Home } from "../pages";
import axios from "axios";

console.log(process.env.BASE_URL);
// const baseUrl = process.env.BASE_URL;
// const publicKey = process.env.PUBLIC_KEY_MARVEL;
// const privateKey = process.env.PRIVATE_KEY_MARVEL;
// const timestamp = Number(new Date());
// const hash = md5(timestamp + privateKey + publicKey);

// useEffect(() => {
//   axios
//     .get(
//       `${baseUrl}/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`
//     )
//     .then((response) => console.log(response))
//     .catch((err) => console.log(err));
// }, []);

const Initiate = () => {
  return <Home />;
};

export default Initiate;
