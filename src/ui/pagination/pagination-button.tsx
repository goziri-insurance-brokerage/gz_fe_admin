import React from "react";

interface Props {
  children: React.ReactNode;
  active: boolean;
  onClick: (e: string) => void;
}

export function PaginationButton({ children, active, onClick }: Props) {
  return (
    <button
      onClick={(e) => onClick(e.currentTarget.value)}
      className={`border rounded-lg w-8 h-8 grid place-content-center cursor-pointer text-xs ${
        active
          ? "border-blue-normal bg-blue-normal text-white"
          : "border-grey-normal text-grey-normal"
      }`}
    >
      {children}
    </button>
  );
}
