"use client";

import React, { createContext } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  isLoading: boolean;
  noData: {
    component: JSX.Element;
    condition: boolean;
  };
}

const initialState: {
  isLoading: boolean;
  noData: {
    component: JSX.Element;
    condition: boolean;
  };
} = {
  isLoading: false,
  noData: {
    component: <></>,
    condition: false,
  },
};

export const TableContext = createContext(initialState);

export function Table({ children, className, isLoading, noData }: Props) {
  return (
    <TableContext.Provider value={{ isLoading, noData }}>
      <div
        className={`overflow-y-scroll relative table-scroll-bar pr-3 ${className}`}
      >
        <table
          className={`w-full text-sm ${
            (isLoading || noData.condition) && "h-full"
          }`}
        >
          {children}
        </table>
      </div>
    </TableContext.Provider>
  );
}
