import React from "react";

interface Props {
  onClick?: () => void;
  children: React.ReactNode;
}

export function TableRow({ children, onClick }: Props) {
  return (
    <tr onClick={() => onClick?.()} className={`${"cursor-pointer"}`}>
      {children}
    </tr>
  );
}
