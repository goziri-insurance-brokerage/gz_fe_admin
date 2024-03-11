"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Inputs } from "@/ui/inputs/types";
import { RootState } from "@/store/index.store";
import { formatDate } from "@/utils/date.utils";
import { AsyncFunction } from "@/@Types";

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
import { useLazyFetchUsersListQuery } from "@/apis/users.api";
import { FetchUsersListParams } from "@/@Types/users.interface";
import { setUsers } from "@/store/slices/users.slice";
import { USERS_TABLE_HEADERS } from "@/constants/users.constants";
import { normalizeEnum } from "@/utils/formatter.utils";

export default function UsersList() {
  const dispatch = useDispatch();
  const { callToast } = useToast();
  const data = useSelector((state: RootState) => state.users.data);

  const [fetchUsers, { isFetching }] = useLazyFetchUsersListQuery();
  const [trigger, setTrigger] = useState<"" | "search" | "pagination">("");
  const params = useRef<FetchUsersListParams>({
    limit: 10,
    page: 1,
    search_text: "",
  });

  const handleFetchUsers: AsyncFunction = useCallback(async () => {
    const response = await fetchUsers(params.current);

    if (response?.error) {
      callToast("error", "Failed", "Something went wrong, failed to load data");
    }

    if (response?.data) {
      dispatch(setUsers(response.data));
    }
  }, []);

  const handleSearch = (searchText: string) => {
    setTrigger("search");
    params.current = { ...params.current, search_text: searchText };
    handleFetchUsers();
  };

  const handlePagination = (page: number) => {
    setTrigger("pagination");
    params.current = { ...params.current, page };
    handleFetchUsers();
  };

  useEffect(() => {
    handleFetchUsers();
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

        {/* Desktop Table */}
        <Table
          className="hidden sm:block"
          noData={{
            component: <NoDataFound />,
            condition: !data?.items.length,
          }}
          isLoading={!data}
        >
          <TableHeader>
            {USERS_TABLE_HEADERS.map((head, i) => (
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
                  {d.first_name} {d.last_name}
                </TableData>
                <TableData>{normalizeEnum(d.gender)}</TableData>
                <TableData>{formatDate(d.created_at)}</TableData>
                <TableData>{d.unique_id}</TableData>
                <TableData>{formatDate(d.birth_date)}</TableData>
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
              <MobileTableItem heading={USERS_TABLE_HEADERS[0]}>
                {d.first_name} {d.last_name}
              </MobileTableItem>
              <MobileTableItem heading={USERS_TABLE_HEADERS[1]}>
                {normalizeEnum(d.gender)}
              </MobileTableItem>
              <MobileTableItem heading={USERS_TABLE_HEADERS[2]}>
                {formatDate(d.created_at)}
              </MobileTableItem>
              <MobileTableItem heading={USERS_TABLE_HEADERS[3]}>
                {d.unique_id}
              </MobileTableItem>
              <MobileTableItem heading={USERS_TABLE_HEADERS[4]}>
                {formatDate(d.birth_date)}
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
