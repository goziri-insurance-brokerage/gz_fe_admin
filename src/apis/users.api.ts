import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./_index.api";
import {
  FetchUsersListParams,
  FetchUsersListResponse,
} from "@/@Types/users.interface";

const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery,
  endpoints: (builder) => ({
    fetchUsersList: builder.query<FetchUsersListResponse, FetchUsersListParams>(
      {
        query: (params) => ({
          method: "GET",
          url: "/users",
          params,
        }),
      }
    ),
  }),
});

export const { useLazyFetchUsersListQuery } = usersApi;

export default usersApi;
