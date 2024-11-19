import create from "axios";

const BASE_URL = "https://itunes.apple.com/";

export const httpClient = create({
  baseURL: BASE_URL,
});
