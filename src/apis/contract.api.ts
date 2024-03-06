import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./_index.api";
import {
  FetchContractsListParams,
  FetchContractsListResponse,
} from "@/@Types/contract.interface";

const contractApi = createApi({
  reducerPath: "contractApi",
  baseQuery,
  endpoints: (builder) => ({
    fetchContractList: builder.query<
      FetchContractsListResponse,
      FetchContractsListParams
    >({
      query: (params) => ({
        method: "GET",
        url: "/policy-contracts",
        params,
      }),
    }),
  }),
});

export const { useLazyFetchContractListQuery } = contractApi;

export default contractApi;
