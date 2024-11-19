import axios from "axios";

const BASE_URL = "https://itunes.apple.com/";

export const httpClient = axios.create({
  baseURL: BASE_URL,
});
