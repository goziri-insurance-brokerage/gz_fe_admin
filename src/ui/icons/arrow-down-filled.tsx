import React from "react";
import { IconProps } from "./@type";

export function ArrowDownFilled({ color, size }: IconProps) {
  return (
    <svg
      width={size * 1.84}
      height={size}
      viewBox="0 0 11 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.467285 0.220383L5.46729 5.22038L10.4673 0.220383H0.467285Z"
        fill={color}
      />
    </svg>
  );
}
