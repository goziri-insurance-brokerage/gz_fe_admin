"use client";

import React, { useState } from "react";
import { EyeClosed } from "../../icons/eye-closed";
import { InputBaseProps } from "../types";
import { ICONS, Icon } from "@/ui";

export function PasswordInput({
  label,
  onChange,
  placeholder,
  id,
  name,
  required,
}: InputBaseProps) {
  const [showHash, setShowHash] = useState(false);
  const [onInValid, setOnInvalid] = useState(false);

  const handleOnChange = (e: React.ChangeEvent) => {
    onChange?.(e);
    setOnInvalid(false);
  };

  const handleOnInvalid = () => {
    setOnInvalid(true);
  };

  return (
    <div className="grid gap-2">
      <label
        htmlFor={id}
        className={`cursor-pointer text-[#242424] font-semibold text-sm`}
      >
        {label} {required && "*"}
      </label>

      <div
        className={`grid grid-cols-[1fr_auto] gap-10 items-center border rounded-[4px] border-[#9C9C9C] py-3 px-4`}
      >
        <input
          id={id}
          type={showHash ? "text" : "password"}
          placeholder={placeholder}
          onChange={handleOnChange}
          className={`text-xl placeholder:text-[#9C9C9C] outline-none bg-transparent`}
          name={name}
          onInvalid={handleOnInvalid}
        />
        <div onClick={() => setShowHash(!showHash)} className="cursor-pointer">
          {showHash ? (
            <EyeClosed size={24} color="#9C9C9C" />
          ) : (
            <EyeClosed size={24} color="#9C9C9C" />
          )}
        </div>
      </div>

      {/* Required Field Message */}
      {onInValid && (
        <div className="grid grid-flow-col w-max gap-1">
          <Icon type={ICONS.Warning} size={15} color="#ff5f15" />
          <p className="text-orange-normal text-xs">
            Please {label} is required.
          </p>
        </div>
      )}
    </div>
  );
}
