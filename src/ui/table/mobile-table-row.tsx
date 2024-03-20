import React from "react";

interface Props {
  children: React.ReactNode;
}

export function MobileTableRow({ children }: Props) {
  return (
    <div className="relative rounded-xl overflow-hidden h-max">
      <div className="overflow-x-auto custom-scroll-bar h-max  relative px-5 py-4 bg-grey-light border-[#f5f5f5]">
        <div
          className={` h-max min-w-max grid items-start grid-cols-[auto_auto] gap-x-10 gap-y-3`}
        >
          {children}
        </div>
      </div>
      <span className="block absolute w-5 h-full top-0 left-[-1px] [background:_linear-gradient(90deg,_whitesmoke,_#f5f5f5bd)]"></span>
      <span className="block absolute w-5 h-full top-0 right-[-1px] [background:_linear-gradient(270deg,_whitesmoke,_#f5f5f5bd)]"></span>
    </div>
  );
}
