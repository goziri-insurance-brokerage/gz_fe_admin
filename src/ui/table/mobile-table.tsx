import React from "react";
import { Loader, Loaders } from "..";
interface Props {
  children: React.ReactNode;
  className?: string;
  isLoading?: boolean;
  noData: {
    component: JSX.Element;
    condition: boolean;
  };
}

export function MobileTable({ children, className, isLoading, noData }: Props) {
  return (
    <div
      className={`overflow-y-scroll grid pr-3 custom-scroll-bar  ${className}`}
    >
      {isLoading ? (
        <div className="grid content-center justify-items-center w-full h-full gap-3">
          <Loader type={Loaders.RotatingLines} size={40} />
          <p className="text-center">loading ...</p>
        </div>
      ) : noData?.condition ? (
        <div className="grid content-center justify-items-center w-full h-full">
          {noData?.component}
        </div>
      ) : (
        <div className="grid content-start w-full h-full gap-3">{children}</div>
      )}
    </div>
  );
}
