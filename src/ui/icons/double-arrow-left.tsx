import React from "react";
import { IconProps } from "./@type";

export function DoubleArrowLeft({ size, color }: IconProps) {
  return (
    <div>
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 18L6 12L12 6" stroke={color} strokeWidth="2" />
        <path d="M18 18L12 12L18 6" stroke={color} strokeWidth="2" />
      </svg>
    </div>
  );
}
