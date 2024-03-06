import React from "react";
interface Props {
  children: React.ReactNode;
  className?: string;
}

export function MobileTable({ children, className }: Props) {
  return (
    <div
      className={`overflow-y-scroll grid gap-2 content-start pr-3 table-scroll-bar ${className}`}
    >
      {children}
    </div>
  );
}
