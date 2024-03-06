import React from "react";
interface Props {
  children: React.ReactNode;
  heading: string;
}

export function MobileTableItem({ children, heading }: Props) {
  return (
    <div className={`grid gap-1`}>
      <p className={`text-xs text-grey-normal`}>{heading}</p>
      <p className={`text-sm text-[#242424] font-semibold`}>{children}</p>
    </div>
  );
}
