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
  acceptNegativeValue?: boolean;
}

export function NumberInput({
  label,
  onChange,
  placeholder,
  id,
  name,
  required,
  acceptNegativeValue = true,
}: Props) {
  const [onInValid, setOnInvalid] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const [value, setValue] = useState("");

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const isValidNumberRegex = /^-?\d+(\.\d+)?([eE][+-]?\d+)?$/;

    const isNotEmptyAndNotNegative =
      inputValue !== "" && parseFloat(inputValue) >= 0;
    if (isValidNumberRegex.test(inputValue) || inputValue === "") {
      if (!acceptNegativeValue && inputValue.startsWith("-")) {
        setIsValid(false);
        setOnInvalid(true);
      } else {
        setIsValid(true);
        setOnInvalid(false);
      }
      setValue(inputValue);
      onChange?.(e);
    } else {
      setOnInvalid(true);
    }
    if (!isNotEmptyAndNotNegative) {
      setOnInvalid(false); // If the input is empty or negative, clear the required error
    }
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
          <p className="text-orange-normal text-xs">{label} is required.</p>
        </div>
      )}

      {/* Invalid Number Error Message */}
      {!acceptNegativeValue && !isValid && (
        <div className="grid grid-flow-col w-max gap-1">
          <Icon type={ICONS.Warning} size={15} color="#ff5f15" />
          <p className="text-orange-normal text-xs">
            {label} must be a non-negative number.
          </p>
        </div>
      )}
    </div>
  );
}
