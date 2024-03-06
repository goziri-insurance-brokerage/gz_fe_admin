import React from "react";
import { LoaderProps } from "../@types";
import "./keyframes.css";

export default function RotatingLines({ size }: LoaderProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="animate-rotate-lines"
    >
      <rect
        x="11.8516"
        width="2.18182"
        height="8.72727"
        rx="1.09091"
        fill="#005AFF"
      />
      <rect
        x="11.8516"
        y="15.2734"
        width="2.18182"
        height="8.72727"
        rx="1.09091"
        fill="#005AFF"
        fillOpacity="0.7"
      />
      <rect
        x="9.4375"
        y="13.9609"
        width="2.18182"
        height="8.72727"
        rx="1.09091"
        transform="rotate(45 9.4375 13.9609)"
        fill="#005AFF"
        fillOpacity="0.8"
      />
      <rect
        x="21"
        y="2.61719"
        width="2.18182"
        height="8.72727"
        rx="1.09091"
        transform="rotate(45 21 2.61719)"
        fill="#005AFF"
        fillOpacity="0.1"
      />
      <rect
        x="23.625"
        y="11.125"
        width="2.18182"
        height="8.72727"
        rx="1.09091"
        transform="rotate(90 23.625 11.125)"
        fill="#005AFF"
        fillOpacity="0.3"
      />
      <rect
        x="14.9062"
        y="15.7031"
        width="2.18182"
        height="8.72727"
        rx="1.09091"
        transform="rotate(-45 14.9062 15.7031)"
        fill="#005AFF"
        fillOpacity="0.5"
      />
      <rect
        x="3.11719"
        y="4.36719"
        width="2.18182"
        height="8.72727"
        rx="1.09091"
        transform="rotate(-45 3.11719 4.36719)"
        fill="#005AFF"
        fillOpacity="0.96"
      />
      <rect
        x="10.0938"
        y="11.125"
        width="2.18182"
        height="8.72727"
        rx="1.09091"
        transform="rotate(90 10.0938 11.125)"
        fill="#005AFF"
        fillOpacity="0.9"
      />
    </svg>
  );
}
