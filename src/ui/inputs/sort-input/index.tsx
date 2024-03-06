"use client";

import React, { useState } from "react";
import { ArrowDown } from "../../icons/arrow-down";
import { Sort } from "../../icons/sort";

interface Props {
  options: string[];
}

export function SortInput({ options }: Props) {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div
      className={`grid grid-cols-[auto_1fr_auto] relative gap-2 min-w-[120px] cursor-pointer items-center border rounded-[4px] border-grey-light_active px-[10px] h-[35px]`}
    >
      <Sort color="#9C9C9C" size={16} />
      <p className="text-sm text-grey-normal">Sort</p>
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
