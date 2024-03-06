import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./_index.api";

const profileApi = createApi({
  baseQuery,
  reducerPath: "profileApi",
  endpoints: (builder) => ({
    fetchAdminProfile: builder.query<AdminProfile, {}>({
      query: () => ({
        method: "GET",
        url: `/admin/profile`,
      }),
    }),
  }),
});

export const { useLazyFetchAdminProfileQuery } = profileApi;

export default profileApi;
