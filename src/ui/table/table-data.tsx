import React from "react";
interface Props {
  children: React.ReactNode;
  className?: string;
}

export function TableData({ children, className }: Props) {
  return (
    <td
      className={`p-4 text-grey-normal_hover border-b whitespace-nowrap border-grey-light_hover ${className}`}
    >
      {children}
    </td>
  );
}
