import React from "react";
import { IconProps } from "./@type";

export function Hamburger({ color, size }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.66406 9.33594H25.3307"
        stroke={color}
        strokeWidth="2.66667"
        strokeLinecap="round"
      />
      <path
        d="M6.66406 16H25.3307"
        stroke={color}
        strokeWidth="2.66667"
        strokeLinecap="round"
      />
      <path
        d="M6.66406 22.6641H25.3307"
        stroke={color}
        strokeWidth="2.66667"
        strokeLinecap="round"
      />
    </svg>
  );
}
