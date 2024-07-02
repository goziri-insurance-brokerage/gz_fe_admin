import React from "react";

interface Props {
  title: string;
  value: string | number;
  className?: string;
}

export function ProfileDetailsItem({ title, value, className }: Props) {
  return (
    <div className="grid gap-1">
      <div
        className={`text-blue-dark_hover font-semibold overflow-hidden break-words ${className}`}
      >
        {value}
      </div>
      <div className={`text-sm text-[#7594CC]`}>{title}</div>
    </div>
  );
}
