import React from "react";
import { IconProps } from "./@type";

export function ArrowUpFilled({ color, size }: IconProps) {
  return (
    <svg
      width={size * 1.84}
      height={size}
      viewBox="0 0 11 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.598145 5.47752L5.59814 0.477524L10.5981 5.47752H0.598145Z"
        fill={color}
      />
    </svg>
  );
}
