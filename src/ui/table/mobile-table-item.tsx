import React from "react";
interface Props {
  children: React.ReactNode;
  heading: string;
}

export function MobileTableItem({ children, heading }: Props) {
  return (
    <div className={`grid gap-1`}>
      <p className={`text-xs xs:text-sm text-grey-normal`}>{heading}</p>
      <p
        className={`text-sm xs:text-base text-[#242424] font-semibold whitespace-nowrap`}
      >
        {children}
      </p>
    </div>
  );
}
