"use client";

import React, { useEffect, useRef } from "react";
import AdminsListItem from "./admins-list-item";
import { Pagination, useToast } from "@/ui";
import { useLazyFetchAdminsListQuery } from "@/apis/admin.api";
import { FetchContractsListParams } from "@/@Types/contract.interface";
import { useDispatch, useSelector } from "react-redux";
import { setAdmins } from "@/store/slices/admins.slice";
import { RootState } from "@/store/index.store";

export default function AdminsList() {
  const dispatch = useDispatch();
  const { callToast } = useToast();

  const data = useSelector((state: RootState) => state.admins.data);

  const [fetchAdmins, { isFetching }] = useLazyFetchAdminsListQuery();
  const params = useRef<FetchContractsListParams>({
    limit: 10,
    page: 1,
  });

  const handleFetchAdmins: () => Promise<void> = async () => {
    const response = await fetchAdmins(params.current);

    if (response?.error) {
      callToast("error", "Failed", "Something went wrong, failed to load data");
    }

    if (response?.data) {
      dispatch(setAdmins(response.data));
    }
  };

  const handlePagination = (e: number) => {
    params.current = { ...params.current, page: e };
    handleFetchAdmins();
  };

  // useEffect(() => {
  handleFetchAdmins();
  // }, []);

  return (
    <div className="h-full grid grid-rows-[1fr_auto] gap-5 p-5 overflow-hidden">
      <div className="bg-[#FFFFFF] rounded-lg p-5 pr-2 h-full">
        <div className="overflow-y-scroll table-scroll-bar grid gap-5 content-start h-full pr-2">
          {data?.items.map((d, i) => (
            <AdminsListItem key={i} admin={d} />
          ))}
        </div>
      </div>

      {data?.items?.length ? (
        <div className="w-max mx-auto">
          <Pagination
            currentPage={data ? data.meta.currentPage : 1}
            isLoading={isFetching}
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
