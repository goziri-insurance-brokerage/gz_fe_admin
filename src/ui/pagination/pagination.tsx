"use client";

import React, { useState } from "react";
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
  const [range, setRange] = useState(1);

  const increasePageRange = (increment: number) => {
    if (totalPages - 5 === range - 1) return;
    range - 1 + increment > totalPages - 5
      ? setRange(range + 1)
      : setRange(range + increment);
  };

  const decreasePageRange = (decrement: number) => {
    if (range === 1) return;
    range - decrement < 1 ? setRange(range - 1) : setRange(range - decrement);
  };

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
        <PaginationButton onClick={() => decreasePageRange(1)} active={false}>
          <ArrowLeft size={10} color={"#9C9C9C"} />
        </PaginationButton>

        {[...Array(totalPages)].map(
          (_, i) =>
            ((i + 1 >= range && i + 1 <= range + 3) ||
              i + 1 === totalPages) && (
              <PaginationButton
                key={i}
                active={
                  i + 1 === range + 3
                    ? i + 1 === totalPages - 1 &&
                      (i + 1 === currentPage ? true : false)
                    : i + 1 === currentPage
                    ? true
                    : false
                }
                onClick={() =>
                  i + 1 === range + 3
                    ? i + 1 === totalPages - 1 && onChangePage(i + 1)
                    : onChangePage(i + 1)
                }
              >
                {i + 1 === range + 3
                  ? i + 1 === totalPages - 1
                    ? i + 1
                    : "..."
                  : i + 1}
              </PaginationButton>
            )
        )}

        <PaginationButton onClick={() => increasePageRange(1)} active={false}>
          <ArrowRight size={17} color={"#9C9C9C"} />
        </PaginationButton>
      </div>
    </div>
  );
}
