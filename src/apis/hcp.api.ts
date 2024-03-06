import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./_index.api";
import {
  FetchHcpListParams,
  FetchHcpListResponse,
} from "@/@Types/hcp.interface";

const hcpApi = createApi({
  reducerPath: "hcpApi",
  baseQuery,
  endpoints: (builder) => ({
    fetchHcpList: builder.query<FetchHcpListResponse, FetchHcpListParams>({
      query: (params) => ({
        method: "GET",
        url: "/hcp",
        params,
      }),
    }),
  }),
});

export const { useLazyFetchHcpListQuery } = hcpApi;

export default hcpApi;
