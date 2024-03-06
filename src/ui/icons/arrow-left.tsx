import React from "react";
import { IconProps } from "./@type";

export function ArrowLeft({ size, color }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 9 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="cursor-pointer"
    >
      <path d="M7.5 1L1.5 7L7.5 13" stroke={color} strokeWidth="2" />
    </svg>
  );
}
