import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export function TableHead({ children, className }: Props) {
  return (
    <th
      className={`font-bold capitalize p-4 sticky top-0 whitespace-nowrap ${className}`}
    >
      {children}
    </th>
  );
}
