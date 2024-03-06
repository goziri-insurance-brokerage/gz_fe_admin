import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { _cookies } from "../libs/cookie";
import config from "../config/config";

export const baseQuery = fetchBaseQuery({
  baseUrl: config().apiBaseUrl,
  prepareHeaders: (headers) => {
    headers.set("Content-Type", "application/json");
    headers.set("x-goziri-user-type", "ADMIN");

    //getting the token from the localStorage
    headers.set("authorization", `Bearer ${_cookies.get("token")}`);

    return headers;
  },
});
