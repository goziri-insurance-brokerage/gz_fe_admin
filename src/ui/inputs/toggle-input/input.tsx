"use client";

import React, { useState } from "react";

interface ToggleInputProps {
  value: boolean;
  onChange: (e: boolean) => void;
}

export function ToggleInput({ onChange, value }: ToggleInputProps) {
  return (
    <button
      onClick={() => {
        onChange(!value);
      }}
      className={`w-8 h-4 rounded-full grid cursor-pointer bg-grey-light_inactive relative `}
    >
      <span
        className={`block w-4 h-4 rounded-full absolute transition-all ${
          value ? "bg-blue-normal left-4" : "bg-grey-normal left-0"
        }`}
      ></span>
    </button>
  );
}
