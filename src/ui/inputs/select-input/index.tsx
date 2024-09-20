"use client";

import React, { useState } from "react";
import { Icon } from "../../icons/_index";
import { ICONS } from "../../icons/@type";

interface Props {
  label?: string;
  placeholder?: string;
  name: string;
  options: string[];
  required?: boolean;
}

export function SelectInput({
  label,
  placeholder,
  name,
  options,
  required,
}: Props) {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [onInValid, setOnInvalid] = useState(false);

  const handleShowOptions = () => {
    setOnInvalid(false);
    setShowOptions(!showOptions);
  };

  const handleSelectOption = (option: string) => {
    setSelectedOption(option);
    setShowOptions(false);
  };

  const handleOnInvalid = (e: any) => {
    setOnInvalid(true);
  };

  return (
    <div className="grid gap-2">
      <label
        onClick={handleShowOptions}
        className={`cursor-pointer text-[#242424] text-sm font-bold`}
      >
        {label} {required && "*"}
      </label>

      <div className="relative">
        <div
          className={`grid grid-cols-[1fr_auto] gap-10 items-center border rounded-[4px] border-grey-light_inactive py-3 px-3`}
        >
          <input
            className={`text-sm placeholder:text-[#9C9C9C] font-semibold outline-none relative bg-transparent`}
            placeholder={placeholder}
            readOnly
            type={"text"}
            // value={normalizeEnum(selectedOption)}
          />

          <input
            className="hidden"
            type="text"
            name={name}
            onInvalid={handleOnInvalid}
            value={selectedOption}
            required={required}
          />

          <div onClick={handleShowOptions} className="cursor-pointer">
            {showOptions ? (
              <span>
                <Icon type={ICONS.ArrowUp} size={20} color="#9C9C9C" />
              </span>
            ) : (
              <span>
                <Icon type={ICONS.ArrowDown} size={20} color="#9C9C9C" />
              </span>
            )}
          </div>
        </div>

        {/* Options */}
        {showOptions && (
          <span
            onClick={handleShowOptions}
            className="fixed top-0 left-0 w-full h-screen bg-transparent"
          ></span>
        )}
        <ul
          className={`w-full top-full absolute rounded-[4px] max-h-0 overflow-hidden bg-white z-50 transition-all shadow-[0_0_10px_-5px_rgba(0,0,0,.3)] ${
            showOptions ? "mt-4 max-h-96 border border-grey-light_inactive" : ""
          }`}
        >
          {options.map((option, i) => (
            <li
              key={i}
              className={`py-3 px-4 cursor-pointer transition-all text-sm text-grey-normal_active hover:bg-slate-50 ${
                i > 0 && "border-t border-grey-light_inactive"
              }`}
              onClick={() => handleSelectOption(option)}
            >
              {/* {normalizeEnum(option)} */}
            </li>
          ))}
        </ul>
      </div>

      {/* Required Field Message */}
      {onInValid && (
        <div className="grid grid-flow-col w-max gap-1">
          <Icon type={ICONS.InfoSquare} size={15} color="#ff5f15" />
          <p className="text-orange-normal text-xs">{label} is required.</p>
        </div>
      )}
    </div>
  );
}
