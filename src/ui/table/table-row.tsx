import React from "react";

interface Props {
  onClick?: () => void;
  children: React.ReactNode;
}

export function TableRow({ children, onClick }: Props) {
  return (
    <tr
      onClick={() => onClick?.()}
      className={`${
        onClick && "cursor-pointer"
      } transition-all hover:bg-[#EBEBEB]`}
    >
      {children}
    </tr>
  );
}
