import axios from "axios";

const BASE_URL = "https://cors-anywhere.herokuapp.com/https://itunes.apple.com/";

export const httpClient = axios.create({
  baseURL: BASE_URL,
});
