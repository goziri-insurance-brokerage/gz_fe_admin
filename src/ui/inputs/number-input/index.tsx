"use client";

import React, { useState } from "react";
import { Icon } from "../../icons/_index";
import { ICONS } from "../../icons/@type";

interface Props {
  id?: string;
  label: string;
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  required?: boolean;
}

export function NumberInput({
  label,
  onChange,
  placeholder,
  id,
  name,
  required,
}: Props) {
  const [onInValid, setOnInvalid] = useState(false);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      <input
        className={`border rounded-[4px] border-grey-light_inactive py-3 px-4 text-sm font-semibold placeholder:text-grey-normal outline-none bg-transparent`}
        id={id}
        type="number"
        name={name}
        onChange={handleOnChange}
        onInvalid={handleOnInvalid}
        placeholder={placeholder}
        required={required}
      />

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
