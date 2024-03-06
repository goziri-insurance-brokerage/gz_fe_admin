"use client";

import React, { Dispatch, SetStateAction, ChangeEvent } from "react";
import { Icon } from "../../icons/_index";
import { ICONS } from "../../icons/@type";

interface TimeInputProps {
  isActive: boolean;
  time: { hr: string; min: string };
  setTime: Dispatch<SetStateAction<{ hr: string; min: string }>>;
}

export function TimeInput({ isActive, setTime, time }: TimeInputProps) {
  const handleTimeChange = (
    unit: "hr" | "min",
    newValue: string,
    maxValue: number
  ) => {
    const updatedValue =
      Math.min(maxValue, Math.max(0, parseInt(newValue))) + "";
    setTime((prevTime) => ({
      ...prevTime,
      [unit]: updatedValue.padStart(2, "0"),
    }));
  };

  const handleIncreaseTime = () => {
    if (parseInt(time.hr) < 23) {
      handleTimeChange("hr", `${parseInt(time.hr) + 1}`, 23);
    }
  };

  const handleDecreaseTime = () => {
    if (parseInt(time.hr) > 0) {
      handleTimeChange("hr", `${parseInt(time.hr) - 1}`, 23);
    }
  };

  return (
    <div
      className={`border border-grey-light_${
        isActive ? "inactive" : "normal"
      } p-3 rounded-[4px] grid grid-flow-col gap-1 items-center w-max`}
    >
      <input
        className={`text-sm font-semibold outline-none text-center w-5 ${
          !isActive && "text-grey-normal"
        }`}
        type="number"
        value={time.hr}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          handleTimeChange("hr", e.target.value, 23)
        }
        onKeyDown={(e) => {
          if (e.key === "Backspace") {
            handleTimeChange("hr", "0", 2);
          }
        }}
      />
      <p className={`text-sm font-semibold ${!isActive && "text-grey-normal"}`}>
        :
      </p>
      <input
        className={`text-sm font-semibold outline-none text-center w-5 ${
          !isActive && "text-grey-normal"
        }`}
        type="number"
        value={time.min}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          handleTimeChange("min", e.target.value, 59)
        }
        onKeyDown={(e) => {
          if (e.key === "Backspace") {
            handleTimeChange("min", "0", 5);
          }
        }}
      />

      <p className="text-sm font-semibold">
        {parseInt(time.hr) < 12 ? "AM" : "PM"}
      </p>

      <div className="grid gap-[2px] ml-2">
        <button className="cursor-pointer" onClick={handleIncreaseTime}>
          <Icon type={ICONS.ArrowUpFilled} color="black" size={8} />
        </button>
        <button className="cursor-pointer" onClick={handleDecreaseTime}>
          <Icon type={ICONS.ArrowDownFilled} color="black" size={8} />
        </button>
      </div>
    </div>
  );
}
