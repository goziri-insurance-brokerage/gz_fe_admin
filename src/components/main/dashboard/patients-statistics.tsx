"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ICONS, Icon } from "../../../ui";
import { PATIENTS_STATISTICS_MOCKDATA } from "./dashboard.constant";

export default function PatientsStatistics() {
  return (
    <div className="grid gap-5 bg-white rounded-xl p-5">
      <div className="grid grid-flow-col justify-between items-center">
        <p className="font-bold">Appointment Statistics</p>
        <div className="grid items-center w-max grid-flow-col gap-1 border border-grey-light_inactive rounded-full px-3 py-2">
          <p className="text-xs font-semibold text-grey-normal">
            last 6 Months
          </p>
          <Icon type={ICONS.ArrowDown} size={17} color="#9C9C9C" />
        </div>
      </div>

      <div className="h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={PATIENTS_STATISTICS_MOCKDATA}
            margin={{
              top: 0,
              right: 0,
              left: 0,
              bottom: 0,
            }}
            barSize={25}
          >
            <XAxis
              dataKey="name"
              scale="point"
              padding={{ left: 10 }}
              tickSize={0}
              tickMargin={10}
              axisLine={false}
              stroke="#D9D9D9"
            />
            <YAxis
              tickSize={0}
              tickMargin={20}
              stroke="#D9D9D9"
              axisLine={false}
            />
            <Tooltip />
            <CartesianGrid strokeDasharray={3} stroke="#D9D9D9" />
            <Bar dataKey="ps" fill="#005AFF" background={{ fill: "#eee" }} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
