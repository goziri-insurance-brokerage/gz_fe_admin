import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./_index.api";
import {
  FetchAdminsListParams,
  FetchAdminsListResponse,
} from "@/@Types/admin.interface";

const adminApi = createApi({
  reducerPath: "adminApi",
  baseQuery,
  endpoints: (builder) => ({
    fetchAdminsList: builder.query<
      FetchAdminsListResponse,
      FetchAdminsListParams
    >({
      query: (params) => ({
        method: "GET",
        url: "/admin",
        params,
      }),
    }),
  }),
});

export const { useLazyFetchAdminsListQuery } = adminApi;

export default adminApi;
