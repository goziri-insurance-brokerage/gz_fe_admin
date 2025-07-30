import React from "react";
import CardLines from "./card-lines";

interface Props {
  title: string;
  value: number;
  icon: React.ReactNode;
  color: {
    border: string;
    lines: string;
    background: string;
  };
}

export function DashboardStatsCard({ title, value, color, icon }: Props) {
  return (
    <div
      style={{ borderColor: color?.border, backgroundColor: color?.background }}
      className={`border rounded-lg relative p-5 grid gap-10`}
    >
      <div className="grid grid-cols-[auto_1fr] gap-3 items-center">
        <div className="bg-white rounded-xl p-2">{icon}</div>
        <p className="text-sm font-bold">{title}</p>
      </div>

      <div className="grid gap-1">
        <p className="text-sm font-semibold">Total {title}</p>
        <p className="text-xl font-bold">{value.toLocaleString("en-US")}</p>
      </div>

      <span className="absolute bottom-0 right-0">
        <CardLines color={color?.lines} size={220} />
      </span>
    </div>
  );
}
