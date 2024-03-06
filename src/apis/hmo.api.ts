import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./_index.api";
import {
  FetchHmoListParams,
  FetchHmoListResponse,
} from "@/@Types/hmo.interface";
const hmoApi = createApi({
  reducerPath: "hmoApi",
  baseQuery,
  endpoints: (builder) => ({
    fetchHmoList: builder.query<FetchHmoListResponse, FetchHmoListParams>({
      query: (params) => ({
        method: "GET",
        url: "/hmo",
        params,
      }),
    }),
  }),
});

export const { useLazyFetchHmoListQuery } = hmoApi;

export default hmoApi;
