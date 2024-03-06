"use client";

import React, { useEffect, useRef, useState } from "react";
import { Search } from "../../icons/search";
import { Loader } from "../../loaders/_index";
import { Loaders } from "../../loaders/@types";

export interface SearchInputProps {
  delay: number;
  isLoading: boolean;
  onChange: (e: string) => void;
  placeholder: string;
}

export function SearchInput({
  delay,
  isLoading,
  onChange,
  placeholder,
}: SearchInputProps) {
  let timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      onChange(e.target.value);
    }, delay);
  };

  return (
    <div
      className={`grid grid-cols-[auto_1fr] gap-3 items-center border rounded-[5px] border-grey-light_inactive h-[35px] px-[10px]`}
    >
      {isLoading ? (
        <Loader type={Loaders.RotatingLines} size={18} />
      ) : (
        <Search size={17} color="#9C9C9C" />
      )}
      <input
        type={"text"}
        placeholder={placeholder}
        onChange={handleOnChange}
        className={`placeholder:text-[#9C9C9C] outline-none text-sm bg-transparent`}
      />
    </div>
  );
}
