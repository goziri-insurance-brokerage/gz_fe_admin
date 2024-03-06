import React from "react";
import { IconProps } from "./@type";

export function Chart({ size, color }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 17 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.0416 6.875L10.0869 9.80713C9.69539 10.3944 8.81558 10.3396 8.49996 9.70833V9.70833C8.18434 9.07709 7.30453 9.02231 6.91305 9.60954L4.95829 12.5417"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="2.125"
        y="2.625"
        width="12.75"
        height="12.75"
        rx="2"
        stroke={color}
        strokeWidth="1.5"
      />
    </svg>
  );
}
