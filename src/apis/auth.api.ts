import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./_index.api";
import { Login } from "@/@Types/auth.interface";

const authApi = createApi({
  baseQuery,
  reducerPath: "authApi",
  endpoints: (builder) => ({
    login: builder.mutation<any, Login>({
      query: (body) => ({
        method: "POST",
        url: `/auth/login`,
        body,
      }),
    }),
    logout: builder.mutation<any, undefined>({
      query: () => ({
        method: "POST",
        url: `/auth/logout`,
      }),
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation } = authApi;

export default authApi;
