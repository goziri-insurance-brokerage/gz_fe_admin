import React from "react";

interface Props {
  children: React.ReactNode;
}

export function TableBody({ children }: Props) {
  return <tbody>{children}</tbody>;
}
