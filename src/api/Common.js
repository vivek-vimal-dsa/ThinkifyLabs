import axios from "axios";

const BASE_URL = "https://random-flat-colors.vercel.app/";

export const commonAxios = axios.create({
  baseURL: BASE_URL,
});
