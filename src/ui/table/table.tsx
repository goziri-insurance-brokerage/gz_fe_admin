"use client";

import React, { createContext } from "react";
import { Loader, Loaders } from "..";

interface Props {
  children: React.ReactNode;
  className?: string;
  isLoading: boolean;
  noData: {
    component: JSX.Element;
    condition: boolean;
  };
}

export function Table({ children, className, isLoading, noData }: Props) {
  return (
    <div
      className={`overflow-y-scroll relative custom-scroll-bar pr-3 ${className}`}
    >
      {isLoading ? (
        <div className="grid content-center justify-items-center w-full h-full gap-3">
          <Loader type={Loaders.RotatingLines} size={60} />
          <p className="text-center text-lg">loading ...</p>
        </div>
      ) : noData.condition ? (
        <div className="grid content-center justify-items-center w-full h-full gap-3">
          {noData?.component}
        </div>
      ) : (
        <table
          className={`w-full text-sm ${
            (isLoading || noData.condition) && "h-full"
          }`}
        >
          {children}
        </table>
      )}
    </div>
  );
}
