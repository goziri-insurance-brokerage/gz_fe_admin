"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  Input,
  Pagination,
  Table,
  TableBody,
  TableData,
  TableHead,
  TableHeader,
  TableRow,
  useToast,
} from "@/ui";
import { normalizeEnum } from "../../../utils/formatter.utils";
import { useDispatch, useSelector } from "react-redux";
import { Inputs } from "@/ui/inputs/types";
import { RootState } from "@/store/index.store";
import { formatDate } from "@/utils/date.utils";
import { CONTRACTS_TABLE_HEADER } from "@/constants/contracts.constant";
import NoDataFound from "./no-data-found";
import { useLazyFetchContractListQuery } from "@/apis/contract.api";
import { FetchContractsListParams } from "@/@Types/contract.interface";
import { setContracts } from "@/store/slices/contracts.slice";
import { AsyncFunction } from "@/@Types";

export default function ContractsListTable() {
  const dispatch = useDispatch();
  const { callToast } = useToast();
  const data = useSelector((state: RootState) => state.contracts.data);

  const [fetchContracts, { isFetching }] = useLazyFetchContractListQuery();
  const [trigger, setTrigger] = useState<"" | "search" | "pagination">("");
  const params = useRef<FetchContractsListParams>({
    limit: 10,
    page: 1,
  });

  const handleFetchContracts: AsyncFunction = useCallback(async () => {
    const response = await fetchContracts(params.current);

    if (response?.error) {
      callToast("error", "Failed", "Something went wrong, failed to load data");
    }

    if (response?.data) {
      dispatch(setContracts(response.data));
    }
  }, []);

  const handleSearch = (searchText: string) => {
    setTrigger("search");
    params.current = { ...params.current, search_text: searchText };
    handleFetchContracts();
  };

  const handlePagination = (page: number) => {
    setTrigger("pagination");
    params.current = { ...params.current, page };
    handleFetchContracts();
  };

  useEffect(() => {
    handleFetchContracts();
  }, []);

  return (
    <div className="page-spacing pb-4 h-full overflow-hidden grid grid-rows-[1fr_auto] gap-5">
      <div className="bg-white p-5 rounded-lg h-full overflow-hidden grid grid-rows-[auto_1fr] gap-5 pr-3">
        <Input
          type={Inputs.Search}
          delay={500}
          isLoading={trigger === "search" && isFetching}
          onChange={handleSearch}
          placeholder="Search by Name, UID, Status"
        />

        <Table
          noData={{
            component: <NoDataFound />,
            condition: !data?.items.length,
          }}
          isLoading={!data}
          className="hidden sm:block"
        >
          <TableHeader>
            {CONTRACTS_TABLE_HEADER.map((head, i) => (
              <TableHead
                className={head === "Action" ? "text-center" : "text-left"}
                key={i}
              >
                {head}
              </TableHead>
            ))}
          </TableHeader>

          <TableBody>
            {data?.items.map((d, i) => (
              <TableRow key={i}>
                <TableData>
                  {d.user.first_name} {d.user.last_name}
                </TableData>
                <TableData>{normalizeEnum(d.policy_product.name)}</TableData>
                <TableData>{d.policy_product.premium_cost}</TableData>
                <TableData>{formatDate(d.start_date)}</TableData>
                <TableData> {formatDate(d.end_date)}</TableData>
                <TableData>{normalizeEnum(d.org?.name)}</TableData>
                <TableData>
                  <span
                    className={`block text-center w-20 p-1 rounded-full text-xs capitalize ${
                      d.status === "ACTIVE"
                        ? "text-green-normal bg-green-light"
                        : d.status === "UPCOMING"
                        ? "text-orange-normal bg-orange-light"
                        : d.status === "EXPIRED" &&
                          "text-red-normal bg-red-light"
                    } `}
                  >
                    {normalizeEnum(d.status)}
                  </span>
                </TableData>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {data?.items?.length && (
        <div className="w-max mx-auto">
          <Pagination
            currentPage={data.meta.currentPage}
            isLoading={trigger === "pagination" && isFetching}
            onChangePage={handlePagination}
            totalItems={data?.meta.totalItems ?? 0}
            totalPages={data?.meta.totalPages ?? 0}
          />
        </div>
      )}
    </div>
  );
}
