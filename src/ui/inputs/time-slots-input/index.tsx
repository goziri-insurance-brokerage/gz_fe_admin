"use client";

import React, { useEffect, useState } from "react";
import { Icon } from "../../icons/_index";
import { ICONS } from "../../icons/@type";

export interface TimeSlotsInputProps {
  label: string;
  name: string;
  required?: boolean;
  slots: any[];
}

export default function TimeSlotsInput({
  label,
  name,
  required,
  slots,
}: TimeSlotsInputProps) {
  const [currentSlot, setCurrentSlot] = useState("");
  const [onInValid, setOnInvalid] = useState(false);

  const handleOnInvalid = (e: any) => {
    setOnInvalid(true);
  };

  useEffect(() => {
    if (currentSlot !== "") {
      setOnInvalid(false);
    }
  }, [currentSlot]);

  return (
    <div className="grid gap-2">
      <label className={`cursor-pointer text-[#242424] font-semibold text-sm`}>
        {label} {required && "*"}
      </label>

      <input
        className="outline-none hidden"
        name={name}
        onInvalid={handleOnInvalid}
        type="text"
        defaultValue={currentSlot}
        required={required}
      />

      <div className="grid gap-3 grid-cols-[repeat(auto-fit,_minmax(100px,_1fr))]">
        {slots.length > 0 ? (
          slots.map((slot, i) => (
            <button
              className={`block border border-grey-light_inactive text-sm text-grey-normal px-2 py-3 rounded-md ${
                currentSlot === slot.time && "bg-blue-normal text-white"
              }`}
              key={i}
              onClick={() => {
                setCurrentSlot(slot.time);
              }}
              type="button"
            >
              {slot.formattedTime}{" "}
              {parseInt(slot.formattedTime.split(":")[0]) < 12 ? "AM" : "PM"}
            </button>
          ))
        ) : (
          <p className="p-3 text-grey-normal border border-grey-light_inactive rounded-md text-sm">
            To get Available Time Slots please pick a Future Date !
          </p>
        )}
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
