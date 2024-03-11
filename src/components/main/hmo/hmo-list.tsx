"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Inputs } from "@/ui/inputs/types";
import { RootState } from "@/store/index.store";
import { formatDate } from "@/utils/date.utils";
import { AsyncFunction } from "@/@Types";
import { setHmo } from "@/store/slices/hmo.slice";
import { useLazyFetchHmoListQuery } from "@/apis/hmo.api";
import { FetchHmoListParams } from "@/@Types/hmo.interface";

import {
  Input,
  MobileTable,
  MobileTableItem,
  MobileTableRow,
  Pagination,
  Table,
  TableBody,
  TableData,
  TableHead,
  TableHeader,
  TableRow,
  useToast,
} from "@/ui";
import NoDataFound from "./no-data-found";
import { HMO_TABLE_HEADERS } from "@/constants/hmo.constants";

export default function HmoList() {
  const dispatch = useDispatch();
  const { callToast } = useToast();
  const data = useSelector((state: RootState) => state.hmo.data);

  const [fetchHmo, { isFetching }] = useLazyFetchHmoListQuery();
  const [trigger, setTrigger] = useState<"" | "search" | "pagination">("");
  const params = useRef<FetchHmoListParams>({
    limit: 10,
    page: 1,
    search_text: "",
  });

  const handleFetchHmo: AsyncFunction = useCallback(async () => {
    const response = await fetchHmo(params.current);

    if (response?.error) {
      callToast("error", "Failed", "Something went wrong, failed to load data");
    }

    if (response?.data) {
      dispatch(setHmo(response.data));
    }
  }, []);

  const handleSearch = (searchText: string) => {
    setTrigger("search");
    params.current = { ...params.current, search_text: searchText };
    handleFetchHmo();
  };

  const handlePagination = (page: number) => {
    setTrigger("pagination");
    params.current = { ...params.current, page };
    handleFetchHmo();
  };

  useEffect(() => {
    handleFetchHmo();
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
            {HMO_TABLE_HEADERS.map((head, i) => (
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
                <TableData>{d.name}</TableData>
                <TableData>{d.address.state}</TableData>
                <TableData>{d.address.lga}</TableData>
                <TableData> {d.reg_number}</TableData>
                <TableData>{formatDate(d.created_at)}</TableData>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Mobile Table */}
        <MobileTable
          className="sm:hidden"
          isLoading={!data}
          noData={{
            component: <NoDataFound />,
            condition: !data?.items.length,
          }}
        >
          {data?.items.map((d, i) => (
            <MobileTableRow key={i}>
              <MobileTableItem heading={HMO_TABLE_HEADERS[0]}>
                {d.name}
              </MobileTableItem>
              <MobileTableItem heading={HMO_TABLE_HEADERS[1]}>
                {d.address.state}
              </MobileTableItem>
              <MobileTableItem heading={HMO_TABLE_HEADERS[2]}>
                {d.address.lga}
              </MobileTableItem>
              <MobileTableItem heading={HMO_TABLE_HEADERS[3]}>
                {d.reg_number}
              </MobileTableItem>
              <MobileTableItem heading={HMO_TABLE_HEADERS[4]}>
                {formatDate(d.created_at)}
              </MobileTableItem>
            </MobileTableRow>
          ))}
        </MobileTable>
      </div>

      {data?.items?.length ? (
        <div className="w-max mx-auto">
          <Pagination
            currentPage={data.meta.currentPage}
            isLoading={trigger === "pagination" && isFetching}
            onChangePage={handlePagination}
            totalItems={data?.meta.totalItems ?? 0}
            totalPages={data?.meta.totalPages ?? 0}
          />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
