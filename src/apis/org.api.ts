import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./_index.api";
import {
  FetchOrgListParams,
  FetchOrgListResponse,
} from "@/@Types/org.interface";

const orgApi = createApi({
  reducerPath: "orgApi",
  baseQuery,
  endpoints: (builder) => ({
    fetchOrgList: builder.query<FetchOrgListResponse, FetchOrgListParams>({
      query: (params) => ({
        method: "GET",
        url: "/org",
        params,
      }),
    }),
  }),
});

export const { useLazyFetchOrgListQuery } = orgApi;

export default orgApi;
