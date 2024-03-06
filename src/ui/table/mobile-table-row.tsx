import React from "react";

interface Props {
  children: React.ReactNode;
}

export function MobileTableRow({ children }: Props) {
  return (
    <div
      className={`bg-grey-light rounded-xl px-5 py-4 grid grid-cols-2 gap-3`}
    >
      {children}
    </div>
  );
}
