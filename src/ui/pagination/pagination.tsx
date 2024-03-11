"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { PaginationButton } from "./pagination-button";
import { ArrowLeft } from "../icons/arrow-left";
import { ArrowRight } from "../icons/arrow-right";
import { Loader } from "../loaders/_index";
import { Loaders } from "../loaders/@types";

interface Props {
  currentPage: number;
  isLoading: boolean;
  onChangePage: (e: number) => void;
  totalPages: number;
  totalItems: number;
}

export function Pagination({
  currentPage,
  isLoading,
  onChangePage,
  totalItems,
  totalPages,
}: Props) {
  const [pages, setPages] = useState<number[]>([]);
  const [range, setRange] = useState<number>(0);

  const increasePages = (increment: number) => {
    if (pages[range - 1] >= totalPages) return;
    const newPages = pages.map((page) => page + increment);
    setPages(newPages);
  };

  const decreasePages = (decrement: number) => {
    if (pages[0] <= 1) return;
    const newPages = pages.map((page) => page - decrement);
    setPages(newPages);
  };

  const getDefaultRange = useMemo(() => {
    const defaultRange: number[] = [];

    for (let index = 1; index <= range; index++) {
      defaultRange.push(index);
    }

    setPages(defaultRange);
  }, [range]);

  useEffect(() => {
    setRange(Math.min(totalPages, 4));
  }, [totalPages]);

  return (
    <div className="grid grid-flow-col w-max gap-3 items-center relative">
      {isLoading && (
        <span className="block absolute top-1/2 -translate-y-1/2 right-full mr-3">
          <Loader type={Loaders.RotatingLines} size={20} />
        </span>
      )}
      <div className="text-grey-normal text-xs border border-grey-normal rounded-lg p-2 hidden sm:block">
        Showing {currentPage * 10 - 9} -{" "}
        {currentPage * 10 > totalItems ? totalItems : currentPage * 10} of{" "}
        {totalItems}
      </div>

      <div className={`grid grid-flow-col gap-3 items-center w-max`}>
        <PaginationButton onClick={() => decreasePages(1)} active={false}>
          <ArrowLeft size={10} color={"#9C9C9C"} />
        </PaginationButton>

        <div className="grid grid-flow-col w-max gap-3">
          {pages.map((page, i) => (
            <PaginationButton
              key={i}
              active={currentPage === page}
              onClick={() => onChangePage(page)}
            >
              {page < range
                ? page
                : i < range - 1
                ? page
                : page === totalPages
                ? page
                : "..."}
            </PaginationButton>
          ))}
        </div>

        <PaginationButton onClick={() => increasePages(1)} active={false}>
          <ArrowRight size={17} color={"#9C9C9C"} />
        </PaginationButton>
      </div>
    </div>
  );
}
