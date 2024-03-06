"use client";

import React, { useState } from "react";
import { ArrowDown } from "../../icons/arrow-down";
import { Filter } from "../../icons/filter";

interface Props {
  options: string[];
}

export function FilterInput({ options }: Props) {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div
      className={`grid grid-cols-[auto_1fr_auto] min-w-[120px] relative gap-2 cursor-pointer items-center border rounded-[4px] border-grey-light_inactive px-[10px] h-[35px]`}
    >
      <Filter color="#9C9C9C" size={16} />
      <p className="text-sm text-grey-normal">Filter</p>
      <div
        onClick={() => setShowOptions(!showOptions)}
        className="cursor-pointer"
      >
        {showOptions ? (
          <ArrowDown color="#9C9C9C" size={20} />
        ) : (
          <ArrowDown color="#9C9C9C" size={20} />
        )}
      </div>

      {/* Options */}
      <ul
        className={`absolute w-full z-40 bg-white top-full rounded-[4px] max-h-0 overflow-hidden transition-all ${
          showOptions ? "mt-4 max-h-96 border border-[#9C9C9C]" : ""
        }`}
      >
        {options.map((option, i) => (
          <li
            key={i}
            className={`py-3 px-4 cursor-pointer text-lg transition-all hover:bg-slate-50`}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
}
