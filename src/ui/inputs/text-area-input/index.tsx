"use client";

import React, { useState } from "react";
import { InputBaseProps } from "../types";
import { ICONS, Icon } from "@/ui";

export function TextAreaInput({
  label,
  onChange,
  placeholder,
  id,
  name,
  required,
}: InputBaseProps) {
  const [onInValid, setOnInvalid] = useState(false);

  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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

      <textarea
        name={name}
        id={id}
        placeholder={placeholder}
        onChange={handleOnChange}
        onInvalid={handleOnInvalid}
        className={`border rounded-[4px] border-grey-light_inactive resize-none min-h-[150px] h-full py-3 px-4 text-sm font-semibold placeholder:text-grey-normal outline-none bg-transparent transition-all focus:border-grey-normal`}
      ></textarea>

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
