"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Inputs } from "@/ui/inputs/types";
import { RootState } from "@/store/index.store";
import { formatDate } from "@/utils/date.utils";
import { AsyncFunction } from "@/@Types";
import { setOrg } from "@/store/slices/org.slice";
import { useLazyFetchOrgListQuery } from "@/apis/org.api";
import { FetchOrgListParams } from "@/@Types/org.interface";

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
import { ORG_TABLE_HEADERS } from "@/constants/org.constants";

export default function OrgList() {
  const dispatch = useDispatch();
  const { callToast } = useToast();
  const data = useSelector((state: RootState) => state.org.data);

  const [fetchOrg, { isFetching }] = useLazyFetchOrgListQuery();
  const [trigger, setTrigger] = useState<"" | "search" | "pagination">("");
  const params = useRef<FetchOrgListParams>({
    limit: 10,
    page: 1,
    search_text: "",
  });

  const handleFetchOrg: AsyncFunction = useCallback(async () => {
    const response = await fetchOrg(params.current);

    if (response?.error) {
      callToast("error", "Failed", "Something went wrong, failed to load data");
    }

    if (response?.data) {
      dispatch(setOrg(response.data));
    }
  }, []);

  const handleSearch = (searchText: string) => {
    setTrigger("search");
    params.current = { ...params.current, search_text: searchText };
    handleFetchOrg();
  };

  const handlePagination = (page: number) => {
    setTrigger("pagination");
    params.current = { ...params.current, page };
    handleFetchOrg();
  };

  useEffect(() => {
    handleFetchOrg();
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
            {ORG_TABLE_HEADERS.map((head, i) => (
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
                <TableData> {d.org_type}</TableData>
                <TableData> {d.reg_number}</TableData>
                <TableData>{d.address.state}</TableData>
                <TableData>{d.address.lga}</TableData>
                <TableData>{formatDate(d.created_at)}</TableData>
                <TableData>
                  {d.created_by?.first_name} {d.created_by?.last_name}
                </TableData>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <MobileTable className="sm:hidden">
          {[...Array(1)].map((_, i) => (
            <MobileTableRow key={i}>
              <MobileTableItem heading="Name">John Doe</MobileTableItem>
              <MobileTableItem heading="Gender">Male</MobileTableItem>
              <MobileTableItem heading="Organization">
                Sample Organization
              </MobileTableItem>
              <MobileTableItem heading="ORG">Sample ORG</MobileTableItem>
            </MobileTableRow>
          ))}
        </MobileTable>
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
